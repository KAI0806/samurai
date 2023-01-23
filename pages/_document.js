import Document, { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document{
    render(){
        return(
            <Html lang="ja" prefix="og:http://ogp.me/ns# fb:http://ogp.me/ns/fb# website:http://ogp.me/ns/website#">
                <Head>
                    <Script id="gtm" strategy="afterInteractive" dangerouslySetInnerHTML={{
                        __html:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-PN7WTNG');`,}}
                    />
                    
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>

                    <meta name="description" content="負けられないその瞬間。全力で。高品質なメイド・イン・ジャパン エナジードリンクとして、様々な商品とのコラボレーションによる豊富なラインナップ、商品開発を手がける株式会社ハイブリッドドリンクの新会社「ジャパンエナジー株式会社」です。" />
                    <meta property="og:locale" content="ja_JP" />
                    <meta property="og:description" content="負けられないその瞬間。全力で。高品質なメイド・イン・ジャパン エナジードリンクとして、様々な商品とのコラボレーションによる豊富なラインナップ、商品開発を手がける株式会社ハイブリッドドリンクの新会社「ジャパンエナジー株式会社」です。" />
                    <meta property="og:url" content="index.html" />
                    <meta property="og:image" content="/images/common/OGP.jpg" />
                    <meta property="og:image:secure_url" content="/images/common/OGP.jpg" />
                    <meta property="og:image:width" content="1200" />
                    <meta property="og:image:height" content="630" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:description" content="負けられないその瞬間。全力で。高品質なメイド・イン・ジャパン エナジードリンクとして、様々な商品とのコラボレーションによる豊富なラインナップ、商品開発を手がける株式会社ハイブリッドドリンクの新会社「ジャパンエナジー株式会社」です。" />
                    <meta name="twitter:image" content="/images/common/OGP.jpg" />

                    <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png"/>
                    <link rel="manifest" href="/images/favicon/site.webmanifest"/>
                    <link rel="mask-icon" href="/images/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
                    <link rel="shortcut icon" href="/images/favicon/favicon.ico"/>
                    <meta name="msapplication-TileColor" content="#2d89ef"/>
                    <meta name="msapplication-config" content="/images/favicon/browserconfig.xml"/>
                    <meta name="theme-color" content="#ffffff"></meta>
                </Head>
                
                <body>
                    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PN7WTNG"
                    height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        );
    }
}
export default MyDocument;