import { Link } from '../components/Router'
import { solutions, faqs } from '../data/content'

export default function Home() {
  const hotFaqs = faqs.filter(f => f.hot).slice(0, 4)

  return (
    <div>
      <section className="relative bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 py-16 sm:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-primary-400 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-blue-300 blur-3xl"></div>
        </div>
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <h1 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            涂鸦 WiFi / BLE / Zigbee<br className="sm:hidden" /> 智能产品选型落地指南
          </h1>
          <p className="mb-8 text-base sm:text-lg text-primary-100/80 max-w-2xl mx-auto">
            不懂技术也能做量产产品 — 从方案选型到批量出货的一站式服务
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/solutions" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
              开始选型
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link to="/tutorials" className="btn-outline border-white/30 text-white hover:bg-white/10">查看教程</Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="section-title">选择开发协议</h2>
            <p className="section-desc">根据产品需求选择最合适的无线通信方案</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutions.map(s => (
              <Link key={s.id} to="/solutions" className="card group cursor-pointer">
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">{s.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{s.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {s.products.slice(0, 4).map(p => (
                    <span key={p} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{p}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 开发方式入口 */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="section-title">选择开发方式</h2>
            <p className="section-desc">根据你的需求选择合适的接入方案</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="https://developer.tuya.com/cn/docs/mcu-standard-protocol" target="_blank" rel="noopener noreferrer"
              className="card group relative overflow-hidden">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-100 mb-5 group-hover:bg-primary-200 transition-colors">
                <svg className="h-7 w-7 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">MCU 标准协议接入</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">通过串口通信协议，MCU与WiFi/BLE模组配合完成设备智能化，适合已有成熟产品的快速改造。</p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-600">
                查看文档
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </span>
            </a>
            <a href="https://developer.tuya.com/cn/docs/iot-device-dev" target="_blank" rel="noopener noreferrer"
              className="card group relative overflow-hidden">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-100 mb-5 group-hover:bg-emerald-200 transition-colors">
                <svg className="h-7 w-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">TuyaOS 开发</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">基于TuyaOS操作系统深度开发，提供丰富的SDK和组件，适合需要高度定制化的全新产品。</p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-emerald-600">
                查看文档
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white border-y border-gray-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="section-title">新手极速入门</h2>
            <p className="section-desc">4步完成智能产品从0到1</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: '确定方案', desc: '选对协议（WiFi/BLE/Zigbee）', icon: '🎯' },
              { step: '02', title: '采购模组', desc: '选择合适的通信模组', icon: '🛒' },
              { step: '03', title: '对接调试', desc: 'MCU串口对接，功能验证', icon: '🔧' },
              { step: '04', title: '量产出货', desc: '产测授权，批量生产', icon: '🏭' },
            ].map(item => (
              <div key={item.step} className="relative card text-center">
                <div className="absolute -top-3 left-4 badge bg-primary-600 text-white">STEP {item.step}</div>
                <div className="text-3xl mb-3 mt-2">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="section-title">指导文档</h2>
              <p className="text-gray-500">按协议分类的产品落地实操指南</p>
            </div>
            <Link to="/tutorials" className="btn-outline text-sm">全部文档</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { id: 'ble', label: 'BLE 开发', icon: '🔵', color: 'from-blue-500 to-blue-700', desc: '低功耗蓝牙产品开发指南' },
              { id: 'wifi', label: 'WiFi 开发', icon: '📡', color: 'from-amber-500 to-amber-700', desc: 'WiFi智能产品开发指南' },
              { id: 'zigbee', label: 'Zigbee 开发', icon: '🌐', color: 'from-purple-500 to-purple-700', desc: 'Zigbee组网产品开发指南' },
            ].map(cat => (
              <Link
                key={cat.id}
                to={`/tutorials/category/${cat.id}`}
                className={`relative overflow-hidden rounded-2xl p-6 text-left text-white transition-all hover:scale-[1.02] hover:shadow-xl bg-gradient-to-br ${cat.color}`}
              >
                <div className="text-4xl mb-3">{cat.icon}</div>
                <h3 className="text-lg font-bold mb-1">{cat.label}</h3>
                <p className="text-sm text-white/80">{cat.desc}</p>
                <div className="absolute -bottom-4 -right-4 text-8xl opacity-10">{cat.icon}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white border-y border-gray-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="section-title">高频问题速查</h2>
              <p className="text-gray-500">客户最常遇到的问题与解决方案</p>
            </div>
            <Link to="/faq" className="btn-outline text-sm">查看全部</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {hotFaqs.map(faq => (
              <Link key={faq.id} to="/faq" className="card flex items-start gap-4">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center text-sm font-bold">Q</div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-gray-900 mb-1 line-clamp-1">{faq.question}</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">{faq.answer}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
