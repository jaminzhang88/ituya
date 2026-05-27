import { solutions } from '../data/content'
import { Breadcrumb } from '../components/Layout'

export default function Solutions() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8">
      <Breadcrumb items={[{ label: '方案选型' }]} />
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">方案选型指南</h1>
        <p className="text-gray-500">零技术门槛，根据产品场景选择最合适的通信方案</p>
      </div>

      <div className="card mb-10 overflow-x-auto">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">三大协议一览对比</h2>
        <table className="w-full text-sm min-w-[600px]">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-semibold text-gray-700">对比项</th>
              <th className="text-left py-3 px-4 font-semibold text-amber-700">WiFi</th>
              <th className="text-left py-3 px-4 font-semibold text-blue-700">BLE 蓝牙</th>
              <th className="text-left py-3 px-4 font-semibold text-purple-700">Zigbee</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            <tr className="border-b border-gray-100"><td className="py-3 px-4 font-medium">远程控制</td><td className="py-3 px-4">直接支持</td><td className="py-3 px-4">需网关</td><td className="py-3 px-4">需网关</td></tr>
            <tr className="border-b border-gray-100"><td className="py-3 px-4 font-medium">功耗</td><td className="py-3 px-4">高</td><td className="py-3 px-4">极低</td><td className="py-3 px-4">低</td></tr>
            <tr className="border-b border-gray-100"><td className="py-3 px-4 font-medium">模组成本</td><td className="py-3 px-4">8-15元</td><td className="py-3 px-4">4-8元</td><td className="py-3 px-4">6-12元</td></tr>
            <tr className="border-b border-gray-100"><td className="py-3 px-4 font-medium">开发周期</td><td className="py-3 px-4">2-4周</td><td className="py-3 px-4">1-3周</td><td className="py-3 px-4">3-6周</td></tr>
            <tr className="border-b border-gray-100"><td className="py-3 px-4 font-medium">组网规模</td><td className="py-3 px-4">受限路由器</td><td className="py-3 px-4">少量设备</td><td className="py-3 px-4">数百设备</td></tr>
            <tr className="border-b border-gray-100"><td className="py-3 px-4 font-medium">通信距离</td><td className="py-3 px-4">取决于WiFi覆盖</td><td className="py-3 px-4">10-30米</td><td className="py-3 px-4">可Mesh扩展</td></tr>
            <tr><td className="py-3 px-4 font-medium">典型产品</td><td className="py-3 px-4">插座、灯、摄像头</td><td className="py-3 px-4">门锁、传感器、手环</td><td className="py-3 px-4">全屋灯控、面板</td></tr>
          </tbody>
        </table>
      </div>

      <div className="space-y-8">
        {solutions.map(s => (
          <div key={s.id} className="card">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">{s.icon}</span>
              <div>
                <h2 className="text-xl font-bold text-gray-900">{s.name}</h2>
                <p className="text-sm text-gray-500">{s.desc}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="rounded-lg bg-gray-50 p-4"><div className="text-xs text-gray-500 mb-1">模组成本</div><div className="font-semibold text-gray-900">{s.cost}</div></div>
              <div className="rounded-lg bg-gray-50 p-4"><div className="text-xs text-gray-500 mb-1">开发周期</div><div className="font-semibold text-gray-900">{s.cycle}</div></div>
              <div className="rounded-lg bg-gray-50 p-4"><div className="text-xs text-gray-500 mb-1">开发难度</div><div className="font-semibold text-gray-900">{s.difficulty}</div></div>
              <div className="rounded-lg bg-gray-50 p-4"><div className="text-xs text-gray-500 mb-1">适用场景</div><div className="font-semibold text-gray-900">{s.scenarios.slice(0, 2).join('、')}</div></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-sm font-semibold text-green-700 mb-2">优势</h4>
                <ul className="space-y-1.5">
                  {s.pros.map(p => (<li key={p} className="flex items-start gap-2 text-sm text-gray-600"><svg className="h-4 w-4 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>{p}</li>))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-red-700 mb-2">局限</h4>
                <ul className="space-y-1.5">
                  {s.cons.map(c => (<li key={c} className="flex items-start gap-2 text-sm text-gray-600"><svg className="h-4 w-4 text-red-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>{c}</li>))}
                </ul>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-2">适合做的产品</h4>
              <div className="flex flex-wrap gap-2">
                {s.products.map(p => (<span key={p} className="badge bg-gray-100 text-gray-600 border border-gray-200">{p}</span>))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
