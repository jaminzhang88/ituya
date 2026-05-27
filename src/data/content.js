// 方案选型数据
export const solutions = [
  {
    id: 'wifi',
    name: 'WiFi 方案',
    icon: '📡',
    color: 'amber',
    desc: '适合需要远程控制、实时联网的智能家居产品',
    products: ['智能插座', '智能灯泡', '智能开关', '摄像头', '空调伴侣', '扫地机器人'],
    pros: ['远程控制无距离限制', '成熟稳定生态完善', '配网简单用户友好', '支持OTA远程升级'],
    cons: ['功耗较高不适合电池设备', '受路由器并发数限制', '模组成本相对较高'],
    cost: '模组 8-15 元',
    cycle: '2-4 周（MCU对接）',
    difficulty: '低',
    scenarios: ['智能家居', '商用照明', '工业控制', '安防监控'],
  },
  {
    id: 'ble',
    name: 'BLE 蓝牙方案',
    icon: '🔵',
    color: 'blue',
    desc: '适合近距离、低功耗、电池供电的小型设备',
    products: ['智能门锁', '温湿度传感器', '人体传感器', '蓝牙遥控器', '电子秤', '手环'],
    pros: ['超低功耗电池可用2-3年', '配网极速无需输入密码', '模组成本低', '体积小适合紧凑设备'],
    cons: ['依赖手机/网关中转', '通信距离有限10-30m', '不能直接远程控制'],
    cost: '模组 4-8 元',
    cycle: '1-3 周（MCU对接）',
    difficulty: '低',
    scenarios: ['智能门锁', '可穿戴', '传感器', '个护健康', '宠物用品'],
  },
  {
    id: 'zigbee',
    name: 'Zigbee 方案',
    icon: '🌐',
    color: 'purple',
    desc: '适合大规模组网、全屋智能联动的场景',
    products: ['全屋灯控', '窗帘电机', '智能面板', '多路开关', '网关', '工业传感器'],
    pros: ['自组网mesh可扩展数百设备', '低功耗介于WiFi和BLE之间', '通信稳定抗干扰强', '延迟低适合联动控制'],
    cons: ['必须搭配网关使用', '生态相对封闭', '开发周期较长', '终端用户认知度低'],
    cost: '模组 6-12 元 + 网关成本',
    cycle: '3-6 周',
    difficulty: '中',
    scenarios: ['全屋智能', '商用照明', '楼宇自动化', '工业物联网'],
  },
];

// 指导文档数据
export const tutorials = [
  {
    id: 'wifi-quickstart',
    category: 'wifi',
    title: 'WiFi 智能产品从零到量产完整流程',
    summary: '手把手讲解WiFi智能产品的立项、选型、打样、调试、量产全流程，零技术基础可读。',
    difficulty: '入门',
    readTime: '15分钟',
    tags: ['WiFi', '量产', '入门'],
    content: `## 一、产品立项阶段

### 1.1 确定产品功能需求
- 明确产品要实现哪些智能功能（远程开关、定时、场景联动等）
- 确定是否需要语音控制（对接天猫精灵/小爱同学）
- 确定通信方式：WiFi最适合需要远程控制的产品

### 1.2 选择开发方式
| 方式 | 适合谁 | 周期 | 成本 |
|------|--------|------|------|
| MCU对接（推荐） | 已有成熟产品 | 2-4周 | 低 |
| SoC开发 | 全新产品设计 | 4-8周 | 中 |
| 免开发方案 | 标准品类 | 3天 | 最低 |

### 1.3 涂鸦IoT平台创建产品
1. 注册涂鸦IoT开发平台账号
2. 创建产品 → 选择品类 → 选择功能点（DP）
3. 获取PID（产品ID）

## 二、硬件选型阶段

### 2.1 WiFi模组选择要点
- 通信协议：WiFi 2.4GHz（不要选5G双频，兼容性差）
- 封装方式：根据PCB空间选择（推荐CBU/CB3S通用模组）
- 天线形式：板载天线（省空间）or 外置天线（穿墙好）

### 2.2 模组采购
- 小批量打样：涂鸦官方商城/淘宝
- 量产采购：联系涂鸦商务或代理商，量大有折扣

## 三、开发调试阶段

### 3.1 MCU串口对接方式（最常用）
- 你的MCU通过串口（UART TX/RX）连接WiFi模组
- 按涂鸦MCU协议收发数据即可
- 涂鸦提供协议文档+MCU SDK+模拟调试工具

### 3.2 调试工具
- 涂鸦智能App（配网+功能测试）
- 涂鸦串口模拟工具（PC端协议调试）
- 云端日志（排查联网问题）

## 四、量产阶段

### 4.1 授权码购买
- 每个设备需要一个唯一授权码（UUID+AuthKey）
- 涂鸦IoT平台购买，1元/个起
- 量大可谈价格

### 4.2 产测流程
- 烧录固件 + 写入授权码
- 产测工具一键检测WiFi通信是否正常
- 扫描产测热点自动验证

### 4.3 量产注意事项
- 提前申请足够授权码，避免断供
- 产线需配置2.4GHz产测路由器（信道6）
- 首批小量验证，确认无问题再大批量`
  },
  {
    id: 'ble-quickstart',
    category: 'ble',
    title: 'BLE 蓝牙智能产品开发落地指南',
    summary: '低功耗蓝牙产品从方案选择到批量出货的完整路径，适合电池类小型智能设备。',
    difficulty: '入门',
    readTime: '12分钟',
    tags: ['BLE', '低功耗', '门锁', '传感器'],
    content: `## 一、BLE产品特点

### 适合做BLE的产品
- 电池供电、需要低功耗（门锁、传感器、遥控器）
- 近距离控制即可（10-30米）
- 体积小、成本敏感
- 配网体验要求极致（无需输入密码）
- 对响应速度要求高（如遥控器、游戏手柄）

### 不适合BLE的产品
- 需要远程控制（出门在外控制家里设备）→ 用WiFi
- 需要大规模组网（几十上百设备联动）→ 用Zigbee
- 需要持续大数据传输（如摄像头）→ 用WiFi
- 需要跨品牌互通（目前BLE生态相对封闭）

### BLE技术参数一览
| 参数 | 数值 |
|------|------|
| 通信距离 | 10-30米（开阔环境可达50米） |
| 传输速率 | 1Mbps（BLE 4.2）/ 2Mbps（BLE 5.0） |
| 功耗 | 峰值15mA，休眠<1uA |
| 配网时间 | 3-5秒 |
| 工作频段 | 2.4GHz ISM |

## 二、BLE方案选择

### 2.1 纯蓝牙方案
- 手机蓝牙直连设备
- 优点：成本最低、配网最快、无需网络环境
- 缺点：离开蓝牙范围无法控制
- 典型产品：体温计、电子秤、血压计、蓝牙遥控器
- 适合场景：用户在设备旁边操作即可完成功能

### 2.2 蓝牙+网关方案
- 设备通过蓝牙连网关，网关连WiFi上云
- 优点：支持远程控制、自动化场景、设备离线也能补报数据
- 缺点：需要额外购买网关（100-200元）
- 典型产品：智能门锁、温湿度传感器、人体传感器
- 网关选型建议：涂鸦多协议网关（同时支持Zigbee+BLE）

### 2.3 蓝牙Mesh方案
- 多设备组mesh网络互相中继
- 适合：灯控、开关等固定供电设备
- 优点：自组网、覆盖范围大、节点互相中继
- 缺点：功耗较高，不适合电池设备
- 典型部署：商用照明（100+灯具统一管控）

### 2.4 方案选型决策表
| 需求 | 推荐方案 | 理由 |
|------|---------|------|
| 电池设备+近距离 | 纯蓝牙 | 功耗最低 |
| 电池设备+远程控制 | 蓝牙+网关 | 兼顾功耗和远程 |
| 固定供电+多设备 | 蓝牙Mesh | 自组网覆盖广 |
| 极致低成本 | 纯蓝牙 | 模组最便宜 |

## 三、开发流程

### 3.1 平台创建产品
1. 注册/登录涂鸦IoT开发平台（iot.tuya.com）
2. 创建产品 → 选择"蓝牙"通信方式 → 选择对应品类
3. 配置功能点（DP定义）— 每个功能对应一个DP ID
4. 选择固件方案（免开发/MCU对接/SoC）
5. 下载对应的开发资料和SDK

### 3.2 DP功能点设计
- 每个功能对应一个DP（Data Point）
- DP类型：布尔（开关）、数值（温度）、枚举（模式）、字符串（自定义）
- DP设计原则：功能原子化，一个DP一个功能
- 示例：智能门锁DP设计

| DP ID | 功能 | 类型 | 说明 |
|-------|------|------|------|
| 1 | 开锁 | 布尔 | 远程开锁指令 |
| 2 | 电量 | 数值 | 0-100% |
| 3 | 开锁方式 | 枚举 | 指纹/密码/卡/钥匙 |
| 4 | 告警 | 布尔 | 防撬/试错告警 |

### 3.3 硬件对接
- BLE模组选型（推荐BT3L/TYBT3L，性价比高）
- 串口连接MCU（波特率9600或115200，推荐115200）
- 接线方式：MCU_TX → 模组RX，MCU_RX → 模组TX，共地
- 按涂鸦BLE协议对接（串口协议文档详见开发者平台）
- 模组供电：3.3V，注意电源纹波<50mV

### 3.4 功耗优化关键点
- 广播间隔设置（越大越省电，但配网慢）
- 连接间隔协商（影响数据传输速度）
- 休眠唤醒策略（按键唤醒/定时唤醒）
- 外设管理（不用的GPIO设为输入下拉）
- 传感器采样策略（按需采集，非持续）

### 3.5 调试工具
- 涂鸦智能APP：配网、功能测试、OTA升级
- 涂鸦BLE调试助手：协议级抓包分析
- nRF Connect：蓝牙广播/连接底层调试
- 功耗分析仪：Nordic PPK2（推荐）

## 四、量产要点

### 4.1 授权码
- BLE授权码价格比WiFi低（约0.8-1.5元/个）
- 同样是一机一码，UUID+AuthKey
- 平台批量购买，支持API自动化写入

### 4.2 产测流程
- 蓝牙产测APP扫描验证（不需要路由器）
- 产测距离控制在1米内
- 检测内容：蓝牙广播、DP通信、RSSI信号强度
- 产测通过率目标：>99.5%

### 4.3 射频注意事项
- 注意射频一致性，贴片天线周围不要铺铜
- 天线区域净空≥3mm
- 金属外壳需开天线窗口
- 批量RSSI一致性测试（标准差<3dBm）
- PCB天线方向统一（批量时容易忽略）

### 4.4 常见量产问题
| 问题 | 原因 | 解决方案 |
|------|------|---------|
| 产测通过率低 | 天线被遮挡 | 调整天线布局 |
| 配网距离短 | 射频匹配差 | 检查匹配电路 |
| 功耗偏高 | 未进入深睡 | 检查唤醒源配置 |
| OTA失败 | 连接不稳定 | 优化连接参数 |`
  },
  {
    id: 'zigbee-quickstart',
    category: 'zigbee',
    title: 'Zigbee 全屋智能产品组网方案指南',
    summary: '从网关选择到子设备入网的完整流程，解决大规模设备组网和联动需求。',
    difficulty: '进阶',
    readTime: '18分钟',
    tags: ['Zigbee', '组网', '网关', '全屋智能'],
    content: `## 一、Zigbee方案适用场景

### 最佳场景
- 全屋智能（灯+窗帘+面板+传感器统一控制）
- 商用照明（几十上百灯具统一管理）
- 需要设备间本地联动（断网也能用）

### 核心概念
| 角色 | 说明 | 举例 |
|------|------|------|
| 网关(Coordinator) | 网络中心，连接云端 | 涂鸦Zigbee网关 |
| 路由(Router) | 中继信号，扩展覆盖 | 插座、灯 |
| 终端(End Device) | 低功耗设备 | 传感器、遥控器 |

## 二、方案选型

### 2.1 网关选择
- 涂鸦标准Zigbee网关（直接用，最快）
- 自研网关（门槛高，适合大客户）
- 网关决定了能带多少子设备（通常128-256个）

### 2.2 子设备模组选型
- ZS3L：通用Zigbee模组，性价比高
- TYZS5：小体积适合紧凑产品
- 注意：Zigbee 3.0协议，确保互通

## 三、组网开发

### 3.1 开发流程
1. 平台创建Zigbee产品，配置DP
2. 模组对接MCU（串口协议）
3. 网关配对 → 子设备入网 → 功能测试

### 3.2 组网注意事项
- 网关放置在房屋中央位置
- Router设备（如灯）均匀分布可增强覆盖
- 避免与WiFi 2.4GHz信道重叠（Zigbee用15/20/25信道）

## 四、量产关键

- 每个子设备需要授权码
- 产测：通过网关批量检测入网
- 注意信道规划，避免多网关互扰
- 建议先小批量10-20台验证组网稳定性`
  },
  {
    id: 'wifi-smartconfig',
    category: 'wifi',
    title: 'WiFi 配网方案选择与常见失败排查',
    summary: '对比AP配网、SmartConfig、蓝牙辅助配网三种方式的优劣，附配网失败排查清单。',
    difficulty: '入门',
    readTime: '10分钟',
    tags: ['WiFi', '配网', 'SmartConfig', '排错'],
    content: `## 配网方式对比

| 方式 | 成功率 | 体验 | 限制 |
|------|--------|------|------|
| AP配网 | 95%+ | 步骤多 | 无 |
| SmartConfig | 80-90% | 一键 | 仅2.4G |
| 蓝牙辅助配网 | 98%+ | 最佳 | 需蓝牙模组 |

## 配网失败排查清单

### 常见原因TOP5
1. **路由器是5GHz** → 切换到2.4GHz频段
2. **密码含特殊字符** → 换简单密码测试
3. **路由器连接数满** → 重启路由器
4. **APP权限未开** → 开启位置权限
5. **设备未进入配网模式** → 长按重置键5秒

### 批量配网失败
- 产线环境WiFi信号复杂 → 用独立路由器
- 多设备同时配网互扰 → 错开配网时间`
  },
  {
    id: 'ble-power',
    category: 'ble',
    title: 'BLE 产品功耗优化实战手册',
    summary: '从硬件设计到固件参数的全方位功耗优化方案，让电池产品续航翻倍。',
    difficulty: '进阶',
    readTime: '14分钟',
    tags: ['BLE', '功耗', '电池', '续航'],
    content: `## 功耗影响因素

### 硬件层面
- 电源电路漏电流（LDO选型关键，推荐静态电流<1uA的型号）
- 传感器待机功耗（选择带shutdown模式的传感器）
- LED指示灯消耗（单次闪烁约1-5mA，频繁闪烁影响巨大）
- PCB漏电（高湿度环境下，走线间距不足会产生漏电流）
- 电池内阻（CR2032老化后内阻增大，影响峰值电流输出）

### 固件层面
- 广播间隔（100ms vs 1000ms差10倍功耗）
- 连接参数（conn interval越大越省电）
- 休眠深度（deep sleep vs light sleep）
- RAM保持（保持更多RAM区域功耗更高）
- 时钟源（32.768kHz外部晶振比RC振荡器更省电更准）

### 系统层面
- MCU主频（动态调频，空闲时降频）
- 外设时钟门控（不用的外设关闭时钟）
- IO口状态（悬空IO口会产生漏电，需配置为输入下拉）
- 看门狗唤醒周期（影响平均功耗）

## 优化方案

### 广播参数优化
| 场景 | 广播间隔 | 预估电流 | 适用产品 |
|------|---------|---------|---------|
| 快速配网 | 100ms | ~1mA | 配网阶段（限时30秒） |
| 正常待机 | 500ms | ~200uA | 需要较快响应 |
| 日常待机 | 1000ms | ~100uA | 普通传感器 |
| 超低功耗 | 2000ms | ~50uA | 长期不操作的设备 |
| 极限省电 | 5000ms | ~20uA | 年报一次的设备 |

### 连接参数优化
| 参数 | 推荐值 | 说明 |
|------|--------|------|
| Connection Interval | 200-500ms | 数据量少时设大 |
| Slave Latency | 4-10 | 允许跳过的连接事件数 |
| Supervision Timeout | 6s | 断连检测超时 |
| MTU | 247 | 减少分包次数 |

### 休眠策略设计
- **按键唤醒型**（门锁、遥控器）：常态深睡，按键GPIO中断唤醒
- **定时唤醒型**（温湿度传感器）：RTC定时器唤醒，采集后立即回睡
- **事件唤醒型**（人体传感器）：外部中断唤醒，触发后上报
- **混合策略**：定时+事件双重唤醒，心跳包维持连接

### 功耗测量方法
1. 使用Nordic PPK2功耗分析仪（推荐，精度高）
2. 串联万用表uA档（粗略测量平均值）
3. 示波器+采样电阻（观察瞬态波形）
4. 测量要点：
   - 去除调试接口（SWD会额外消耗10-100uA）
   - 断开USB供电（USB转串口芯片功耗大）
   - 测量时间≥10个广播周期取平均

## 典型续航计算

### 计算公式
- 理论续航 = 电池容量(mAh) / 平均电流(mA)

### 案例一：温湿度传感器
- 电池：CR2032（220mAh）
- 工作模式：每5分钟采集一次，每次活跃200ms
- 活跃电流：8mA（采集+广播）
- 休眠电流：3uA
- 平均电流 = 8mA × 0.2s/300s + 0.003mA = 0.00833mA
- 理论续航 = 220 / 0.00833 = 26400小时 ≈ 3年
- 实际续航（打7折）：约2年

### 案例二：智能门锁
- 电池：4节AA（2400mAh × 4 = 9600mAh 串并联）
- 工作模式：每天开锁10次，每次活跃3秒
- 活跃电流：50mA（电机+BLE通信）
- 待机电流：20uA（广播+RTC）
- 平均电流 = 50mA × 30s/86400s + 0.02mA = 0.037mA
- 理论续航 = 9600 / 0.037 = 259000小时 ≈ 29年（电池自放电限制实际约1-2年）

### 案例三：蓝牙遥控器
- 电池：CR2450（600mAh）
- 工作模式：每天按键50次，每次100ms
- 活跃电流：12mA
- 休眠电流：1uA
- 平均电流 = 12mA × 5s/86400s + 0.001mA = 0.0017mA
- 理论续航 = 600 / 0.0017 ≈ 352000小时 ≈ 40年（受电池自放电限制约3-5年）

## 量产注意

### 批量功耗一致性
- 批量测试休眠电流，剔除异常个体（>2倍均值即不良）
- 常见异常原因：虚焊、漏焊、元件损坏
- 建议100%全检休眠电流（产测工位增加电流检测）

### 电池选型
- 选用自放电率低的电池（<2%/年）
- CR2032推荐品牌：松下、村田、亿纬锂能
- 避免杂牌电池，内阻大、容量虚标
- 高低温需求选工业级电池（-40~85℃）

### 环境防护
- PCB涂覆防潮（三防漆/纳米涂层）
- 电池仓密封设计（IP65以上防水产品）
- 高湿度环境走线间距≥0.3mm（防漏电）
- 注意凝露问题（温差大的环境）

### 功耗验收标准建议
| 指标 | 合格标准 | 测试方法 |
|------|---------|---------|
| 深睡电流 | <5uA | PPK2静态测量 |
| 广播电流 | <100uA@1s间隔 | PPK2平均值 |
| 峰值电流 | <15mA | 示波器+采样电阻 |
| 续航达标 | >设计值80% | 加速老化测试 |`
  },
  {
    id: 'production-guide',
    category: 'wifi',
    title: '涂鸦产品量产授权与产测全流程',
    summary: '授权码购买、固件烧录、产测工具使用、产线部署的完整操作指南。',
    difficulty: '入门',
    readTime: '20分钟',
    tags: ['量产', '授权码', '产测', '烧录'],
    content: `## 一、授权码体系

### 什么是授权码
- 每个涂鸦智能设备需要唯一身份标识
- 包含UUID + AuthKey，一机一码
- 在涂鸦IoT平台购买

### 价格参考
| 数量 | 单价 | 说明 |
|------|------|------|
| 1-99 | 2元 | 打样测试 |
| 100-999 | 1.5元 | 小批量 |
| 1000+ | 1元 | 量产价 |
| 10000+ | 面议 | 商务谈 |

## 二、产测流程

### 2.1 产测环境搭建
- 产测电脑 + 涂鸦产测工具
- 2.4GHz产测路由器（SSID: tuya_mdev_test1）
- 信道固定为6
- 产测路由器距离设备1米内（信号>-60dBm）

### 2.2 产测步骤
1. 烧录固件到模组
2. 通过产测工具写入授权码
3. 设备上电自动扫描产测热点
4. 产测工具检测设备通信正常
5. 贴标/入库

### 2.3 常见产测异常
- 扫描不到产测热点 → 检查路由器信道是否为6
- 授权码写入失败 → 检查串口接线TX/RX是否交叉
- 产测通过率低 → 检查天线是否被遮挡、焊接是否虚焊

## 三、固件烧录

### 烧录方式
- 串口烧录（通用，需接线）
- USB烧录（部分模组支持）
- 云端OTA（已量产产品远程升级）

### 烧录工具
- 涂鸦通用烧录工具（tyutool）
- 各芯片原厂工具（BK7231、ESP32等）`
  },
  {
    id: 'question-model',
    category: ['wifi', 'ble'],
    title: '客户问题定位模板',
    summary: '标准化的问题反馈模板，帮助快速定位WiFi/BLE产品开发中遇到的技术问题。',
    difficulty: '入门',
    readTime: '5分钟',
    tags: ['WiFi', 'BLE', '问题定位', '模板'],
    content: `## 目录

- [一、问题提交模板](#section1)
- [二、模板字段说明](#section2)
- [三、虚拟设备 ID 查看](#section3)
- [四、云端日志查看](#section4)
- [五、串口工具下载](#section5)
---

## <a id="section1"></a>一、问题提交模板

在向涂鸦工程师反馈问题时，请按照以下模板填写完整信息，以便快速定位问题：

\`\`\`
App 名称：
App 版本：
App 账号：
测试手机：
虚拟设备 ID：
问题描述：
手机录屏：
App 日志上传：
MCU 与模组交互日志：
模组日志：
\`\`\`

---

## <a id="section2"></a>二、模板字段说明

| 序号 | 字段 | 说明 | 获取方式 |
|:---:|:---|:---|:---|
| 1 | **App 名称** | 涂鸦智能、智能生活或其他自有品牌 App | — |
| 2 | **App 版本** | 当前 App 版本号 | 我的 → 右上角设置 → 关于 → 当前版本 |
| 3 | **App 账号** | 注册的手机号码或邮箱 | — |
| 4 | **测试手机** | 手机型号（如 iPhone 15、小米 14 等） | — |
| 5 | **虚拟设备 ID** | 设备在涂鸦云端的唯一标识 | 首页选中产品 → 进入面板 → 右上角 ... → 设备信息 → 虚拟设备 ID |
| 6 | **问题描述** | 问题发生的**时间**和**具体现象**，描述清楚 | — |
| 7 | **手机录屏** | 操作过程的屏幕录制视频 | 手机打开录屏功能后操作 |
| 8 | **App 日志上传** | App 运行日志 | 我的 → 右上角设置 → 关于 → 上传日志 |
| 9 | **MCU 与模组交互日志** | MCU 和模组之间的串口通信数据（HEX 格式） | 通过串口工具抓取模组 TX/RX 数据（参考 [WiFi 调试指南](https://developer.tuya.com/cn/docs/ble-sdk-product-development/wifi-debug?id=Kfli8jx31vsr7)、[BLE 调试指南](https://developer.tuya.com/cn/docs/ble-sdk-product-development/ble-mcu?id=Kflj0o73xw8j4)） |
| 10 | **模组日志** | 模组的串口日志 | 通过串口工具抓取（参考 [WiFi 调试指南](https://developer.tuya.com/cn/docs/ble-sdk-product-development/wifi-debug?id=Kfli8jx31vsr7)、[BLE 调试指南](https://developer.tuya.com/cn/docs/ble-sdk-product-development/ble-mcu?id=Kflj0o73xw8j4)） |

---

## <a id="section3"></a>三、虚拟设备 ID 查看

虚拟设备 ID 是设备在涂鸦云端的唯一标识，用于查询云端日志。
![image.png](https://images.tuyacn.com/content-platform/hestia/17783219396e2d4a2d324.png)
### 操作步骤

1. 打开 **涂鸦智能 APP**
2. 在首页选中目标设备，进入设备面板
3. 点击右上角 **「...」**
4. 点击 **「设备信息」**
5. 找到「虚拟 ID」，点击 **「复制」**

> 虚拟 ID 格式示例：\`6cffcd1ff99b7f80b4babm\`

---

## <a id="section4"></a>四、云端日志查看

通过虚拟设备 ID 可在涂鸦 IoT 平台查询设备与云端的通信日志。
![image.png](https://images.tuyacn.com/content-platform/hestia/17783219563c1bad16083.png)
### 操作步骤

1. 在 App 上查看设备的 **虚拟设备 ID**
   - 进入设备面板 → 右上角编辑 → 设备信息 → 虚拟 ID → 复制
2. 登录涂鸦 IoT 平台：**iot.tuya.com**
3. 进入 **「产品开发」** → 选中对应产品
4. 点击左侧菜单的 **「设备日志」**
5. 输入虚拟设备 ID，选取时间范围，点击 **「搜索」**
6. 即可查看设备与云端的通信日志

---
## <a id="section4"></a>五、串口工具下载
  - [工具下载]( https://drive.weixin.qq.com/s?k=AGQAugfWAAkIU0W5wh)
  ![mcu-uart-wiring.png](https://images.tuyacn.com/content-platform/hestia/1778582170d6367693667.png)![uart-monitor-tool.png](https://images.tuyacn.com/content-platform/hestia/177858218117d16bcf286.png)
---
> **相关文档：**
> - [涂鸦 WiFi 模组 MCU 对接调试指南（WBR3 / T3-U / T1-U-HL）](涂鸦WiFi模组MCU对接调试指南.md)
> - [涂鸦蓝牙模组 MCU 对接调试指南（BT3L / BTU / BT7L / BPU / YLB1 / BF6H-M）](涂鸦蓝牙模组MCU对接调试指南.md)`
  },
  {
    id: 'wifi-mcu-debug',
    category: 'wifi',
    title: '涂鸦WiFi MCU对接调试指南（WBR3/T3-U/T1-U-HL）',
    summary: '详细讲解WiFi模组与MCU的串口通信、接线方式、日志抓取方法，覆盖WBR3、T3-U、T1-U-HL三款模组。',
    difficulty: '进阶',
    readTime: '12分钟',
    tags: ['WiFi', 'MCU', '调试', 'WBR3', 'T3-U', 'T1-U-HL'],
    content: `## 目录

- [一、模组规格书](#一模组规格书)
- [二、MCU 串口对接协议](#二mcu-串口对接协议)
- [三、涂鸦模组调试助手使用说明](#三涂鸦模组调试助手使用说明)
- [四、如何抓取模组的交互数据](#四如何抓取模组的交互数据)
- [五、如何抓取模组的打印日志](#五如何抓取模组的打印日志)
- [附录：模组基本参数对比](#附录模组基本参数对比)

---

## 一、模组规格书

各模组的引脚定义、电气特性等详细信息请参考对应规格书：

| 模组 | 芯片 | 规格书链接 |
|:---|:---|:---|
| WBR3 | W701-VA2-CG | [WBR3 模组规格书](https://developer.tuya.com/cn/docs/iot/wbr3-module-datasheet?id=K9dujs2k5nriy) |
| T3-U | T3 | [T3-U 模组规格书](https://developer.tuya.com/cn/docs/iot/T3-U-Module-Datasheet?id=Kdd4pzscwf0il) |
| T1-U-HL | T1 | [T1-U-HL 模组规格书](https://developer.tuya.com/cn/docs/iot/T1-U-HL-Module-Datasheet?id=Kdfp5j893qwxg) |

---
## 二、MCU 串口对接协议

模组与 MCU 之间通过串口进行通信，遵循涂鸦标准串口协议。完整协议文档请参考：

> **协议文档：** [Wi-Fi 模组 MCU 对接协议](https://developer.tuya.com/cn/docs/mcu-standard-protocol/MCUSDK-wifi-base?id=Kd2bxu84567gk)

---
## 三、涂鸦模组调试助手使用说明

涂鸦模组调试助手是一款 PC 端工具，支持 MCU 模拟和模组模拟两种模式，用于串口协议调试。详细使用说明请参考：

> **使用文档：** [涂鸦模组调试助手使用说明](https://developer.tuya.com/cn/docs/mcu-standard-protocol/mcusdk-debug?id=Kd024qnpg4da0)

---
## 四、如何抓取模组的交互数据

当需要查看模组与 MCU 之间的串口交互数据时，将模组的 TXD 和 RXD 引出，用串口工具分别查看收发数据。

### 1. 接线方法

需要 **两个** USB 转 TTL 模块，分别抓取模组的发送和接收数据。
![image.png](https://images.tuyacn.com/content-platform/hestia/1778298405daed64f6cf4.png)![image.png](https://images.tuyacn.com/content-platform/hestia/1778298411d1e1bb98308.png)
#### WBR3 接线

\`\`\`
USB转TTL模块 ①（抓模组发送数据）        USB转TTL模块 ②（抓模组接收数据）
┌──────────┐                          ┌──────────┐
│    RX  ◄─┼──── TXD（Pin16）          │    RX  ◄─┼──── RXD（Pin15）
│   GND  ◄─┼──── GND（Pin9）           │   GND  ◄─┼──── GND（Pin9）
└──────────┘                          └──────────┘
\`\`\`

#### T3-U 接线

\`\`\`
USB转TTL模块 ①（抓模组发送数据）        USB转TTL模块 ②（抓模组接收数据）
┌──────────┐                          ┌──────────┐
│    RX  ◄─┼──── TX0（Pin15）          │    RX  ◄─┼──── RX0（Pin16）
│   GND  ◄─┼──── GND（Pin13）          │   GND  ◄─┼──── GND（Pin13）
└──────────┘                          └──────────┘
\`\`\`

#### T1-U-HL 接线

\`\`\`
USB转TTL模块 ①（抓模组发送数据）        USB转TTL模块 ②（抓模组接收数据）
┌──────────┐                          ┌──────────┐
│    RX  ◄─┼──── TX1（Pin15）          │    RX  ◄─┼──── RX1（Pin16）
│   GND  ◄─┼──── GND（Pin13）          │   GND  ◄─┼──── GND（Pin13）
└──────────┘                          └──────────┘
\`\`\`

> **注意：** 设备需正常供电运行，USB 转 TTL 模块的 RX 接模组的 TX/RX，**不要交叉连接**，因为是监听模式。

### 2. 串口调试助手设置
![image.png](https://images.tuyacn.com/content-platform/hestia/1778297964b16db04eaba.png)
| 参数 | 值 |
|:---|:---|
| 波特率 | 9600 或 115200（根据实际协议） |
| 数据位 | 8 |
| 校验位 | 无 |
| 停止位 | 1 |
| 流控 | 无 |

### 3. 操作步骤

1. 打开串口调试助手（推荐 SSCOM V5.13）
2. 匹配对应的 COM 口，打开串口
3. **勾选「加时间戳」和「分包显示」**，便于分析时序
4. 选择 **十六进制（HEX）** 显示模式
5. 操作设备触发通信，观察数据交互
6. 将日志**保存为文本文件**后发给涂鸦工程师分析

---

## 五、如何抓取模组的打印日志

当需要查看模组内部运行日志时，将模组的日志口引出，用串口工具查看 ASCII 打印信息。
![image.png](https://images.tuyacn.com/content-platform/hestia/1778298468bd5072f3abb.png)![image.png](https://images.tuyacn.com/content-platform/hestia/1778298479c2694580325.png)
### 1. 接线方法

只需要 **一个** USB 转 TTL 模块。

#### WBR3 接线

\`\`\`
USB转TTL模块
┌──────────┐
│    RX  ◄─┼──── A_16（Pin11）  ← 日志口
│   GND  ◄─┼──── GND（Pin9）
└──────────┘
\`\`\`

> WBR3 的日志口为 **A_16（Pin11）**，即 UART_Log_TXD。

#### T3-U 接线

\`\`\`
USB转TTL模块
┌──────────┐
│    RX  ◄─┼──── TX1（Pin7）  ← 日志口
│   GND  ◄─┼──── GND（Pin13）
└──────────┘
\`\`\`

> T3-U 的日志口为 **TX1（Pin7）**，即 UART1 发送脚。

#### T1-U-HL 接线

\`\`\`
USB转TTL模块
┌──────────┐
│    RX  ◄─┼──── TX2（Pin7）  ← 日志口
│   GND  ◄─┼──── GND（Pin13）
└──────────┘
\`\`\`

> T1-U-HL 的日志口为 **TX2（Pin7）**，即 UART2 发送脚。

### 2. 串口调试助手设置

| 参数 | WBR3 | T3-U | T1-U-HL |
|:---|:---:|:---:|:---:|
| **波特率** | **115200** | **460800** | **460800** |
| 数据位 | 8 | 8 | 8 |
| 校验位 | 无 | 无 | 无 |
| 停止位 | 1 | 1 | 1 |
| 流控 | 无 | 无 | 无 |

> **注意：** T3-U 和 T1-U-HL 的日志波特率为 **460800**，与 WBR3 的 115200 不同，请务必正确设置，否则会显示乱码。

### 3. 操作步骤

1. 打开串口调试助手
2. 匹配对应的 COM 口，**根据模组型号设置正确的波特率**
3. 勾选「加时间戳」和「分包显示」
4. 选择 **ASCII 字符** 显示模式
5. 设备上电或操作设备，观察日志输出
6. 将日志截图或保存后发给涂鸦工程师

### 4. 日志验证

日志中出现如下类似信息，说明日志口接线正确：

\`\`\`
TUYA Notice: ...
\`\`\`

如果显示乱码，请检查：
- 波特率是否匹配（WBR3 使用 115200，T3-U / T1-U-HL 使用 460800）
- TX/RX 是否接反
- GND 是否可靠连接

---

## 附录：模组基本参数对比

| 参数 | WBR3 | T3-U | T1-U-HL |
|:---|:---:|:---:|:---:|
| 芯片 | W701-VA2-CG | T3 | T1 |
| 连接方式 | Wi-Fi + BLE | Wi-Fi + BLE | Wi-Fi + BLE |
| 尺寸 (W×L×H) | 16 × 24 × 2.9 mm | 15.8 × 20.3 × 2.5 mm | 15.8 × 20.3 × 2.5 mm |
| 工作电压 | 3.0V ~ 3.6V | 2.0V ~ 3.6V | 3.0V ~ 3.6V |
| Flash | 2 MB | 4 MB | 2 MB |
| SRAM | 256 KB | 640 KB | 288 KB |
| MCU 主频 | 100 MHz | 320 MHz | 160 MHz |
| 引脚数 | 16 | 21 | 21 |
| PWM | 多路 | 5 | 5 |
| 工作温度 | -40℃ ~ 105℃ | -40℃ ~ 105℃ | -40℃ ~ 105℃ |

### 调试接线速查

| 用途 | WBR3 引脚 | T3-U 引脚 | T1-U-HL 引脚 | 接 USB转TTL |
|:---|:---:|:---:|:---:|:---:|
| 抓交互数据（发送） | TXD - Pin16 | TX0 - Pin15 | TX1 - Pin15 | → RX |
| 抓交互数据（接收） | RXD - Pin15 | RX0 - Pin16 | RX1 - Pin16 | → RX |
| 抓打印日志 | A_16 - Pin11 | TX1 - Pin7 | TX2 - Pin7 | → RX |
| 共地 | GND - Pin9 | GND - Pin13 | GND - Pin13 | → GND |

---

> **参考文档：**
> - [WBR3 模组规格书](https://developer.tuya.com/cn/docs/iot/wbr3-module-datasheet?id=K9dujs2k5nriy)
> - [T3-U 模组规格书](https://developer.tuya.com/cn/docs/iot/T3-U-Module-Datasheet?id=Kdd4pzscwf0il)
> - [T1-U-HL 模组规格书](https://developer.tuya.com/cn/docs/iot/T1-U-HL-Module-Datasheet?id=Kdfp5j893qwxg)
> - [涂鸦模组调试助手使用说明](https://developer.tuya.com/cn/docs/mcu-standard-protocol/mcusdk-debug?id=Kd024qnpg4da0)
> - [Wi-Fi 模组 MCU 对接协议](https://developer.tuya.com/cn/docs/mcu-standard-protocol/MCUSDK-wifi-base?id=Kd2bxu84567gk)`
  },
  {
    id: 'ble-mcu-debug',
    category: 'ble',
    title: '涂鸦BLE MCU对接调试指南',
    summary: '涵盖BT3L、BTU、BT7L等6款BLE模组的MCU对接调试方法，含接线图和协议说明。',
    difficulty: '进阶',
    readTime: '10分钟',
    tags: ['BLE', 'MCU', '调试', 'BT3L', 'BTU'],
    content: `**适用模组：BT3L / BTU / BT7L / BPU / YLB1 / BF6H-M**

---

## 目录

- [一、模组规格书](#一模组规格书)
- [二、MCU 串口对接协议](#二mcu-串口对接协议)
- [三、涂鸦模组调试助手使用说明](#三涂鸦模组调试助手使用说明)
- [四、如何抓取模组的交互数据](#四如何抓取模组的交互数据)
- [附录：模组基本参数对比](#附录模组基本参数对比)

---

## 一、模组规格书

各模组的引脚定义、电气特性等详细信息请参考对应规格书：

| 模组 | 芯片 | 规格书链接 |
|:---|:---|:---|
| BT3L | TLSR8250F512ET32 | [BT3L 模组规格书](https://developer.tuya.com/cn/docs/iot/br3l?id=K97rpns8f6xwh) |
| BTU | TLSR8250 | [BTU 模组规格书](https://developer.tuya.com/cn/docs/iot/btu-module-datasheet?id=Kakc18n7eo9k3) |
| BT7L | TLSR8250F512ET32 | [BT7L 模组规格书](https://developer.tuya.com/cn/docs/iot/bt7l?id=K96gqp1dp6iiw) |
| BPU | PHY6222 | [BPU 模组规格书](https://developer.tuya.com/cn/docs/iot/BPU-module-datasheet?id=Kb4ulvbe1729l) |
| YLB1 | BK3432 | [YLB1 模组规格书](https://developer.tuya.com/cn/docs/iot/ylb1?id=Kad03go6n1oah) |
| BF6H-M | FR8016HA | [BF6H-M 模组规格书](https://developer.tuya.com/cn/docs/iot/BF6H-M-module-datasheet?id=Kba01dc5q249y) |

---

## 二、MCU 串口对接协议

模组与 MCU 之间通过串口进行通信，遵循涂鸦蓝牙串口协议。完整协议文档请参考：

> **协议文档：** [蓝牙模组 MCU 对接协议](https://developer.tuya.com/cn/docs/mcu-standard-protocol/Bluetooth-LE-Intergation-Base-Function?id=Kd3q32tjfcufw)

---

## 三、涂鸦模组调试助手使用说明

涂鸦模组调试助手是一款 PC 端工具，支持 MCU 模拟和模组模拟两种模式，用于串口协议调试。详细使用说明请参考：

> **使用文档：** [涂鸦模组调试助手使用说明](https://developer.tuya.com/cn/docs/mcu-standard-protocol/mcusdk-debug?id=Kd024qnpg4da0)

---

## 四、如何抓取模组的交互数据

当需要查看模组与 MCU 之间的串口交互数据时，将模组的 TXD 和 RXD 引出，用串口工具分别查看收发数据。

### 1. 接线方法

需要 **两个** USB 转 TTL 模块，分别抓取模组的发送和接收数据。

#### BT3L 接线

\`\`\`
USB转TTL模块 ①（抓模组发送数据）        USB转TTL模块 ②（抓模组接收数据）
┌──────────┐                          ┌──────────┐
│    RX  ──┼──── TL_B1（Pin16）        │    RX  ──┼──── TL_B7（Pin15）
│   GND  ──┼──── GND（Pin9）           │   GND  ──┼──── GND（Pin9）
└──────────┘                          └──────────┘
\`\`\`

#### BTU 接线

\`\`\`
USB转TTL模块 ①（抓模组发送数据）        USB转TTL模块 ②（抓模组接收数据）
┌──────────┐                          ┌──────────┐
│    RX  ──┼──── B1（Pin15）           │    RX  ──┼──── B7（Pin16）
│   GND  ──┼──── GND（Pin13）          │   GND  ──┼──── GND（Pin13）
└──────────┘                          └──────────┘
\`\`\`

#### BT7L 接线

\`\`\`
USB转TTL模块 ①（抓模组发送数据）        USB转TTL模块 ②（抓模组接收数据）
┌──────────┐                          ┌──────────┐
│    RX  ──┼──── TX（Pin9）            │    RX  ──┼──── RX（Pin10）
│   GND  ──┼──── GND（Pin11）          │   GND  ──┼──── GND（Pin11）
└──────────┘                          └──────────┘
\`\`\`

#### BPU 接线

\`\`\`
USB转TTL模块 ①（抓模组发送数据）        USB转TTL模块 ②（抓模组接收数据）
┌──────────┐                          ┌──────────┐
│    RX  ──┼──── TXD1（Pin15）         │    RX  ──┼──── RXD1（Pin16）
│   GND  ──┼──── GND（Pin13）          │   GND  ──┼──── GND（Pin13）
└──────────┘                          └──────────┘
\`\`\`

#### YLB1 接线

\`\`\`
USB转TTL模块 ①（抓模组发送数据）        USB转TTL模块 ②（抓模组接收数据）
┌──────────┐                          ┌──────────┐
│    RX  ──┼──── TX1（Pin11）          │    RX  ──┼──── RX1（Pin12）
│   GND  ──┼──── GND（Pin1）           │   GND  ──┼──── GND（Pin1）
└──────────┘                          └──────────┘
\`\`\`

#### BF6H-M 接线

\`\`\`
USB转TTL模块 ①（抓模组发送数据）        USB转TTL模块 ②（抓模组接收数据）
┌──────────┐                          ┌──────────┐
│    RX  ──┼──── TX1（Pin9）           │    RX  ──┼──── RX1（Pin10）
│   GND  ──┼──── GND（Pin1）           │   GND  ──┼──── GND（Pin1）
└──────────┘                          └──────────┘
\`\`\`

> **注意：** 设备需正常供电运行。USB 转 TTL 模块的 RX 接模组的 TX/RX，**不要交叉连接**，因为是监听模式。

### 2. 串口调试助手设置

| 参数 | 值 |
|:---|:---|
| 波特率 | 9600 或 115200（根据实际协议） |
| 数据位 | 8 |
| 校验位 | 无 |
| 停止位 | 1 |
| 流控 | 无 |

> **说明：** 蓝牙模组上电后会自动轮询波特率（9600 和 115200），每个心跳周期切换一次，直到收到 MCU 的有效应答。MCU 应在收到心跳包后及时回复，模组将锁定当前波特率进行后续通信。

### 3. 操作步骤

1. 打开串口调试助手（推荐 SSCOM V5.13）
2. 匹配对应的 COM 口，打开串口
3. **勾选「加时间戳」和「十六进制显示」**，便于分析时序
4. 选择 **十六进制（HEX）** 显示模式
5. 操作设备触发通信，观察数据交互
6. 将日志**保存为文本文件**后发给涂鸦工程师分析

---


## 附录：模组基本参数对比

| 参数 | BT3L | BTU | BT7L | BPU | YLB1 | BF6H-M |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|
| 芯片 | TLSR8250 | TLSR8250 | TLSR8250 | PHY6222 | BK3432 | FR8016HA |
| 连接方式 | BLE | BLE | BLE | BLE | BLE | BLE |
| 尺寸 (W×L×H) | 16×24×3.3 mm | 20.3×15.8×3.0 mm | 15×16.5×2.85 mm | 20.3×15.8×3.0 mm | 12×18×2.8 mm | 15.5×19×2.5 mm |
| 工作电压 | 3.0V ~ 3.6V | 3.0V ~ 3.6V | 3.0V ~ 3.6V | 1.8V ~ 3.6V | 1.61V ~ 3.6V | 1.8V ~ 4.3V |
| Flash | 512 KB | 512 KB | 512 KB | 512 KB | 160 KB | 150 KB ROM |
| SRAM | 48 KB | 48 KB | 48 KB | 64 KB | 20 KB | 48 KB |
| 引脚数 | 16 | 21 | 14 | 21 | 26 | 28 |
| 工作温度 | -40℃ ~ 105℃ | -40℃ ~ 105℃ | -40℃ ~ 105℃ | -40℃ ~ 85℃ | -40℃ ~ 85℃ | -40℃ ~ 85℃ |

### 调试接线速查

| 用途 | BT3L | BTU | BT7L | BPU | YLB1 | BF6H-M | 接 USB转TTL |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 抓交互数据（发送） | TL_B1 - Pin16 | B1 - Pin15 | TX - Pin9 | TXD1 - Pin15 | TX1 - Pin11 | TX1 - Pin9 | → RX |
| 抓交互数据（接收） | TL_B7 - Pin15 | B7 - Pin16 | RX - Pin10 | RXD1 - Pin16 | RX1 - Pin12 | RX1 - Pin10 | → RX |
| 共地 | GND - Pin9 | GND - Pin13 | GND - Pin11 | GND - Pin13 | GND - Pin1 | GND - Pin1 | → GND |

---

> **参考文档：**
> - [BT3L 模组规格书](https://developer.tuya.com/cn/docs/iot/br3l?id=K97rpns8f6xwh)
> - [BTU 模组规格书](https://developer.tuya.com/cn/docs/iot/btu-module-datasheet?id=Kakc18n7eo9k3)
> - [BT7L 模组规格书](https://developer.tuya.com/cn/docs/iot/bt7l?id=K96gqp1dp6iiw)
> - [BPU 模组规格书](https://developer.tuya.com/cn/docs/iot/BPU-module-datasheet?id=Kb4ulvbe1729l)
> - [YLB1 模组规格书](https://developer.tuya.com/cn/docs/iot/ylb1?id=Kad03go6n1oah)
> - [BF6H-M 模组规格书](https://developer.tuya.com/cn/docs/iot/BF6H-M-module-datasheet?id=Kba01dc5q249y)
> - [涂鸦模组调试助手使用说明](https://developer.tuya.com/cn/docs/mcu-standard-protocol/mcusdk-debug?id=Kd024qnpg4da0)
> - [蓝牙模组 MCU 对接协议](https://developer.tuya.com/cn/docs/mcu-standard-protocol/Bluetooth-LE-Intergation-Base-Function?id=Kd3q32tjfcufw)`
  },
  {
    id: 'dp-report-rules',
    category: 'wifi',
    title: 'DP上报规则说明',
    summary: '设备DP数据上报的频率限制、优化原则和各场景最佳实践，避免因上报过频被云端限流。',
    difficulty: '进阶',
    readTime: '8分钟',
    tags: ['WiFi', 'BLE', 'DP', '上报', '限流'],
    content: `## 背景

设备运行过程中会通过 DP 上报设备状态到云端。DP 上报应基于业务需要触发，避免无意义的高频上报导致云端消息超量、设备功耗增加、网络拥塞或设备运行不稳定。

参考涂鸦开发者平台说明：每个设备每天默认按 3500 条消息限额统计，超过限额会被识别为超量设备。可在开发者平台的“消息上报统计”中查看超量产品、超量设备和超量日期等信息。

参考文档：[消息上报统计](https://developer.tuya.com/cn/docs/iot/message-reporting-total?id=Kbuemg6s7vkej)

## 上报频率限制

DP 上报必须同时满足以下限制：

1. 10 分钟内 DP 上报次数不要超过 1200 次。
2. 单设备单日 DP 上报次数不要超过 3500 次。

如果任一限制可能被触发，应停止非必要上报，优先保留关键状态、告警状态、用户主动查询结果等必要消息。

## 上报原则

1. 状态变化才上报：DP 值未变化时，默认不重复上报。
2. 合并上报：多个 DP 在短时间内变化时，优先合并为一次上报。
3. 限频上报：高频变化数据需要增加最小上报间隔，避免循环或定时器持续上报。
4. 按需上报：温湿度、功率、电量等连续变化数据，应设置变化阈值或采样周期。
5. 查询触发：App 或云端主动查询时，可上报当前状态，但不要因此开启持续高频上报。
6. 异常保护：网络异常、重连、配网、激活、OTA 等场景下，避免缓存消息集中爆发式上报。

## 建议实现

固件侧建议增加 DP 上报限频模块，至少包含以下能力：

1. 10 分钟滑动窗口计数：记录最近 10 分钟内的 DP 上报次数，达到 1200 次后拒绝或延迟非关键上报。
2. 单日计数：记录当天 DP 上报总次数，达到 3500 次后仅允许必要告警或关键状态上报。
3. DP 去重：同一 DP 值未变化时不上报，除非业务明确要求周期同步。
4. 批量合并：多个 DP 同时变化时，尽量使用一次接口完成上报。
5. 日志记录：限频触发时打印简短日志，日志中不要包含敏感信息。

## 典型场景

### 温湿度类 DP

建议按变化阈值上报，例如温度变化超过 0.5 摄氏度或湿度变化超过指定阈值时再上报。无需每秒上报。

### 电量、电压、功率类 DP

建议设置最小上报间隔和变化阈值。短时间抖动数据应先滤波或取平均值，再按规则上报。

### 开关、告警类 DP

用户操作、设备状态变化、告警触发和告警恢复应及时上报，但状态未变化时不要重复上报。

### 心跳或在线状态

不要用 DP 高频模拟心跳。在线状态应优先依赖 SDK 或平台已有机制。

## 开发自检项

发布前需要确认：

1. 是否存在固定周期内无条件 DP 上报。
2. 是否存在 DP 值未变化仍重复上报。
3. 是否存在网络重连后批量补发导致瞬时超量。
4. 是否存在传感器抖动导致高频上报。
5. 是否已统计 10 分钟和单日上报次数。
6. 是否能在达到限制后停止或延迟非关键 DP 上报。

## 超量处理建议

如果开发者平台显示设备消息超量，应优先检查固件逻辑：

1. 查看设备日志，确认具体高频上报的 DP。
2. 检查该 DP 是否存在定时循环、状态抖动、重连补发或重复上报。
3. 增加去重、阈值、合并和限频逻辑。
4. 通过 OTA 升级优化固件，降低不必要消息量。`
  },
  {
    id: 'door-lock-ai-dialog',
    category: 'wifi',
    title: 'AI对话完整流程文档（智能门锁）',
    summary: '基于BK7258平台TuyaOS 4.0.13的智能门锁AI对话完整技术方案，含状态机、音频流、冲突管理。',
    difficulty: '高级',
    readTime: '20分钟',
    tags: ['BLE', '门锁', 'AI', 'TuyaOS', 'BK7258'],
    content: `适用工程：\`ty_iot_wf_au_bk7258_app-bk7258_video_lock_ty_lvgl\`  
适用平台：BK7258 / TuyaOS 4.0.13 / AI 视频门锁  
宏开关：\`LOCK_AI_SUPPORT\`  
文档版本：V1.0

---

## 1. 总体架构

\`\`\`
┌─────────────────────────────────────────────────────────────────┐
│                        应用层 (Application)                       │
│  tuya_button_app.c  │  tuya_stream.c  │  tuya_device.c  │ main  │
└────────┬────────────────────┬──────────────────┬────────────────┘
         │                    │                  │
┌────────▼────────────────────▼──────────────────▼────────────────┐
│                    业务组件层 (Components)                         │
│  tuya_ai_toy  │  tbl_lock_audio_msg  │  tbl_common_ai_lock      │
└────────┬────────────────────┬──────────────────┬────────────────┘
         │                    │                  │
┌────────▼────────────────────▼──────────────────▼────────────────┐
│                    AI 服务层 (Service)                             │
│  svc_ai_agent  │  svc_ai_basic  │  tuya_speaker_service         │
│  (Agent/会话)    (协议/事件)       (TTS/音乐/OSD)                  │
└────────┬────────────────────┬──────────────────┬────────────────┘
         │                    │                  │
┌────────▼────────────────────▼──────────────────▼────────────────┐
│                    传输层 (Transport)                              │
│           TCP (流式音视频)  │  MQTT (会话管理/事件)                 │
│           加密: GCM(SL4)  │  分片: 20KB/Fragment                  │
└─────────────────────────────────────────────────────────────────┘
\`\`\`

---

## 2. 涉及文件清单

### 2.1 应用层源文件（含 \`LOCK_AI_SUPPORT\` 宏）

| 文件 | 路径 | 职责 |
|------|------|------|
| \`tuya_stream.c\` | \`application_components/tbl_lock_app/src/\` | AI 初始化/反初始化、音频采集、冲突处理、深睡清理 |
| \`tuya_button_app.c\` | \`application_components/tbl_lock_app/src/\` | 按键触发 AI、LCD OSD 显示、定时器、开机初始化 |
| \`tuya_main.c\` | \`application_components/tbl_lock_app/src/\` | cJSON PSRAM 分配、WiFi ULP 初始化 |
| \`tuya_device.c\` | \`application_components/tbl_lock_app/src/\` | UART 注册、AI Lock 模块初始化 |

### 2.2 业务组件头文件

| 文件 | 路径 | 职责 |
|------|------|------|
| \`tuya_ai_toy.h\` | \`include/application_components/tbl_lock_ai/include/\` | AI Toy 状态机、触发模式、提示音枚举 |
| \`tbl_common_ai_lock.h\` | \`include/application_components/tbl_lock_app_proc/include/\` | AI-MCU 消息结构、队列接口 |
| \`tbl_lock_audio_msg.h\` | \`include/application_components/tbl_lock_audio_msg/include/\` | 音频消息管理、音色下载、留言播放 |

### 2.3 AI 服务层头文件

| 文件 | 路径（\`software/TuyaOS/include/components/\`） | 职责 |
|------|------|------|
| \`tuya_ai_agent.h\` | \`svc_ai_agent/include/\` | Agent 初始化、会话创建/删除 |
| \`tuya_ai_input.h\` | \`svc_ai_agent/include/\` | 输入状态机、音视频/文本/图片输入接口 |
| \`tuya_ai_output.h\` | \`svc_ai_agent/include/\` | 输出回调（事件/媒体/文本/告警） |
| \`tuya_ai_event.h\` | \`svc_ai_basic/include/\` | 云端事件（start/end/chat_break 等） |
| \`tuya_ai_biz.h\` | \`svc_ai_basic/include/\` | 会话配置、收发通道、业务包发送 |
| \`tuya_ai_protocol.h\` | \`svc_ai_basic/include/\` | 底层协议包类型、加密、编解码格式 |
| \`tuya_ai_chat_protocol.h\` | \`tuya_speaker_service/include/\` | Chat 协议层（上传/下载/打断/TTS） |
| \`tuya_speaker_service.h\` | \`tuya_speaker_service/include/\` | Speaker 服务（TTS/音乐/事件分发） |

---

## 3. 核心数据结构

### 3.1 AI Toy 状态机

\`\`\`c
typedef enum {
    AI_TOY_IDLE,    // 空闲，等待触发
    AI_TOY_LISTEN,  // 正在采集用户语音
    AI_TOY_UPLOAD,  // 正在上传音频到云端
    AI_TOY_THINK,   // 等待云端 AI 处理（ASR → NLP → LLM）
    AI_TOY_SPEAK,   // 正在播放 TTS 回复
    AI_TOY_WAIT,    // 等待下一轮交互
} ai_toy_state_t;
\`\`\`

### 3.2 AI Toy 配置

\`\`\`c
typedef struct {
    TUYA_GPIO_NUM_E         spk_en_pin;        // 扬声器使能脚
    TUYA_GPIO_NUM_E         spk_power_pin;     // 扬声器电源脚
    TUYA_GPIO_NUM_E         led_pin;           // LED 指示灯
    TUYA_GPIO_NUM_E         audio_trigger_pin; // 音频触发脚
    TY_AI_TRIGGER_MODE_E    trigger_mode;      // 触发模式
} TY_AI_TOY_CFG_T;
\`\`\`

### 3.3 AI-MCU 消息结构

\`\`\`c
typedef enum {
    AI_MSG_TO_LOCK = 0x00,       // AI → 锁板 MCU
    AI_MSG_ACK_FROM_LOCK = 0x01, // 锁板 MCU → AI 应答
    AI_MSG_EXIT = 0x02,          // 退出信号
} AI_MSG_TYPE_E;

typedef struct {
    UCHAR_T  event_type;       // 事件类型
    UCHAR_T  event_info;       // 事件信息
    UCHAR_T  event_process;    // 事件处理状态
    USHORT_T audio_id;         // 音频 ID
    USHORT_T user_num;         // 用户编号（解锁 SN）
    UCHAR_T  user_type;        // 用户类型（解锁方式）
    UCHAR_T  user_property[3]; // 用户属性
    UCHAR_T  audio_interupt;   // 音频打断标志
    UCHAR_T  speak_status;     // 播报状态
    UCHAR_T  speak_choose;     // 播报选择
    UCHAR_T  rever[22];        // 预留
} tLOCK_AI_INFO;
\`\`\`

### 3.4 输入状态机

\`\`\`c
typedef enum {
    AI_INPUT_IDLE,       // 无输入
    AI_INPUT_START_LAZY, // 准备开始
    AI_INPUT_START,      // 已开始
    AI_INPUT_PROC,       // 处理中
    AI_INPUT_STOPPING,   // 正在停止
    AI_INPUT_STOP,       // 已停止
} AI_INPUT_STATE_E;
\`\`\`

### 3.5 云端事件类型

\`\`\`c
typedef enum {
    AI_EVENT_START = 0,       // 云端开始处理
    AI_EVENT_PAYLOADS_END = 1,// 响应数据发送完毕
    AI_EVENT_END = 2,         // 本轮处理结束
    AI_EVENT_ONE_SHOT = 3,    // 单次响应
    AI_EVENT_CHAT_BREAK = 4,  // 用户打断
    AI_EVENT_SERVER_VAD = 5,  // 服务端 VAD 检测到语音结束
} AI_EVENT_TYPE;
\`\`\`

### 3.6 Chat 事件（Speaker Service 层）

\`\`\`c
typedef enum {
    AI_CHAT_EVENT_ASR_EMPTY = 0,       // 未检测到语音
    AI_CHAT_EVENT_ASR_OK,              // 语音识别成功
    AI_CHAT_EVENT_ASR_ERROR,           // 识别错误
    AI_CHAT_EVENT_TTS_PRE,             // TTS 准备
    AI_CHAT_EVENT_TTS_START,           // TTS 开始
    AI_CHAT_EVENT_TTS_DATA,            // TTS 数据
    AI_CHAT_EVENT_TTS_STOP,            // TTS 结束
    AI_CHAT_EVENT_TTS_ABORT,           // TTS 中止
    AI_CHAT_EVENT_TTS_ERROR,           // TTS 错误
    AI_CHAT_EVENT_VAD_TIMEOUT,         // VAD 超时
    AI_CHAT_EVENT_TEXT_STREAM_START,   // 文本流开始
    AI_CHAT_EVENT_TEXT_STREAM_DATA,    // 文本流数据
    AI_CHAT_EVENT_TEXT_STREAM_STOP,    // 文本流结束
    AI_CHAT_EVENT_TEXT_STREAM_ABORT,   // 文本流中止
    AI_CHAT_EVENT_EMOTION,             // 情绪标记
    AI_CHAT_EVENT_LLM_EMOTION,         // LLM 情绪
    AI_CHAT_EVENT_SKILL,               // 技能执行
    AI_CHAT_EVENT_CHAT_BREAK,          // 对话打断
    AI_CHAT_EVENT_SERVER_VAD,          // 服务端 VAD
    AI_CHAT_EVENT_PLAY_CTL_PLAY,       // 播放
    AI_CHAT_EVENT_PLAY_CTL_RESUME,     // 恢复
    AI_CHAT_EVENT_PLAY_CTL_PAUSE,      // 暂停
    AI_CHAT_EVENT_PLAY_CTL_PREV,       // 上一曲
    AI_CHAT_EVENT_PLAY_CTL_NEXT,       // 下一曲
    AI_CHAT_EVENT_PLAY_CTL_END,        // 播放结束
} AI_CHAT_EVENT_TYPE_E;
\`\`\`

### 3.7 协议包类型

\`\`\`c
// 连接管理
AI_PT_CLIENT_HELLO    = 1   // 握手
AI_PT_AUTH_REQ        = 2   // 认证请求
AI_PT_AUTH_RESP       = 3   // 认证响应
AI_PT_PING            = 4   // 心跳
AI_PT_PONG            = 5   // 心跳响应
AI_PT_CONN_CLOSE      = 6   // 连接关闭

// 会话管理
AI_PT_SESSION_NEW     = 7   // 新建会话
AI_PT_SESSION_CLOSE   = 8   // 关闭会话

// 数据传输
AI_PT_VIDEO           = 30  // 视频数据
AI_PT_AUDIO           = 31  // 音频数据
AI_PT_IMAGE           = 32  // 图片数据
AI_PT_FILE            = 33  // 文件数据
AI_PT_TEXT            = 34  // 文本数据
AI_PT_EVENT           = 35  // 事件通知
\`\`\`

---

## 4. AI 对话触发方式

### 4.1 触发方式总览

| 类别 | 触发方式 | 来源 | 场景 |
|------|---------|------|------|
| 硬件按键 | 中键短按 | ADC14 @ 5.8V | 用户主动发起对话 |
| 硬件按键 | 中键长按 (>1.5s) | ADC14 @ 5.8V | 长按唤醒 AI（与门内呼叫互斥） |
| 硬件按键 | 深睡唤醒按键 | GPIO 12 | 门锁休眠中按键唤醒 |
| MCU 锁板 | 门铃/告警事件 | UART 0x64 | 有人按门铃、远程告警 |
| MCU 锁板 | AI 控制命令 | UART 0xD6 | 锁板主动触发 AI 对话 |
| 系统恢复 | 正常开机 | 上电复位 | 首次启动自动初始化 |
| 系统恢复 | 软件复位恢复 | 软复位标志 | 复位前在 AI 中自动恢复 |
| 系统恢复 | 推流结束恢复 | ai_upload_flag | AI 被推流打断后自动恢复 |

### 4.2 触发模式配置

当前产品默认使用 \`TY_AI_TRIGGER_MODE_FREE\`：

\`\`\`c
// tuya_stream.c: tuya_ai_init()
cfg.trigger_mode = TY_AI_TRIGGER_MODE_FREE;
\`\`\`

| 模式 | 枚举值 | 说明 |
|------|--------|------|
| 长按说话 | \`TY_AI_TRIGGER_MODE_HOLD\` (0) | 按住按键期间采集，松开结束 |
| 回合制 | \`TY_AI_TRIGGER_MODE_ONE_SHOT\` (1) | 按一次开始，自动 VAD 检测结束 |
| 唤醒词 | \`TY_AI_TRIGGER_MODE_WAKEUP\` (2) | 仅唤醒词触发，单轮 |
| 自由对话 | \`TY_AI_TRIGGER_MODE_FREE\` (3) | 唤醒词 + 自由多轮对话 |

### 4.3 硬件引脚配置

来源文件：\`src/tuya_func_config.c\`

| 引脚 | GPIO | 功能 |
|------|------|------|
| \`menu_key_pin\` | GPIO 12 | AI 触发键 / 深睡唤醒源 |
| \`spk_en_pin\` | GPIO 48 | 扬声器使能控制 |
| \`spk_power_pin\` | 产品配置 | 扬声器电源控制 |
| \`led_pin\` | 产品配置 | AI 状态 LED 指示 |
| \`audio_trigger_pin\` | = menu_key_pin | 音频触发引脚 |

**ADC 按键值**:

| 按键 | ADC 通道 | 电压 | 容差 | 功能 |
|------|---------|------|------|------|
| 左键 | ADC14 | 3.9V | ±0.5V | 版本显示 |
| 中键 | ADC14 | 5.8V | ±0.5V | **AI 触发** |
| 右键 | ADC14 | 2.0V | ±0.5V | 间隔切换 |

### 4.4 各触发路径详解

#### 4.4.1 中键短按触发

**文件**: \`tuya_button_app.c\`  
**入口**: ADC 轮询线程 → \`BUTTON_MIDDLE\` 事件

\`\`\`c
#ifdef LOCK_AI_SUPPORT
    ai_toy_state_t ai_state = ty_get_ai_toy_state();
    if (ai_state == AI_TOY_IDLE) {
        audio_recorder_buffer_clear();
        tbl_lock_audio_play_queue_clean();
        // 停止当前播放
        tbl_lock_audio_msg_mount_lock();
        if (tuya_speaker_service_tone_is_playing()) {
            tuya_speaker_service_tone_stop();
            tal_system_sleep(1000);
        }
        tbl_lock_audio_msg_mount_unlock();

        ai_toy_single_talk_timer_start();
        op_ret = tuya_ai_init(TRUE);
        if (OPRT_OK == op_ret) {
            if (!ty_ai_toy_get_on_off()) { goto out; }
            ty_audio_ai_set_upload_flag(TRUE);
        }
        if (TUYA_AI_SPEAKER_UAC == tuya_func_get_cur_ai_dev()) {
            tuya_ai_speaker_change(TUYA_AI_SPEAKER_BOARD);
        }
        tuya_ai_video_audio_start();
    }
#endif
\`\`\`

#### 4.4.2 中键长按触发 (>1.5s)

**前提**: \`dev_info->long_key_ai = TRUE\`（Flash 配置，与 \`support_indoor_call\` 互斥）

\`\`\`c
#ifdef LOCK_AI_SUPPORT
    TUYA_DEV_INFO_S *dev_info = tuya_func_get_dev_info();
    if (dev_info->long_key_ai) {
        long_key_prese_start_ai();
    }
#endif
\`\`\`

\`long_key_prese_start_ai()\` 内部流程与短按类似，额外调用 \`audio_recorder_start()\` 立即开始录音。

#### 4.4.3 深睡唤醒触发

**场景**: 门锁深度睡眠中，用户按 \`menu_key_pin\` (GPIO 12) 唤醒

\`\`\`c
// TUYA_RESET_REASON_DEEPSLEEP 分支
UINT_T port = bk_gpio_get_wakeup_gpio_id();
if (dev_info->menu_key_pin == port) {
#ifdef LOCK_AI_SUPPORT
    if (OPRT_OK == tuya_ai_init(TRUE)) {
        if (tuya_ai_video_audio_start()) {
            PR_ERR("tuya_ai_video_audio_start failed\\n");
        } else {
            ty_audio_ai_set_upload_flag(TRUE);
        }
    }
#endif
}
\`\`\`

#### 4.4.4 MCU 门铃/告警事件触发

**UART 命令**: \`PHOTO_TRIGGER_CMD (0x64)\`

MCU 锁板发送事件后，\`tuya_ai_init\` 根据事件类型决定是否启动 AI：

\`\`\`c
#ifdef LOCK_AI_SUPPORT
    if (VIDEO_TRIGGER_MCU == g_trigger_source) {
        if (g_photo_info->event_type == PT_EVENT_DOORBELL_REQUEST ||
            g_photo_info->event_type == PT_EVENT_ALARM_REMOTE ||
            g_photo_info->event_type == PT_EVENT_DOORBELL_AND_REMOTE ||
            g_photo_info->event_type == PT_EVENT_INDOORBELL_REQUEST) {
            streamType = AI_TOY_FILE_ZH_BELL_PRESS;  // "有人按门铃"
        } else {
            // 仅抓拍/录像，不启动 AI
        }
    } else {
        streamType = AI_TOY_FILE_ZH_STREAM;  // "有人拉流"
    }
#endif
\`\`\`

**支持触发 AI 的事件类型**:

| 事件 | 说明 |
|------|------|
| \`PT_EVENT_DOORBELL_REQUEST\` | 门铃按压 |
| \`PT_EVENT_ALARM_REMOTE\` | 远程告警 |
| \`PT_EVENT_DOORBELL_AND_REMOTE\` | 门铃+远程 |
| \`PT_EVENT_INDOORBELL_REQUEST\` | 室内门铃 |

#### 4.4.5 MCU AI 控制命令触发

**UART 命令**: \`TY_AI_CONTROL_CMD (0xD6)\`

锁板 MCU 主动发送 AI 控制命令，携带 \`tLOCK_AI_INFO\` 结构，通过 \`tuya_ai_msg_in_queue()\` 投递到处理队列。

#### 4.4.6 开机自动初始化

\`\`\`c
// TUYA_RESET_REASON_POWERON 分支
#ifdef LOCK_AI_SUPPORT
    if (OPRT_OK == tuya_ai_init(TRUE)) {
        if (tuya_ai_video_audio_start()) {
            PR_ERR("tuya_ai_video_audio_start failed\\n");
        } else {
            ty_audio_ai_set_upload_flag(TRUE);
        }
    }
#endif
\`\`\`

#### 4.4.7 软件复位恢复

通过 \`rest_flag\` 位标记复位前的 AI 状态，自动恢复：

\`\`\`c
#ifdef LOCK_AI_SUPPORT
    if ((1<<DEV_SOFT_REST_REASON_USB_AIING & rest_flag) ||
        (1<<DEV_SOFT_REST_REASON_BOARD_AIING & rest_flag)) {
        tuya_ai_init(TRUE);
        ty_audio_ai_set_upload_flag(TRUE);
        // 恢复到对应音频设备 (UAC 或 Board)
        tuya_ai_speaker_change(...);
        tuya_ai_video_audio_start();
        audio_recorder_interrupt();
    }
#endif
\`\`\`

#### 4.4.8 推流结束后自动恢复

\`\`\`c
// tuya_video_audio_ctr(FALSE) — 推流关闭时
#ifdef LOCK_AI_SUPPORT
    if (ai_upload_flag) {
        if (OPRT_OK == tuya_ai_init(TRUE) && ty_ai_toy_get_on_off()) {
            tuya_ai_video_audio_start();
        }
    }
#endif
\`\`\`

### 4.5 触发前置条件检查

每次触发 AI 对话前，系统进行以下 gate 检查：

| 序号 | 检查项 | 函数 | 失败处理 |
|------|--------|------|---------|
| 1 | AI 状态空闲 | \`ty_get_ai_toy_state() == AI_TOY_IDLE\` | 忽略触发 |
| 2 | 未重复初始化 | \`ai_start == FALSE\` | 直接返回成功 |
| 3 | 无推流冲突 | \`ty_get_stream_status() == FALSE\` | 延迟定时器等待 |
| 4 | 非 OTA 中 | \`tuya_get_ug_flag() == FALSE\` | 退出 |
| 5 | 非音色下载中 | \`!tbl_lock_audio_msg_is_started_download_timbre()\` | 播放"更新中" |
| 6 | AI 功能已开启 | \`ty_ai_toy_get_on_off() == TRUE\` | 初始化但不采集 |

### 4.6 \`tuya_ai_init\` 完整逻辑

所有触发路径最终都调用此核心函数：

\`\`\`c
OPERATE_RET tuya_ai_init(BOOL_T need_lcd)
{
    // 1. 加互斥锁
    tuya_hal_mutex_lock(g_stream_ctrl.ai_mutex);

    // 2. 防重入 (ai_start?)
    if (ai_start) { return OPRT_OK; }

    // 3. [LOCK_AI_SUPPORT] 判断触发源和事件类型
    //    MCU 门铃 → AI_TOY_FILE_ZH_BELL_PRESS
    //    非MCU   → AI_TOY_FILE_ZH_STREAM

    // 4. [LOCK_AI_SUPPORT] 检查推流冲突
    //    → 正在推流: 启动延迟定时器, 返回 AI_INIT_FAILED_STREAMING

    // 5. 检查 OTA / 音色下载 / 配网

    // 6. 获取设备信息和音频配置
    dev_info = tuya_func_get_dev_info();

    // 7. 配置 AI Toy 参数
    cfg.spk_en_pin       = dev_info->spk_gpio;
    cfg.spk_power_pin    = paudio_config->spk_power_gpio;
    cfg.audio_trigger_pin = dev_info->menu_key_pin;
    cfg.led_pin          = dev_info->ai_led_pin;
    cfg.trigger_mode     = TY_AI_TRIGGER_MODE_FREE;

    // 8. 初始化 AI Toy 状态机
    ty_ai_toy_init(&cfg);

    // 9. ai_start = TRUE
    // 10. 解锁
}
\`\`\`

---

## 5. 完整对话流程（时序）

### 5.1 系统启动初始化

\`\`\`
┌──────────────────── tuya_main.c ────────────────────┐
│ 1. cJSON 内存钩子切换到 PSRAM                         │
│    ty_lock_cJSON_InitHooks(psram_malloc, psram_free) │
│ 2. WiFi ULP 初始化                                    │
│    tuya_wifi_ulp_init()                              │
│ 3. 标记不释放 PSRAM                                   │
│    tuya_set_not_deinit_psram(TRUE)                   │
└──────────────────────────────────────────────────────┘
              │
              ▼
┌──────────────────── tuya_device.c ───────────────────┐
│ 4. 注册 UART 通信句柄                                  │
│    tuya_common_ai_lock_register_uart_handle()        │
│ 5. 音频消息模块初始化                                  │
│    tbl_lock_audio_msg_init()                         │
│ 6. AI Lock 模块初始化                                 │
│    tuya_common_ai_lock_init()                        │
└──────────────────────────────────────────────────────┘
              │
              ▼
┌──────────────────── tuya_stream.c ───────────────────┐
│ 7. 创建 AI 互斥锁                                     │
│    tuya_hal_mutex_create_init(&ai_mutex)             │
│ 8. 注册资源初始化/反初始化回调                          │
│    tuya_manage_register_init/deinit_resource_cb()    │
└──────────────────────────────────────────────────────┘
              │
              ▼
┌──────────────────── tuya_button_app.c ───────────────┐
│ 9. 创建 AI 相关定时器                                  │
│    - ai_osd_timer          (OSD 动画)                 │
│    - ai_interrupted_stream_timer (AI 被推流打断闪烁)   │
│    - stream_interrupted_ai_timer (推流被 AI 打断闪烁)  │
│10. 根据启动原因初始化 AI                                │
│    - 正常开机 / 深睡唤醒 / 软件复位                     │
│    → tuya_ai_init(TRUE)                              │
│    → tuya_ai_video_audio_start()                     │
│    → ty_audio_ai_set_upload_flag(TRUE)               │
└──────────────────────────────────────────────────────┘
\`\`\`

### 5.2 触发到采集的衔接

触发后（详见第 4 章各触发路径），执行以下衔接步骤进入音频采集：

\`\`\`
触发成功（tuya_ai_init 返回 OPRT_OK）
        │
        ▼
ty_audio_ai_set_upload_flag(TRUE)    ← 允许帧上传
        │
        ▼
tuya_ai_video_audio_start()          ← 初始化音频硬件
        │
        ├── Board: tuya_audio_init(AUDIO_CARD_BOARD)
        └── UAC:   tuya_vi_init + tuya_audio_init(AUDIO_CARD_UAC)
        │
        ▼
MIC 开始采集 → ty_audio_ai_frame_cb → audio_recorder_frame_put
        │
        ▼
进入 AI_TOY_LISTEN 状态
\`\`\`

### 5.3 音频采集与编码上传

\`\`\`
┌─── 音频硬件层 ────────────────────────────┐
│ MIC 采样 → TKL_AUDIO_FRAME_INFO_T         │
│ (16kHz PCM, 16bit)                         │
└────────────────┬───────────────────────────┘
                 │
                 ▼
┌─── ty_audio_ai_frame_cb (tuya_stream.c) ──┐
│ 检查: ai_upload_flag && ai_toy_on_off      │
│ → 通过: audio_recorder_frame_put(pframe)   │
│ → 失败: 丢弃帧                             │
└────────────────┬───────────────────────────┘
                 │
                 ▼
┌─── AI Toy 内部处理 ──────────────────────────┐
│ 1. 状态切换: LISTEN → UPLOAD                  │
│ 2. 音频编码 (PCM → Opus/Speex)               │
│    tuya_ai_chat_proto_upload_init(para)       │
│    tuya_ai_chat_proto_upload_start(vad)       │
│ 3. 分帧上传:                                  │
│    tuya_ai_chat_proto_upload_data(type, data, len) │
│    → tuya_ai_audio_input(ts, pts, data, len)  │
│ 4. VAD 检测或手动停止:                         │
│    tuya_ai_chat_proto_upload_stop()            │
│    tuya_ai_input_stop()                       │
└───────────────────────────────────────────────┘
                 │
                 ▼
┌─── 协议传输层 ────────────────────────────────┐
│ 打包: AI_PT_AUDIO (31)                        │
│ 加密: GCM (SL4)                              │
│ 分片: ≤ 20KB/Fragment                         │
│ 发送: TCP 长连接 → 涂鸦云端                    │
└───────────────────────────────────────────────┘
\`\`\`

### 5.4 云端处理

\`\`\`
┌─── 涂鸦云端 AI 服务 ─────────────────────────┐
│                                               │
│  ┌─────────┐    ┌─────────┐    ┌─────────┐   │
│  │   ASR   │ →  │   NLP   │ →  │   LLM   │   │
│  │ 语音识别 │    │ 意图理解 │    │ 大模型   │   │
│  └────┬────┘    └─────────┘    └────┬────┘   │
│       │                              │        │
│       ▼                              ▼        │
│  AI_EVENT_START ──────────> AI_EVENT_END      │
│       │                              │        │
│       │    ┌─────────────────┐       │        │
│       └──> │  TTS 语音合成   │ <─────┘        │
│            │ (MP3/Opus/FLAC) │                │
│            └────────┬────────┘                │
│                     │                         │
└─────────────────────┼─────────────────────────┘
                      │
                      ▼ (TCP 下行)
               设备接收响应
\`\`\`

### 5.5 响应接收与播放

\`\`\`
┌─── AI Output 层 (tuya_ai_output.h) ────────────────┐
│                                                      │
│  ┌────────────┐  回调分发:                           │
│  │ event_cb   │ → 事件状态变更通知                    │
│  │ media_attr │ → 音频编码格式信息                    │
│  │ media_data │ → TTS 音频流数据                     │
│  │ text_cb    │ → ASR转写文本 / LLM生成文本          │
│  │ alert_cb   │ → 系统告警                           │
│  └────────────┘                                      │
└──────────────────────┬───────────────────────────────┘
                       │
                       ▼
┌─── Chat Protocol 层 ──────────────────────────────────┐
│ 解析响应内容:                                          │
│  - TTS 音频: tuya_ai_chat_tts_stream(type, data, len) │
│  - 文本流: tuya_ai_chat_text_stream(type, data, len)  │
│  - 音乐: tuya_ai_chat_play_music(music)              │
│  - 情绪: tuya_ai_chat_play_emo(emo)                  │
│  - 设备控制: tuya_ai_chat_custom(type, json)          │
│  - 事件: tuya_ai_chat_event(event, event_id)         │
└──────────────────────┬────────────────────────────────┘
                       │
                       ▼
┌─── Speaker Service 层 ────────────────────────────────┐
│ AI_TOY_THINK → AI_TOY_SPEAK                           │
│                                                       │
│ TTS 播放:                                             │
│   tuya_speaker_service_tone_play(url)                 │
│   tuya_speaker_service_tone_play_data(id, fmt, data)  │
│                                                       │
│ 音乐播放:                                             │
│   tuya_speaker_service_start()                        │
│   tuya_speaker_service_local_play(url, name, ...)     │
│                                                       │
│ 播放完成 → AI_TOY_WAIT / AI_TOY_IDLE                  │
└───────────────────────────────────────────────────────┘
\`\`\`

### 5.6 完整状态流转图

\`\`\`
                    按键/唤醒词/MCU触发
                          │
                          ▼
    ┌──────────────── AI_TOY_IDLE ─────────────────┐
    │                     │                         │
    │                     ▼                         │
    │              AI_TOY_LISTEN                    │
    │              (采集MIC音频)                     │
    │                     │                         │
    │                     ▼                         │
    │              AI_TOY_UPLOAD                    │
    │            (编码+上传到云端)                    │
    │                     │                         │
    │          ┌──────────┼──────────┐              │
    │          │ VAD结束/  │          │              │
    │          │ 手动停止   │          │              │
    │          ▼          ▼          ▼              │
    │   AI_TOY_THINK   超时退出   用户打断            │
    │   (等待云端响应)     │     (CHAT_BREAK)         │
    │          │          │          │              │
    │          ▼          ▼          ▼              │
    │   AI_TOY_SPEAK     │     AI_TOY_IDLE         │
    │   (播放TTS回复)     │                         │
    │          │          │                         │
    │          ▼          │                         │
    │    AI_TOY_WAIT ◄────┘                         │
    │    (多轮等待)                                   │
    │          │                                    │
    │          │ 超时/结束                            │
    │          ▼                                    │
    └────► AI_TOY_IDLE                              │
              ▲                                     │
              │         深睡/推流/退出               │
              └─────────────────────────────────────┘
\`\`\`

---

## 6. 关键函数说明

### 6.1 tuya_stream.c

| 函数 | 说明 |
|------|------|
| \`tuya_ai_init(need_lcd)\` | AI 主初始化：加锁、判断触发源、检查冲突、配置硬件、调用 \`ty_ai_toy_init\` |
| \`tuya_ai_deinit(sleep)\` | AI 反初始化：调用 \`ty_ai_toy_deinit\`、清除唤醒标记 |
| \`tuya_ai_speaker_change(ai_dev)\` | 音频设备切换（Board ↔ UAC）：停止录音、等待 IDLE、切换硬件 |
| \`tuya_ai_video_audio_start()\` | 启动音视频采集：根据设备类型初始化音频 |
| \`ty_audio_ai_frame_cb(pframe)\` | 音频帧回调：检查标志后送入录音缓冲 |
| \`ty_audio_ai_set_upload_flag(flag)\` | 设置上传允许标志 |
| \`ty_audio_ai_conflict_stream_deal()\` | 处理 AI 与 P2P 推流冲突 |
| \`tuya_video_audio_ctr(open)\` | 视频音频总控：开启时处理冲突，关闭时恢复 AI |

### 6.2 tuya_button_app.c

| 函数 | 说明 |
|------|------|
| \`tuya_lcd_set_ai_robot()\` | 设置 AI 图标 OSD（对话中/推流中/无） |
| \`tuya_lcd_set_ai_osd(type)\` | 设置 AI OSD 显示类型 |
| \`tuya_lcd_cancel_ai_osd()\` | 取消 AI OSD |
| \`tuya_ai_osd_cb()\` | OSD 动画定时器回调（灰→黑→白→取消循环） |
| \`ai_toy_single_talk_timer_start()\` | 启动单次对话超时定时器 |

### 6.3 AI 服务层核心接口

| 函数 | 层级 | 说明 |
|------|------|------|
| \`tuya_ai_agent_init(cfg)\` | Agent | 初始化 AI Agent |
| \`tuya_ai_agent_crt_session(scode)\` | Agent | 创建 AI 会话 |
| \`tuya_ai_input_start(force)\` | Agent | 开始输入流 |
| \`tuya_ai_audio_input(ts, pts, data, len, total)\` | Agent | 发送音频帧 |
| \`tuya_ai_input_stop()\` | Agent | 停止输入 |
| \`tuya_ai_output_start()\` | Agent | 开始接收输出 |
| \`tuya_ai_output_write(type, data, len)\` | Agent | 写入输出数据 |
| \`tuya_ai_chat_proto_init(cbs)\` | Chat | 初始化聊天协议 |
| \`tuya_ai_chat_proto_upload_start(vad)\` | Chat | 开始音频上传 |
| \`tuya_ai_chat_proto_upload_data(type, data, len)\` | Chat | 上传音频数据 |
| \`tuya_ai_chat_proto_upload_stop()\` | Chat | 停止上传 |
| \`tuya_ai_chat_proto_interrupt()\` | Chat | 打断当前对话 |
| \`tuya_ai_event_start(sid, eid, attr, len)\` | Event | 通知云端开始 |
| \`tuya_ai_event_end(sid, eid, attr, len)\` | Event | 通知处理结束 |
| \`tuya_ai_event_chat_break(sid, eid, attr, len)\` | Event | 通知用户打断 |

---

## 7. 冲突处理机制

### 7.1 AI 与视频推流冲突

\`\`\`
场景: AI 正在对话时，App 端发起 P2P 视频拉流
处理: ty_audio_ai_conflict_stream_deal()

  1. 如果 AI 正在录音 → 停止录音
  2. 等待 AI 状态变为 IDLE（最多等 2s）
  3. 释放音频资源，切换给推流使用
  4. 推流结束后检查 ai_upload_flag
     → 如果 AI 仍需使用，自动恢复 AI
\`\`\`

### 7.2 推流时触发 AI

\`\`\`
场景: 推流中用户按键触发 AI
处理: tuya_ai_init 中检测

  1. ty_get_stream_status() == TRUE
  2. 启动延迟定时器 (stream_interrupted_ai_timer)
  3. 返回 AI_INIT_FAILED_STREAMING
  4. 定时器到期后尝试重新初始化 AI
  5. LCD 显示闪烁图标提示用户
\`\`\`

### 7.3 音频设备切换

\`\`\`
场景: USB 音频设备(UAC) ↔ 板载音频(Board)
处理: tuya_ai_speaker_change(ai_dev)

  1. 检查是否相同设备 → 是则跳过
  2. 清空录音缓冲和播放队列
  3. 停止当前 TTS 播放
  4. 停止录音（如果在录）
  5. 等待 AI 状态为 IDLE（最多 2s）
  6. 反初始化旧音频设备
  7. 设置新设备类型
  8. 初始化新音频设备
\`\`\`

### 7.4 远端音频互斥

\`\`\`
场景: P2P 对讲下行音频到达
处理: __recv_audio_cb 中检查

  if (ai_start) {
      // AI 对话中，丢弃远端音频
      return;
  }
  // 否则正常播放
\`\`\`

---

## 8. 音频参数配置

### 8.1 AI 模式 vs 普通模式

| 参数 | AI 模式 (\`LOCK_AI_SUPPORT\`) | 普通模式 |
|------|------|------|
| 麦克风增益 | 70% | 100% |
| 扬声器音量 | 80% | 60% |
| Board 音频 | 使能 (enable=TRUE) | - |
| UAC 音频 | 禁用 (enable=FALSE) | - |
| 音频帧回调 | \`ty_audio_ai_frame_cb\` | \`ty_audio_frame_cb\` |

### 8.2 支持的音频编码格式

| 编码 | 类型码 | 说明 |
|------|--------|------|
| PCM | 101 | 原始 PCM（采集格式） |
| Opus | 111 | 压缩上传（推荐） |
| Speex | 108 | 压缩上传（备选） |
| MP3 | 109 | TTS 下行格式 |
| AAC | 102-104 | 可选格式 |
| G.711 A/U | 105-106 | 低带宽格式 |

---

## 9. 提示音枚举

AI Toy 内置提示音，用于不同场景下的本地语音反馈：

| 枚举值 | 说明 |
|--------|------|
| \`AI_TOY_FILE_ZH_OK\` | "好的" |
| \`AI_TOY_FILE_ZH_I_AM\` | "我在" |
| \`AI_TOY_FILE_ZH_I_COME\` | "我来了" |
| \`AI_TOY_FILE_ZH_SET_SUCCESS\` | "设置成功" |
| \`AI_TOY_FILE_ZH_SET_FAILED\` | "设置失败" |
| \`AI_TOY_FILE_ZH_BELL_PRESS\` | "有人按门铃" |
| \`AI_TOY_FILE_ZH_STREAM\` | "有人拉流" |
| \`AI_TOY_FILE_ZH_BYE_BTE\` | "我退下了" |
| \`AI_TOY_FILE_ZH_GO_TO_SLEEP\` | "我睡觉了" |
| \`AI_TOY_FILE_ZH_LOW_BATTERY\` | "我没电了" |
| \`AI_TOY_FILE_ZH_NET_WAVE\` | "网络波动" |
| \`AI_TOY_FILE_ZH_NO_NET_WORK\` | "我没有联网" |
| \`AI_TOY_FILE_ZH_SIGNAL_GOOD\` | "信号良好" |
| \`AI_TOY_FILE_ZH_SIGNAL_NORMAL\` | "信号正常" |
| \`AI_TOY_FILE_ZH_SIGNAL_INSTAB\` | "信号不稳定，将影响使用" |
| \`AI_TOY_FILE_ZH_SIGNAL_BAD\` | "信号很差，请更换网络" |
| \`AI_TOY_FILE_ZH_TIRE_BYE_BYE\` | "聊累了，我退下了" |
| \`AI_TOY_FILE_ZH_TIMBRE_CHANGE\` | "检测到语音更换，稍后更新" |
| \`AI_TOY_FILE_ZH_TIMBRE_DOWNLOADING\` | "语音包更新中" |
| \`AI_TOY_FILE_ZH_TIMBRE_DOWNLOAD_FINISH\` | "语音更新完成" |
| \`AI_TOY_FILE_ZH_NOT_ENABLE\` | "AI语音未授权，请在app中开启" |
| \`AI_TOY_FILE_ZH_FLASH_NOSPACE\` | "存储空间已满，语音包更新失败" |

天气提示音（100+）：

| 枚举值 | 说明 |
|--------|------|
| \`AI_TOY_FILE_WEATHER_SUN\` | "今天天气晴朗" |
| \`AI_TOY_FILE_WEATHER_CLOUD\` | "今天天气多云" |
| \`AI_TOY_FILE_WEATHER_RAIN\` | "今天有雨，记得带伞" |
| \`AI_TOY_FILE_WEATHER_SNOW\` | "今天有雪，注意路面湿滑" |
| \`AI_TOY_FILE_WEATHER_LIGHT\` | "今天有雷电，请注意安全" |

---

## 10. 深度睡眠处理

门锁为低功耗产品，进入深睡前需完整清理 AI 资源：

\`\`\`
tuya_deinit_resoure() 流程:
│
├── 1. 停止上传
│      ty_audio_ai_set_upload_flag(FALSE)
│
├── 2. 清空播放队列
│      tbl_lock_audio_play_queue_clean()
│
├── 3. 等待/停止当前 TTS 播放
│      if (tone_is_playing && w_count < 3) → 重试
│      tuya_speaker_service_tone_stop()
│
├── 4. 音色更新检查（LOCK_AI_SUPPORT 独有）
│      tbl_lock_audio_msg_get_timbre_config_sleep()
│      if (timbre_changed) → 下载新音色到 Flash
│
├── 5. AI 反初始化
│      tuya_ai_deinit(TRUE)
│        → ty_ai_toy_deinit(sleep=TRUE)
│        → tuya_manage_clear_wakeup_flag(AI)
│        → ai_start = FALSE
│
├── 6. 重置音频设备
│      tuya_func_set_cur_ai_dev(TUYA_AI_SPEAKER_BOARD)
│
└── 7. 释放 PSRAM 线程资源
       tuya_thread_release_in_psram()
\`\`\`

---

## 11. OSD 显示

AI 对话过程中 LCD 屏幕会显示相应图标/动画：

| OSD 类型 | 枚举 | 用途 |
|----------|------|------|
| 灰色图标 | \`AI_OSD_FILE_GRAY\` | AI 思考中（动画帧1） |
| 黑色图标 | \`AI_OSD_FILE_BLACK\` | AI 思考中（动画帧2） |
| 白色图标 | \`AI_OSD_FILE_WHITE\` | AI 思考中（动画帧3） |
| 机器人白 | \`AI_OSD_FILE_ROBOT_WHITE\` | AI 就绪图标 |
| 摄像头白 | \`AI_OSD_FILE_SMALL_CAM_WHITE\` | 推流中图标 |
| 视频白 | \`AI_OSD_FILE_VIDEO_WHITE\` | 视频通话图标 |

AI 视频图标状态：
- AI 对话中且在线 → 显示 AI 图标 (data=0)
- 推流中 → 显示推流图标 (data=1)
- 空闲 → 取消图标

---

## 12. 网络状态告警

\`\`\`c
typedef enum {
    AT_POWER_ON,           // 开机提示
    AT_NOT_ACTIVE,         // 未配网
    AT_NETWORK_CFG,        // 进入配网
    AT_NETWORK_CONNECTED,  // 联网成功
    AT_NETWORK_FAIL,       // 联网失败
    AT_NETWORK_DISCONNECT, // 网络断开
    AT_BATTERY_LOW,        // 低电量
    AT_PLEASE_AGAIN,       // 请再说一次
} AI_ALERT_TYPE_E;
\`\`\`

---

## 13. 与 MCU 锁板的通信

AI 模块与锁板 MCU 通过 UART 通信，消息通过队列传递：

\`\`\`
┌─────────┐     UART      ┌─────────┐
│  BK7258 │ ◄───────────► │ 锁板MCU │
│ AI 模块  │               │         │
└────┬────┘               └─────────┘
     │
     ▼
tuya_ai_msg_in_queue(data, len, type)
     │
     ├── AI_MSG_TO_LOCK: AI 向锁板发送指令
     │   (开锁、控制设备等 AI 理解后的操作)
     │
     ├── AI_MSG_ACK_FROM_LOCK: 锁板回复确认
     │   (操作结果、状态反馈)
     │
     └── AI_MSG_EXIT: 退出 AI 对话
         (超时、用户主动退出)
\`\`\`

消息结构 \`tLOCK_AI_INFO\` 携带：
- 事件类型和信息（门铃/告警/开锁等）
- 用户身份（编号、类型、属性）
- 音频打断标志
- 播报状态和选择

---

## 14. 编译配置

\`LOCK_AI_SUPPORT\` 为编译时宏开关，在产品配置中启用/禁用：

- 启用时同时生效的常见组合：\`LOCK_AI_SUPPORT || LOCK_LEAVE_MSG\`
- 基础设施（mutex、PSRAM、音频初始化）为两者共用
- AI 专属逻辑使用 \`#ifdef LOCK_AI_SUPPORT\` 单独守护

注意事项：
- \`tuya_ai_toy.c\` 和 \`tbl_common_ai_lock.c\` 为预编译库（\`libtuyaapp_components.a\`），仅提供头文件
- 修改 AI 行为需通过配置和回调接口，不可直接修改源码

---

## 15. 接口调用时序总结

\`\`\`
[启动]
  tuya_main → cJSON PSRAM hooks + WiFi ULP
  tuya_device → UART注册 + audio_msg_init + ai_lock_init
  tuya_stream → mutex创建
  tuya_button_app → 定时器创建 + tuya_ai_init + video_audio_start

[一轮对话]
  按键触发
  → tuya_ai_init(TRUE)
    → ty_ai_toy_init(&cfg)
      → [内部] tuya_ai_agent_init → tuya_ai_chat_proto_init
  → tuya_ai_video_audio_start()
    → tuya_audio_init(card)
  → ty_audio_ai_set_upload_flag(TRUE)
  → [MIC采集] ty_audio_ai_frame_cb → audio_recorder_frame_put
  → [内部] tuya_ai_chat_proto_upload_start(vad)
  → [内部] tuya_ai_chat_proto_upload_data(STREAM_ING, data, len)
  → [VAD/按键停止] tuya_ai_chat_proto_upload_stop()
  → [等待云端] AI_EVENT_START
  → [接收响应] tts_stream_cb / text_stream_cb / event_cb
  → [播放] tuya_speaker_service_tone_play
  → [播放完成] AI_TOY_SPEAK → AI_TOY_WAIT/IDLE

[深睡]
  → ty_audio_ai_set_upload_flag(FALSE)
  → tuya_speaker_service_tone_stop()
  → tuya_ai_deinit(TRUE)
    → ty_ai_toy_deinit(TRUE)
  → tuya_func_set_cur_ai_dev(BOARD)
  → tuya_thread_release_in_psram()
\`\`\`

---

## 16. 注意事项

1. **线程安全**: 所有 AI 操作通过 \`ai_mutex\` 互斥锁保护
2. **内存管理**: AI 模式下 cJSON 和线程栈分配在 PSRAM，避免 SRAM 溢出
3. **低功耗**: 深睡前必须完整释放 AI 资源，唤醒后重新初始化
4. **设备冲突**: AI 对话与 P2P 推流互斥，通过状态检查和定时器协调
5. **音色资源**: 支持云端下载更换音色包，存储在外置 SPI Flash
6. **防重入**: \`ai_start\` 标志 + mutex 双重保护，防止重复初始化
7. **超时保护**: 单次对话定时器防止 AI 长时间占用资源不释放`
  },
  {
    id: 'door-lock-mcu-protocol',
    category: 'wifi',
    title: 'AI语音留言 — 锁控MCU交互协议代码对照分析',
    summary: '详解BK7258模组与锁控MCU之间0xD6/0xD7指令的帧结构、事件类型和电池查询协议。',
    difficulty: '高级',
    readTime: '15分钟',
    tags: ['BLE', '门锁', 'MCU', '协议', '0xD6', '0xD7'],
    content: `> 本文档基于涂鸦官方门锁MCU协议，结合 \`ty_iot_wf_au_bk7258_app-bk7258_video_lock_ty_lvgl\` 代码实现进行逐字段对照分析。
> 涉及两个核心命令：\`TY_AI_CONTROL_CMD (0xD6)\` 和 \`TY_GET_LOCK_INFO_CMD (0xD7)\`
>
> **官方协议参考**：
> - [锁板猫眼事件/语音控制 0xD6](https://developer.tuya.com/cn/docs/iot/door-lock-mcu-protocol?id=Kcmktkdx4hovi#title-59-%E9%94%81%E6%9D%BF%E7%8C%AB%E7%9C%BC%E4%BA%8B%E4%BB%B6%2F%E8%AF%AD%E9%9F%B3%E6%8E%A7%E5%88%B6%200xD6)
> - [外设信息上报 0xD7](https://developer.tuya.com/cn/docs/iot/door-lock-mcu-protocol?id=Kcmktkdx4hovi#title-60-%E5%A4%96%E8%AE%BE%E4%BF%A1%E6%81%AF%E4%B8%8A%E6%8A%A5%200xD7)

---

## 一、通用帧结构

BK7258与锁控MCU之间通过UART串口通信，使用涂鸦标准协议帧格式。

### 1.1 帧格式定义

代码定义位置：\`include/application_components/tbl_lock_protocol/include/tbl_lock_protocol.h\`

\`\`\`c
typedef struct {
    WORD_T head;     /* 帧头 0x55aa */
    UCHAR_T version; /* 版本 0x00 */
    UCHAR_T fr_type; /* 命令字 */
    WORD_T len;      /* 数据长度 */
    UCHAR_T data[0]; /* 数据域 */
} TY_FRAME_S;
\`\`\`

### 1.2 帧格式对照表

| 字段 | 长度(byte) | 协议值 | 代码字段 |
|------|-----------|--------|---------|
| 帧头 | 2 | 0x55AA | \`TY_FRAME_S.head\` |
| 版本 | 1 | 0x00 | \`TY_FRAME_S.version\` |
| 命令字 | 1 | 0xD6/0xD7 | \`TY_FRAME_S.fr_type\` |
| 数据长度 | 2 | 0x0024/0x0020 | \`TY_FRAME_S.len\` |
| 数据域 | N | 见各命令详述 | \`TY_FRAME_S.data[]\` |
| 校验和 | 1 | sum % 256 | \`tbl_lock_protocol_calc_checksum()\` |

**校验和计算**：从帧头开始，按字节求和，结果对256取余。

---

## 二、TY_AI_CONTROL_CMD (0xD6) -- 门锁技能意图/语音控制

### 2.1 命令定义

\`\`\`c
// tbl_common_cmd_def.h:71
TY_AI_CONTROL_CMD = 0xd6,
\`\`\`

**方向**：锁板MCU → BK7258模组（下发指令）；模组回复时方向相反  
**数据长度**：0x0024 (36字节，固定不变)  
**整帧大小**：43字节 (帧头2 + 版本1 + 命令字1 + 数据长度2 + 数据域36 + 校验和1)  
**处理函数**：\`ty_uart_ai_control_cmd()\`（位于 \`libtuyaapp_components.a\` 中 \`tbl_common_ai_lock.c.o\`）

> **官方协议说明**：MCU在解析该数据时，务必按照数据长度来解析，以确保前向兼容性。锁板下发信令时 \`event_process\` 默认填0xFF（无效），猫眼回复时填写实际状态。

### 2.2 数据域结构 (tLOCK_AI_INFO)

代码定义位置：\`include/application_components/tbl_lock_app_proc/include/tbl_common_ai_lock.h\`

\`\`\`c
#pragma pack(1)
typedef struct{
    UCHAR_T      event_type;        // 事件类型
    UCHAR_T      event_info;        // 事件信息
    UCHAR_T      event_process;     // 事件过程（猫眼回复时填写）
    USHORT_T     audio_id;          // 语音id
    USHORT_T     user_num;          // 硬件id
    UCHAR_T      user_type;         // 硬件类型
    UCHAR_T      user_property[3];  // 硬件属性
    UCHAR_T      audio_interupt;    // 是否打断
    UCHAR_T      speak_status;      // 扬声器播放状态
    UCHAR_T      speak_choose;      // 扬声器选择（代码扩展）
    UCHAR_T      rever[22];         // 保留，填充FF
}tLOCK_AI_INFO;
#pragma pack()
\`\`\`

### 2.3 数据域字段对照

| 偏移 | 字段 | 长度 | 协议说明 | 代码字段 | 备注 |
|------|------|------|---------|---------|------|
| 0 | 事件 | 1 | 事件类型(0x00~0x0B) | \`event_type\` | 见2.4节详述 |
| 1 | 事件信息 | 1 | 子命令，含义取决于事件类型 | \`event_info\` | 见2.5节详述 |
| 2 | 事件过程 | 1 | 猫眼回复字段，下发时默认0xFF | \`event_process\` | 见2.6节详述 |
| 3-4 | 语音id | 2 | 0x03E8起(1000起)，0xFFFF无效 | \`audio_id\` | 对应iot平台音频文件id |
| 5-6 | 硬件id | 2 | 0x00~0xFFFE | \`user_num\` | 解锁硬件索引 |
| 7 | 硬件类型 | 1 | 见硬件类型表 | \`user_type\` | 解锁方式类型 |
| 8-10 | 硬件属性 | 3 | 成员id(2B)+冻结状态(1B) | \`user_property[3]\` | |
| 11 | 是否打断 | 1 | 0xFF/0x00不打断，0x01打断 | \`audio_interupt\` | 针对播放信令 |
| 12 | 扬声器播放状态 | 1 | 0xFF/0x00不播放，0x01播放中 | \`speak_status\` | 查询ai状态时回复 |
| 13 | 扬声器选择 | 1 | 板载/USB选择 | \`speak_choose\` | 代码新增字段 |
| 14-35 | 保留 | 22 | 填充FF | \`rever[22]\` | |

**总计**：1+1+1+2+2+1+3+1+1+1+22 = **36字节** = 0x24

> **注意**：协议PDF中标注"保留23字节"，代码实际将其中1字节用作\`speak_choose\`，剩余22字节保留。总长度不变。

### 2.4 event_type 事件类型定义

| 值 | 含义 | 支持状态 | 代码处理函数 |
|----|------|---------|------------|
| 0x00 | 添加（指纹/密码/卡片/人脸/掌静脉/掌纹） | 支持 | \`tuya_lock_ai_process\` |
| 0x01 | 删除 | **暂不支持** | — |
| 0x02 | 设置（静音/语言/离家模式） | 支持 | \`tuya_lock_ai_process\` |
| 0x03 | 播放（语音/表情） | **暂不支持** | — |
| 0x04 | 退出当前操作 | 支持 | \`tuya_lock_ai_process\` |
| 0x05 | 信息查询（电量/信号/ai状态/ai初始化状态） | 支持 | \`tuya_lock_ai_process\` |
| 0x06 | 配网 | **暂不支持** | — |
| 0x07 | 退下对话 | 模组内部处理 | 锁板无需对接 |
| 0x08 | AI对话（板载/USB切换+触发/中断/停止） | 支持 | \`ty_uart_ai_control_cmd\` 核心 |
| 0x09 | 本地天气语音播报 | 支持 | \`tbl_lock_audio_play\` |
| 0x0A | 进出门（留言触发） | 支持 | \`tbl_lock_leave_msg_audio_play\` |
| 0x0B | 锁板自定义技能 | 支持 | 云端透传，由锁板和云端自行定义 |

### 2.5 event_info 事件信息详述

#### 2.5.1 添加/删除 (event_type = 0x00/0x01)

| 值 | 含义 | 代码对应 |
|----|------|---------|
| 0x00 | 指纹 | 对应 \`user_type\` |
| 0x01 | 密码 | |
| 0x02 | 卡片 | |
| 0x03 | 人脸 | |
| 0x04 | 掌静脉 | |
| 0x05 | 掌纹 | |

#### 2.5.2 设置 (event_type = 0x02)

| 值 | 含义 |
|----|------|
| 0x00 | 打开静音模式 |
| 0x01 | 关闭静音模式 |
| 0x02 | 设置英文 |
| 0x03 | 设置中文 |
| 0x04 | 离家模式开启 |
| 0x05 | 离家模式关闭 |

#### 2.5.3 播放 (event_type = 0x03)

| 值 | 含义 |
|----|------|
| 0x00 | 语音 |
| 0x01 | 表情 |

#### 2.5.4 退出 (event_type = 0x04)

| 值 | 含义 |
|----|------|
| 0xFF | 退出当前操作 |

#### 2.5.5 信息查询 (event_type = 0x05)

| 值 | 含义 | 代码符号 |
|----|------|---------|
| 0x00 | 电量 | \`LOCK_AI_QUERY_EVENT_BATTERY\` |
| 0x01 | 信号强度 | \`LOCK_AI_QUERY_EVENT_SIGNAL\` |
| 0x02 | AI状态 | \`LOCK_AI_QUERY_EVENT_AISTATE\` |
| 0x03 | AI初始化状态 | \`LOCK_AI_QUERY_EVENT_AI_INIT_STATE\` |

#### 2.5.6 配网 (event_type = 0x06)

| 值 | 含义 |
|----|------|
| 0x00 | 开始配网 |
| 0x01 | 退出配网 |

#### 2.5.7 AI对话 (event_type = 0x08) -- **核心命令**

| 值 | 含义 | 代码处理逻辑 |
|----|------|------------|
| 0x00 | 停止ai对讲，切回默认板载（需重新触发） | \`audio_recorder_stop()\` + 切换 BOARD |
| 0x01 | 触发/中断 USB ai对讲 | \`tuya_ai_speaker_change(TUYA_AI_SPEAKER_UAC)\` + \`audio_recorder_start/interrupt\` |
| 0x02 | 触发/中断 板载 ai对讲 | \`tuya_ai_speaker_change(TUYA_AI_SPEAKER_BOARD)\` + \`audio_recorder_start/interrupt\` |
| 0x03 | 开启USB speaker，不播放"我在"，需要语音唤醒 | \`tuya_ai_init\` + USB speaker，用于播放留言/天气 |
| 0x04 | 开启板载 speaker，不播放"我在"，需要语音唤醒 | \`tuya_ai_init\` + BOARD speaker，用于播放留言/天气 |
| 0x05 | 开启USB ai对讲，不播放"我在"，不需要语音唤醒 | USB直接对讲模式 |
| 0x06 | 开启板载 ai对讲，不播放"我在"，不需要语音唤醒 | BOARD直接对讲模式 |
| 0x07 | 停止ai对讲，不播放"我退下"，不切回板载 | 静默停止 |

代码中 speaker 设备枚举（\`tuya_func_config.h\`）：
\`\`\`c
typedef enum {
    TUYA_AI_SPEAKER_BOARD,  // 板载音频
    TUYA_AI_SPEAKER_UAC,    // USB音频
    TUYA_AI_SPEAKER_MAX,
} TUYA_AI_SPEAKER_DEV_E;
\`\`\`

#### 2.5.8 本地天气语音播报 (event_type = 0x09)

| 值 | 含义 |
|----|------|
| 0xFF | 触发天气播报 |

#### 2.5.9 进出门 (event_type = 0x0A)

| 值 | 含义 |
|----|------|
| 0x00 | 进门（触发进门留言） |
| 0x01 | 出门（触发出门留言） |

#### 2.5.10 锁板自定义技能 (event_type = 0x0B)

由云端透传，从0x0B开始，具体含义由锁板和云端自行定义。

### 2.6 event_process 事件过程（猫眼回复）

**注意**：锁板下发时默认填0xFF（无效），由BK7258模组在响应时填写具体状态。

#### 添加/删除

| 值 | 含义 |
|----|------|
| 0x00 | 开始 |
| 0x01 | 进行中 |
| 0x02 | 成功 |
| 0x03 | 失败 |

#### 设置/播放

| 值 | 含义 |
|----|------|
| 0x00 | 成功 |
| 0x01 | 失败 |

#### 退出当前操作

| 值 | 含义 |
|----|------|
| 0x00 | 成功 |
| 0x01 | 失败 |

#### 信息查询回复

- **电量**：0-100（直接返回百分比值）
- **AI状态**：

| 值 | 含义 |
|----|------|
| 0 | idle |
| 1 | listen |
| 2 | upload |
| 3 | think |
| 4 | speak |
| 5 | wait |

- **AI初始化状态**（代码枚举 \`AI_INIT_STATE_TYPE\`）：

| 值 | 协议含义 | 代码枚举值 |
|----|---------|-----------|
| 0 | AI未初始化 | \`AI_INIT_STATE_NOT_INIT\` |
| 1 | AI 在板载 | \`AI_INIT_STATE_INIT_BOARD\` |
| 2 | AI 在USB | \`AI_INIT_STATE_INIT_USB\` |
| 3 | 猫眼反初始化 | \`AI_INIT_STATE_DEINITING\` |
| 4 | AI 线程未初始化 | \`AI_INIT_STATE_AI_TASK_NOT_INIT\` |
| 5 | 正在更新AI 音色，不支持语音对话 | \`AI_INIT_STATE_DOWNLOAD_TIMBRE\` |

#### AI对话回复

| 值 | 含义 | 代码定义 |
|----|------|---------|
| 0x00 | 成功 | — |
| 0x01 | 未知问题失败 | — |
| 0x02 | 有人拉流 | \`AI_INIT_FAILED_STREAMING = 0x02\` |
| 0x03 | AI开关未开启 | \`AI_INIT_FAILED_OFF = 0x03\` |

#### 本地天气语音播报

| 值 | 含义 |
|----|------|
| 0x00 | 成功 |
| 0x01 | 失败 |

#### 进出门

| 值 | 含义 |
|----|------|
| 0x00 | 成功 |
| 0x01 | 失败 |

#### 锁板自定义技能

| 值 | 含义 |
|----|------|
| 0x00 | 开始 |
| 0x01 | 进行中 |
| 0x02 | 成功 |
| 0x03 | 失败 |
| 0x04 | 锁板暂不支持 |

#### AI音频上传

| 值 | 含义 |
|----|------|
| 0x00 | 成功 |
| 0x01 | 失败 |

### 2.7 硬件类型 (user_type)

| 值 | 含义 |
|----|------|
| 0x01 | 密码 |
| 0x02 | 门卡 |
| 0x03 | 指纹 |
| 0x04 | 人脸 |
| 0x05 | 掌纹 |
| 0x06 | 指静脉 |
| 0xF0 | 临时密码 |

### 2.8 硬件属性 (user_property[3])

| 字节偏移 | 含义 | 取值范围 |
|---------|------|---------|
| [0-1] | 成员id | 0x0001~0xFFFE |
| [2] | 冻结状态 | 0x00=冻结, 0x01=未冻结("生效") |

### 2.9 参考示例

> 帧格式：\`55 AA\` + 版本(\`00\`) + 命令字(\`D6\`) + 数据长度(\`00 24\`) + 36字节数据域 + 校验和
> 数据域36字节 = event_type(1) + event_info(1) + event_process(1) + audio_id(2) + user_num(2) + user_type(1) + user_property(3) + audio_interupt(1) + speak_status(1) + speak_choose(1) + reserved(22)

#### 2.9.1 AI对话相关

**触发USB AI对讲（MCU → 模组）**：
\`\`\`
55 AA 00 D6 00 24 08 01 FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF E0
\`\`\`
| 字段 | 值 | 含义 |
|------|-----|------|
| event_type | 0x08 | AI对话 |
| event_info | 0x01 | 触发/中断USB AI对讲 |
| event_process | 0xFF | 锁板下发默认无效 |
| 其余字段 | 0xFF | 保留/无效 |
| 校验和 | 0xE0 | (55+AA+00+D6+00+24+08+01+FF×34) % 256 = 0xE0 |

**触发板载AI对讲（MCU → 模组）**：
\`\`\`
55 AA 00 D6 00 24 08 02 FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF E1
\`\`\`
| 字段 | 值 | 含义 |
|------|-----|------|
| event_type | 0x08 | AI对话 |
| event_info | 0x02 | 触发/中断板载AI对讲 |
| 校验和 | 0xE1 | |

**开启USB speaker无问候语需唤醒（MCU → 模组）**：
\`\`\`
55 AA 00 D6 00 24 08 03 FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF E2
\`\`\`
| 字段 | 值 | 含义 |
|------|-----|------|
| event_type | 0x08 | AI对话 |
| event_info | 0x03 | 开启USB speaker，不播放"我在"，需语音唤醒 |
| 校验和 | 0xE2 | |

**开启板载speaker无问候语需唤醒（MCU → 模组）**：
\`\`\`
55 AA 00 D6 00 24 08 04 FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF E3
\`\`\`
| 字段 | 值 | 含义 |
|------|-----|------|
| event_type | 0x08 | AI对话 |
| event_info | 0x04 | 开启板载speaker，不播放"我在"，需语音唤醒 |
| 校验和 | 0xE3 | |

**开启USB AI无问候语无需唤醒（MCU → 模组）**：
\`\`\`
55 AA 00 D6 00 24 08 05 FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF E4
\`\`\`
| 字段 | 值 | 含义 |
|------|-----|------|
| event_type | 0x08 | AI对话 |
| event_info | 0x05 | 开启USB AI，不播放"我在"，不需要唤醒 |
| 校验和 | 0xE4 | |

**开启板载AI无问候语无需唤醒（MCU → 模组）**：
\`\`\`
55 AA 00 D6 00 24 08 06 FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF E5
\`\`\`
| 字段 | 值 | 含义 |
|------|-----|------|
| event_type | 0x08 | AI对话 |
| event_info | 0x06 | 开启板载AI，不播放"我在"，不需要唤醒 |
| 校验和 | 0xE5 | |

**停止AI对讲恢复板载（MCU → 模组）**：
\`\`\`
55 AA 00 D6 00 24 08 00 FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF DF
\`\`\`
| 字段 | 值 | 含义 |
|------|-----|------|
| event_type | 0x08 | AI对话 |
| event_info | 0x00 | 停止AI，切回默认板载 |
| 校验和 | 0xDF | |

**静默停止AI对讲（MCU → 模组）**：
\`\`\`
55 AA 00 D6 00 24 08 07 FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF E6
\`\`\`
| 字段 | 值 | 含义 |
|------|-----|------|
| event_type | 0x08 | AI对话 |
| event_info | 0x07 | 停止AI，不播放"我退下"，不切回板载 |
| 校验和 | 0xE6 | |

**模组回复AI对话成功（模组 → MCU）**：
\`\`\`
55 AA 00 D6 00 24 08 01 00 FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF E1
\`\`\`
| 字段 | 值 | 含义 |
|------|-----|------|
| event_type | 0x08 | AI对话 |
| event_info | 0x01 | USB AI对讲 |
| event_process | 0x00 | **成功** |
| 校验和 | 0xE1 | |

**模组回复AI对话失败-有人拉流（模组 → MCU）**：
\`\`\`
55 AA 00 D6 00 24 08 01 02 FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF E3
\`\`\`
| 字段 | 值 | 含义 |
|------|-----|------|
| event_type | 0x08 | AI对话 |
| event_info | 0x01 | USB AI对讲 |
| event_process | 0x02 | **失败：有人拉流** |
| 校验和 | 0xE3 | |

**模组回复AI对话失败-AI开关未开启（模组 → MCU）**：
\`\`\`
55 AA 00 D6 00 24 08 02 03 FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF E5
\`\`\`
| 字段 | 值 | 含义 |
|------|-----|------|
| event_type | 0x08 | AI对话 |
| event_info | 0x02 | 板载AI对讲 |
| event_process | 0x03 | **失败：AI开关未开启** |
| 校验和 | 0xE5 | |

#### 2.9.2 天气语音播报

**触发天气播报（MCU → 模组）**：
\`\`\`
55 AA 00 D6 00 24 09 FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF DF
\`\`\`
| 字段 | 值 | 含义 |
|------|-----|------|
| event_type | 0x09 | 本地天气语音播报 |
| event_info | 0xFF | 触发天气播报 |
| event_process | 0xFF | 锁板下发默认无效 |
| 校验和 | 0xDF | |

**模组回复天气播报成功（模组 → MCU）**：
\`\`\`
55 AA 00 D6 00 24 09 FF 00 FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF E0
\`\`\`
| 字段 | 值 | 含义 |
|------|-----|------|
| event_type | 0x09 | 本地天气语音播报 |
| event_process | 0x00 | **成功** |
| 校验和 | 0xE0 | |

#### 2.9.3 进出门留言

**进门留言触发-不指定用户（MCU → 模组）**：
\`\`\`
55 AA 00 D6 00 24 0A 00 FF FF FF FF FF FF FF FF FF FF FF 00 FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF E2
\`\`\`
| 字段 | 值 | 含义 |
|------|-----|------|
| event_type | 0x0A | 进出门 |
| event_info | 0x00 | 进门 |
| event_process | 0xFF | 锁板下发默认无效 |
| user_num(偏移5-6) | 0xFFFF | 不指定用户 |
| user_type(偏移7) | 0xFF | 不指定 |
| speak_choose(偏移13) | 0x00 | 板载speaker |
| 校验和 | 0xE2 | |

**出门留言触发 + USB speaker-不指定用户（MCU → 模组）**：
\`\`\`
55 AA 00 D6 00 24 0A 01 FF FF FF FF FF FF FF FF FF FF FF 01 FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF E4
\`\`\`
| 字段 | 值 | 含义 |
|------|-----|------|
| event_type | 0x0A | 进出门 |
| event_info | 0x01 | 出门 |
| event_process | 0xFF | 锁板下发默认无效 |
| speak_choose(偏移13) | 0x01 | USB speaker |
| 校验和 | 0xE4 | |

**模组回复进门留言成功（模组 → MCU）**：
\`\`\`
55 AA 00 D6 00 24 0A 00 00 FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF E2
\`\`\`
| 字段 | 值 | 含义 |
|------|-----|------|
| event_type | 0x0A | 进出门 |
| event_info | 0x00 | 进门 |
| event_process | 0x00 | **成功** |
| 校验和 | 0xE2 | |

##### 留言指定用户 -- 硬件ID与硬件类型填充

进出门留言触发时，锁板可通过填充 \`user_num\`（硬件ID）和 \`user_type\`（硬件类型）字段告知模组**是哪个用户触发的**，以便播放对应用户的个性化留言。不指定用户时这些字段填0xFF。

模组通过 \`user_num\` + \`user_type\` 唯一确定触发者身份，通过 \`user_property\` 中的成员ID关联到家庭成员播放对应留言。\`user_num\` 是**同一硬件类型内的索引号**，不同类型之间独立编号：
\`\`\`
举例：
  指纹类型(0x03): user_num = 1, 2, 3, 4, 5  → 5个指纹
  密码类型(0x01): user_num = 1, 2, 3         → 3个密码
  人脸类型(0x04): user_num = 1, 2            → 2个人脸

  同一个家庭成员可拥有多种开锁方式，通过 user_property 中的成员ID关联：
  爸爸(成员ID=1): 指纹1号 + 密码1号 + 人脸1号
  妈妈(成员ID=2): 指纹2号 + 密码2号
  孩子(成员ID=3): 指纹3号 + 人脸2号
\`\`\`

**指纹用户编号3进门，成员ID=2（MCU → 模组）**：

场景：家庭成员"爸爸"（成员ID=2）使用3号指纹开锁进门，板载speaker。

\`\`\`
55 AA 00 D6 00 24 0A 00 FF FF FF 00 03 03 00 02 01 FF FF 00 FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF F1
\`\`\`

| 偏移 | 字段 | 值 | 含义 |
|------|------|-----|------|
| 0 | event_type | 0x0A | 进出门 |
| 1 | event_info | 0x00 | **进门** |
| 2 | event_process | 0xFF | 锁板下发默认无效 |
| 3-4 | audio_id | 0xFFFF | 无指定音频ID（由模组根据用户决定） |
| 5-6 | **user_num** | **0x0003** | **硬件编号=3**（第3个指纹） |
| 7 | **user_type** | **0x03** | **指纹** |
| 8-9 | user_property[0-1] | **0x0002** | **成员ID=2**（爸爸） |
| 10 | user_property[2] | **0x01** | 未冻结（生效中） |
| 11 | audio_interupt | 0xFF | 不打断 |
| 12 | speak_status | 0xFF | — |
| 13 | speak_choose | 0x00 | 板载speaker |
| 14-35 | reserved | 0xFF | 保留 |

**密码用户编号1出门，成员ID=1，USB speaker（MCU → 模组）**：

场景：家庭成员"妈妈"（成员ID=1）使用1号密码开锁出门，USB speaker播放出门留言。

\`\`\`
55 AA 00 D6 00 24 0A 01 FF FF FF 00 01 01 00 01 01 FF FF 01 FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF EE
\`\`\`

| 偏移 | 字段 | 值 | 含义 |
|------|------|-----|------|
| 0 | event_type | 0x0A | 进出门 |
| 1 | event_info | 0x01 | **出门** |
| 5-6 | **user_num** | **0x0001** | **硬件编号=1**（第1个密码） |
| 7 | **user_type** | **0x01** | **密码** |
| 8-9 | user_property[0-1] | **0x0001** | **成员ID=1**（妈妈） |
| 10 | user_property[2] | **0x01** | 未冻结 |
| 13 | speak_choose | **0x01** | **USB speaker** |

**人脸用户编号5进门，成员ID=3（MCU → 模组）**：

场景：家庭成员"孩子"（成员ID=3）使用5号人脸识别开锁进门。

\`\`\`
55 AA 00 D6 00 24 0A 00 FF FF FF 00 05 04 00 03 01 FF FF 00 FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF F5
\`\`\`

| 偏移 | 字段 | 值 | 含义 |
|------|------|-----|------|
| 5-6 | **user_num** | **0x0005** | **硬件编号=5**（第5个人脸） |
| 7 | **user_type** | **0x04** | **人脸** |
| 8-9 | user_property[0-1] | **0x0003** | **成员ID=3**（孩子） |
| 10 | user_property[2] | 0x01 | 未冻结 |

**门卡用户编号2进门，用户被冻结（MCU → 模组）**：

场景：2号门卡用户已被冻结，锁板仍触发进门事件但标记冻结状态。

\`\`\`
55 AA 00 D6 00 24 0A 00 FF FF FF 00 02 02 00 01 00 FF FF 00 FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF ED
\`\`\`

| 偏移 | 字段 | 值 | 含义 |
|------|------|-----|------|
| 5-6 | user_num | 0x0002 | 硬件编号=2（第2张门卡） |
| 7 | user_type | 0x02 | 门卡 |
| 8-9 | user_property[0-1] | 0x0001 | 成员ID=1 |
| 10 | **user_property[2]** | **0x00** | **已冻结** |

#### 2.9.4 播放语音

**播放音频ID=1000并打断当前播放（MCU → 模组）**：
\`\`\`
55 AA 00 D6 00 24 03 00 FF 03 E8 FF FF FF FF FF FF 01 FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF C9
\`\`\`
| 字段 | 值 | 含义 |
|------|-----|------|
| event_type | 0x03 | 播放 |
| event_info | 0x00 | 语音 |
| event_process | 0xFF | 锁板下发默认无效 |
| audio_id(偏移3-4) | 0x03E8 | 音频ID=1000（大端序） |
| user_num(偏移5-6) | 0xFFFF | 无效 |
| audio_interupt(偏移11) | 0x01 | **打断当前播放** |
| 校验和 | 0xC9 | |

**播放音频ID=1001不打断（MCU → 模组）**：
\`\`\`
55 AA 00 D6 00 24 03 00 FF 03 E9 FF FF FF FF FF FF 00 FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF C9
\`\`\`
| 字段 | 值 | 含义 |
|------|-----|------|
| event_type | 0x03 | 播放 |
| event_info | 0x00 | 语音 |
| audio_id(偏移3-4) | 0x03E9 | 音频ID=1001 |
| audio_interupt(偏移11) | 0x00 | **不打断** |
| 校验和 | 0xC9 | |

#### 2.9.5 信息查询

**查询电量（MCU → 模组）**：
\`\`\`
55 AA 00 D6 00 24 05 00 FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF DC
\`\`\`
| 字段 | 值 | 含义 |
|------|-----|------|
| event_type | 0x05 | 信息查询 |
| event_info | 0x00 | 电量 |
| 校验和 | 0xDC | |

**模组回复电量85%（模组 → MCU）**：
\`\`\`
55 AA 00 D6 00 24 05 00 55 FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF 32
\`\`\`
| 字段 | 值 | 含义 |
|------|-----|------|
| event_type | 0x05 | 信息查询 |
| event_info | 0x00 | 电量 |
| event_process | 0x55 | **电量=85%** (0x55=85) |
| 校验和 | 0x32 | |

**查询AI状态（MCU → 模组）**：
\`\`\`
55 AA 00 D6 00 24 05 02 FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF DE
\`\`\`
| 字段 | 值 | 含义 |
|------|-----|------|
| event_type | 0x05 | 信息查询 |
| event_info | 0x02 | AI状态 |
| 校验和 | 0xDE | |

**模组回复AI状态=speak（模组 → MCU）**：
\`\`\`
55 AA 00 D6 00 24 05 02 04 FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF E3
\`\`\`
| 字段 | 值 | 含义 |
|------|-----|------|
| event_type | 0x05 | 信息查询 |
| event_info | 0x02 | AI状态 |
| event_process | 0x04 | **speak（说话中）** |
| 校验和 | 0xE3 | |

**查询AI初始化状态（MCU → 模组）**：
\`\`\`
55 AA 00 D6 00 24 05 03 FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF DF
\`\`\`

**模组回复AI在USB（模组 → MCU）**：
\`\`\`
55 AA 00 D6 00 24 05 03 02 FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF E2
\`\`\`
| 字段 | 值 | 含义 |
|------|-----|------|
| event_type | 0x05 | 信息查询 |
| event_info | 0x03 | AI初始化状态 |
| event_process | 0x02 | **AI在USB** |
| 校验和 | 0xE2 | |

#### 2.9.6 设置

**打开静音模式（MCU → 模组）**：
\`\`\`
55 AA 00 D6 00 24 02 00 FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF D9
\`\`\`
| 字段 | 值 | 含义 |
|------|-----|------|
| event_type | 0x02 | 设置 |
| event_info | 0x00 | 打开静音模式 |
| 校验和 | 0xD9 | |

**模组回复设置成功（模组 → MCU）**：
\`\`\`
55 AA 00 D6 00 24 02 00 00 FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF DA
\`\`\`
| 字段 | 值 | 含义 |
|------|-----|------|
| event_type | 0x02 | 设置 |
| event_info | 0x00 | 打开静音模式 |
| event_process | 0x00 | **成功** |
| 校验和 | 0xDA | |

**设置离家模式开启（MCU → 模组）**：
\`\`\`
55 AA 00 D6 00 24 02 04 FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF DD
\`\`\`
| 字段 | 值 | 含义 |
|------|-----|------|
| event_type | 0x02 | 设置 |
| event_info | 0x04 | 离家模式开启 |
| 校验和 | 0xDD | |

#### 2.9.7 添加硬件

**添加指纹-用户编号5（MCU → 模组）**：
\`\`\`
55 AA 00 D6 00 24 00 00 FF FF FF 00 05 03 00 01 01 FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF E7
\`\`\`
| 字段 | 值 | 含义 |
|------|-----|------|
| event_type | 0x00 | 添加 |
| event_info | 0x00 | 指纹 |
| event_process | 0xFF | 锁板下发默认无效 |
| audio_id(偏移3-4) | 0xFFFF | 无效 |
| user_num(偏移5-6) | 0x0005 | 硬件编号=5 |
| user_type(偏移7) | 0x03 | 指纹 |
| user_property[0-1](偏移8-9) | 0x0001 | 成员ID=1 |
| user_property[2](偏移10) | 0x01 | 未冻结 |
| 校验和 | 0xE7 | |

**模组回复添加成功（模组 → MCU）**：
\`\`\`
55 AA 00 D6 00 24 00 00 02 FF FF 00 05 03 00 01 01 FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF EA
\`\`\`
| 字段 | 值 | 含义 |
|------|-----|------|
| event_type | 0x00 | 添加 |
| event_info | 0x00 | 指纹 |
| event_process | 0x02 | **成功** |
| 校验和 | 0xEA | |

#### 2.9.8 退出操作

**退出当前操作（MCU → 模组）**：
\`\`\`
55 AA 00 D6 00 24 04 FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF DA
\`\`\`
| 字段 | 值 | 含义 |
|------|-----|------|
| event_type | 0x04 | 退出当前操作 |
| event_info | 0xFF | 退出 |
| 校验和 | 0xDA | |

**模组回复退出成功（模组 → MCU）**：
\`\`\`
55 AA 00 D6 00 24 04 FF 00 FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF DB
\`\`\`
| 字段 | 值 | 含义 |
|------|-----|------|
| event_type | 0x04 | 退出当前操作 |
| event_info | 0xFF | 退出 |
| event_process | 0x00 | **成功** |
| 校验和 | 0xDB | |

#### 2.9.9 锁板自定义技能

**自定义技能下发（MCU → 模组）**：
\`\`\`
55 AA 00 D6 00 24 0B 01 FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF E3
\`\`\`
| 字段 | 值 | 含义 |
|------|-----|------|
| event_type | 0x0B | 锁板自定义技能 |
| event_info | 0x01 | 云端定义的技能子命令 |
| 校验和 | 0xE3 | |

**模组回复不支持（模组 → MCU）**：
\`\`\`
55 AA 00 D6 00 24 0B 01 04 FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF E8
\`\`\`
| 字段 | 值 | 含义 |
|------|-----|------|
| event_type | 0x0B | 锁板自定义技能 |
| event_info | 0x01 | 技能子命令 |
| event_process | 0x04 | **锁板暂不支持** |
| 校验和 | 0xE8 | |

---

## 三、TY_GET_LOCK_INFO_CMD (0xD7) -- 外设信息上报/获取锁板状态

> **官方协议说明**：用于锁板与猫眼之间一些外设状态的查询或上报。数据长度固定为0x0020（32字节数据区）；未使用字节填0xFF。

### 3.1 命令定义

\`\`\`c
// tbl_common_cmd_def.h:72
TY_GET_LOCK_INFO_CMD = 0xd7,  //获取锁板信息
\`\`\`

**方向**：BK7258模组 → 锁板MCU（主动查询） / 锁板MCU → BK7258（响应/主动上报）  
**数据长度**：0x0020 (32字节，固定不变)  
**整帧大小**：39字节 (帧头2 + 版本1 + 命令字1 + 数据长度2 + 数据域32 + 校验和1)  
**处理函数**：
- 发送查询：\`tuya_send_to_lock_get_battery_info()\` / \`tuya_send_to_lock_get_info()\`（位于 \`tbl_lock_protocol.c.o\`）
- 接收响应：\`ty_uart_get_lock_info_cmd()\`（位于 \`tbl_common_ai_lock.c.o\`）

### 3.2 查询帧格式（BK7258 → 锁板）

| 字段 | 长度(byte) | 值 | 说明 |
|------|-----------|-----|------|
| 帧头 | 2 | 0x55AA | — |
| 版本 | 1 | 0x00 | — |
| 命令字 | 1 | 0xD7 | TY_GET_LOCK_INFO_CMD |
| 数据长度 | 2 | 0x0020 | 32字节 |
| 类型 | 1 | 0x00 | 电池电量查询 |
| 保留 | 31 | 0xFF填充 | 便于后续扩展 |
| 校验和 | 1 | sum%256 | — |

**代码实现逻辑**（从反汇编分析）：
\`\`\`c
// tuya_send_to_lock_get_battery_info() 核心逻辑：
UCHAR_T data[0x20];
memset(data, 0xFF, 0x20);   // 全部填充FF
data[0] = 0x00;              // 类型 = 电池电量
tfm_data_frame_send_direct(handle, 0xD7, data, 0x20);  // 发送D7命令
\`\`\`

### 3.3 响应帧格式（锁板 → BK7258）

| 字段 | 长度(byte) | 值 | 说明 |
|------|-----------|-----|------|
| 帧头 | 2 | 0x55AA | — |
| 版本 | 1 | 0x00 | — |
| 命令字 | 1 | 0xD7 | TY_GET_LOCK_INFO_CMD |
| 数据长度 | 2 | 0x0020 | 32字节 |
| 类型 | 1 | 0x00 | 电池电量 |
| 数据 | 31 | 见下方 | 电池电量数据+保留 |
| 校验和 | 1 | sum%256 | — |

### 3.4 响应数据域结构

| 偏移 | 长度 | 字段 | 说明 |
|------|------|------|------|
| 0 | 1 | 类型 | 0x00 = 电池电量 (\`LOCK_INFO_BATTERY\`) |
| 1 | 1 | 干电池电量 | 0x00~0x64 (0-100%), 0xFF表示无效 |
| 2 | 1 | 锂电池电量 | 0x00~0x64 (0-100%), 0xFF表示无效 |
| 3-31 | 29 | 保留 | 预留扩展，填充FF |

**代码处理逻辑**（从反汇编分析）：
\`\`\`c
// ty_uart_get_lock_info_cmd() 核心逻辑：
void ty_uart_get_lock_info_cmd(uint8_t* data, int len) {
    TY_CMD_S cmd;
    parse_ty_cmd(data, len, &cmd);
    
    uint8_t* pdata = cmd.data;
    
    if (pdata[0] == 0x00) {  // 类型 = 电池电量
        // 干电池电量 (偏移1)
        if (pdata[1] != 0xFF) {
            tuya_set_battery_dry_info(pdata[1]);
        }
        // 锂电池电量 (偏移2)
        if (pdata[2] != 0xFF) {
            tuya_set_battery_lithium_info(pdata[2]);
        }
    }
    
    PR_INFO("batteryInfo dry:%d, lithium:%d", pdata[1], pdata[2]);
}
\`\`\`

### 3.5 电池类型

| 代码符号 | 含义 |
|---------|------|
| \`BATTERY_TYPE_DRY\` | 干电池 |
| \`BATTERY_TYPE_LITHIUM\` | 锂电池 |
| \`BATTERY_TYPE_MAX\` | — |

### 3.6 查询类型扩展

| 代码符号 | 含义 | 备注 |
|---------|------|------|
| \`LOCK_INFO_BATTERY\` | 电池电量 | 当前已实现 |
| \`LOCK_INFO_MAX\` | — | 预留扩展标志 |

### 3.7 电池数据使用

电池信息获取后，在应用层用于：
- LCD OSD电池电量显示 (\`tuya_lcd_osd_set_battery_info\`)
- 低电量告警语音播放 (\`AI_TOY_FILE_ZH_LOW_BATTERY\`)

\`\`\`c
// tuya_button_app.c 中使用电池信息进行LCD显示
if (tuya_get_battery_dry_info() != -1 && tuya_get_battery_lithium_info() != -1) {
    cfg.data[0] = TKL_BATTERY_DUAL;      // 双电池
    cfg.data[1] = tuya_get_battery_dry_info();
    cfg.data[2] = tuya_get_battery_lithium_info();
} else if (tuya_get_battery_dry_info() != -1) {
    cfg.data[0] = TKL_BATTERT_DRY;       // 仅干电池
    cfg.data[1] = tuya_get_battery_dry_info();
} else if (tuya_get_battery_lithium_info() != -1) {
    cfg.data[0] = TKL_BATTERY_LITHIUM;   // 仅锂电池
    cfg.data[1] = tuya_get_battery_lithium_info();
}
\`\`\`

### 3.8 查询频率控制

\`tuya_send_to_lock_get_battery_info(BOOL_T force)\` 内部有时间间隔保护：
- 默认间隔约30秒 (0x7500 + 0x30 = 30000ms)
- \`force = TRUE\` 时跳过间隔限制，立即查询
- \`tuya_send_to_lock_get_info()\` 内部调用 \`tuya_send_to_lock_get_battery_info(FALSE)\`

### 3.9 参考示例

> 帧格式：\`55 AA\` + 版本(\`00\`) + 命令字(\`D7\`) + 数据长度(\`00 20\`) + 32字节数据域 + 校验和

#### 3.9.1 查询电池电量（BK7258模组 → 锁板MCU）

\`\`\`
55 AA 00 D7 00 20 00 FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF D7
\`\`\`
| 字段 | 值 | 含义 |
|------|-----|------|
| 帧头 | 55 AA | — |
| 版本 | 00 | — |
| 命令字 | D7 | TY_GET_LOCK_INFO_CMD |
| 数据长度 | 00 20 | 32字节 |
| 类型(data[0]) | 0x00 | 电池电量查询 |
| data[1]~data[31] | 0xFF | 保留，填充FF |
| 校验和 | 0xD7 | (55+AA+00+D7+00+20+00+FF×31) % 256 |

#### 3.9.2 锁板回复-干电池85%无锂电池（锁板MCU → BK7258模组）

\`\`\`
55 AA 00 D7 00 20 00 55 FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF 2D
\`\`\`
| 字段 | 值 | 含义 |
|------|-----|------|
| 帧头 | 55 AA | — |
| 版本 | 00 | — |
| 命令字 | D7 | TY_GET_LOCK_INFO_CMD |
| 数据长度 | 00 20 | 32字节 |
| 类型(data[0]) | 0x00 | 电池电量 |
| 干电池电量(data[1]) | 0x55 | **85%** (0x55 = 85) |
| 锂电池电量(data[2]) | 0xFF | **无锂电池**（0xFF表示无效/不存在） |
| data[3]~data[31] | 0xFF | 保留 |
| 校验和 | 0x2D | (55+AA+00+D7+00+20+00+55+FF×30) % 256 |

**代码处理**：收到此帧后，\`ty_uart_get_lock_info_cmd()\` 会：
- \`pdata[1]=0x55 != 0xFF\` → 调用 \`tuya_set_battery_dry_info(85)\`
- \`pdata[2]=0xFF\` → 跳过锂电池设置

#### 3.9.3 锁板回复-干电池50%+锂电池80%（锁板MCU → BK7258模组）

\`\`\`
55 AA 00 D7 00 20 00 32 50 FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF 5B
\`\`\`
| 字段 | 值 | 含义 |
|------|-----|------|
| 类型(data[0]) | 0x00 | 电池电量 |
| 干电池电量(data[1]) | 0x32 | **50%** (0x32 = 50) |
| 锂电池电量(data[2]) | 0x50 | **80%** (0x50 = 80) |
| 校验和 | 0x5B | |

**代码处理**：
- \`tuya_set_battery_dry_info(50)\` → LCD显示双电池模式
- \`tuya_set_battery_lithium_info(80)\`

#### 3.9.4 锁板回复-仅锂电池100%（锁板MCU → BK7258模组）

\`\`\`
55 AA 00 D7 00 20 00 FF 64 FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF 3C
\`\`\`
| 字段 | 值 | 含义 |
|------|-----|------|
| 类型(data[0]) | 0x00 | 电池电量 |
| 干电池电量(data[1]) | 0xFF | **无干电池** |
| 锂电池电量(data[2]) | 0x64 | **100%** (0x64 = 100) |
| 校验和 | 0x3C | |

#### 3.9.5 锁板回复-电池电量为0（低电量告警场景）

\`\`\`
55 AA 00 D7 00 20 00 00 FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF D8
\`\`\`
| 字段 | 值 | 含义 |
|------|-----|------|
| 类型(data[0]) | 0x00 | 电池电量 |
| 干电池电量(data[1]) | 0x00 | **0%**（触发低电量告警） |
| 锂电池电量(data[2]) | 0xFF | 无锂电池 |
| 校验和 | 0xD8 | |

**代码处理**：电量为0时，应用层会触发低电量告警语音 \`AI_TOY_FILE_ZH_LOW_BATTERY\`

---

## 四、0xD6 与 0xD7 信息查询的关联

当锁板通过0xD6命令下发 \`event_type=0x05(信息查询)\` + \`event_info=0x00(电量)\` 时，
BK7258模组会在 \`event_process\` 字段回填已缓存的电池电量值（通过0xD7命令预先获取）。

### 信息查询联动关系

\`\`\`
┌─────────────────────────────────────────────────────────────────┐
│                    电量查询流程                                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  BK7258                            锁板MCU                       │
│    │                                  │                          │
│    │──── 0xD7 查询电池电量 ────────────→│                          │
│    │                                  │                          │
│    │←─── 0xD7 回复(dry/lithium) ──────│                          │
│    │     (tuya_set_battery_xxx_info)  │                          │
│    │                                  │                          │
│  ... (缓存电池电量) ...               │                          │
│    │                                  │                          │
│    │←─── 0xD6 信息查询(电量) ─────────│  event_type=0x05         │
│    │                                  │  event_info=0x00         │
│    │                                  │                          │
│    │──── 0xD6 回复(event_process=电量)→│                          │
│    │     (从缓存读取)                 │                          │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
\`\`\`

---

## 五、BK7258与锁控和离线语音芯片交互流程

\`\`\`
有人触摸键盘 → 锁板被唤醒 → 是否配网？
                                 │
                     ┌───────────┴───────────┐
                     ↓ 是                     ↓ 否
              是否具备离线语音芯片？         (不处理)
                     │
           ┌─────────┴─────────┐
           ↓ 否                 ↓ 是
    发送03/04指令触发         离线语音芯片
    BK7258进入mic采集        mic采集
           │                    │
    tuya唤醒词唤醒           第三方唤醒词唤醒
    BK7258语音,播放"我在"    离线语音芯片
           │                    │
    BK7258内部处理流程       设备是否联网？
                                │
                     ┌──────────┴──────────┐
                     ↓ 是                   ↓ 否
              发送01/02指令触发          离线语音芯片
              BK7258直接聊天,播放"我在"   接管
\`\`\`

---

## 六、代码关键文件索引

| 文件 | 作用 |
|------|------|
| \`include/.../tbl_common_cmd_def.h\` | 命令字枚举定义 (0xD6, 0xD7) |
| \`include/.../tbl_lock_protocol.h\` | 帧结构定义 (TY_FRAME_S)，发送/解析函数声明 |
| \`include/.../tbl_common_ai_lock.h\` | AI控制数据结构 (tLOCK_AI_INFO)，AI消息队列接口 |
| \`include/.../tbl_lock_audio_msg.h\` | 音频播放接口 (留言/天气) |
| \`.../tuya_stream.h\` | AI初始化状态枚举 (AI_INIT_STATE_TYPE) |
| \`.../tuya_func_config.h\` | Speaker设备枚举 (TUYA_AI_SPEAKER_DEV_E) |
| \`.../tuya_stream.c\` | AI初始化/反初始化逻辑，speaker切换 |
| \`.../tuya_device.c\` | AI lock模块初始化入口 |
| \`.../tuya_button_app.c\` | 电池信息LCD显示 |
| \`libs/libtuyaapp_components.a\` | 预编译库(含 ty_uart_ai_control_cmd, ty_uart_get_lock_info_cmd 等) |

---

## 七、注意事项

1. **字节序**：帧头(0x55AA)、数据长度、audio_id、user_num均为**大端序**（高字节在前）。
2. **校验和**：从帧头第一个字节(0x55)开始，到校验和字段前一个字节为止，逐字节累加后对256取余。
3. **保留字段**：所有保留字段必须填充0xFF，不可填0x00。
4. **事件过程字段**：锁板下发时默认填0xFF，BK7258回复时填写实际状态值。
5. **电池值0xFF**：表示该电池类型不存在/无效，代码中会跳过设置。
6. **查询间隔**：0xD7电池查询有30秒防抖保护，避免频繁查询。
7. **speak_choose字段**：为代码新增扩展字段，协议PDF中未明确标注，占用原保留区第1字节。`
  },
];

// FAQ数据
export const faqs = [
  {
    id: 'faq-wifi-001',
    category: 'wifi',
    question: '设备配网总是失败怎么办？',
    answer: '配网失败TOP5原因：1) 路由器是5GHz频段（需切2.4GHz）；2) WiFi密码含特殊字符；3) 路由器连接设备数满；4) 手机APP未开启位置权限；5) 设备未正确进入配网模式（长按重置键5秒）。建议逐一排查。',
    tags: ['WiFi', '配网'],
    hot: true,
  },
  {
    id: 'faq-wifi-002',
    category: 'wifi',
    question: '设备频繁掉线怎么处理？',
    answer: '常见原因：1) 路由器信号弱（加装信号放大器）；2) 路由器DHCP租期太短；3) 设备距离路由器过远或有墙体阻隔；4) 路由器连接数超载。解决方案：确保设备处信号>-70dBm，设置固定IP，路由器负载控制在20台以内。',
    tags: ['WiFi', '掉线', '稳定性'],
    hot: true,
  },
  {
    id: 'faq-wifi-003',
    category: 'wifi',
    question: '量产时授权码怎么购买和管理？',
    answer: '登录涂鸦IoT平台 → 购买中心 → 选择授权码类型和数量。小批量可直接在线购买，大批量（1万+）联系涂鸦商务谈价。授权码一经激活不可退换，建议按订单量分批购买，避免浪费。',
    tags: ['WiFi', '授权码', '量产'],
    hot: false,
  },
  {
    id: 'faq-ble-001',
    category: 'ble',
    question: 'BLE设备电池只能用几个月就没电了？',
    answer: '功耗优化要点：1) 检查广播间隔是否设置过短（建议1000ms以上）；2) 确认深度休眠是否正常进入；3) 排查硬件漏电（LDO、传感器待机电流）；4) LED指示灯是否频繁闪烁。优化后CR2032电池可用1-2年。',
    tags: ['BLE', '功耗', '电池'],
    hot: true,
  },
  {
    id: 'faq-ble-002',
    category: 'ble',
    question: 'BLE设备手机搜索不到怎么办？',
    answer: '排查步骤：1) 确认设备已上电且进入广播状态（看LED指示）；2) 手机蓝牙是否开启；3) 手机APP位置权限是否开启（Android必须）；4) 设备是否已被其他手机连接（BLE一对一）；5) 尝试重启设备和手机蓝牙。',
    tags: ['BLE', '配网', '搜索'],
    hot: false,
  },
  {
    id: 'faq-ble-003',
    category: 'ble',
    question: 'BLE门锁远程开锁如何实现？',
    answer: 'BLE门锁本身不支持远程控制，需搭配蓝牙网关。方案：门锁BLE连接网关 → 网关WiFi连云 → 手机通过云远程下发开锁。网关覆盖范围约10-15米，安装在门锁附近即可。涂鸦有成品网关可直接采购。',
    tags: ['BLE', '门锁', '远程控制'],
    hot: true,
  },
  {
    id: 'faq-zigbee-001',
    category: 'zigbee',
    question: 'Zigbee设备入网失败怎么排查？',
    answer: '排查清单：1) 网关是否处于允许入网状态（开放配对模式）；2) 设备是否恢复出厂设置后重试；3) 网关子设备数是否已满（通常限128个）；4) 设备与网关距离是否过远；5) 是否有Zigbee信道干扰（避开WiFi 2.4G重叠信道）。',
    tags: ['Zigbee', '入网', '配网'],
    hot: true,
  },
  {
    id: 'faq-zigbee-002',
    category: 'zigbee',
    question: 'Zigbee设备老是掉网重连？',
    answer: '常见原因：1) 路由节点（如灯/插座）断电导致网络拓扑变化；2) 信道干扰严重；3) 设备距离网关过远且中间无Router中继。解决：确保Router设备持续供电、合理布局Router节点、更换Zigbee信道避开干扰。',
    tags: ['Zigbee', '掉网', '稳定性'],
    hot: false,
  },
  {
    id: 'faq-production-001',
    category: 'wifi',
    question: '产测热点扫不到怎么办？',
    answer: '确认事项：1) 产测路由器SSID必须是 tuya_mdev_test1（老化）或 tuya_mdev_test2（整机）；2) 路由器信道必须固定为6；3) 频段必须是2.4GHz；4) 路由器距离设备1米内；5) 设备固件已正确烧录且包含产测功能代码。',
    tags: ['产测', '量产', '路由器'],
    hot: true,
  },
];
