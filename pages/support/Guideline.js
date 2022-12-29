import Head from "next/head";
import Link from "next/link";
import { Center, Flex } from "@chakra-ui/react";
import styles from '../../styles/Guideline.module.css'
import Supports from "../../components/Supports";
import { motion } from "framer-motion";


export default function Guideline(){
    return (
        <>
            <Head>
                <title>ブランドガイドライン｜サムライエナジー</title>
                <meta property="og:type" content="article" />
                <meta property="og:title" content="ブランドガイドライン｜サムライエナジー" />
                <meta property="og:site_name" content="ブランドガイドライン｜サムライエナジー" />
                <meta name="twitter:title" content="ブランドガイドライン｜サムライエナジー" />
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
                    <p>ブランドガイドライン</p>
                </Flex>

                <Center as="section" className={styles.guideline}>
                    <div className={styles.wrap}>
                        <h1>ブランドガイドライン</h1>

                        <div>
                            <h2>広告・販促・告知物等におけるサムライエナジー関連素材のご利用に関して</h2>
                            <p>
                                サムライエナジーおよびサムライエナジー関連サービスのロゴ・アイコン・シンボルなどは、株式会社ジャパンエナジーの権利物です。<br/>
                                ジャパンエナジーおよびジャパンエナジー関連サービスのロゴ・アイコン・シンボルなどを使用する場合は「ロゴガイドライン」および「広告・販促・告知物におけるジャパンエナジー関連素材使用についてのガイドライン」を遵守の上ご利用ください。
                            </p>
                        </div>

                        {/* <Link href='' passHref>
                            <motion.a
                                whileHover={{textDecoration: 'none'}}>ガイドラインはこちら（PDF）</motion.a>
                        </Link> */}
                    </div>
                </Center>

                <Supports/>
            </motion.main>
        </>
    );
}