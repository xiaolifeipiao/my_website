import Document, {
  Html,
  Main,
  NextScript,
  DocumentContext,
  Head,
} from 'next/document'

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
        <script src="../components/react-sticky/canvasStar.js"></script>
        <script type="javascript/js">
          {
            `
            new 
            `
          }
        </script>
      </Html>
    )
  }
}

export default CustomDocument
