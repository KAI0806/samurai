import { Center, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";
import Slider from 'react-slick';
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Campaigns(){
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: false,
        arrows: false,
        autoplaySpeed: 5000,
        responsive:[
          {
            breakpoint: 767,
              settings: {
                slidesToShow: 1.1,
            }
          },
      ],
      };

    return (
        <Center as="section" className="campaigns">
            <Flex className="title">
                <h2>
                    キャンペーン情報<br/>
                    <small>CAMPAIGN</small>
                </h2>

                <Link href='/campaign' passHref>
                    <a className='btn white_btn pc_only'>全てのキャンペーンを見る<span></span></a>
                </Link>
            </Flex>

            <Slider className="wrap" {...settings}>
                <Link href='https://prtimes.jp/main/html/rd/p/000000004.000108769.html' passHref>
                    <a className='content' target="_blank" rel='noreferrer'>
                        <Center className='image'>
                            <Image src='/images/top/mv_bg04.webp' alt='サンプル' width='auto' height='100%'/>
                        </Center>

                        <div className='txt'>
                            <Flex className='tags'>
                            <p>NEW</p>
                            <p>EVENT</p>
                            </Flex>

                            <p className='date'>2022.12.31</p>
                            <h4>世界一のアーティストを目指す「Repezen Foxx」が国産エナジードリンク 「SAMURAIENERGY」をジャック!</h4>
                            <p>SAMURAI ENERGY DRINK（通常缶）</p>
                        </div>
                    </a>
                </Link>

                <Link href='https://sao-cp.samurai-energy.com' passHref>
                    <a className='content' target="_blank" rel='noreferrer'>
                        <Center className='image'>
                            <Image src='/images/top/mv_bg03.webp' alt='サンプル' width='auto' height='100%'/>
                        </Center>

                        <div className='txt'>
                            <Flex className='tags'>
                            <p>NEW</p>
                            <p>EVENT</p>
                            <p>SNS</p>
                            <p>QRコード</p>
                            </Flex>

                            <p className='date'>2022.10.16</p>
                            <h4>TVアニメ「ソードアート・オンライン」その場で当たるQRコードキャ…</h4>
                            <p>SAMURAI ENERGY DRINK（通常缶）</p>
                        </div>
                    </a>
                </Link>

                <Link href='/campaign' passHref>
                    <a className='content'>
                        <Center className='image'>
                            <Image src='https://images.microcms-assets.io/assets/5bcdc669e3454adaa1a700d0bac649bd/e812e0c611bb4a8f9b8a9efb3ace0ed0/mv.jpg' alt='サンプル' width='auto' height='100%'/>
                        </Center>

                        <div className='txt'>
                            <Flex className='tags'>
                            <p>NEW</p>
                            <p>EVENT</p>
                            </Flex>

                            <p className='date'>XXXX.XX.XX</p>
                            <h4>準備中</h4>
                            <p>準備中</p>
                        </div>
                    </a>
                </Link>
            </Slider>

            <Link href='/campaign' passHref>
                <a className='btn white_btn sp_only'>一覧を見る<span></span></a>
            </Link>
        </Center>
    );
}