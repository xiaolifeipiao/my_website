;(function (self, factory) {
  self.g_config = factory()
})(global || window || {}, function () {
  const isProd = process.env.NODE_ENV === 'production'
  // const visitPath = 'https://liuguanhua.github.io/'
  // const visitPath = 'http://localhost:8000/'
  const visitPath = './'
  // const visitPath = '/'
  const publicPath = isProd ? visitPath : '/'
  return {
    name: '小李飞漂|个人简历|前端工程师',
    logo: publicPath + 'static/logo.png',
    isProd,
    publicPath,
  }
})
