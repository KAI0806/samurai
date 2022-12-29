import { background, Center } from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function OtherNews(){
    const blue = '#1A3491'

    return (
        <Center className="OtherNews">
            <Link href='/products/SAMURAI_ENERGY_DRINK' passHref>
                <motion.a
                    whileHover={{color: 'white', backgroundColor: blue}}>取扱製品情報はこちら</motion.a>
            </Link>

            <Link href='/campaign' passHref>
                <motion.a
                    whileHover={{color: blue, background: 'white'}}>その他、キャンペーンはこちら</motion.a>
            </Link>
        </Center>
    );
}