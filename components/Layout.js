import { Flex, Image, Center } from "@chakra-ui/react";
import Link from "next/link";
import { NavData } from "./NavData";
import { IconContext } from 'react-icons'
import { FaInstagram, FaTwitter } from 'react-icons/fa'
import { motion } from 'framer-motion'

function getYear() {
    return new Date().getFullYear();
  };

export default function Layout({children}) {
    return (
        <>
            <Flex as='header'>
                <h1>
                    <Link href='/' passHref>
                        <motion.a
                            whileHover={{opacity: .3}}>
                            <Image src="/images/common/logo.svg" alt="サムライエナジーのロゴ" width='20.5rem' height='auto'/>
                        </motion.a>
                    </Link>
                </h1>

                <Flex as='nav' className="pc_flex">
                    <Flex as='ul'>
                        {NavData.map((value, key) => {
                            return(
                                <li key={key}>
                                    <Link href={`${value.url}`} passHref>
                                        <motion.a
                                            whileHover={{opacity: .5}}>
                                            {value.title}
                                        </motion.a>
                                    </Link>
                                </li>
                            )
                        })}
                    </Flex>

                    {/* <Link href='/' passHref>
                        <a className="buy">購入する</a>
                    </Link> */}

                    <Link href='/contact/' passHref>
                        <motion.a className="contact_btn"
                            whileHover={{background: 'white', color: '#333333'}}>CONTACT</motion.a>
                    </Link>
                </Flex>
            </Flex>

            <nav id='nav' className='sp_only'>
                <div className='nav_wrap'>
                    <Image src='/images/common/logo.svg' alt='ロゴ' width='25rem'/>

                    <ul>
                        <li><Link href="/" passHref><a>TOP</a></Link></li>
                        <li><Link href="/about" passHref><a>企業情報</a></Link></li>
                        <li><Link href="/products/SAMURAI_ENERGY_DRINK" passHref><a>商品情報</a></Link></li>
                        <li><Link href="/campaign" passHref><a>キャンペーン</a></Link></li>
                        <li><Link href="/news" passHref><a>最新のお知らせ</a></Link></li>
                    </ul>

                    <Link href='/support/' passHref>
                        <a className="btn blue_btn">
                            サポート情報はこちら<span></span>
                        </a>
                    </Link>
                    <Link href='/contact/' passHref>
                        <a className="btn black_btn">
                            お問合せはこちら<span></span>
                        </a>
                    </Link>
                </div>
            </nav>

            <div id='hamburger' className='sp_only'>
                <span id='line1' className='inner_line'></span>
                <span id='line2' className='inner_line'></span>
                <span id='line3' className='inner_line'></span>
            </div>

            {children}
            
            <Center className="support">
                <Center className="content">
                    <h2>
                        サポート情報<br/>
                        <small>SUPPORT</small>
                    </h2>

                    <Link href='/support/' passHref>
                        <a className='btn blue_btn'>サポート情報はこちら<span></span></a>
                    </Link>
                </Center>

                <Center className="content">
                    <h2>
                        お問合せ<br/>
                        <small>CONTACT</small>
                    </h2>

                    <Link href='/contact/' passHref>
                        <a className='btn black_btn'>お問合せはこちら<span></span></a>
                    </Link>
                </Center>
            </Center>

            <Center className="footerHead">
                <Flex className="wrap">
                    <Image src="/images/common/logo.svg" alt="サムライエナジーのロゴ" width='auto' height='10rem'/>

                    <Flex className="right">
                        <p>Follow us</p>
                        <Flex>
                            <Link href='https://instagram.com/samurai_energy' passHref>
                                <motion.a
                                 target="_blank" rel='noreferrer'
                                    whileHover={{opacity: .3}}>
                                    <IconContext.Provider value={{ size: '3.6rem', color: '#113285' }}>
                                        <FaInstagram/>
                                    </IconContext.Provider>
                                    Instagram
                                </motion.a>
                            </Link>

                            <Link href='https://twitter.com/samuraienergy' passHref>
                                <motion.a
                                 target="_blank" rel='noreferrer'
                                    whileHover={{opacity: .3}}>
                                    <IconContext.Provider value={{ size: '3.6rem', color: '#113285' }}>
                                        <FaTwitter/>
                                    </IconContext.Provider>
                                    Twitter
                                </motion.a>
                            </Link>
                        </Flex>
                    </Flex>
                </Flex>
            </Center>
            <Center as="footer">
                <div className="wrap">
                    <Flex className="top">
                        <ul>
                            <Link href='/about/' passHref>
                                <motion.a className="bold"
                                    whileHover={{opacity: .5}}>
                                    企業情報<br/>
                                    <small>ABOUT</small>
                                </motion.a>
                            </Link>
                            <li>
                                <Link href='/about/' passHref>
                                    <motion.a
                                        whileHover={{textDecoration: 'underline'}}>-BI（ブランドアイデンティティー）</motion.a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/about#company' passHref>
                                    <motion.a
                                        whileHover={{textDecoration: 'underline'}}>-COMPANY</motion.a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/about/company_profile' passHref>
                                    <motion.a
                                        whileHover={{textDecoration: 'underline'}}>-COMPANY PROFILE</motion.a>
                                </Link>
                            </li>
                        </ul>

                        <ul>
                            <Link href='/products/SAMURAI_ENERGY_DRINK' passHref>
                                <motion.a className="bold"
                                    whileHover={{opacity: .5}}>
                                    商品情報<br/>
                                    <small>PRODUCT</small>
                                </motion.a>
                            </Link>
                            <li>
                                <Link href='/products/SAMURAI_ENERGY_DRINK' passHref>
                                    <motion.a
                                        whileHover={{textDecoration: 'underline'}}>-サムライエナジードリンク</motion.a>
                                </Link>
                            </li>
                        </ul>

                        <ul>
                            <Link href='/campaign/' passHref>
                                <motion.a className="bold"
                                    whileHover={{opacity: .3}}>
                                    キャンペーン<br/>
                                    <small>CAMPAIGN</small>
                                </motion.a>
                            </Link>
                        </ul>

                        <ul>
                            <Link href='/news/' passHref>
                                <motion.a className="bold"
                                    whileHover={{opacity: .3}}>
                                    最新のお知らせ<br/>
                                    <small>NEWS</small>
                                </motion.a>
                            </Link>
                            {/* <li>
                                <Link href='/' passHref>
                                    <a>-PR活動</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/' passHref>
                                    <a>-タイアップ</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/' passHref>
                                    <a>-その他のお知らせ</a>
                                </Link>
                            </li> */}
                        </ul>
                    </Flex>
                    <Flex className="bottom"></Flex>
                </div>

                <Flex className="guide">
                    <p className="copy">&copy; {getYear()} Samurai Energy</p>
                    
                    <Flex>
                        <Link href='/support/' passHref>
                            <motion.a
                                whileHover={{textDecoration: 'underline'}}>ブランドガイドライン</motion.a>
                        </Link>
                        <Link href='/support/' passHref>
                            <motion.a
                                whileHover={{textDecoration: 'underline'}}>利用規約</motion.a>
                        </Link>
                        <Link href='/support/' passHref>
                            <motion.a
                                whileHover={{textDecoration: 'underline'}}>プライバシーポリシー</motion.a>
                        </Link>
                    </Flex>
                </Flex>
            </Center>
        </>
    )
}