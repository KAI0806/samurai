import Head from "next/head";
import { Center, Flex, Tab, TabList, Tabs, Image, TabPanels, TabPanel } from "@chakra-ui/react";
import Link from "next/link";
import styles from '../../styles/Campaigns.module.css'
import { client } from "../../libs/client";
import { IconContext } from 'react-icons'
import { IoIosArrowDroprightCircle } from 'react-icons/io'
import OtherNews from "../../components/OtherNews";
import { motion } from "framer-motion";
import CampLinks from "../../components/CampLinks";

export async function getStaticProps(){
    const campaignsData = await client.get({endpoint: 'campaign'})
    const snsData = await client.get({endpoint: 'campaign', queries:{filters: `tag[equals]SNS`}})

    return {
        props:{
            campaigns: campaignsData.contents,
            // snss: snsData.contents,
        },
    };
}
  
export function getMediaURL(media){
    const API_URL = process.env.NEXT_PUBLIC_API_URL || "" ;
    const mediaUrl = API_URL + media;
    return mediaUrl;
}

export default function useCampaigns({campaigns}){
    const today = new Date();
    const olds = campaigns.filter((campaign) => 
        campaign.endDate < today
    )

    const blue = '#1A3491'

    return (
        <>
            <Head>
                <title>キャンペーン情報｜サムライエナジー</title>
                <meta property="og:type" content="article" />
                <meta property="og:title" content="キャンペーン情報｜サムライエナジー" />
                <meta property="og:site_name" content="キャンペーン情報｜サムライエナジー" />
                <meta name="twitter:title" content="キャンペーン情報｜サムライエナジー" />
            </Head>

            <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            >
                <CampLinks/>
                <Center as="section" className={styles.kv}>
                    <Center className={styles.title}>
                        <h1>
                            キャンペーン情報<br/>
                            <small>CAMPAIGN</small>
                        </h1>
                    </Center>

                    <Flex className={styles.topicPath}>
                        <Link href='/' passHref>
                            <motion.a
                                whileHover={{color: '#333333'}}>HOME</motion.a>
                        </Link>
                        <p>＞</p>
                        <p>CAMPAIGN</p>
                    </Flex>
                    <p>実施中のキャンペーン一覧は<br className="sp_only"/>こちらからご覧いただけます</p>
                </Center>

                <Center as="section" id="all" className={styles.campaign}>
                    <div className={styles.wrap}>
                        <h2>
                            全てのキャンペーン<br/>
                            <small>CAMPAIGN</small>
                        </h2>
                        
                        <Tabs variant='unstyled' className={styles.tabs}>
                            <TabList className={styles.tablist}>
                                {campaigns.slice(0, 5).map((campaign) => (
                                    <Tab className={styles.tab} key={campaign.id} _selected={{ opacity: 1, border: '.3rem solid #113285' }}>
                                        <Center className={styles.image}>
                                            <Image src={campaign.Media.url} alt={campaign.title} with='auto' height='100%'/>
                                        </Center>
                                        
                                        <p className="sp_only">
                                            {campaign.title > 11 ||(
                                                campaign.title.substring(0, 11)+'…'                    
                                            )}
                                        </p>

                                        <IconContext.Provider value={{ size: '2rem', color: "white" }} className='sp_only'>
                                            <IoIosArrowDroprightCircle/>
                                        </IconContext.Provider>
                                    </Tab>
                                ))}
                            </TabList>

                            <TabPanels className={styles.tabpanels}>
                                {campaigns.slice(0, 5).map((campaign) => {
                                    let newTag = new Date(campaign.publishedAt)
                                    newTag.setDate(newTag.getDate() + 14)
                    
                                    let upDate = new Date(campaign.updatedAt)
                                    upDate.setDate(upDate.getDate() + 14)
                                    return(
                                        <TabPanel className={styles.tabpanel} key={campaign.id}>
                                            <div className={styles.left}>
                                                <Link href={campaign.link} passHref>
                                                    <a className={styles.image} target="_blank" rel='noreferrer'>
                                                        <Image src={campaign.Media.url} alt={campaign.title} with='auto' height='auto'/>
                                                    </a>
                                                </Link>

                                                <div className={styles.txt}>
                                                    <Flex>
                                                        <p>{new Date(campaign.publishedAt).toLocaleDateString()}</p>
                                                        <Flex className={styles.tags}>
                                                            {newTag > today && (
                                                                <p className={styles.new}>NEW</p>
                                                            )}
                                                            {newTag < today && upDate > today &&(
                                                                <p className={styles.update}>更新</p>
                                                            )}
                                                            {campaign.tag.map((value, key) =>(
                                                                <p key={key}>{value}</p>
                                                            ))}
                                                        </Flex>
                                                    </Flex>

                                                    <p>{campaign.subTitle}</p>
                                                </div>
                                            </div>

                                            <div className={styles.right}>
                                                <div>
                                                    <Image src={campaign.subMedia.url} alt={campaign.title} width='auto' height='100%'/>
                                                </div>
                                                <p>{campaign.title}</p>
                                            </div>
                                        </TabPanel>
                                    )
                                })}
                            </TabPanels>
                        </Tabs>
                    </div>
                </Center>

                <Center as="section" id="old" className={styles.old}>
                    <div className={styles.wrap}>
                        {/* <h2>
                            終了したキャンペーン<br/>
                            <small>CAMPAIGN #OLD EVENT</small>
                        </h2>
                        
                        <ul className={styles.content}>
                            {campaigns.slice(0, 3).map((old) => (
                                <Flex as='li' key={old.id}>
                                    <Flex>
                                        <p>{new Date(old.publishedAt).toLocaleDateString()}</p>
                                        <Flex className={styles.tags}>
                                            <p>OLD</p>
                                        </Flex>
                                    </Flex>
                                    <h3>{old.title}</h3>
                                </Flex>
                            ))}
                        </ul> */}
                        <OtherNews/>
                    </div>
                </Center>
            </motion.main>
        </>
    );
}