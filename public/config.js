// 配置
window.Config = {

  // 显示标题
  SiteName: '服务监测',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only
  ApiKeys: [
    'ur2531205-3e8a4791331200dd4561704e',
  ],

    // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 30,

  // 是否显示检测站点的链接
  ShowLink: true,

  // 导航栏菜单
  Navi: [
    // {
     //  text: 'AI创作',
    //   url: 'https://chatfriday.cn'
    // },
   //  {
     //  text: 'AI创作-专业版',
     //  url: 'https://blog.qikaile.tk'
    // }
  ],
};
