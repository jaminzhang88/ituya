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
          <Link to="/" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600">
              <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-lg font-bold text-gray-900">iTuya</span>
            <span className="hidden sm:inline badge bg-primary-50 text-primary-700 border border-primary-200">FAE知识库</span>
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
  return (
    <footer className="border-t border-gray-200 bg-gray-900 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-7 w-7 rounded bg-primary-600 flex items-center justify-center">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <span className="font-semibold text-white">iTuya</span>
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
              <li>技术咨询：企业微信</li>
              <li>合作洽谈：微信群</li>
              <li>紧急问题：在线支持</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          &copy; 2026 iTuya FAE知识库. All rights reserved.
        </div>
      </div>
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
