import { Image } from "@chakra-ui/react";
import Slider from "react-slick";
import React from "react";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MvSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        arrows: false,
        autoplaySpeed: 8000,
        fade: true,
        responsive:[
            {
              breakpoint: 767,
                settings: {
                  dots: false,
              }
            },
          ],
    };

    return (
        <Slider {...settings} className='mvSlider'> 
            <div className="slide slide04">
                <Link href='/products/SAMURAI_ENERGY_BURST' passHref>
                    <a className='btn blue_btn'>VIEW MORE<span></span></a>
                </Link>
            </div>

            <div className="slide slide01">
                <Link href='/products/SAMURAI_ENERGY_DRINK' passHref>
                    <a className='btn blue_btn'>VIEW MORE<span></span></a>
                </Link>
            </div>

            <div className="slide slide02">
                <Link href='https://sao-cp.samurai-energy.com' passHref>
                    <a className='btn blue_btn' target="_blank" rel='noreferrer'>VIEW MORE<span></span></a>
                </Link>
            </div>

            <div className="slide slide03">
                <Link href='https://prtimes.jp/main/html/rd/p/000000004.000108769.html' passHref>
                    <a className='btn white_btn' target="_blank" rel='noreferrer'>VIEW MORE<span></span></a>
                </Link>
            </div>
        </Slider>
    );
}