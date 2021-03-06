module.exports = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      const { isServer } = options
      nextConfig = Object.assign(
        { inlineImageLimit: 8192, assetPrefix: '' },
        nextConfig
      )

      if (!options.defaultLoaders) {
        throw new Error(
          'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade'
        )
      }

      //ref:https://github.com/zeit/next-plugins/issues/273
      //ref:https://github.com/akiran/react-slick/issues/842
      config.module.rules.push({
        test: /\.(jpe?g|png|svg|gif|ico|webp|jp2)$/,
        //tips:开启会导致 Error: Module parse failed: Unexpected character '�' (1:0)问题
        // issuer: {
        //   // Next.js already handles url() in css/sass/scss files
        //   test: /\.\w+(?<!(s?c|sa)ss)$/i,
        // },
        exclude: nextConfig.exclude,
        use: [
          {
            loader: require.resolve('url-loader'),
            options: {
              limit: nextConfig.inlineImageLimit,
              fallback: require.resolve('file-loader'),
              publicPath: `${nextConfig.assetPrefix}/_next/static/images/`,
              outputPath: `${isServer ? '../' : ''}static/images/`,
              name: '[name]-[hash].[ext]',
              esModule: nextConfig.esModule || false,
            },
          },
        ],
      })

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }

      return config
    },
  })
}
