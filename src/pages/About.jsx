import { Breadcrumb } from '../components/Layout'

export default function About() {
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
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-5">
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200">
              <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center text-lg">💬</div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900">微信咨询</h4>
                <p className="text-xs text-gray-500">扫码添加微信，沟通产品选型、模组推荐、开发调试与量产问题</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200">
              <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center text-lg">👥</div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900">技术交流群</h4>
                <p className="text-xs text-gray-500">加入微信群，与同行交流选型经验</p>
              </div>
            </div>
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
          <div className="rounded-2xl bg-white p-4 border border-green-200 shadow-sm text-center lg:w-64">
            <div className="mb-3">
              <p className="text-sm font-semibold text-gray-900">咨询微信</p>
              <p className="text-xs text-gray-500 mt-1">扫一扫，添加我为好友</p>
            </div>
            <div className="rounded-xl bg-gray-50 p-3 border border-gray-100">
              <img
                src="/contact/wechat-qr.png"
                alt="Jamin 微信咨询二维码"
                className="mx-auto w-full max-w-[200px] rounded-lg"
              />
            </div>
            <p className="mt-3 text-xs text-gray-400">Jamin · 广东 深圳</p>
          </div>
        </div>
      </div>

      <div className="mt-8 text-xs text-gray-400 text-center">
        <p>本站为个人FAE技术分享站点，内容仅供参考。具体方案请以涂鸦官方文档为准。</p>
      </div>
    </div>
  )
}
