import Head from 'next/head'
import { globalSelf } from '@scripts/utils'

const { name, publicPath } = globalSelf.g_config

export interface INextHeadProps {
  title?: string
}

const NextHead: React.FC<INextHeadProps> = ({ title = name }) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1,maximum-scale=1, user-scalable=no"
      />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
      <meta
        name="keywords"
        content="小李飞漂,web前端,前端工程师,简历,web前端个人简历,前端开发,前端简历,最新简历,前端博客,热前端,设计,FE,github,求职,liuguanhua.github.io,lgh.vercel.app,liuguanhua,react,vue"
      />
      <meta
        name="description"
        content="对前端有着高度关注并疯狂热爱的开发人员"
      />
      <meta name="author" content="小李飞漂,前端,简历" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <link
        href={`${publicPath}static/css/bootstrap-grid.min.css`}
        rel="stylesheet"
      ></link>
      <script src={`${publicPath}canvasStar.js`} ></script>
      <script>
        {
            `
            new CanvasStar().init(); 
           `
      }
      </script>
    </Head>
  )
}

export default NextHead
