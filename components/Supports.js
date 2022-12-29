import { Center, Flex } from "@chakra-ui/react";
import { FaQuestionCircle } from 'react-icons/fa'
import { IoIosBusiness } from 'react-icons/io'
import { MdImportantDevices } from 'react-icons/md'
import { IconContext } from 'react-icons'
import styles from '../styles/Support.module.css'
import Link from "next/link";
import OtherNews from "./OtherNews";
import { motion } from "framer-motion";

export default function Supports(){
    const black = '#333333'

    return (
        <Center as="section" className={styles.support}>
            <Center className={styles.title}>
                <h2>
                    サポート各種<br/>
                    <small>SUPPORT</small>
                </h2>

                <Flex>
                    <Link href='/support/Faq' passHref>
                        <motion.a
                            whileHover={{color: 'white', backgroundColor: black}}>
                            <IconContext.Provider value={{ size: '2.235rem', color: '#1A3491' }}>
                                <FaQuestionCircle/>
                            </IconContext.Provider>
                            よくある質問はこちら
                        </motion.a>
                    </Link>
                    <Link href='/support/Alliance' passHref>
                        <motion.a
                            whileHover={{color: 'white', backgroundColor: black}}>
                            <IconContext.Provider value={{ size: '2.235rem', color: '#1A3491' }}>
                                <IoIosBusiness/>
                            </IconContext.Provider>
                            協業・アライアンスについて
                        </motion.a>
                    </Link>
                    <Link href='/support/Guideline' passHref>
                        <motion.a
                            whileHover={{color: 'white', backgroundColor: black}}>
                            <IconContext.Provider value={{ size: '2.235rem', color: '#1A3491' }}>
                                <MdImportantDevices/>
                            </IconContext.Provider>
                            ブランドガイドラインはこちら
                        </motion.a>
                    </Link>
                </Flex>
            </Center>

            {/* <Center className={styles.other}>
                <Link href='' passHref>
                    <motion.a
                        whileHover={{textDecoration: 'none'}}>利用規約について</motion.a>
                </Link>
                <Link href='' passHref>
                    <motion.a
                        whileHover={{textDecoration: 'none'}}>プライバシーポリシーについて</motion.a>
                </Link>
            </Center> */}

            <div>
                <OtherNews/>
            </div>
        </Center>
    );
}