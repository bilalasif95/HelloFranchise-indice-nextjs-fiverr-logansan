import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    return (
      <Html lang="zxx">
        <Head>
          <link 
            href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" 
            rel="stylesheet" 
          />
          <link 
            rel="icon" 
            type="image/png" 
            href="/images/favicon.png"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* Add the JavaScript snippet here */}
          <script
            id="__chat-rapidagent-Sdk__"
            src="https://widget-chat.rapidagent.ai/chat-rapidagent-sdk-v1.0.js"
            chatbotId="64d4afaeb721173c2e7679d1"
            widgetUrl="https://widget-chat.rapidagent.ai/"
          ></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument