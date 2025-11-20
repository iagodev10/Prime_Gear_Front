import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Page,
  Hero,
  HeroBg,
  Particle,
  HeroTitle,
  HeroSubtitle,
  HeroCTA,
  Section,
  SectionTitle,
  Timeline,
  TimelineItem,
  TimelineDot,
  GlassGrid,
  GlassCard,
  GlassIcon,
  ModulesGrid,
  ModuleCard,
  MembersSection,
  MemberItem,
  MemberPhoto,
  MemberInfo,
  FutureSection,
  FutureGrid,
  FutureItem
} from "./style";
import DesktopIllustration from "../../assets/images/desktop-ilustration.png";
import { FiTarget, FiEye, FiHeart, FiUsers, FiBox, FiTag, FiShoppingCart, FiStar, FiFileText, FiTruck } from "react-icons/fi";

const Institutional = () => {
  const refHistoria = useRef(null);
  const { scrollYProgress } = useScroll({ target: refHistoria, offset: ["start end", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const modules = [
    { icon: <FiUsers size={26} />, title: "Usuários", desc: "Clientes, funcionários e administradores com autenticação." },
    { icon: <FiBox size={26} />, title: "Produtos", desc: "Catálogo com preço, descrição, estoque e fornecedor." },
    { icon: <FiTag size={26} />, title: "Categorias", desc: "Organização por categorias com vínculo único por produto." },
    { icon: <FiShoppingCart size={26} />, title: "Carrinho", desc: "Itens, quantidade e preço unitário com status e datas." },
    { icon: <FiStar size={26} />, title: "Avaliações", desc: "Título, descrição e data, múltiplas por produto e cliente." },
    { icon: <FiFileText size={26} />, title: "Pedidos", desc: "Pedido vinculado ao carrinho e cliente, total e pagamento." },
    { icon: <FiTruck size={26} />, title: "Transportadoras", desc: "Regiões atendidas, avaliação, CNPJ e modalidades." }
  ];

  const members = [
    { name: "Membro 1", role: "Co-fundador", photo: null },
    { name: "Membro 2", role: "Co-fundador", photo: null },
    { name: "Membro 3", role: "Co-fundador", photo: null },
    { name: "Membro 4", role: "Co-fundador", photo: null }
  ];

  return (
    <Page>
      <Hero>
        <HeroBg>
          {Array.from({ length: 18 }).map((_, i) => (
            <Particle key={i} style={{ left: `${(i * 11) % 100}%`, animationDelay: `${i * 0.15}s` }} />
          ))}
          <motion.img src={DesktopIllustration} alt="Prime Gear" style={{ width: 520, filter: "drop-shadow(0 30px 50px rgba(0,0,0,0.35))" }} animate={{ rotate: [0, 2, -2, 0] }} transition={{ duration: 10, repeat: Infinity }} />
        </HeroBg>
        <HeroTitle>
          Prime Gear
        </HeroTitle>
        <HeroSubtitle>
          Tecnologia, performance e experiência impecável
        </HeroSubtitle>
        <HeroCTA whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>Explorar</HeroCTA>
      </Hero>

      <Section ref={refHistoria} style={{ backgroundAttachment: "fixed" }}>
        <motion.div style={{ y: parallaxY }}>
          <SectionTitle>Nossa História</SectionTitle>
          <Timeline>
            <TimelineItem>
              <TimelineDot />
              <div>
                <h4>Origem acadêmica</h4>
                <p>Quatro estudantes uniram paixão por hardware e software.</p>
              </div>
            </TimelineItem>
            <TimelineItem>
              <TimelineDot />
              <div>
                <h4>Primeiro catálogo</h4>
                <p>Lançamento com curadoria de laptops, desktops e periféricos.</p>
              </div>
            </TimelineItem>
            <TimelineItem>
              <TimelineDot />
              <div>
                <h4>Escala nacional</h4>
                <p>Parcerias com fornecedores e logística otimizada.</p>
              </div>
            </TimelineItem>
          </Timeline>
        </motion.div>
      </Section>

      <Section>
        <SectionTitle>Missão, Visão e Valores</SectionTitle>
        <GlassGrid>
          <GlassCard whileHover={{ rotateX: 6, rotateY: -6 }}>
            <GlassIcon><FiTarget size={26} /></GlassIcon>
            <h4>Missão</h4>
            <p>Capacitar escolhas inteligentes com tecnologia acessível e suporte.</p>
          </GlassCard>
          <GlassCard whileHover={{ rotateX: -6, rotateY: 6 }}>
            <GlassIcon><FiEye size={26} /></GlassIcon>
            <h4>Visão</h4>
            <p>Ser referência nacional em e-commerce tecnológico.</p>
          </GlassCard>
          <GlassCard whileHover={{ rotateX: 6, rotateY: 6 }}>
            <GlassIcon><FiHeart size={26} /></GlassIcon>
            <h4>Valores</h4>
            <p>Transparência, performance, compromisso e experiência do cliente.</p>
          </GlassCard>
        </GlassGrid>
      </Section>

      <Section>
        <SectionTitle>Sobre o Sistema</SectionTitle>
        <ModulesGrid>
          {modules.map((m, i) => (
            <ModuleCard key={i} onMouseMove={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - r.left;
              const y = e.clientY - r.top;
              const rx = ((y / r.height) - 0.5) * -10;
              const ry = ((x / r.width) - 0.5) * 10;
              e.currentTarget.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg)`;
            }} onMouseLeave={(e) => {
              e.currentTarget.style.transform = "perspective(700px) rotateX(0deg) rotateY(0deg)";
            }}>
              <div className="icon">{m.icon}</div>
              <h5>{m.title}</h5>
              <p>{m.desc}</p>
            </ModuleCard>
          ))}
        </ModulesGrid>
      </Section>

      <MembersSection>
        <SectionTitle>Equipe</SectionTitle>
        {members.map((mem, idx) => (
          <MemberItem key={idx} as={motion.div} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.15 }}>
            <MemberPhoto style={{ backgroundImage: mem.photo ? `url(${mem.photo})` : "linear-gradient(135deg,#1f1f1f,#2a2a2a)" }} />
            <MemberInfo>
              <h4>{mem.name}</h4>
              <p>{mem.role}</p>
            </MemberInfo>
          </MemberItem>
        ))}
      </MembersSection>

      <FutureSection>
        <SectionTitle>Nosso Futuro</SectionTitle>
        <FutureGrid>
          <FutureItem as={motion.div} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="icon"><FiTruck size={24} /></div>
            <h5>Logística inteligente</h5>
            <p>Rotas otimizadas e prazos mais previsíveis.</p>
          </FutureItem>
          <FutureItem as={motion.div} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="icon"><FiStar size={24} /></div>
            <h5>Experiência avançada</h5>
            <p>Recomendações e avaliações mais ricas.</p>
          </FutureItem>
          <FutureItem as={motion.div} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="icon"><FiUsers size={24} /></div>
            <h5>Comunidade</h5>
            <p>Conteúdo e suporte colaborativo.</p>
          </FutureItem>
        </FutureGrid>
      </FutureSection>
    </Page>
  );
};

export default Institutional;