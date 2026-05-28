import { useState } from 'react'
import { Breadcrumb } from '../components/Layout'

export default function About() {
  const [wechatOpen, setWechatOpen] = useState(false)
  const wechatQrSrc = `${import.meta.env.BASE_URL}contact/wechat-qr.png`

  const openWechatModal = (event) => {
    event.preventDefault()
    setWechatOpen(true)
  }

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
      <Breadcrumb items={[{ label: '关于我 / 技术支持' }]} />

      <div className="card mb-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center text-2xl">👨‍💻</div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">涂鸦智能 FAE 技术支持</h1>
            <p className="text-gray-500">专注 IoT 产品选型与落地服务</p>
          </div>
        </div>
        <div className="text-gray-600 text-sm leading-relaxed space-y-3">
          <p>多年涂鸦生态 FAE 实战经验，服务过数百个 WiFi/BLE/Zigbee 产品项目落地。从方案选型、模组推荐、开发对接到量产产测，提供全流程技术支持。</p>
          <p>本站宗旨：<strong className="text-gray-900">去技术化、重结果、重落地</strong>。让不懂固件、不懂电路的客户也能选对方案、避开坑、顺利量产出货。</p>
        </div>
      </div>

      <div className="card mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-6">服务范围</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { icon: '🎯', title: '立项咨询', desc: '产品可行性分析、协议推荐、成本预估' },
            { icon: '📋', title: '方案选型', desc: '模组推荐、方案对比、开发方式建议' },
            { icon: '🔧', title: '开发支持', desc: 'MCU对接指导、协议调试、功能验证' },
            { icon: '🏭', title: '量产指导', desc: '产测部署、授权码管理、品质把控' },
            { icon: '🔥', title: '疑难排查', desc: '配网失败、掉线、功耗异常等问题定位' },
            { icon: '📦', title: '全品类覆盖', desc: 'WiFi/BLE/Zigbee全协议产品支持' },
          ].map(item => (
            <div key={item.title} className="flex items-start gap-3 rounded-lg bg-gray-50 p-4">
              <span className="text-xl">{item.icon}</span>
              <div>
                <h3 className="text-sm font-semibold text-gray-900">{item.title}</h3>
                <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card bg-gradient-to-br from-primary-50 to-blue-50 border-primary-200">
        <h2 className="text-lg font-bold text-gray-900 mb-4">联系方式</h2>
        <div className="space-y-4">
          <div className="space-y-4">
            <a
              href="#wechat-contact"
              onClick={openWechatModal}
              className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 transition hover:border-green-300 hover:shadow-sm"
            >
              <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center text-lg">💬</div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900">微信咨询</h4>
                <p className="text-xs text-gray-500">点击查看二维码，添加个人微信咨询产品选型与开发调试</p>
              </div>
            </a>
            <a
              href="#wechat-contact"
              onClick={openWechatModal}
              className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 transition hover:border-blue-300 hover:shadow-sm"
            >
              <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center text-lg">👥</div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900">技术交流群</h4>
                <p className="text-xs text-gray-500">点击添加个人微信，备注“交流群”邀请入群</p>
              </div>
            </a>
            <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200">
              <div className="h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center text-lg">🌐</div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900">涂鸦开发者平台</h4>
                <p className="text-xs text-gray-500">
                  <a href="https://developer.tuya.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">developer.tuya.com</a>
                  {' '}— 官方开发文档与工具
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-xs text-gray-400 text-center">
        <p>本站为个人FAE技术分享站点，内容仅供参考。具体方案请以涂鸦官方文档为准。</p>
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
              <p className="mt-2 text-sm text-gray-500">产品选型、模组推荐、开发调试与量产问题都可以扫码沟通</p>
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
    </div>
  )
}
