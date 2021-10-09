import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
                    <title>Kirill Gladkov</title>
                </Head>
                <body className="bg-white dark:bg-gray-800 transition-colors duration-100 ease-linear">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
