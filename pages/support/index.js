import Head from "next/head";
import { Center, Flex } from '@chakra-ui/react'
import styles from '../../styles/Support.module.css'
import Link from "next/link";
import Supports from "../../components/Supports";
import { motion } from "framer-motion";


export default function Support(){
    return (
        <>
            <Head>
                <title>サポート｜サムライエナジー</title>
                <meta property="og:type" content="article" />
                <meta property="og:title" content="サポート｜サムライエナジー" />
                <meta property="og:site_name" content="サポート｜サムライエナジー" />
                <meta name="twitter:title" content="サポート｜サムライエナジー" />
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
                            サポート<br/>
                            <small>SUPPORT</small>
                        </h1>
                    </Center>

                    <Flex className={styles.topicPath}>
                        <Link href='/' passHref>
                            <motion.a
                                whileHover={{color: '#333333'}}>HOME</motion.a>
                        </Link>
                        <p>＞</p>
                        <p>SUPPORT</p>
                    </Flex>

                    <p>サポート情報各種は<br className="sp_only"/>こちらからご覧いただけます</p>
                </Center>

                <Supports/>
            </motion.main>
        </>
    );
}