import Head from "next/head";
import { Center, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";
import styles from '../../styles/News.module.css'
import { client } from "../../libs/client";
import OtherNews from "../../components/OtherNews";
import { motion } from "framer-motion";

export async function getStaticProps(){
    const infosData = await client.get({endpoint: 'news'})

    return {
        props:{
            infos: infosData.contents,
        },
    };
}
  
export function getMediaURL(media){
    const API_URL = process.env.NEXT_PUBLIC_API_URL || "" ;
    const mediaUrl = API_URL + media;
    return mediaUrl;
}

export default function News({infos}){
    return (
        <>
            <Head>
                <title>お知らせ｜サムライエナジー</title>
                <meta property="og:type" content="article" />
                <meta property="og:title" content="お知らせ｜サムライエナジー" />
                <meta property="og:site_name" content="お知らせ｜サムライエナジー" />
                <meta name="twitter:title" content="お知らせ｜サムライエナジー" />
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
                            お知らせ<br/>
                            <small>NEWS</small>
                        </h1>
                    </Center>

                    <Flex className={styles.topicPath}>
                        <Link href='/' passHref>
                            <motion.a
                                whileHover={{color: '#333333'}}>HOME</motion.a>
                        </Link>
                        <p>＞</p>
                        <p>NEWS</p>
                    </Flex>

                    <p>キャンペーン情報以外のお知らせは<br className="sp_only"/>こちらからご覧いただけます</p>
                </Center>

                <Center className={styles.news}>
                    <h2>
                        お知らせ<br/>
                        <small>NEWS</small>
                    </h2>

                    <ul>
                       {infos.map((info) => (
                        <Flex as='li' key={info.id}>
                            <Flex>
                                <p>{new Date(info.publishedAt).toLocaleDateString()}</p>
                                <span className={styles.new}>NEW</span>
                                <span>{info.tag}</span>
                            </Flex>
                            
                            <Link href={info.link} passHref>
                                <a>
                                    {info.title}
                                </a>
                            </Link>
                        </Flex>
                       ))}
                    </ul>

                    <div>
                        <OtherNews/>
                    </div>
                    
                </Center>
            </motion.main>
        </>
    );
}