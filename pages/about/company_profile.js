import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import { Center, Flex, Image } from "@chakra-ui/react";
import styles from '../../styles/CompanyProfile.module.css'

export default function CompanyProfile(){
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
                        <Link href='/about/' passHref>
                            <motion.a
                                whileHover={{color: '#333333'}}>ABOUT</motion.a>
                        </Link>
                        <p>＞</p>
                        <p>COMPANY PROFILE</p>
                    </Flex>
                </Center>
                
                <Center className={styles.companyprofile}>
                    <div className={styles.left}>
                        <h2>
                            会社概要<br/>
                            <small>COMPANY PROFILE</small>
                        </h2>

                        <Image className="pc_only" src="/images/about/company.webp" alt="会社概要" width='100%' height='auto'/>
                        <Image className="sp_only" src="/images/about/company_sp.webp" alt="会社概要" width='100%' height='auto'/>
                    </div>

                    <div className={styles.right}>
                        <Flex>
                            <h3>会社名</h3>
                            <p>ジャパンエナジー<br className="sp_only"/>株式会社</p>
                        </Flex>

                        <Flex>
                            <h3>所在地</h3>
                            <p>〒160-0023 <br className="sp_only"/>東京都新宿区<br className="sp_only"/>西新宿7-22-33 <br className="sp_only"/>Polar西新宿 5F</p>
                        </Flex>

                        <Flex>
                            <h3>代表者</h3>
                            <p>石田 瑛一郎</p>
                        </Flex>

                        <Flex>
                            <h3>会社設立</h3>
                            <p>2022年8月</p>
                        </Flex>

                        <Flex>
                            <h3>電話番号</h3>
                            <p>03-6822-2050</p>
                        </Flex>
                    </div>
                </Center>

                <Center className={styles.about}>
                    <Image src="/images/about/company.svg" alt="ジャパンエナジー株式会社" width='27%' height='auto'/>
                    
                    <Center className={styles.right}>
                        <p>ブランドアイデンティティ、<br className="sp_only"/>運営会社詳細はこちら</p>
                        <Link href='/about/' passHref>
                            <a className='btn white_btn'>VIEW MORE<span></span></a>
                        </Link>
                    </Center>
                </Center>

            </motion.main>
        </>
    );
}