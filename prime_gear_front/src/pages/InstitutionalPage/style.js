import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blink = keyframes`
  0%, 100% { opacity: 1 }
  50% { opacity: 0 }
`;

const float = keyframes`
  0% { transform: translateY(0) scale(1) }
  50% { transform: translateY(-30px) scale(1.05) }
  100% { transform: translateY(0) scale(1) }
`;

export const Page = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10vh;
`;

export const Hero = styled.section`
  width: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  padding: 40px 20px;
  position: relative;
  overflow: hidden;
`;

export const HeroBg = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;

export const Particle = styled.span`
  position: absolute;
  bottom: -20px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #03b304;
  box-shadow: 0 0 10px rgba(3,179,4,0.6);
  animation: ${float} 6s ease-in-out infinite;
`;

export const HeroTitle = styled.h1`
  font-size: clamp(2.2rem, 6vw, 4rem);
  font-weight: 700;
  color: black;
  position: relative;
  letter-spacing: 1px;
  transform: perspective(700px) translateZ(20px);
  white-space: nowrap;
  overflow: hidden;
  animation: ${typing} 2.8s steps(22, end) both;
  &:after {
    content: "";
    display: inline-block;
    width: 2px;
    height: 1em;
    background: black;
    margin-left: 6px;
    animation: ${blink} 1s step-end infinite;
    vertical-align: baseline;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: clamp(1rem, 2.6vw, 1.4rem);
  color: #333;
`;

export const HeroCTA = styled(motion.button)`
  background: black;
  color: white;
  border: none;
  border-radius: 60px;
  padding: 12px 22px;
  font-weight: 500;
  cursor: pointer;
  transition: transform .25s ease, box-shadow .25s ease;
  box-shadow: 0 10px 24px rgba(0,0,0,0.15);
  &:hover { box-shadow: 0 16px 36px rgba(0,0,0,0.22) }
`;

export const Section = styled.section`
  width: 90%;
  max-width: 1200px;
  margin: 60px auto;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  color: black;
  font-weight: 600;
  text-align: center;
  margin-bottom: 28px;
`;

export const Timeline = styled.div`
  border-left: 2px solid #e5e5e5;
  margin: 0 auto;
  padding-left: 22px;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const TimelineItem = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  h4 { font-size: 1.1rem; font-weight: 600; color: black; margin: 0 }
  p { color: #555; margin: 6px 0 0 }
`;

export const TimelineDot = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #03b304;
  box-shadow: 0 0 10px rgba(3,179,4,0.5);
  transform: translateX(-28px);
`;

export const GlassGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  @media (max-width: 900px) { grid-template-columns: 1fr 1fr }
  @media (max-width: 600px) { grid-template-columns: 1fr }
`;

export const GlassCard = styled(motion.div)`
  background: rgba(255,255,255,0.6);
  border: 1px solid rgba(0,0,0,0.08);
  backdrop-filter: blur(6px);
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  transform-style: preserve-3d;
  transition: transform .25s ease, box-shadow .25s ease;
  box-shadow: 0 10px 24px rgba(0,0,0,0.08);
  h4 { margin: 4px 0; color: black }
  p { color: #555 }
`;

export const GlassIcon = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: #e1e1e1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModulesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  @media (max-width: 900px) { grid-template-columns: 1fr 1fr }
  @media (max-width: 600px) { grid-template-columns: 1fr }
`;

export const ModuleCard = styled.div`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 10px 24px rgba(0,0,0,0.08);
  transition: transform .2s ease, box-shadow .25s ease;
  transform-style: preserve-3d;
  will-change: transform;
  .icon { width: 40px; height: 40px; border-radius: 10px; background: #eaeaea; display: flex; align-items: center; justify-content: center; margin-bottom: 8px }
  h5 { font-size: 1.05rem; color: black; margin: 2px 0 }
  p { color: #555; margin: 0 }
`;

export const MembersSection = styled.section`
  width: 90%;
  max-width: 1100px;
  margin: 60px auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 22px;
`;

export const MemberItem = styled.div`
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 18px;
  align-items: center;
  @media (max-width: 600px) { grid-template-columns: 1fr }
`;

export const MemberPhoto = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 18px;
  background-size: cover;
  background-position: center;
  box-shadow: 0 16px 36px rgba(0,0,0,0.18);
  transition: transform .25s ease;
  &:hover { transform: perspective(700px) rotateX(6deg) rotateY(-6deg) }
`;

export const MemberInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h4 { font-size: 1.2rem; color: black; margin: 0 0 6px }
  p { color: #555; margin: 0 }
`;

export const FutureSection = styled.section`
  width: 90%;
  max-width: 1100px;
  margin: 60px auto 80px;
`;

export const FutureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  @media (max-width: 900px) { grid-template-columns: 1fr 1fr }
  @media (max-width: 600px) { grid-template-columns: 1fr }
`;

export const FutureItem = styled.div`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 16px;
  padding: 18px;
  box-shadow: 0 10px 24px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  gap: 6px;
  .icon { width: 38px; height: 38px; border-radius: 10px; background: #eaeaea; display: flex; align-items: center; justify-content: center }
  h5 { font-size: 1.05rem; color: black; margin: 4px 0 }
  p { color: #555; margin: 0 }
`;