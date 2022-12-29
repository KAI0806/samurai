import Head from "next/head";
import { Flex, Center } from "@chakra-ui/react";
import styles from '../../styles/faq.module.css'
import Link from "next/link";
import Supports from "../../components/Supports"
import { motion } from "framer-motion";

export default function Faq(){
    return (
        <>
            <Head>
                <title>よくある質問｜サムライエナジー</title>
                <meta property="og:type" content="article" />
                <meta property="og:title" content="よくある質問｜サムライエナジー" />
                <meta property="og:site_name" content="よくある質問｜サムライエナジー" />
                <meta name="twitter:title" content="よくある質問｜サムライエナジー" />
            </Head>

            <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            >
                <Flex className={styles.topicPath}>
                    <Link href='/' passHref>
                        <motion.a
                            whileHover={{color: '#333333'}}>HOME</motion.a>
                    </Link>
                    <p>＞</p>
                    <Link href='/support' passHref>
                        <motion.a
                            whileHover={{color: '#333333'}}>SUPPORT</motion.a>
                    </Link>
                    <p>＞</p>
                    <p>お問合せ</p>
                </Flex>

                <Center as="section" className={styles.faq}>
                    <div className={styles.wrap}>
                        <h1>よくある質問</h1>

                        <Flex className={styles.anchor}>
                            <Link href='#q1' passHref>
                                <a>#サムライエナジーについて</a>
                            </Link>

                            <Link href='#q2' passHref>
                                <a>#運営会社について</a>
                            </Link>

                            <Link href='#q3' passHref>
                                <a>#その他について</a>
                            </Link>
                        </Flex>

                        <div id="q1" className={styles.content}>
                            <h2>サムライエナジーについて</h2>

                            <Flex className={styles.que}>
                                <p>Q</p>
                                <p>どこの店舗で購入することができますか？</p>
                            </Flex>
                            <Flex className={styles.ans}>
                                <p>A</p>
                                <p>全国のドン・キホーテ、ファミリーマートにて購入が可能です。</p>
                            </Flex>
                            <Flex className={styles.que}>
                                <p>Q</p>
                                <p>炭酸の強さや味について教えてください。</p>
                            </Flex>
                            <Flex className={styles.ans}>
                                <p>A</p>
                                <p>テイストは「レッドブル」に近く、炭酸は「モンスターエナジー」に近いです。</p>
                            </Flex>
                        </div>

                        <div id="q2" className={styles.content}>
                            <h2>運営会社について</h2>

                            <Flex className={styles.que}>
                                <p>Q</p>
                                <p>サムライエナジーの運営会社（販売元）はどこですか？</p>
                            </Flex>
                            <Flex className={styles.ans}>
                                <p>A</p>
                                <p>ジャパンエナジー株式会社が運営会社になります。<Link href='../about' passHref><a>詳しくはこちら</a></Link></p>
                            </Flex>
                            <Flex className={styles.que}>
                                <p>Q</p>
                                <p>運営会社はエナジードリンクの開発を専門に行っていますか？</p>
                            </Flex>
                            <Flex className={styles.ans}>
                                <p>A</p>
                                <p>はい「日本を元気に！活力を取り戻す！」を企業方針とし国産エナジードリンクの開発を一弾目として展開しております。</p>
                            </Flex>
                        </div>

                        <div id="q3" className={styles.content}>
                            <h2>その他について</h2>

                            <Flex className={styles.que}>
                                <p>Q</p>
                                <p>サムライエナジーを当社で取り扱いたいのですが、連絡はどちらへお送りすればいいですか？</p>
                            </Flex>
                            <Flex className={styles.ans}>
                                <p>A</p>
                                <p>お問合せフォームが代表直通の連絡となります。<Link href='../contact' passHref><motion.a whileHover={{textDecoration: 'none'}}>こちらからお問合せください</motion.a></Link></p>
                            </Flex>
                        </div>
                    </div>
                </Center>

                <Supports/>
            </motion.main>
        </>
    );
}