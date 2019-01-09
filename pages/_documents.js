import { extractCritical } from 'emotion-server';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const page = renderPage();

    const emotionCss = extractCritical(page.html);
    return {
      ...page,
      emotion: emotionCss
    };
  }

  constructor(props) {
    super(props);
    const { __NEXT_DATA__, ids } = props;
    if (ids) {
      __NEXT_DATA__.ids = ids;
    }
  }

  render() {
    return (
      <html>
        <Head>
          <meta name='viewport' content='width=device-width,initial-scale=1,shrink-to-fit=no' />
          <style id='evergreen' dangerouslySetInnerHTML={{ __html: this.props.evergreen.css }} />
          <style id='emotion' dangerouslySetInnerHTML={{ __html: this.props.emotion.css }} />
        </Head>

        <body>
          <Main />
          {this.props.evergreen.hydrationScript}
          <NextScript />
        </body>
      </html>
    );
  }
}
