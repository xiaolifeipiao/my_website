const imgPath = 'works/'

const pcYxtdimgSrc = `${imgPath}yxtd/`,
  pcHzimgSrc = `${imgPath}latest/`,
  pcXjimgSrc = `${imgPath}xunjie/`,
  pcRzltimgSrc = `${imgPath}rzlt/`,
  wapimgSrc = `${imgPath}wap/`,
  appimgSrc = `${imgPath}applets/`,
  webAppimgSrc = `${imgPath}webapp/`,
  qrcodeimgSrc = `${imgPath}qrcode/`

const latest = [
  {
    imgSrc: pcHzimgSrc + '1.jpg',
    title: '任务管理信息系统',
    links: 'http://wonfull2020.hz9981.com/',
    desc:
      '具有上传(下发)制度，分配任务，事项办理，创建会议等功能，跨部门之间可以相互协作办公， 可以掌握每个部门、每个员工的工作进度和执行情况。',
    category: '企业服务',
  }
]

const applets = [
  {
    imgSrc: appimgSrc + '1.jpg',
    title: '趣点匣子',
    searchKeyword: '趣点匣子',
    desc:
      '趣点匣子产品分为女生舱、男生舱和混合舱三种，健身用户通过自身的定位选择附近的仓体，根据所提供的时间段进行预约充值健身。',
    txtdetails: '趣点匣子',
    category: '小程序',
  },
]

const pc = [
  {
    imgSrc: pcRzltimgSrc + '1.jpg',
    title: '人在旅途OA系统',
    links: 'http://oa.zgrzlt.com/',
    desc:
      '办公系统方便员工进行企业内部资料下载，了解公司组织架构及最新动态，发布的公告消息同步到公司每一个员工使用的钉钉客户端。',
    txtdetails: '人在旅途OA系统（官网地址：http://oa.zgrzlt.com/）',
    category: '办公',
  },
  {
    imgSrc: pcYxtdimgSrc + '15.jpg',
    title: '陈设艺术协会',
    links: 'http://www.szchenshe.com/',
    txtdetails: '陈设艺术协会（官网地址：http://www.szchenshe.com/）',
    category: '企业官网',
  }
]

const wap = [
  {
    imgSrc: wapimgSrc + '1.jpg',
    title: '白狐工业设计公司',
    qrcodeImg: qrcodeimgSrc + '1.png',
    txtdetails: '白狐工业设计公司',
    category: '企业官网',
  },
  {
    imgSrc: wapimgSrc + '2.jpg',
    title: '君威国际货运代理有限公司',
    qrcodeImg: qrcodeimgSrc + '2.png',
    txtdetails: '君威国际货运代理有限公司',
    category: '企业官网',
  },
  {
    imgSrc: wapimgSrc + '3.jpg',
    title: '中力泰富科技有限公司',
    qrcodeImg: qrcodeimgSrc + '3.png',
    txtdetails: '中力泰富科技有限公司',
    category: '企业官网',
  },
]

const webApp = [
  {
    imgSrc: webAppimgSrc + '1.jpg',
    title: '百物街直播',
    qrcodeImg: qrcodeimgSrc + '4.png',
    txtdetails: '直播与夺宝相结合的新型购物平台',
    category: '移动网页',
    desc:
      '直播与夺宝相结合的新型购物平台。视频在线播放，可以与主播互动聊天，赠送礼物，参与抽奖，查看最新揭晓期数及消息动态，微信登录、充值，可在平台下单购买心仪的商品。',
  },
  {
    imgSrc: webAppimgSrc + '2.jpg',
    title: 'React版cnode社区',
    qrcodeImg: qrcodeimgSrc + '5.png',
    txtdetails: 'React版cnode社区',
    category: '移动网页',
    desc: '登录、登出、发表话题、个人消息、评论、点赞帖子、查看用户资料',
  },
  {
    imgSrc: webAppimgSrc + '3.jpg',
    title: '豆子娱乐',
    qrcodeImg: qrcodeimgSrc + '6.png',
    txtdetails: '通过猜大猜小来确定输赢的游戏',
    category: '移动网页',
    desc:
      '通过猜大猜小来确定输赢的游戏，竞猜对象选择猜大猜小后，充值1元所获取的微信支付“交易单号”的尾数大小来判定，手机号获取验证码进行登录，微信充值、提现，最新盈利播报，用户操作明细，代理赚钱，领取红包。',
  },
]

export default {
  latest: {
    data: latest,
    title: '最新',
  },
  applets: {
    data: applets,
    title: '小程序',
  },
  wap: {
    data: wap,
    title: '移动端网页',
  },
  webApp: {
    data: webApp,
    title: 'WebApp',
  },
  pc: {
    data: pc,
    title: 'PC端网站',
    isHot: true,
  },
}
