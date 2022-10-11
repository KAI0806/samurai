import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document{
    render(){
        return(
            <Html lang="ja" prefix="og:http://ogp.me/ns# fb:http://ogp.me/ns/fb# website:http://ogp.me/ns/website#">
                <Head>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>

                    <meta name="description" content="" />
                    <meta property="og:locale" content="ja_JP" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="" />
                    <meta property="og:description" content="" />
                    <meta property="og:url" content="index.html" />
                    <meta property="og:site_name" content="" />
                    <meta property="og:image" content="" />
                    <meta property="og:image:secure_url" content="" />
                    <meta property="og:image:width" content="1200" />
                    <meta property="og:image:height" content="630" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:description" content="" />
                    <meta name="twitter:title" content="" />
                    <meta name="twitter:image" content="" />
                </Head>
                
                <body onClick="">
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        );
    }
}
export default MyDocument;