import Head from "next/head";
import { client } from "../../libs/client";
import { Flex, Center, Image } from "@chakra-ui/react";
import styles from '../../styles/Campaign.module.css'
import Link from "next/link";
import { IconContext } from "react-icons";
import { FaInstagram, FaTwitter, FaLine } from "react-icons/fa";
import { FiLink } from 'react-icons/fi'
import OtherNews from "../../components/OtherNews";
import { motion } from "framer-motion";


export default function Campaign({campaign}){
    return (
        <>
            <Head>
                <title>{campaign.title}｜お知らせ｜サムライエナジー</title>
                <meta property="og:type" content="article" />
                <meta property="og:title" content={`${campaign.title}｜お知らせ｜サムライエナジー`} />
                <meta property="og:site_name" content={`${campaign.title}｜お知らせ｜サムライエナジー`} />
                <meta name="twitter:title" content={`${campaign.title}｜お知らせ｜サムライエナジー`} />
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
                    <Link href='/news' passHref>
                        <motion.a
                            whileHover={{color: '#333333'}}>NEWS</motion.a>
                    </Link>
                    <p>＞</p>
                    <p>{campaign.title}</p>
                </Flex>

                <Center as="section" className={styles.campaign}>
                    <div className={styles.wrap}>
                        <div className={styles.title}>
                            <h1>{campaign.title}</h1>
                            <Flex className={styles.content}>
                                <div className={styles.left}>
                                    <Flex className={styles.tags}>
                                        <p className={styles.new}>NEW</p>
                                        {campaign.tag.map((value, key) =>(
                                            <p key={key}>{value}</p>
                                        ))}
                                    </Flex>
                                    <p>公開日：{new Date(campaign.publishedAt).toLocaleDateString()}　/　更新日：{new Date(campaign.updatedAt).toLocaleDateString()}</p>
                                </div>
                                
                                <Flex className={styles.right}>
                                    <p>Share</p>
                                    <Link href='/' passHref>
                                        <motion.a
                                            whileHover={{opacity: .3}}>
                                            <IconContext.Provider value={{ size: '3.6rem', color: '#113285' }}>
                                                <FaInstagram/>
                                            </IconContext.Provider>
                                        </motion.a>
                                    </Link>

                                    <Link href='/' passHref>
                                        <motion.a
                                            whileHover={{opacity: .3}}>
                                            <IconContext.Provider value={{ size: '3.6rem', color: '#113285' }}>
                                                <FaTwitter/>
                                            </IconContext.Provider>
                                        </motion.a>
                                    </Link>

                                    <Link href='/' passHref>
                                        <motion.a
                                            whileHover={{opacity: .3}}>
                                            <IconContext.Provider value={{ size: '3.6rem', color: '#113285' }}>
                                                <FaLine/>
                                            </IconContext.Provider>
                                        </motion.a>
                                    </Link>

                                    <Link href='/' passHref>
                                        <motion.a
                                            whileHover={{opacity: .3}}>
                                            <IconContext.Provider value={{ size: '3.6rem', color: '#113285' }}>
                                                <FiLink/>
                                            </IconContext.Provider>
                                        </motion.a>
                                    </Link>
                                </Flex>
                            </Flex>
                        </div>

                        <div className={styles.container}>
                            <Center className={styles.mv}>
                                <Image src={campaign.mv.url} alt={campaign.title} width='100%' height='auto'/>
                            </Center>

                            <p>
                                {campaign.description}
                            </p>
                        </div>
                    </div>
                </Center>

                {/* <Center className={styles.newCamp}>
                    <div className={styles.wrap}>
                        <h2>
                            全てのキャンペーン<br/>
                            <small>CAMPAIGN</small>
                        </h2>
                        
                        <Tabs variant='unstyled' className={styles.tabs}>
                            <TabList className={styles.tablist}>
                                {campaigns.slice(0, 5).map((campaign) => (
                                    <Tab className={styles.tab} key={campaign.id} _selected={{ opacity: 1, border: '.3rem solid #113285' }}>
                                        <Image src={campaign.Media.url} alt={campaign.title} with='auto' height='100%'/>
                                    </Tab>
                                ))}
                            </TabList>

                            <TabPanels className={styles.tabpanels}>
                                {campaigns.slice(0, 5).map((campaign) => (
                                    <TabPanel className={styles.tabpanel} key={campaign.id}>
                                        <div className={styles.left}>
                                            <Center className={styles.image}>
                                                <Image src={campaign.Media.url} alt={campaign.title} with='auto' height='100%'/>
                                            </Center>

                                            <div className={styles.txt}>
                                                <Flex>
                                                    <p>{new Date(campaign.publishedAt).toLocaleDateString()}</p>
                                                    <Flex className={styles.tags}>
                                                        <p className={styles.new}>NEW</p>
                                                        {campaign.tag.map((value, key) =>(
                                                            <p key={key}>{value}</p>
                                                        ))}
                                                    </Flex>
                                                </Flex>

                                                <p>
                                                    {campaign.subTitle > 48 ||(
                                                        campaign.subTitle.substring(0, 48)+'…'                    
                                                    )}
                                                </p>
                                            </div>
                                        </div>

                                        <Link href={`/campaign/${campaign.id}`} passHref>
                                            <a className={styles.right}>
                                                <div>
                                                    <Image src={campaign.subMedia.url} alt={campaign.title} width='auto' height='100%'/>
                                                </div>
                                                {campaign.title > 18 ||(
                                                    campaign.title.substring(0, 18)+'…'                    
                                                )}

                                                <IconContext.Provider value={{ size: '3.3rem', color: "white" }}>
                                                    <IoIosArrowDroprightCircle/>
                                                </IconContext.Provider>
                                            </a>
                                        </Link>
                                    </TabPanel>
                                ))}
                            </TabPanels>
                        </Tabs>
                    </div>
                </Center> */}
                <OtherNews/>
            </motion.main>
        </>
    );
}

export async function getStaticPaths (){
    // 外部APIエンドポイントを呼び出しデータ取得
    const data = await client.get({ endpoint: 'news' })
    const paths = data.contents.map((content) => `/news/${content.id}`)

    return { paths, fallback: false };
}

export async function getStaticProps({params, preview = false}){
    const id = params.id;
    const newsData = await client.get({endpoint: 'news', contentId: id})

    return {
        props:{
            campaign: newsData,
        },
    };
}
  
export function getMediaURL(media){
    const API_URL = process.env.NEXT_PUBLIC_API_URL || "" ;
    const mediaUrl = API_URL + media;
    return mediaUrl;
}