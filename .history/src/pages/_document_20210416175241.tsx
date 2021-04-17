import Document, {
  Html,
  Main,
  NextScript,
  DocumentContext,
  Head,
} from 'next/document'

import { globalSelf } from '@scripts/utils'
import Mycanvas from '../components/layout/Mycanans'

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
          <Mycanvas/>
          {/* <Main {...this.props} />
          <NextScript /> */}
        </body>
        <script src={`${publicPath}canvasStar.js`}></script>
        <script type="text/javascript">
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
