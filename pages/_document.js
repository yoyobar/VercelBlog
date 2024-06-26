import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang='ko'>
                <Head>
                    <link rel='apple-touch-icon' sizes='180x180' href='favicon/apple-touch-icon.png' />
                    <link rel='icon' type='image/png' sizes='32x32' href='favicon/favicon-32x32.png' />
                    <link rel='icon' type='image/png' sizes='16x16' href='favicon/favicon-16x16.png' />
                    <meta name='msapplication-TileColor' content='#da532c' />
                    <meta name='theme-color' content='#ffffff' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
