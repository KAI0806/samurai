import { Flex, Center, Image } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import styles from '../../styles/About.module.css'
import { motion } from "framer-motion";

export default function About() {
    return (
        <>
            <Head>
                <title>企業情報｜サムライエナジー</title>
                <meta property="og:type" content="article" />
                <meta property="og:title" content="企業情報｜サムライエナジー" />
                <meta property="og:site_name" content="企業情報｜サムライエナジー" />
                <meta name="twitter:title" content="企業情報｜サムライエナジー" />
            </Head>

            <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            >
                <Center as="section" className={styles.kv}>
                    <Center className={styles.title}>
                        <h1>
                            企業情報<br/>
                            <small>ABOUT US</small>
                        </h1>
                    </Center>

                    <Flex className={styles.topicPath}>
                        <Link href='/' passHref>
                            <motion.a
                                whileHover={{color: '#333333'}}>HOME</motion.a>
                        </Link>
                        <p>＞</p>
                        <p>ABOUT</p>
                    </Flex>
                </Center>

                <Center as="section" className={styles.about}>
                    <h2 data-aos="fade-right">
                        BI<span>（ブランドアイデンティティー）</span><br/>
                        <small>BRAND IDENTITY</small>
                    </h2>

                    <Flex className={styles.wrap}>
                        <Image data-aos="zoom-in" data-aos-delay="100" src="/images/about/about.svg" alt="ブランドアイデンティティー" width='26.26%' height='auto'/>

                        <div className={styles.content}>
                            <h3 data-aos="fade-up" data-aos-delay="600">ロゴに込められた想い</h3>
                            <p data-aos="fade-up" data-aos-delay="600">数少ない国産エナジードリンクを強調するため「SAMURAI」と日本らしさを前面に出した「筆文字」によるロゴ。カラーは一般的に「サムライブルー」と言う単語が浸透していることも考慮し、ブルーをキーカラーに採用。</p>
                        </div>
                    </Flex>

                    <Link href='#company' passHref>
                        <a>SCROLL</a>
                    </Link>
                </Center>

                <Center as="section" id="company" className={styles.company}>
                    <h2 data-aos="fade-right">
                        運営会社<br/>
                        <small>COMPANY</small>
                    </h2>
                    <Center className={styles.wrap}>
                        <div className={styles.left} data-aos="fade-right">
                            <Image src="/images/about/japanEnergy.svg" alt="ジャパンエナジーのロゴ" width='' height=''/>
                            <p>ジャパンエナジー株式会社</p>
                        </div>

                        <div className={styles.right}>
                            <p data-aos="fade-up" data-aos-delay="300">
                                昨今の物価上昇など、世の中の空気や経済など「日本を元気に！活力を取り戻す！」を企業方針としリブランディング、株式会社ハイブリッドドリンクから【ジャパンエナジー株式会社】を設立第一弾として国産エナジードリンクを開発。今後は日本を元気にする商品開発やイベント企画、また大型イベントなどへのスポンサードなど、さまざまな業界との取り組みを実施予定。
                            </p>

                            <p data-aos="fade-up" data-aos-delay="600">
                                〒160-0023 東京都新宿区西新宿7-22-33 <br className="sp_only"/>Polar西新宿 5F<br/>
                                TEL 03-6822-2050<br/>
                                メールアドレス ： <br className="sp_only"/>info@japan-energy.com
                            </p>

                            <Link href='/about/company_profile/' passHref>
                                <a className='btn white_btn'>VIEW MORE<span></span></a>
                            </Link>
                        </div>
                    </Center>
                </Center>
            </motion.main>
        </>
    );
}