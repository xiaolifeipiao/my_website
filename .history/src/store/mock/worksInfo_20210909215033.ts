const imgPath = 'works/'

const pcYxtdimgSrc = `${imgPath}yxtd/`,
  pcHzimgSrc = `${imgPath}latest/`,
  pcRzltimgSrc = `${imgPath}rzlt/`,
  wapimgSrc = `${imgPath}wap/`,
  appimgSrc = `${imgPath}applets/`,
  webAppimgSrc = `${imgPath}webapp/`,
  qrcodeimgSrc = `${imgPath}qrcode/`

const latest = [
  {
    imgSrc: pcHzimgSrc + '1.png',
    title: '',
    links: 'https://github.com/zangxiyang/CQUT-party-bigdata',
    desc:
      '该项目为人工智能学院打造党员管理的高效化，以加强党员教育为目的，并且结合各级党政机关部门的实际情况，依托互联网、可视化、数据交互、协助等多方面建设的“智慧党建平台”系统。可实现党员学习监管、网上学习、党建信息汇集等功能，为党建事业提供坚强的组织保证。主要功能包括：党总支大屏，支部大屏，组织架构，党务工作，三会一课，党日活动，学习培训，支部发展，政治生日，党员发展等功能 。',
    category: '学校服务',
  }
]

const applets = [
  {
    imgSrc: appimgSrc + '1.jpg',
    title: '趣点匣子',
    links:'https://github.com/xiaolifeipiao/club',
    searchKeyword: '趣点匣子',
    desc:
      '趣点匣子产品分为女生舱、男生舱和混合舱三种，健身用户通过自身的定位选择附近的仓体，根据所提供的时间段进行预约充值健身。',
    txtdetails: '趣点匣子',
    category: '小程序',
  },
]

const pc = [
  {
    imgSrc: pcYxtdimgSrc + '1.png',
    title: '智慧党建平台',
    links: 'https://github.com/zangxiyang/CQUT-smartparty-front',
    txtdetails: '智慧党建平台',
    category: '学习服务',
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
  }
]

const webApp = [
  {
    imgSrc: webAppimgSrc + '2.png',
    title: '',
    links:'https://github.com/xiaolifeipiao/carclub_front',
    txtdetails: '懂车帝车型大会',
    category: '移动网页',
    desc:
      '通过vue3+ts+vite+vant+axios-mapper(模型+防止二次请求),项目技术选型上，我选用了最新的技术，在开发过程遇到一些问题导致开发进度受到影响，在以后的项目开发中，对于不是用来测试技术的项目，选择自己熟悉的版本，重要，重要，非常重要。在项目中虽然遇到一些瓶颈，但是我并没得放弃，而是慢慢把它细化，分而治之。在最终解决不了时，采用其他侧面的解决方案。本次项目的格式化提交做的不好，只是采用eslint+prettier进行简单的本地格式化检查和提交规范，并未加入husky、commitlint和lintstaged约束提交。后期我会加上。在mock数据的选择上，因为及时查阅vite的第三方插件mock可以使用开发和生成一起使用的mock数据。最终选择json-server+mock。导致接口部分没得完善。 在测试方面，因时间问题并没的加入测试，后期补上。在该项目的开发中，了解了mock数据的选型，以及 vite的热更新真的快 ，加强在这方面 的学习，以及对vue3全家桶和ts有了一个全新的认识，vue3的父子组件的执行和异步组件加载，以及子组件的props的只能读不能修改，vue3a父子组件的通信方式和vue2的区别，以及在vue3+ts实现vuex的分模块开发的封装等等，我需要下来在加强vue3的一些特性的学习和原理实现。最后感谢懂车帝平台给我门分享和交流前端和后端的学习，以及和我们交流一些技术和学习路线，收获颇多',
  },
  {
    imgSrc: webAppimgSrc + '1.png',
    title: '',
    links:'https://github.com/xiaolifeipiao/boss',
    txtdetails: '仿boss开发',
    category: '移动网页',
    desc:
      '通过vue2仿写boss实现',
  }
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
