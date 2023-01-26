import Link from 'next/link';
import styles from '../styles/CampLinks.module.css'
import { useState } from "react";
import { Center, Image } from '@chakra-ui/react';
import { IconContext } from "react-icons";
import { MdClose } from 'react-icons/md'

export default function CampLinks() {
    const [active, setActive] = useState(true)

    const classToggle = () => {
        setActive(!active)
    }

    return (
        <div>
            <div className={active ? `${styles.camp_links}` : `${styles.camp_links} ${styles.active}`}>
                <div className={styles.container_pc}>
                    <Link href='https://samuraienergy-sao.stores.jp/' passHref>
                        <a target="_blank" rel='noreferrer'>
                            <small>ソードアート・オンライン</small>
                            コラボはこちら
                        </a>
                    </Link>
                    <Link href='https://repezenfoxx-samuraienergy.square.site/' passHref>
                        <a target="_blank" rel='noreferrer'>
                            Repezen Foxx<br/>
                            コラボはこちら
                        </a>
                    </Link>
                </div>

                <div className={styles.container_sp} >
                    <Center className={styles.opener} onClick={classToggle}>
                        <p>コラボストア</p>
                    </Center>
                    <div className={styles.wrap}>
                        <div className={styles.close} onClick={classToggle}>
                            <IconContext.Provider value={{ size: '3rem' }}>
                                <MdClose/>
                            </IconContext.Provider>
                        </div>

                        <Center className={styles.img_wrap}>
                            <Image src='/images/common/sample.jpg'
                            alt='サムライエナジーのポスター'
                            width='auto' height='100%'/>
                        </Center>

                        <h2>
                            スペシャルコラボ<br/>
                            特集ページはこちらから
                        </h2>

                        <Link href='https://samuraienergy-sao.stores.jp/' passHref>
                            <a className='btn white_btn' target="_blank" rel='noreferrer'>
                                ソードアート<br/>
                                オンラインコラボ
                                <span></span></a>
                        </Link>

                        <Link href='https://repezenfoxx-samuraienergy.square.site/' passHref>
                            <a className='btn white_btn' target="_blank" rel='noreferrer'>
                                Repezen Foxx<br/>
                                コラボ
                                <span></span></a>
                        </Link>
                    </div>
                </div>
            </div>

            <div className={active ? `${styles.cover}` : `${styles.cover_active} ${styles.cover}`} onClick={classToggle}></div>
        </div>
    );
}