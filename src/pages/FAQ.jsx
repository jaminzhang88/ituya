import { useState } from 'react'
import { faqs } from '../data/content'
import { Breadcrumb, CategoryBadge } from '../components/Layout'

export default function FAQ() {
  const [filter, setFilter] = useState('all')
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(faqs[0]?.id || null)

  let catFaqs = filter === 'all' ? faqs : faqs.filter(f => f.category === filter)
  const filtered = query.trim()
    ? catFaqs.filter(f => f.question.toLowerCase().includes(query.toLowerCase()) || f.answer.toLowerCase().includes(query.toLowerCase()) || f.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase())))
    : catFaqs

  const selectedFaq = faqs.find(f => f.id === selected)

  return (
    <div className="mx-auto max-w-[1400px] px-4 sm:px-6 py-6">
      <Breadcrumb items={[{ label: '故障排错' }]} />
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">故障排错</h1>
          <p className="text-sm text-gray-500">按协议分类的常见问题与解决方案 · 共 {faqs.length} 个问题</p>
        </div>
      </div>

      <div className="flex gap-0">
        {/* 左侧导航 */}
        <aside className="hidden lg:block w-64 flex-shrink-0 border-r border-gray-200 pr-4">
          <div className="flex items-center gap-2 mb-3">
            {[{ id: 'all', label: '全部' }, { id: 'wifi', label: 'WiFi' }, { id: 'ble', label: 'BLE' }, { id: 'zigbee', label: 'Zigbee' }].map(cat => (
              <button key={cat.id} onClick={() => { setFilter(cat.id); const first = cat.id === 'all' ? faqs[0] : faqs.find(f => f.category === cat.id); setSelected(first?.id || null) }}
                className={`text-xs px-2 py-1 rounded ${filter === cat.id ? 'bg-primary-100 text-primary-700 font-medium' : 'text-gray-500 hover:bg-gray-100'}`}>{cat.label}</button>
            ))}
          </div>
          <div className="relative mb-3">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="搜索问题..."
              className="w-full rounded-md border border-gray-200 bg-white py-1.5 pl-9 pr-3 text-sm outline-none focus:border-primary-400 transition-colors"
            />
          </div>
          <nav className="space-y-0.5 max-h-[calc(100vh-240px)] overflow-y-auto">
            {filtered.map(f => (
              <button
                key={f.id}
                onClick={() => setSelected(f.id)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${selected === f.id ? 'text-primary-600 font-medium bg-primary-50' : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'}`}
              >
                <span className="line-clamp-2">{f.question}</span>
              </button>
            ))}
            {filtered.length === 0 && (
              <div className="py-6 text-center text-xs text-gray-400">无匹配结果</div>
            )}
          </nav>
        </aside>

        {/* 右侧内容 */}
        <main className="flex-1 min-w-0 px-6 lg:px-10">
          {selectedFaq ? (
            <div className="max-h-[calc(100vh-200px)] overflow-y-auto">
              <div className="flex items-center gap-2 mb-4">
                <CategoryBadge category={selectedFaq.category} />
                {selectedFaq.hot && <span className="badge bg-red-50 text-red-600">热门</span>}
              </div>
              <h1 className="text-xl font-bold text-gray-900 mb-6">{selectedFaq.question}</h1>
              <div className="text-sm text-gray-600 leading-7 whitespace-pre-line">{selectedFaq.answer}</div>
              <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-gray-100">
                {selectedFaq.tags.map(tag => (<span key={tag} className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{tag}</span>))}
              </div>
            </div>
          ) : (
            <div className="py-20 text-center text-gray-400">选择左侧问题查看解答</div>
          )}
        </main>
      </div>

      {/* 移动端选择器 */}
      <div className="lg:hidden mb-4 mt-2">
        <select
          value={selected || ''}
          onChange={e => setSelected(e.target.value)}
          className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-primary-400"
        >
          {catFaqs.map(f => (
            <option key={f.id} value={f.id}>{f.question}</option>
          ))}
        </select>
      </div>
    </div>
  )
}
