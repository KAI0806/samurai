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
                            <p className={styles.label}>名前 <span>*</span></p>
                            <Flex className={styles.content}>
                                <div>
                                    <input id="firstName" name="性" type="text" data-formrun-required required='名字を入力してください。'/><br/>
                                    <label htmlFor="firstName">姓</label>
                                </div>
                                <div>
                                    <input id="secondName" name="名" type="text" data-formrun-required required='下のお名前を入力してください。'/><br/>
                                    <label htmlFor="secondName">名</label>
                                </div>
                            </Flex>
                        </div>

                        <Flex className={styles.wrap}>
                            <label className={styles.label} htmlFor="email">メールアドレス <span>*</span></label>
                            <input id="email" name="メールアドレス" type="text" data-formrun-type="email" data-formrun-required required='メールアドレスを入力してください。'/>
                        </Flex>

                        <Flex className={styles.wrap}>
                            <label className={styles.label} htmlFor="tel">電話番号（ハイフン無し）<span>*</span></label>
                            <input id="tel" name="電話番号（ハイフン無し）" type='text' data-formrun-type="tel" data-formrun-required required='電話番号を入力してください。'/>
                        </Flex>

                        <Flex as='fieldset' className={styles.wrap}>
                            <p className={styles.label}>お問合せ種別 <span>*</span></p>
                            <label className={styles.check}>
                                <input type='radio' value='サムライエナジーについて' name="お問合せ種別" data-formrun-required required/>
                                サムライエナジーについて
                            </label>
                            <label className={styles.check}>
                                <input type='radio' value='キャンペーン・応募に関して' name="お問合せ種別" data-formrun-required required/>
                                キャンペーン・応募に関して
                            </label>
                            <label className={styles.check}>
                                <input type='radio' value='協業・アライアンスについて' name="お問合せ種別" data-formrun-required required/>
                                協業・アライアンスについて
                            </label>
                            <label className={styles.check}>
                                <input type='radio' value='その他' name="お問合せ種別" data-formrun-required required/>
                                その他
                            </label>
                        </Flex>

                        <Flex className={styles.wrap}>
                            <label htmlFor="descript" className={styles.label}>お問い合わせ <span>*</span></label>
                            <textarea id="descript" name="お問い合わせ内容" data-formrun-required required='お問合せ内容を入力してください。'></textarea>
                        </Flex>

                        <div className="_formrun_gotcha" style={{position: 'absolute !important', height: '1px', with: '1px', overflow: 'hidden'}}>
                            <label htmlFor="_formrun_gotcha">If you are a human, ignore this field</label>
                            <input type="text" name="_formrun_gotcha" id="_formrun_gotcha" tabIndex="-1"/>
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