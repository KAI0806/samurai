import Head from "next/head";
import { Center, Flex } from "@chakra-ui/react";
import Link from "next/link";
import styles from '../../styles/Alliance.module.css'
import Supports from "../../components/Supports";
import { motion } from "framer-motion";

export default function Alliance(){
    return (
        <>
            <Head>
                <title>協業・アライアンス｜サムライエナジー</title>
                <meta property="og:type" content="article" />
                <meta property="og:title" content="協業・アライアンス｜サムライエナジー" />
                <meta property="og:site_name" content="協業・アライアンス｜サムライエナジー" />
                <meta name="twitter:title" content="協業・アライアンス｜サムライエナジー" />
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
                    <p>協業・アライアンス</p>
                </Flex>

                <Center as="section" className={styles.alliance}>
                    <div className={styles.wrap}>
                        <h1>協業・アライアンス</h1>

                        <div>
                            <h2>協業の募集要項、条件について</h2>
                            <p>現在リニューアル中です。情報公開までお待ちください。<Link href='' passHref><motion.a whileHover={{textDecoration: 'none'}}>お問合せはこちらへ</motion.a></Link></p>
                        </div>

                        <div>
                            <h2>アライアンス各種</h2>
                            <p>現在リニューアル中です。情報公開までお待ちください。<Link href='' passHref><motion.a whileHover={{textDecoration: 'none'}}>お問合せはこちらへ</motion.a></Link></p>
                        </div>
                    </div>
                </Center>

                <Supports/>
            </motion.main>
        </>
    );
}