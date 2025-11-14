import React from "react";
import { motion } from 'framer-motion';
import { LoaderContainer, Logo, RingWrapper, RingSvg } from './style';

import PrimeGear from '../../assets/images/logodark.png';

const PageLoader = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
        >
            <LoaderContainer>
                <RingWrapper>
                    <motion.div
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0 }}
                    >
                        <Logo src={PrimeGear} alt="PrimeGear Loading" />
                    </motion.div>
                    <motion.div
                        style={{ position: 'absolute', inset: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1.6, ease: 'linear' }}
                    >
                        <RingSvg width="180" height="180" viewBox="0 0 180 180">
                            <defs>
                                <linearGradient id="ringGradient" x1="0" y1="0" x2="1" y2="1">
                                    <stop offset="0%" stopColor="#0052CC" />
                                    <stop offset="100%" stopColor="#66B2FF" />
                                </linearGradient>
                            </defs>
                            <circle
                                cx="90"
                                cy="90"
                                r="80"
                                fill="none"
                                stroke="url(#ringGradient)"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeDasharray="460 60"
                            />
                        </RingSvg>
                    </motion.div>
                </RingWrapper>
            </LoaderContainer>
        </motion.div>
    )
}

export default PageLoader;