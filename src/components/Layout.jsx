import { useState } from 'react'
import { Link, useRoute } from '../components/Router'
import { tutorials, faqs, solutions } from '../data/content'

const navItems = [
  { path: '/', label: '首页' },
  { path: '/solutions', label: '方案选型' },
  { path: '/tutorials', label: '指导文档' },
  { path: '/faq', label: '故障排错' },
  { path: '/resources', label: '资源下载' },
  { path: '/forum', label: '开发者论坛', external: 'https://www.tuyaos.com/' },
  { path: '/about', label: '关于我' },
]

export function Header() {
  const { path } = useRoute()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  const handleSearch = (q) => {
    setQuery(q)
    if (!q.trim()) { setResults([]); return }
    const keyword = q.toLowerCase()
    const matched = []

    tutorials.forEach(t => {
      if (t.title.toLowerCase().includes(keyword) || t.summary.toLowerCase().includes(keyword) || t.tags.some(tag => tag.toLowerCase().includes(keyword))) {
        matched.push({ type: '教程', title: t.title, path: `/tutorials/${t.id}`, category: t.category })
      }
    })
    faqs.forEach(f => {
      if (f.question.toLowerCase().includes(keyword) || f.answer.toLowerCase().includes(keyword) || f.tags.some(tag => tag.toLowerCase().includes(keyword))) {
        matched.push({ type: 'FAQ', title: f.question, path: '/faq', category: f.category })
      }
    })
    solutions.forEach(s => {
      if (s.name.toLowerCase().includes(keyword) || s.products.some(p => p.toLowerCase().includes(keyword)) || s.scenarios.some(sc => sc.toLowerCase().includes(keyword))) {
        matched.push({ type: '方案', title: s.name, path: '/solutions', category: s.id })
      }
    })
    setResults(matched.slice(0, 10))
  }

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 shadow-md shadow-primary-200 group-hover:shadow-lg group-hover:shadow-primary-300 transition-all duration-300">
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 36 36" fill="none">
                <path d="M4 10h3" stroke="white" strokeWidth="0.8" strokeOpacity="0.4" strokeLinecap="round"/>
                <circle cx="7" cy="10" r="0.8" fill="white" fillOpacity="0.5"/>
                <path d="M32 13h-3" stroke="white" strokeWidth="0.8" strokeOpacity="0.4" strokeLinecap="round"/>
                <circle cx="29" cy="13" r="0.8" fill="white" fillOpacity="0.5"/>
                <path d="M4 26h2l2-2" stroke="white" strokeWidth="0.8" strokeOpacity="0.4" strokeLinecap="round"/>
                <circle cx="8" cy="24" r="0.8" fill="white" fillOpacity="0.5"/>
                <path d="M32 24h-2l-1 2" stroke="white" strokeWidth="0.8" strokeOpacity="0.4" strokeLinecap="round"/>
                <circle cx="29" cy="26" r="0.8" fill="white" fillOpacity="0.5"/>
              </svg>
              <svg className="relative h-5 w-5 text-white drop-shadow-sm" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.5 2L6 13.5h5.5L10 22l9-12h-5.5L14.5 2z"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-900 leading-tight tracking-tight"><span className="text-primary-600">i</span>Tuya</span>
              <span className="hidden sm:block text-[10px] font-medium text-gray-400 tracking-wider uppercase">FAE Knowledge</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map(item => (
              item.external ? (
                <a key={item.path} href={item.external} target="_blank" rel="noopener noreferrer" className="nav-link">
                  {item.label}
                  <svg className="inline h-3 w-3 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              ) : (
                <Link key={item.path} to={item.path} className={`nav-link ${path === item.path || (item.path !== '/' && path.startsWith(item.path)) ? 'active' : ''}`}>
                  {item.label}
                </Link>
              )
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button onClick={() => setSearchOpen(true)} className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm text-gray-400 hover:border-primary-300 transition-colors">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <span className="hidden sm:inline">搜索...</span>
            </button>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-gray-600">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-3 space-y-1">
            {navItems.map(item => (
              item.external ? (
                <a key={item.path} href={item.external} target="_blank" rel="noopener noreferrer" className="block nav-link" onClick={() => setMobileOpen(false)}>{item.label}</a>
              ) : (
                <Link key={item.path} to={item.path} className={`block nav-link ${path === item.path ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>{item.label}</Link>
              )
            ))}
          </div>
        )}
      </header>

      {searchOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4" onClick={() => { setSearchOpen(false); setQuery(''); setResults([]) }}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
          <div className="relative w-full max-w-2xl rounded-2xl bg-white shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex items-center gap-3 border-b border-gray-200 px-5 py-4">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <input
                autoFocus
                value={query}
                onChange={e => handleSearch(e.target.value)}
                className="flex-1 text-base outline-none placeholder-gray-400"
                placeholder="搜索方案、教程、FAQ、资源..."
              />
              <button onClick={() => { setSearchOpen(false); setQuery(''); setResults([]) }} className="text-sm text-gray-400 hover:text-gray-600">ESC</button>
            </div>
            {results.length > 0 && (
              <div className="max-h-96 overflow-y-auto p-3">
                {results.map((r, i) => (
                  <Link
                    key={i}
                    to={r.path}
                    onClick={() => { setSearchOpen(false); setQuery(''); setResults([]) }}
                    className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-gray-50 transition-colors"
                  >
                    <span className={`badge ${r.category === 'wifi' ? 'bg-amber-100 text-amber-700' : r.category === 'ble' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'}`}>{r.type}</span>
                    <span className="text-sm text-gray-700 line-clamp-1">{r.title}</span>
                  </Link>
                ))}
              </div>
            )}
            {query && results.length === 0 && (
              <div className="p-8 text-center text-gray-400">没有找到相关内容</div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export function Footer() {
  const [wechatOpen, setWechatOpen] = useState(false)
  const wechatQrSrc = `${import.meta.env.BASE_URL}contact/wechat-qr.png`

  const openWechatModal = (event) => {
    event.preventDefault()
    setWechatOpen(true)
  }

  return (
    <footer className="border-t border-gray-200 bg-gray-900 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="relative h-7 w-7 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 36 36" fill="none">
                  <path d="M4 10h3" stroke="white" strokeWidth="0.8" strokeOpacity="0.3" strokeLinecap="round"/>
                  <circle cx="7" cy="10" r="0.8" fill="white" fillOpacity="0.4"/>
                  <path d="M32 13h-3" stroke="white" strokeWidth="0.8" strokeOpacity="0.3" strokeLinecap="round"/>
                  <circle cx="29" cy="13" r="0.8" fill="white" fillOpacity="0.4"/>
                </svg>
                <svg className="relative h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M14.5 2L6 13.5h5.5L10 22l9-12h-5.5L14.5 2z"/></svg>
              </div>
              <span className="font-semibold text-white"><span className="text-primary-400">i</span>Tuya</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">涂鸦智能FAE技术实战知识库，专注WiFi/BLE/Zigbee IoT产品选型与落地服务。</p>
          </div>
          <div>
            <h4 className="font-medium text-white mb-3">快速导航</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/solutions" className="hover:text-primary-400">方案选型</Link></li>
              <li><Link to="/tutorials" className="hover:text-primary-400">指导文档</Link></li>
              <li><Link to="/faq" className="hover:text-primary-400">故障排错</Link></li>
              <li><Link to="/resources" className="hover:text-primary-400">资源下载</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-white mb-3">官方资源</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="https://developer.tuya.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400">涂鸦开发者平台</a></li>
              <li><a href="https://www.tuyaos.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400">开发者论坛</a></li>
              <li><a href="https://developer.tuya.com/cn/docs/iot" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400">官方文档中心</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-white mb-3">联系方式</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#wechat-contact" onClick={openWechatModal} className="hover:text-primary-400">技术咨询：个人微信</a>
              </li>
              <li>
                <a href="#wechat-contact" onClick={openWechatModal} className="hover:text-primary-400">合作洽谈：添加微信</a>
              </li>
              <li>
                <a href="#wechat-contact" onClick={openWechatModal} className="hover:text-primary-400">紧急问题：扫码联系</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          &copy; 2026 iTuya FAE知识库. All rights reserved.
        </div>
      </div>
      {wechatOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8" onClick={() => setWechatOpen(false)}>
          <div className="absolute inset-0 bg-gray-950/60 backdrop-blur-sm"></div>
          <div className="relative w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl" onClick={event => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setWechatOpen(false)}
              className="absolute right-4 top-4 rounded-full p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
              aria-label="关闭微信二维码弹窗"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-2xl">💬</div>
              <h3 className="text-lg font-bold text-gray-900">添加个人微信咨询</h3>
              <p className="mt-2 text-sm text-gray-500">扫码添加微信，沟通产品选型、模组推荐、开发调试与量产问题</p>
            </div>
            <a
              href={wechatQrSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 block rounded-2xl border border-green-100 bg-gray-50 p-4 transition hover:border-green-300"
            >
              <img
                src={wechatQrSrc}
                alt="Jamin 微信咨询二维码"
                className="mx-auto w-full max-w-[260px] rounded-xl"
              />
            </a>
            <p className="mt-4 text-center text-xs text-gray-400">Jamin · 广东 深圳 · 点击二维码可打开大图</p>
          </div>
        </div>
      )}
    </footer>
  )
}

export function Breadcrumb({ items }) {
  return (
    <nav className="breadcrumb">
      <Link to="/">首页</Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          {item.path ? <Link to={item.path}>{item.label}</Link> : <span className="text-gray-700">{item.label}</span>}
        </span>
      ))}
    </nav>
  )
}

export function CategoryBadge({ category }) {
  const colors = {
    wifi: 'bg-amber-50 text-amber-700 border-amber-200',
    ble: 'bg-blue-50 text-blue-700 border-blue-200',
    zigbee: 'bg-purple-50 text-purple-700 border-purple-200',
  }
  const labels = { wifi: 'WiFi', ble: 'BLE', zigbee: 'Zigbee' }
  return <span className={`badge border ${colors[category] || 'bg-gray-50 text-gray-700'}`}>{labels[category] || category}</span>
}
