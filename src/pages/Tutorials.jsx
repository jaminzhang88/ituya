import { useRef, useState } from 'react'
import { Link } from '../components/Router'
import { tutorials } from '../data/content'
import { Breadcrumb, CategoryBadge } from '../components/Layout'

function slugifyHeading(text) {
  return text
    .replace(/<[^>]*>/g, '')
    .replace(/[`*_~]/g, '')
    .trim()
    .toLowerCase()
    .replace(/[，。！？、；：“”‘’（）()【】[\]《》<>「」『』,.!?;:"'\\/|+=*&^%$#@~`]/g, '')
    .replace(/\s+/g, '-')
}

function normalizeAnchorId(id) {
  return decodeURIComponent(id || '').trim().replace(/^#/, '')
}

function collectHeadings(content) {
  const headings = []
  const seen = new Map()

  content.replace(/^(#{2,3}) (.+)$/gm, (_, hashes, rawText) => {
    const anchorMatch = rawText.match(/<a\s+[^>]*id=["']([^"']+)["'][^>]*><\/a>\s*/i)
    const text = rawText.replace(/<a\s+[^>]*id=["'][^"']+["'][^>]*><\/a>\s*/i, '').trim()
    const clean = text.replace(/<[^>]*>/g, '').trim()
    if (!clean || clean === '目录') return

    const baseId = normalizeAnchorId(anchorMatch?.[1]) || slugifyHeading(clean)
    const count = seen.get(baseId) || 0
    seen.set(baseId, count + 1)
    headings.push({
      level: hashes.length,
      text: clean,
      id: count === 0 ? baseId : `${baseId}-${count + 1}`,
    })
  })

  return headings
}

function parseMarkdown(md) {
  let html = md
  const headings = collectHeadings(md)
  let headingIndex = 0
  // Code blocks with copy button
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (_, lang, code) => {
    const escaped = code.replace(/</g, '&lt;').replace(/>/g, '&gt;')
    const id = 'code-' + Math.random().toString(36).slice(2, 8)
    return `<div class="relative group my-4"><pre id="${id}" class="bg-gray-900 text-gray-100 rounded-lg p-4 pr-12 overflow-x-auto text-sm"><code>${escaped}</code></pre><button onclick="navigator.clipboard.writeText(document.getElementById('${id}').innerText);this.textContent='✓ 已复制';setTimeout(()=>this.textContent='复制',1500)" class="absolute top-2 right-2 px-2 py-1 text-xs bg-gray-700 hover:bg-gray-600 text-gray-300 rounded opacity-0 group-hover:opacity-100 transition-opacity">复制</button></div>`
  })
  // Headers
  html = html.replace(/^(#{2,3}) (.*$)/gm, (_, hashes, text) => {
    const clean = text.replace(/<a\s+[^>]*id=["'][^"']+["'][^>]*><\/a>\s*/i, '').trim()
    if (clean.replace(/<[^>]*>/g, '').trim() === '目录') {
      return hashes.length === 2 ? `<h2>${clean}</h2>` : `<h3>${clean}</h3>`
    }

    const heading = headings[headingIndex++]
    const tag = hashes.length === 2 ? 'h2' : 'h3'
    return heading ? `<${tag} id="${heading.id}">${clean}</${tag}>` : `<${tag}>${clean}</${tag}>`
  })
  html = html.replace(/^#### (.*$)/gm, '<h4 class="text-sm font-semibold text-gray-800 mt-4 mb-2">$1</h4>')
  // Images
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="my-4 max-w-full rounded-lg border border-gray-200" />')
  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => {
    if (href.startsWith('#')) {
      return `<a href="${href}" class="doc-anchor text-primary-600 hover:underline">${label}</a>`
    }
    return `<a href="${href}" target="_blank" rel="noopener noreferrer" class="text-primary-600 hover:underline">${label}</a>`
  })
  // Blockquotes
  html = html.replace(/^> (.*$)/gm, '<blockquote class="border-l-4 border-primary-300 pl-4 my-2 text-gray-600 text-sm">$1</blockquote>')
  // Inline
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
  html = html.replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-1.5 py-0.5 rounded text-sm text-red-600">$1</code>')
  // Lists
  html = html.replace(/^- (.*$)/gm, '<li>$1</li>')
  html = html.replace(/^\d+\. (.*$)/gm, '<li>$1</li>')
  // Tables
  html = html.replace(/\|(.+)\|\n\|[-| :]+\|\n((?:\|.+\|\n?)*)/g, (_, header, rows) => {
    const headers = header.split('|').filter(s => s.trim()).map(s => `<th>${s.trim()}</th>`).join('')
    const bodyRows = rows.trim().split('\n').map(row => {
      const cells = row.split('|').filter(s => s.trim()).map(s => `<td>${s.trim()}</td>`).join('')
      return `<tr>${cells}</tr>`
    }).join('')
    return `<table><thead><tr>${headers}</tr></thead><tbody>${bodyRows}</tbody></table>`
  })

  html = html.replace(/(<li>.*<\/li>\n?)+/g, match => `<ul>${match}</ul>`)
  html = html.replace(/\n\n/g, '<br/>')
  html = html.replace(/---/g, '<hr class="my-6 border-gray-200" />')
  return html
}

const categoryMeta = {
  ble: { label: 'BLE 开发', icon: '🔵', color: 'from-blue-500 to-blue-700', desc: '低功耗蓝牙产品开发指南' },
  wifi: { label: 'WiFi 开发', icon: '📡', color: 'from-amber-500 to-amber-700', desc: 'WiFi智能产品开发指南' },
  zigbee: { label: 'Zigbee 开发', icon: '🌐', color: 'from-purple-500 to-purple-700', desc: 'Zigbee组网产品开发指南' },
}

function extractHeadings(content) {
  return collectHeadings(content)
}

function downloadPdf(tutorial) {
  const html = parseMarkdown(tutorial.content)
  const printWindow = window.open('', '_blank')
  printWindow.document.write(`<!DOCTYPE html><html><head><meta charset="utf-8"><title>${tutorial.title}</title><style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Microsoft YaHei', sans-serif; padding: 40px; color: #1e293b; max-width: 800px; margin: 0 auto; }
    h1 { font-size: 22px; margin-bottom: 8px; }
    .meta { font-size: 12px; color: #94a3b8; margin-bottom: 24px; padding-bottom: 12px; border-bottom: 1px solid #e2e8f0; }
    h2 { font-size: 16px; font-weight: 700; margin-top: 24px; margin-bottom: 12px; padding-bottom: 6px; border-bottom: 1px solid #e2e8f0; }
    h3 { font-size: 14px; font-weight: 600; margin-top: 16px; margin-bottom: 8px; }
    p, li { font-size: 13px; line-height: 1.7; color: #475569; }
    ul, ol { padding-left: 20px; margin-bottom: 12px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 12px; font-size: 12px; }
    th, td { border: 1px solid #e2e8f0; padding: 6px 10px; text-align: left; }
    th { background: #f8fafc; font-weight: 600; }
    code { background: #f1f5f9; padding: 1px 4px; border-radius: 3px; font-size: 12px; }
    @media print { body { padding: 20px; } }
  </style></head><body>
    <h1>${tutorial.title}</h1>
    <div class="meta">${tutorial.difficulty} · ${tutorial.readTime} · ${tutorial.tags.join(' / ')}</div>
    ${html}
  </body></html>`)
  printWindow.document.close()
  setTimeout(() => { printWindow.print() }, 300)
}

export function TutorialCategory({ category }) {
  const meta = categoryMeta[category]
  const catTutorials = tutorials.filter(t => Array.isArray(t.category) ? t.category.includes(category) : t.category === category)
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(catTutorials[0]?.id || null)
  const contentRef = useRef(null)

  if (!meta) return <div className="py-20 text-center text-gray-500">分类未找到</div>

  const filtered = query.trim()
    ? catTutorials.filter(t => t.title.toLowerCase().includes(query.toLowerCase()) || t.summary.toLowerCase().includes(query.toLowerCase()) || t.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase())))
    : catTutorials

  const selectedTutorial = tutorials.find(t => t.id === selected)
  const headings = selectedTutorial ? extractHeadings(selectedTutorial.content) : []

  const scrollToHeading = (id) => {
    const target = contentRef.current?.querySelector(`#${CSS.escape(id)}`)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleDocClick = (event) => {
    const anchor = event.target.closest?.('a.doc-anchor')
    if (!anchor) return

    const id = normalizeAnchorId(anchor.getAttribute('href'))
    if (!id) return

    event.preventDefault()
    scrollToHeading(id)
  }

  return (
    <div className="mx-auto max-w-[1400px] px-4 sm:px-6 py-6">
      <Breadcrumb items={[{ label: '指导文档', path: '/tutorials' }, { label: meta.label }]} />

      <div className="flex gap-0 mt-4">
        {/* 左侧导航 */}
        <aside className="hidden lg:block w-60 flex-shrink-0 border-r border-gray-200 pr-4">
          <div className="relative mb-4">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="根据文档目录筛选"
              className="w-full rounded-md border border-gray-200 bg-white py-1.5 pl-9 pr-3 text-sm outline-none focus:border-primary-400 transition-colors"
            />
          </div>
          <nav className="space-y-0.5 max-h-[calc(100vh-200px)] overflow-y-auto">
            {filtered.map(t => (
              <button
                key={t.id}
                onClick={() => { setSelected(t.id); contentRef.current?.scrollTo({ top: 0 }) }}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${selected === t.id ? 'text-primary-600 font-medium bg-primary-50' : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'}`}
              >
                <span className="line-clamp-1">{t.title}</span>
              </button>
            ))}
            {filtered.length === 0 && (
              <div className="py-6 text-center text-xs text-gray-400">无匹配结果</div>
            )}
          </nav>
        </aside>

        {/* 中间内容区 */}
        <main className="flex-1 min-w-0 px-6 lg:px-10">
          {selectedTutorial ? (
            <div ref={contentRef} className="max-h-[calc(100vh-160px)] overflow-y-auto scroll-smooth">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h1 className="text-2xl font-bold text-gray-900">{selectedTutorial.title}</h1>
                <div className="flex-shrink-0 flex items-center gap-3">
                  <button
                    onClick={() => { navigator.clipboard.writeText(selectedTutorial.content); }}
                    className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-primary-600 transition-colors"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                    Markdown 副本
                  </button>
                  <button
                    onClick={() => downloadPdf(selectedTutorial)}
                    className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-primary-600 transition-colors"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    下载 PDF
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-400 mb-6 pb-4 border-b border-gray-100">
                <span>{selectedTutorial.difficulty}</span>
                <span>·</span>
                <span>{selectedTutorial.readTime}</span>
                <span>·</span>
                <span>{selectedTutorial.tags.join(' / ')}</span>
              </div>
              <div
                className="doc-content"
                onClick={handleDocClick}
                dangerouslySetInnerHTML={{ __html: parseMarkdown(selectedTutorial.content) }}
              />
            </div>
          ) : (
            <div className="py-20 text-center text-gray-400">选择左侧文档查看内容</div>
          )}
        </main>

        {/* 右侧目录 */}
        {selectedTutorial && headings.length > 0 && (
          <aside className="hidden xl:block w-64 flex-shrink-0 pl-4 border-l border-gray-200">
            <div className="sticky top-24">
              <h4 className="text-xs font-semibold text-gray-900 mb-3 uppercase">本页包含内容</h4>
              <nav className="space-y-1.5">
                {headings.map((h, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => scrollToHeading(h.id)}
                    className={`block w-full text-left text-sm text-gray-500 hover:text-primary-600 transition-colors ${h.level === 3 ? 'pl-3' : ''}`}
                  >
                    <span className="block truncate" title={h.text}>{h.text}</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>
        )}
      </div>

      {/* 移动端选择器 */}
      <div className="lg:hidden mb-4 mt-2">
        <select
          value={selected || ''}
          onChange={e => setSelected(e.target.value)}
          className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-primary-400"
        >
          {catTutorials.map(t => (
            <option key={t.id} value={t.id}>{t.title}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export function TutorialDetail({ id }) {
  const tutorial = tutorials.find(t => t.id === id)

  if (!tutorial) return <div className="py-20 text-center text-gray-500">教程未找到</div>

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
      <Breadcrumb items={[{ label: '指导文档', path: '/tutorials' }, { label: categoryMeta[Array.isArray(tutorial.category) ? tutorial.category[0] : tutorial.category]?.label, path: `/tutorials/category/${Array.isArray(tutorial.category) ? tutorial.category[0] : tutorial.category}` }, { label: tutorial.title }]} />
      <div className="card">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {(Array.isArray(tutorial.category) ? tutorial.category : [tutorial.category]).map(c => <CategoryBadge key={c} category={c} />)}
          <span className="badge bg-gray-100 text-gray-500">{tutorial.difficulty}</span>
          <span className="text-xs text-gray-400 ml-auto">{tutorial.readTime}</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-6">{tutorial.title}</h1>
        <div className="doc-content" dangerouslySetInnerHTML={{ __html: parseMarkdown(tutorial.content) }} />
      </div>
    </div>
  )
}

export function TutorialList() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8">
      <Breadcrumb items={[{ label: '指导文档' }]} />
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">指导文档</h1>
        <p className="text-gray-500">通俗直白的产品落地流程，从立项到量产的完整指南</p>
      </div>

      {/* 三大分类卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {Object.entries(categoryMeta).map(([id, cat]) => (
          <Link
            key={id}
            to={`/tutorials/category/${id}`}
            className={`relative overflow-hidden rounded-2xl p-6 text-left text-white transition-all hover:scale-[1.02] hover:shadow-xl bg-gradient-to-br ${cat.color}`}
          >
            <div className="text-4xl mb-3">{cat.icon}</div>
            <h3 className="text-lg font-bold mb-1">{cat.label}</h3>
            <p className="text-sm text-white/80">{cat.desc}</p>
            <span className="text-xs text-white/60 mt-2 block">{tutorials.filter(t => Array.isArray(t.category) ? t.category.includes(id) : t.category === id).length} 篇文档</span>
            <div className="absolute -bottom-4 -right-4 text-8xl opacity-10">{cat.icon}</div>
          </Link>
        ))}
      </div>

      {/* 全部文档列表 */}
      <h2 className="text-lg font-semibold text-gray-900 mb-4">全部文档</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {tutorials.map(t => (
          <Link key={t.id} to={`/tutorials/${t.id}`} className="card group">
            <div className="flex items-center gap-2 mb-3">
              {(Array.isArray(t.category) ? t.category : [t.category]).map(c => <CategoryBadge key={c} category={c} />)}
              <span className="badge bg-gray-100 text-gray-500">{t.difficulty}</span>
              <span className="text-xs text-gray-400 ml-auto">{t.readTime}</span>
            </div>
            <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">{t.title}</h3>
            <p className="text-sm text-gray-500 line-clamp-2 mb-3">{t.summary}</p>
            <div className="flex flex-wrap gap-1.5">
              {t.tags.map(tag => (<span key={tag} className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{tag}</span>))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
