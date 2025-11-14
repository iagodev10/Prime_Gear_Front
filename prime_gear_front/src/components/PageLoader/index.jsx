import React from "react";
import { motion } from 'framer-motion';
import { LoaderContainer, Logo } from './style';

import PrimeGear from '../../assets/images/logodark.png';

const PageLoader = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
        >
            <LoaderContainer>
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{
                        duration: 0.3,
                        ease: "easeOut"
                    }}
                >
                    <motion.div
                        animate={{ 
                            scale: [1, 1.1, 1],
                            opacity: [1, 0.8, 1]
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 1.5,
                            ease: "easeInOut"
                        }}
                    >
                        <Logo src={PrimeGear} alt="PrimeGear Loading" />
                    </motion.div>
                </motion.div>
            </LoaderContainer>
        </motion.div>
    )
}

export default PageLoader;