import Head from "next/head";
import Link from "next/link";
import { Flex, Center, Image, Accordion, AccordionItem, AccordionButton, AccordionIcon, Box, AccordionPanel } from "@chakra-ui/react";
import { client } from "../../libs/client";
import styles from '../../styles/Product.module.css'
import Campaigns from "../../components/Campaigns";
import { motion } from "framer-motion";

export default function product({product}){
    return (
        <>
            <Head>
                <title>{product.entitle}｜製品情報｜サムライエナジー</title>
                <meta property="og:type" content="article" />
                <meta property="og:title" content={`${product.entitle}｜製品情報｜サムライエナジー`} />
                <meta property="og:site_name" content={`${product.entitle}｜製品情報｜サムライエナジー`} />
                <meta name="twitter:title" content={`${product.entitle}｜製品情報｜サムライエナジー`} />
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
                            {product.title}<br/>
                            <small>{product.entitle}</small>
                        </h1>
                    </Center>

                    <Flex className={styles.topicPath}>
                        <Link href='/' passHref>
                            <motion.a
                                whileHover={{color: '#333333'}}>HOME</motion.a>
                        </Link>
                        <p>＞</p>
                        <p>{product.entitle}</p>
                    </Flex>
                </Center>

                <section className={styles.mv}>
                    <h2>{product.concept}</h2>
                    <p>{product.conceptSub}</p>
                    <Image data-aos="fade-up" className="pc_only" src={product.mv.url} alt={product.title} width='100%' height='auto'/>
                    <Image data-aos="fade-up" className="sp_only" src={product.mv_sp.url} alt={product.title} width='100%' height='auto'/>
                </section>

                <Center as="section" className={styles.details}>
                    <div className={styles.wrap}>
                        <Center className={styles.content}>
                            <Center className={styles.left}>
                                <Image data-aos="zoom-in" src={product.alphaImage.url} alt={product.title} width='100%' height='auto'/>
                            </Center>
                            
                            <div className={styles.right}>
                                <h2 data-aos="fade-left" data-aos-delay="600">{product.concept}</h2>
                                <h3 data-aos="fade-left" data-aos-delay="900">{product.point}</h3>

                                <p>{product.description}</p>

                                <Accordion className={styles.contain} allowToggle defaultIndex={[0, 1]} allowMultiple>
                                    <AccordionItem className={styles.accordionitem}>
                                        <AccordionButton className={styles.accordionbutton}>
                                            原材料
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel className="accordionpanel" background='white' borderRadius='.4rem' border='.1rem solid #D9D9D9'>
                                            <p>{product.materials}</p>
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem className={styles.accordionitem}>
                                        <AccordionButton className={styles.accordionbutton}>
                                            成分表
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel className="accordionpanel" background='white' borderRadius='.4rem' border='.1rem solid #D9D9D9'>
                                            <p>{product.ingredients}</p>
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </Center>
                    </div>
                </Center>

                <Campaigns/>
            </motion.main>
        </>
    );
}

export async function getStaticPaths (){
    // 外部APIエンドポイントを呼び出しデータ取得
    const data = await client.get({ endpoint: 'product' })
    const paths = data.contents.map((content) => `/products/${content.id}`)

    return { paths, fallback: false };
}

export function getMediaURL(media){
    const API_URL = process.env.NEXT_PUBLIC_API_URL || "" ;
    const mediaUrl = API_URL + media;
    return mediaUrl;
}

export async function getStaticProps({params, preview = false}){
    const id = params.id;
    const data = await client.get({ endpoint: 'product', contentId: id })
    // const paths = `/works/page/${data.id}`

    return{
        props: {
            product: data,
            // paths:{
            //     params: paths,
            // },
            preview,
        },
    }
}