import Document, {
  Html,
  Main,
  NextScript,
  DocumentContext,
  Head,
} from 'next/document'

import Mycanvas from './Mycanans'

import { globalSelf } from '@scripts/utils'

const {  publicPath } = globalSelf.g_config

class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main {...this.props} />
          <NextScript />
        </body>
        <script src={`${publicPath}canvasStar.js`}></script>
        <script type="javascript/js">
          {
            `
            new CanvasStar().init();
            `
          }
        </script>
      </Html>
    )
  }
}

export default CustomDocument
