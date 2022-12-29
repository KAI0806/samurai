import Head from "next/head";
import { Box, Center, Flex } from "@chakra-ui/react";
import styles from '../../styles/Contact.module.css'
import Link from "next/link";
import Supports from "../../components/Supports";
import { motion } from "framer-motion";
import OtherNews from "../../components/OtherNews";

export default function Contact(){
    const blue = '#1A3491'
    const gray = '#F7F7F7'

    return (
        <>
            <Head>
                <title>お問合せ｜サムライエナジー</title>
                <meta property="og:type" content="article" />
                <meta property="og:title" content="お問合せ｜サムライエナジー" />
                <meta property="og:site_name" content="お問合せ｜サムライエナジー" />
                <meta name="twitter:title" content="お問合せ｜サムライエナジー" />
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
                            お問合せ<br/>
                            <small>CONTACT</small>
                        </h1>
                    </Center>

                    <Flex className={styles.topicPath}>
                        <Link href='/' passHref>
                            <motion.a
                                whileHover={{color: '#333333'}}>HOME</motion.a>
                        </Link>
                        <p>＞</p>
                        <p>CONTACT</p>
                    </Flex>

                    <p>
                        お問合せ内容を必要事項を明記の上<br className="sp_only"/>ご送信ください<br/>
                        担当者から２～３営業日以内に<br className="sp_only"/>ご返信させていただきます。
                    </p>
                </Center>

                <Center className={styles.form}>
                    <form className="formrun" action="https://form.run/api/v1/r/yjilu9njph2l0knzo8jelba6" method="post">
                        <div className={styles.wrap}>
                            <label>名前 <span>*</span></label>
                            <Flex className={styles.content}>
                                <div>
                                    <input name="性" type="text" data-formrun-required/>
                                    <p>姓</p>
                                </div>
                                <div>
                                    <input name="名" type="text" data-formrun-required/>
                                    <p>名</p>
                                </div>
                            </Flex>
                        </div>

                        <Flex className={styles.wrap}>
                            <label>メールアドレス <span>*</span></label>
                            <input name="メールアドレス" type="text" data-formrun-type="email" data-formrun-required/>
                        </Flex>

                        <Flex className={styles.wrap}>
                            <label>電話番号（ハイフン無し）<span>*</span></label>
                            <input name="電話番号（ハイフン無し）" type='text' data-formrun-type="tel" data-formrun-required/>
                        </Flex>

                        <Flex className={styles.wrap}>
                            <label>お問合せ種別 <span>*</span></label>
                            <p className={styles.check}>
                                <input type='checkbox' name="お問合せ種別"/>
                                サムライエナジーについて
                            </p>
                            <p className={styles.check}>
                                <input type='checkbox' name="お問合せ種別"/>
                                キャンペーン・応募に関して
                            </p>
                            <p className={styles.check}>
                                <input type='checkbox' name="お問合せ種別"/>
                                協業・アライアンスについて
                            </p>
                            <p className={styles.check}>
                                <input type='checkbox' name="お問合せ種別"/>
                                その他
                            </p>
                        </Flex>

                        <Flex className={styles.wrap}>
                            <label>お問い合わせ <span>*</span></label>
                            <textarea name="お問い合わせ" data-formrun-required></textarea>
                        </Flex>

                        <div className="_formrun_gotcha" style={{position: 'absolute !important', height: '1px', with: '1px', overflow: 'hidden'}}>
                            <label for="_formrun_gotcha">If you are a human, ignore this field</label>
                            <input type="text" name="_formrun_gotcha" id="_formrun_gotcha" tabindex="-1"/>
                        </div>

                        <motion.button 
                            type="submit" 
                            data-formrun-error-text="未入力の項目があります" 
                            data-formrun-submitting-text="送信中..."
                            whileHover={{color: blue, backgroundColor: gray,}}>送信する</motion.button>
                    </form>
                </Center>
                <Supports/>
                <Box padding='7.6rem 0' background='#F7F7F7'>
                    <OtherNews/>
                </Box>
                
            </motion.main>
        </>
    );
}