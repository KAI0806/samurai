import { Flex, Center, Image } from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { client } from '../libs/client';
import Slider from 'react-slick';
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MvSlider from '../components/mvSlider';
import { motion } from 'framer-motion';
import CampLinks from '../components/CampLinks';

export async function getStaticProps(){
  const infosData = await client.get({endpoint: 'news'})
  const productData = await client.get({endpoint: 'product'})
  const campaignData = await client.get({endpoint: 'campaign'})


  return {
      props:{
          infos: infosData.contents,
          products: productData.contents,
          campaigns: campaignData.contents,
      },
  };
}

export function getMediaURL(media){
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "" ;
  const mediaUrl = API_URL + media;
  return mediaUrl;
}

export default function Home({infos, products, campaigns}) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: false,
    arrows: false,
    autoplaySpeed: 5000,
    responsive:[
      {
        breakpoint: 767,
          settings: {
            slidesToShow: 1.2,
            autoplay: false,
        }
      },
    ],
  };

  return (
    <>
      <Head>
        <title>サムライエナジー｜メイド・イン・ジャパン・エナジードリンク</title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="サムライエナジー｜メイド・イン・ジャパン・エナジードリンク" />
        <meta property="og:site_name" content="サムライエナジー｜メイド・イン・ジャパン・エナジードリンク" />
        <meta name="twitter:title" content="サムライエナジー｜メイド・イン・ジャパン・エナジードリンク" />
      </Head>

      <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      >
        <CampLinks/>

        <section className={styles.mv}>
          <MvSlider className={styles.mvSlider}/>
        </section>

        <section id='campaign' className={styles.campaign}>
          <Link href='#campaign' passHref>
            <a>SCROLL</a>
          </Link>
          <Flex className={styles.wrap}>
            <div className={styles.left}>
              <h2 data-aos="fade-right">
                キャンペーン情報<br/>
                <small>CAMPAIGN</small>
              </h2>
              <h3 data-aos="fade-right" data-aos-delay="300">各種キャンペーン実施中</h3>
              <p data-aos="fade-right" data-aos-delay="600">サムライエナジードリンク（SAMURAI ENERGY DRINK）の各種キャンペーンはこちらからご覧いただけます。各種キャンペーンにご応募ください。</p>

              <Link href='/campaign' passHref>
                <a data-aos="fade-right" data-aos-delay="900" className='btn white_btn pc_only'>VIEW MORE<span></span></a>
              </Link>
            </div>

            <Slider className={styles.right} {...settings}>
              {campaigns.slice(0, 5).map((campaign) =>(
                <Link href={campaign.link} key={campaign.id} passHref>
                  <a className={styles.content} target="_blank" rel='noreferrer'>
                    <Center className={styles.image}>
                      <Image src={getMediaURL(campaign.thumbnail.url)} alt={campaign.title} width='auto' height='100%'/>
                    </Center>

                    <div className={styles.txt}>
                      <Flex className={styles.tags}>
                        <p>NEW</p>
                        {campaign.tag.map((value, key) =>(
                          <p key={key}>{value}</p>
                        ))}
                      </Flex>

                      {campaign.subTitle !== "準備中" && (
                        <p className={styles.date}>{new Date(campaign.publishedAt).toLocaleDateString()}</p>
                      )}
                      {campaign.subTitle == "準備中" && (
                        <p className={styles.date}>XXXX.XX.XX</p>
                      )}
                      
                      <h4>{campaign.subTitle}</h4>
                      <p>{campaign.product}</p>
                    </div>
                  </a>
                </Link>
              ))}
            </Slider>
          </Flex>
        </section>
        
        <Center as='section' className={styles.product}>
          <Center className={styles.wrap}>
            <h2 data-aos="fade-up" >
              製品情報<br/>
              <small>PRODUCT</small>
            </h2>

            <p data-aos="fade-up">
              高品質なメイド・イン・ジャパン エナジードリンク（国産エナジードリンク）<br/>
              各種を取り扱っております。
            </p>

            <Slider className={styles.content} {...settings}>
              {products.slice(0, 3).map((product) =>(
                <Link href={`/products/${product.id}`} key={product.id} passHref>
                  <a className={styles.contain}>
                    <Center className={styles.image}>
                      <Image src={getMediaURL(product.thumb.url)} alt={product.title} width='auto' height='100%'/>
                    </Center>

                    <div className={styles.txt}>
                      <h3>
                        {product.title}<br/>
                        <span>{product.entitle}</span>
                      </h3>
                    </div>
                  </a>
                </Link>
              ))}

              <Link href='https://repezenfoxx-samuraienergy.square.site/' passHref>
                <a className={styles.contain} target="_blank" rel='noreferrer'>
                  <Center className={styles.image}>
                    <Image src='https://images.microcms-assets.io/assets/5bcdc669e3454adaa1a700d0bac649bd/114027a146f946c4805007170e357818/RepexenFoxx_%C3%97_SAMURAI_ENERGY.webp' alt='「Repezen Foxx」が国産エナジードリンク 「SAMURAIENERGY」をジャック!' width='auto' height='100%'/>
                  </Center>

                  <div className={styles.txt}>
                    <h3>
                      レペゼンフォックスコラボ<br/>
                      <span>Repezen Foxx</span>
                    </h3>
                  </div>
                </a>
              </Link>
              
              <Link href='https://samuraienergy-sao.stores.jp/' passHref>
                <a className={styles.contain} target="_blank" rel='noreferrer'>
                  <Center className={styles.image}>
                    <Image src='https://images.microcms-assets.io/assets/5bcdc669e3454adaa1a700d0bac649bd/1fc8af82e75147d5877bfbb858d9c37a/SamuraiEnwrgy_SAO_thumbnail.webp' alt='SAOコラボ' width='auto' height='100%'/>
                  </Center>

                  <div className={styles.txt}>
                    <h3>
                      ソードアート・オンライン<br/>
                      <span>SWORD ART ONLINE</span>
                    </h3>
                  </div>
                </a>
              </Link>
            </Slider>
          </Center>
        </Center>

        <Center as='section' className={styles.news}>
          <h2 data-aos="fade-up">
            お知らせ<br/>
            <small>NEWS</small>
          </h2>

          <Slider className={styles.wrap} {...settings}>
            {infos.slice(0, 3).map((info) =>(
              <Link href={info.link} key={info.id} passHref>
                <a className={styles.content}>
                  <Center className={styles.image}>
                    <Image src={info.mv.url} alt={info.title} width='100%' height='17.6rem'/>
                  </Center>

                  <div className={styles.txt}>
                    <Flex className={styles.tags}>
                      <p>NEW</p>
                      <p>{info.tag}</p>
                    </Flex>

                    {info.title !== "準備中" && (
                      <p className={styles.date}>{new Date(info.publishedAt).toLocaleDateString()}</p>
                    )}
                    {info.title == "準備中" && (
                      <p className={styles.date}>XXXX.XX.XX</p>
                    )}
                    
                    <h4>{info.title}</h4>
                    {/* <p>
                      {info.description > 38 ||(
                        info.description.substring(0, 37)+'…'                    
                      )}
                    </p> */}
                  </div>
                </a>
              </Link>
            ))}
          </Slider>

          <Link href='/news/' passHref>
            <a className='btn white_btn'>VIEW MORE<span></span></a>
          </Link>
        </Center>
      </motion.main>
    </>
  )
}
