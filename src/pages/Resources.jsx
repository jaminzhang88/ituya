import { Breadcrumb } from '../components/Layout'

export default function Resources() {
  const tools = [
    {
      title: 'Tuya Wind IDE',
      desc: '涂鸦官方集成开发环境，支持代码编辑、编译、烧录、调试一站式开发',
      url: 'https://developer.tuya.com/cn/ide',
      icon: '🛠️',
    },
    {
      title: '模组调试助手',
      desc: '涂鸦模组串口调试工具，支持MCU协议模拟、指令收发测试',
      url: 'https://developer.tuya.com/cn/docs/iot/module-debugging-assistant-instruction?id=K9hs0cj3lf0au',
      icon: '🔧',
    },
    {
      title: 'nRF Connect',
      desc: 'Nordic官方蓝牙调试工具，支持BLE扫描、连接、服务浏览、抓包分析',
      url: 'https://www.nordicsemi.com/Products/Development-tools/nRF-Connect-for-Desktop',
      icon: '📡',
      download: import.meta.env.BASE_URL + 'downloads/nrfconnect.zip',
      size: '8.6 MB',
    },
    {
      title: '生产解决方案',
      desc: '涂鸦云端生产解决方案，支持授权码管理、固件烧录、产测验证全流程',
      url: 'https://developer.tuya.com/cn/docs/iot/SCJJ-01?id=Kcpv15oujgz00',
      icon: '🏭',
      download: import.meta.env.BASE_URL + 'downloads/TYProductionToolkit.zip',
      size: '70 MB',
    },
  ]

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8">
      <Breadcrumb items={[{ label: '资源下载' }]} />
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">资源下载中心</h1>
        <p className="text-gray-500">开发工具与资源，助力快速完成产品开发</p>
      </div>

      {/* 开发工具 */}
      <h2 className="text-lg font-semibold text-gray-900 mb-4">开发工具</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {tools.map(tool => (
          <div key={tool.title} className="card group flex items-start gap-4">
            <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-primary-50 flex items-center justify-center text-2xl">{tool.icon}</div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-gray-900 mb-1">{tool.title}</h3>
              <p className="text-xs text-gray-500 mb-2">{tool.desc}</p>
              <div className="flex items-center gap-3">
                <a href={tool.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-medium text-primary-600 hover:text-primary-700">
                  查看文档
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
                {tool.download && (
                  <a href={tool.download} download className="inline-flex items-center gap-1 text-xs font-medium text-gray-600 hover:text-primary-600">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                    下载 ({tool.size})
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="card bg-primary-50 border-primary-200">
        <div className="flex items-start gap-4">
          <div className="text-2xl">💡</div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">需要更多资料？</h3>
            <p className="text-sm text-gray-600">如需获取特定产品方案资料、定制报价模板或量产对接文档，请联系FAE技术支持获取。</p>
          </div>
        </div>
      </div>
    </div>
  )
}
