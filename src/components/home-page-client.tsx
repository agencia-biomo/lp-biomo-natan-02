"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, type Variants } from "framer-motion";
import { ShaderBackground, HeroContent, Header } from "@/components/ui/shaders-hero-section";
import { WhatsAppPopup } from "@/components/ui/whatsapp-popup";
import { QuoteModal } from "@/components/ui/quote-modal";
import { Monitor, TrendingUp, Target, MessageCircle, Shield, Zap, Users, ChevronDown } from "lucide-react";

// Animation variants for scroll reveal
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

// Enhanced animation variants
const fadeInScale: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6 }
  }
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Scroll Progress Indicator Component
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 origin-left z-50"
      style={{ scaleX }}
    />
  );
}

// Floating CTA Component
function FloatingCTA({ onClick }: { onClick: () => void }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.button
      onClick={onClick}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: show ? 0 : 100, opacity: show ? 1 : 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed bottom-24 left-4 sm:left-6 z-40 px-4 sm:px-6 py-2.5 sm:py-3 bg-purple-600 hover:bg-purple-500 text-white text-xs sm:text-sm font-light rounded-full shadow-lg shadow-purple-600/30 transition-colors"
    >
      Solicitar Orçamento
    </motion.button>
  );
}

// Section Divider Component
function SectionDivider() {
  return (
    <div className="w-full max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent my-0" />
  );
}

// 3D Tilt Card Component
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPos = (e.clientX - rect.left) / rect.width - 0.5;
    const yPos = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPos);
    y.set(yPos);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className={`transform-gpu perspective-1000 ${className}`}
    >
      {children}
    </motion.div>
  );
}

// FAQ Data
const faqItems = [
  {
    question: "Quanto tempo leva para criar um site?",
    answer: "O prazo varia de acordo com a complexidade do projeto. Sites institucionais levam em média 2-3 semanas, enquanto e-commerces podem levar de 4-6 semanas. Sempre definimos prazos claros no início do projeto."
  },
  {
    question: "Quanto custa os serviços da Biomo?",
    answer: "Cada projeto é único e o investimento depende das suas necessidades específicas. Oferecemos orçamentos personalizados e transparentes. Entre em contato para uma análise gratuita do seu projeto."
  },
  {
    question: "Como funciona a Garantia Total?",
    answer: "Nossa Garantia Total significa que se você não estiver satisfeito com o resultado final, refazemos o trabalho sem custo adicional. Trabalhamos até você aprovar 100% do projeto."
  },
  {
    question: "Vocês atendem empresas de qualquer tamanho?",
    answer: "Sim! Atendemos desde profissionais autônomos e pequenos negócios até médias e grandes empresas. Adaptamos nossas soluções e investimentos para cada realidade."
  },
  {
    question: "Como acompanho os resultados?",
    answer: "Fornecemos relatórios mensais detalhados e acesso a dashboards em tempo real. Você terá visibilidade completa de todas as métricas importantes do seu projeto."
  }
];

// FAQ Item Component with dynamic height
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [answer]);

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 sm:py-5 md:py-6 flex items-center justify-between text-left hover:text-purple-400 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="text-white font-light pr-4 sm:pr-6 md:pr-8 text-sm sm:text-base">{question}</span>
        <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-purple-400 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{ maxHeight: isOpen ? `${height + 24}px` : '0px' }}
      >
        <div ref={contentRef} className="pb-4 sm:pb-5 md:pb-6">
          <p className="text-white/60 font-light leading-relaxed text-xs sm:text-sm md:text-base">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export function HomePageClient() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <>
      {/* Shader de fundo fixo - cobre toda a página */}
      <ShaderBackground />

      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Floating CTA */}
      <FloatingCTA onClick={() => setIsQuoteModalOpen(true)} />

      {/* Todo o conteúdo rola sobre o shader */}
      <div className="relative z-10 w-full min-h-screen flex flex-col overflow-x-hidden">
        {/* Hero Section */}
        <Header />
        <HeroContent
          title="Criação de Sites de Alta Conversão"
          description="Sites profissionais que vendem. Desenvolvemos sites institucionais, landing pages e lojas virtuais otimizadas para Google — entrega em 7 dias com garantia de resultado."
          badgeText="Agência de Sites"
          badgeLabel="⭐ 5.0/5 Google"
          ctaButtons={[
            { text: "Criar Meu Site Agora", onClick: () => setIsQuoteModalOpen(true), primary: true },
            { text: "Ver Portfólio", href: "#resultados" }
          ]}
        />

        {/* Services Section */}
        <section id="servicos" aria-labelledby="servicos-titulo" className="relative py-16 sm:py-20 md:py-24 px-5 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 id="servicos-titulo" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight text-white mb-3 sm:mb-4 tracking-tight">
              Sites Profissionais Para Sua Empresa
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto font-light text-sm sm:text-base px-2">
              Do site institucional à loja virtual. Criamos sites que geram resultados reais para seu negócio.
            </p>
            <p className="mt-2 sm:mt-3 text-purple-400 font-semibold text-base sm:text-lg">
              A partir de R$ 997
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Service Card 1 */}
            <motion.div variants={fadeInScale}>
              <TiltCard>
                <div className="group p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md shadow-xl shadow-purple-900/10 hover:bg-black/50 hover:border-purple-500/30 transition-all duration-300 h-full">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-purple-600/20">
                    <Monitor className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-light text-white mb-2 sm:mb-3">Sites Profissionais</h3>
                  <p className="text-white/60 text-xs sm:text-sm font-light mb-4 sm:mb-6 leading-relaxed">
                    Sites modernos, rápidos e otimizados para converter visitantes em clientes.
                  </p>
                  <ul className="space-y-1.5 sm:space-y-2">
                    <li className="flex items-center gap-2 text-white/50 text-xs sm:text-sm">
                      <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                      Design responsivo
                    </li>
                    <li className="flex items-center gap-2 text-white/50 text-xs sm:text-sm">
                      <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                      Otimizado para SEO
                    </li>
                    <li className="flex items-center gap-2 text-white/50 text-xs sm:text-sm">
                      <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                      Integração com analytics
                    </li>
                  </ul>
                </div>
              </TiltCard>
            </motion.div>

            {/* Service Card 2 */}
            <motion.div variants={fadeInScale}>
              <TiltCard>
                <div className="group p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md shadow-xl shadow-purple-900/10 hover:bg-black/50 hover:border-purple-500/30 transition-all duration-300 h-full">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-purple-600/20">
                    <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-light text-white mb-2 sm:mb-3">SEO & Posicionamento</h3>
                  <p className="text-white/60 text-xs sm:text-sm font-light mb-4 sm:mb-6 leading-relaxed">
                    Apareça no topo do Google e seja encontrado por quem procura seus serviços.
                  </p>
                  <ul className="space-y-1.5 sm:space-y-2">
                    <li className="flex items-center gap-2 text-white/50 text-xs sm:text-sm">
                      <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                      SEO técnico e on-page
                    </li>
                    <li className="flex items-center gap-2 text-white/50 text-xs sm:text-sm">
                      <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                      Estratégia de conteúdo
                    </li>
                    <li className="flex items-center gap-2 text-white/50 text-xs sm:text-sm">
                      <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                      Link building
                    </li>
                  </ul>
                </div>
              </TiltCard>
            </motion.div>

            {/* Service Card 3 */}
            <motion.div variants={fadeInScale}>
              <TiltCard>
                <div className="group p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md shadow-xl shadow-purple-900/10 hover:bg-black/50 hover:border-purple-500/30 transition-all duration-300 h-full">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-purple-600/20">
                    <Target className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-light text-white mb-2 sm:mb-3">Tráfego Pago</h3>
                  <p className="text-white/60 text-xs sm:text-sm font-light mb-4 sm:mb-6 leading-relaxed">
                    Campanhas estratégicas em Google Ads e Meta Ads para resultados imediatos.
                  </p>
                  <ul className="space-y-1.5 sm:space-y-2">
                    <li className="flex items-center gap-2 text-white/50 text-xs sm:text-sm">
                      <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                      Google Ads
                    </li>
                    <li className="flex items-center gap-2 text-white/50 text-xs sm:text-sm">
                      <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                      Meta Ads (Facebook/Instagram)
                    </li>
                    <li className="flex items-center gap-2 text-white/50 text-xs sm:text-sm">
                      <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                      Remarketing avançado
                    </li>
                  </ul>
                </div>
              </TiltCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Differentials Section */}
      <section aria-labelledby="diferenciais-titulo" className="relative py-16 sm:py-20 md:py-24 px-5 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 id="diferenciais-titulo" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight text-white mb-3 sm:mb-4 tracking-tight">
              Por que escolher a Biomo?
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto font-light text-sm sm:text-base px-2">
              Compromisso com resultados e satisfação total do cliente.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={fadeInUp} transition={{ duration: 0.6 }} className="text-center p-4 sm:p-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-purple-600/20 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Shield className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-purple-400" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-light text-white mb-1.5 sm:mb-2">Garantia Total</h3>
              <p className="text-white/50 text-xs sm:text-sm font-light leading-relaxed">
                Satisfação garantida ou seu dinheiro de volta.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} transition={{ duration: 0.6 }} className="text-center p-4 sm:p-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-purple-600/20 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Zap className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-purple-400" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-light text-white mb-1.5 sm:mb-2">Entrega Rápida</h3>
              <p className="text-white/50 text-xs sm:text-sm font-light leading-relaxed">
                Projetos entregues no prazo combinado.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} transition={{ duration: 0.6 }} className="text-center p-4 sm:p-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-purple-600/20 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-purple-400" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-light text-white mb-1.5 sm:mb-2">Suporte Dedicado</h3>
              <p className="text-white/50 text-xs sm:text-sm font-light leading-relaxed">
                Equipe disponível para ajudar você.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} transition={{ duration: 0.6 }} className="text-center p-4 sm:p-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-purple-600/20 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-purple-400" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-light text-white mb-1.5 sm:mb-2">Resultados Reais</h3>
              <p className="text-white/50 text-xs sm:text-sm font-light leading-relaxed">
                Métricas claras e resultados mensuráveis.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Testimonials Section */}
      <section id="resultados" aria-labelledby="depoimentos-titulo" className="relative py-16 sm:py-20 md:py-24 px-5 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 id="depoimentos-titulo" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight text-white mb-3 sm:mb-4 tracking-tight">
              O que nossos clientes dizem
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto font-light text-sm sm:text-base px-2">
              Avaliações reais do Google - <a href="https://share.google/eCYIhrFlaLVZNJsSb" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">Nota 5.0 ★</a>
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Testimonial 1 */}
            <motion.div variants={fadeInLeft}>
              <TiltCard>
                <div className="p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md shadow-xl shadow-purple-900/10 h-full">
                  <div className="text-yellow-400 text-lg sm:text-xl mb-3 sm:mb-4">★★★★★</div>
                  <p className="text-white/80 text-xs sm:text-sm font-light leading-relaxed mb-4 sm:mb-6 italic">
                    "Contratei mais de quatro empresas que prometiam resultados, mas não entregaram. Com a Biomo, as mudanças começaram em uma semana. Os clientes do Google melhoraram e depois os do Facebook também."
                  </p>
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-purple-600/30 flex items-center justify-center text-white text-xs sm:text-sm font-medium flex-shrink-0">
                      CO
                    </div>
                    <div>
                      <div className="text-white text-xs sm:text-sm font-medium">Cesar Oliveira</div>
                      <div className="text-white/50 text-[10px] sm:text-xs">Up Mais Imóveis</div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div variants={fadeInScale}>
              <TiltCard>
                <div className="p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md shadow-xl shadow-purple-900/10 h-full">
                  <div className="text-yellow-400 text-lg sm:text-xl mb-3 sm:mb-4">★★★★★</div>
                  <p className="text-white/80 text-xs sm:text-sm font-light leading-relaxed mb-4 sm:mb-6 italic">
                    "O Thiago é muito profissional e confiável. Já tive dois sites construídos por ele e nunca me arrependi! Os sites ficam maravilhosos e ele nos ajuda com dúvidas. Super profissional! Altamente recomendado!"
                  </p>
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-purple-600/30 flex items-center justify-center text-white text-xs sm:text-sm font-medium flex-shrink-0">
                      TP
                    </div>
                    <div>
                      <div className="text-white text-xs sm:text-sm font-medium">Talita Portela</div>
                      <div className="text-white/50 text-[10px] sm:text-xs">Local Guide Google</div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div variants={fadeInRight}>
              <TiltCard>
                <div className="p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md shadow-xl shadow-purple-900/10 h-full">
                  <div className="text-yellow-400 text-lg sm:text-xl mb-3 sm:mb-4">★★★★★</div>
                  <p className="text-white/80 text-xs sm:text-sm font-light leading-relaxed mb-4 sm:mb-6 italic">
                    "A equipe está fazendo um ótimo trabalho, entregando mais do que o prometido, ouvindo, processando e fornecendo um serviço rápido e excelente... está valendo a pena!"
                  </p>
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-purple-600/30 flex items-center justify-center text-white text-xs sm:text-sm font-medium flex-shrink-0">
                      SR
                    </div>
                    <div>
                      <div className="text-white text-xs sm:text-sm font-medium">Sidney Rodrigues</div>
                      <div className="text-white/50 text-[10px] sm:text-xs">Cliente Biomo</div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Video Proofs Section */}
      <section id="videos" aria-labelledby="videos-titulo" className="relative py-16 sm:py-20 md:py-24 px-5 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 id="videos-titulo" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight text-white mb-3 sm:mb-4 tracking-tight">
              Resultados em Vídeo
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto font-light text-sm sm:text-base px-2">
              Veja depoimentos reais de clientes satisfeitos com nosso trabalho.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Video 1 - VM Eventos */}
            <motion.div variants={fadeInLeft} className="w-full max-w-[280px] sm:max-w-[300px]">
              <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md shadow-xl shadow-purple-900/10 overflow-hidden hover:border-purple-500/40 transition-all duration-300">
                <div className="relative w-full" style={{ paddingTop: '176.67%' }}>
                  <iframe
                    src="https://player.vimeo.com/video/1126950771?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                    frameBorder="0"
                    allow="fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="absolute top-0 left-0 w-full h-full"
                    title="VM Eventos"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <a href="https://vmevento.com.br/" target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg font-light text-white mb-1 block hover:text-purple-400 transition-colors">VM Eventos</a>
                  <p className="text-white/50 text-xs sm:text-sm font-light">Depoimento de cliente satisfeito</p>
                </div>
              </div>
            </motion.div>

            {/* Video 2 - Med Menosso */}
            <motion.div variants={fadeInScale} className="w-full max-w-[280px] sm:max-w-[300px]">
              <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md shadow-xl shadow-purple-900/10 overflow-hidden hover:border-purple-500/40 transition-all duration-300">
                <div className="relative w-full" style={{ paddingTop: '176.67%' }}>
                  <iframe
                    src="https://player.vimeo.com/video/1128324994?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                    frameBorder="0"
                    allow="fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="absolute top-0 left-0 w-full h-full"
                    title="Med Menosso"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <a href="https://institutomedmenosso.com.br/" target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg font-light text-white mb-1 block hover:text-purple-400 transition-colors">Med Menosso</a>
                  <p className="text-white/50 text-xs sm:text-sm font-light">Depoimento de cliente satisfeito</p>
                </div>
              </div>
            </motion.div>

            {/* Video 3 - Eliore Studio */}
            <motion.div variants={fadeInRight} className="w-full max-w-[280px] sm:max-w-[300px]">
              <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md shadow-xl shadow-purple-900/10 overflow-hidden hover:border-purple-500/40 transition-all duration-300">
                <div className="relative w-full" style={{ paddingTop: '176.67%' }}>
                  <iframe
                    src="https://player.vimeo.com/video/1127665257?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                    frameBorder="0"
                    allow="fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="absolute top-0 left-0 w-full h-full"
                    title="Eliore Studio"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <a href="https://eliorestudio.com.br/" target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg font-light text-white mb-1 block hover:text-purple-400 transition-colors">Eliore Studio</a>
                  <p className="text-white/50 text-xs sm:text-sm font-light">Depoimento de cliente satisfeito</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* FAQ Section */}
      <section id="faq" aria-labelledby="faq-titulo" className="relative py-16 sm:py-20 md:py-24 px-5 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 id="faq-titulo" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight text-white mb-3 sm:mb-4 tracking-tight">
              Perguntas Frequentes
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto font-light text-sm sm:text-base px-2">
              Tire suas dúvidas sobre nossos serviços.
            </p>
          </div>

          <div className="divide-y divide-white/10 border-t border-white/10">
            {faqItems.map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Contact Section */}
      <section id="contato" aria-labelledby="contato-titulo" className="relative py-16 sm:py-20 md:py-24 px-5 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="contato-titulo" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight text-white mb-3 sm:mb-4 tracking-tight">
            Pronto para começar?
          </h2>
          <p className="text-white/60 mb-8 sm:mb-10 font-light text-sm sm:text-base px-2">
            Entre em contato e receba uma proposta personalizada para o seu negócio.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-purple-600 text-white text-sm sm:text-base font-light hover:bg-purple-500 transition-colors"
            >
              Solicitar Orçamento
            </button>
            <a
              href="https://wa.me/5547996067992?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Biomo%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-green-600 text-white text-sm sm:text-base font-light hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 sm:py-10 px-5 sm:px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          {/* Google Partner Badge */}
          <a href="https://www.google.com/partners/agency?id=8946336424" target="_blank" rel="noopener noreferrer" className="inline-block mb-4 sm:mb-6">
            <img src="https://www.gstatic.com/partners/badge/images/2025/PartnerBadgeClickable.svg" alt="Google Partner" className="h-12 sm:h-16" />
          </a>
          <p className="text-white/50 text-xs sm:text-sm font-light mb-1.5 sm:mb-2">
            Balneário Camboriú - SC, Brasil
          </p>
          <p className="text-white/50 text-xs sm:text-sm font-light mb-3 sm:mb-4">
            <a href="mailto:thiago@biomo.com.br" className="hover:text-purple-400 transition-colors">thiago@biomo.com.br</a>
            <span className="mx-1.5 sm:mx-2">|</span>
            <a href="https://wa.me/5547996067992" className="hover:text-purple-400 transition-colors">(47) 99606-7992</a>
          </p>
          <p className="text-white/40 text-[10px] sm:text-sm font-light mb-1.5 sm:mb-2">
            © 2024 Biomo - Agência de Marketing Digital. Todos os direitos reservados.
          </p>
          <p className="text-white/30 text-[10px] sm:text-xs">
            <a href="/privacidade" className="hover:text-white/60 transition-colors">Política de Privacidade</a>
            <span className="mx-1.5 sm:mx-2">|</span>
            <a href="/termos" className="hover:text-white/60 transition-colors">Termos de Uso</a>
          </p>
        </div>
      </footer>

      {/* WhatsApp Popup */}
      <WhatsAppPopup phoneNumber="5547996067992" />

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      </div>
    </>
  );
}
