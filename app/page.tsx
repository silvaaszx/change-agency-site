/* Landing Page da Change Agency — SaaS Premium / Agência High-End */

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Instagram,
  Layers,
  Linkedin,
  Menu,
  MessageCircleMore,
  TrendingUp,
  Sparkles,
  X,
  type LucideIcon,
} from 'lucide-react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/* Grid SVG muito sutil para textura de tecnologia no fundo */
const GridBackground = () => (
  <div className="pointer-events-none fixed inset-0 -z-20 opacity-[0.04]">
    <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern
          id="grid"
          width="48"
          height="48"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 48 0 L 0 0 0 48"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>
);

/* Noise/grain sutil em tela cheia — textura física, opacidade bem baixa */
const NoiseOverlay = () => (
  <div
    className="pointer-events-none fixed inset-0 -z-[6] opacity-[0.03] mix-blend-overlay"
    aria-hidden
  >
    <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
      <filter id="noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.8"
          numOctaves="4"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)" />
    </svg>
  </div>
);

/* Mesh gradient atmosférico: manchas gigantes, irregulares, muito borradas (vinho + cinza espacial), posição assimétrica */
const MeshGradientBackground = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute -left-[20%] -top-[10%] h-[32rem] w-[36rem] rounded-full bg-[#600018] opacity-20 blur-[180px]" />
    <div className="absolute right-[5%] top-[15%] h-[28rem] w-[30rem] rounded-full bg-[#30000a] opacity-25 blur-[160px]" />
    <div className="absolute bottom-[10%] left-[30%] h-[26rem] w-[28rem] rounded-full bg-[#1a0a0e] opacity-30 blur-[170px]" />
    <div className="absolute bottom-[25%] right-[15%] h-[24rem] w-[26rem] rounded-full bg-[#0f0a0c] opacity-35 blur-[150px]" />
    <div className="absolute left-[10%] top-[45%] h-[22rem] w-[24rem] rounded-full bg-[#1a1518] opacity-25 blur-[155px]" />
    <div className="absolute right-[25%] top-[55%] h-[20rem] w-[28rem] rounded-full bg-[#600018] opacity-15 blur-[165px]" />
  </div>
);

/* Pontos de luz flutuantes (estrelinhas/partículas) para sensação espacial — opacidade 10% */
const PARTICLE_POSITIONS = [
  [12, 8], [88, 15], [45, 22], [72, 38], [5, 45], [95, 52], [28, 58], [60, 72], [18, 85], [82, 90],
  [35, 12], [68, 28], [8, 65], [92, 78], [50, 42], [22, 35], [78, 55], [42, 88], [55, 18], [70, 62],
  [15, 48], [85, 32], [30, 75], [65, 8],
];
const FloatingParticles = () => (
  <div className="pointer-events-none fixed inset-0 -z-[8] overflow-hidden">
    {PARTICLE_POSITIONS.map(([left, top], i) => (
      <div
        key={i}
        className={`absolute h-1 w-1 rounded-full bg-white opacity-10 ${i % 3 === 0 ? 'animate-pulse' : ''}`}
        style={{ left: `${left}%`, top: `${top}%` }}
      />
    ))}
  </div>
);

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const servicesData: Service[] = [
  {
    title: 'Design UI/UX',
    description: 'Criamos interfaces premium e focadas em conversão.',
    icon: Layers,
  },
  {
    title: 'Engenharia Web',
    description: 'Desenvolvimento front-end e back-end escalável.',
    icon: Code2,
  },
  {
    title: 'Performance & Tráfego',
    description: 'Estratégias de ROI e otimização de conversão.',
    icon: TrendingUp,
  },
  {
    title: 'Branding Digital',
    description: 'Posicionamento de marca e identidade visual.',
    icon: Sparkles,
  },
];

const servicesContainerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const serviceCardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

type PortfolioItem = {
  id: number;
  title: string;
  category: string;
  color: string;
};

const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: 'Fintech App',
    category: 'Design UI/UX',
    color: '#600018',
  },
  {
    id: 2,
    title: 'E-commerce Premium',
    category: 'Engenharia Web',
    color: '#3b0b12',
  },
  {
    id: 3,
    title: 'Plataforma B2B',
    category: 'Engenharia Web',
    color: '#4a0f18',
  },
  {
    id: 4,
    title: 'Identidade Digital',
    category: 'Branding Digital',
    color: '#30000a',
  },
];

const portfolioContainerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.1,
      delayChildren: 0.12,
    },
  },
};

const portfolioCardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const manifestoTextVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    color: '#9ca3af',
  },
  visible: {
    opacity: 1,
    y: 0,
    color: '#f9fafb',
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0406] text-slate-100">
      <GridBackground />
      <NoiseOverlay />
      <FloatingParticles />
      <MeshGradientBackground />

      {/* Header fixo com glassmorphism completo e pronto para logo oficial */}
      <header className="fixed inset-x-0 top-0 z-[50] border-b border-white/5 bg-black/30/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl justify-between items-center px-6 py-3.5">
          {/* Marca oficial: Selo quadrado gradiente vinho + 'Cs' entrelaçados metálicos + textos tipográficos "CHANGE AGENCY" */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0 }}
            className="flex items-center gap-3"
          >
            <div className="flex items-center gap-2 select-none">
              {/* Selo quadrado gradiente vinho */}
              <div className="relative h-8 w-8 rounded-xl bg-gradient-to-br from-[#600018] to-[#30000a] shadow-[0_0_25px_rgba(190,24,93,0.8)] flex items-center justify-center">
                {/* Glow branco metálico atrás do SVG */}
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="block h-7 w-7 rounded-full bg-white opacity-10 blur-md" />
                </span>
                {/* SVG dos 'Cs' entrelaçados */}
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  className="relative z-10 h-6 w-6"
                  aria-hidden="true"
                >
                  <defs>
                    {/* Gradiente linear metálico prata para os 'Cs' */}
                    <linearGradient id="c-metal" x1="0" y1="0" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#cbd5e1" />{/* slate-300 */}
                      <stop offset="0.5" stopColor="#f8fafc" />{/* slate-50 */}
                      <stop offset="1" stopColor="#e2e8f0" />{/* slate-200 - sutil para polimento */}
                    </linearGradient>
                  </defs>
                  {/* C externo */}
                  <path
                    d="M16.7 6.5a6 6 0 1 0 0 9"
                    stroke="url(#c-metal)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* C interno (interlaçado) */}
                  <path
                    d="M12.7 7.5a4 4 0 1 0 0 7"
                    stroke="url(#c-metal)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              {/* Tipografia elegante para nome da marca */}
              <span className="flex flex-col leading-5">
                <span className="font-extrabold text-base tracking-tight text-white">
                  CHANGE
                </span>
                <span className="font-light text-xs tracking-widest text-slate-200 opacity-80">
                  AGENCY
                </span>
              </span>
            </div>
          </motion.div>

          {/* Navegação desktop */}
          <motion.nav
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
            className="hidden items-center gap-8 text-sm text-slate-200/80 md:flex"
          >
            <a href="#servicos" className="transition hover:text-slate-50">
              Serviços
            </a>
            <a href="#quem-somos" className="transition hover:text-slate-50">
              Quem Somos
            </a>
            <a href="#portfolio" className="transition hover:text-slate-50">
              Portfólio
            </a>
            <Link
              href="/aplicacao"
              className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-slate-50 shadow-[0_0_26px_rgba(96,0,24,0.55)] transition hover:border-white/40 hover:bg-white/10"
            >
              Contato
            </Link>
          </motion.nav>

          {/* Ação / menu mobile — toggle abre/fecha e alterna ícone */}
          <motion.button
            type="button"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/40 text-slate-100 shadow-[0_0_18px_rgba(15,23,42,0.65)] backdrop-blur-md md:hidden"
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
          >
            {isMobileMenuOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
          </motion.button>
        </div>

        {/* Painel dropdown mobile (glassmorphism) — só aparece quando aberto */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 top-full w-full border-b border-white/10 bg-black/90 px-6 py-6 backdrop-blur-md md:hidden"
          >
            <nav className="flex flex-col gap-6">
              <a
                href="#servicos"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-200 transition hover:text-white"
              >
                Serviços
              </a>
              <a
                href="#quem-somos"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-200 transition hover:text-white"
              >
                Quem Somos
              </a>
              <a
                href="#portfolio"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-200 transition hover:text-white"
              >
                Portfólio
              </a>
              <Link
                href="/aplicacao"
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-full border border-white/20 bg-white/5 px-4 py-2.5 text-center text-xs font-medium uppercase tracking-[0.18em] text-slate-50 transition hover:border-white/40 hover:bg-white/10 w-fit"
              >
                Contato
              </Link>
            </nav>
          </motion.div>
        )}
      </header>

      <main className="mx-auto flex max-w-7xl flex-col px-6 pt-28 pb-20 overflow-x-hidden">
        <div className="flex min-h-[calc(100vh-8rem)] flex-col lg:flex-row lg:items-center lg:gap-16">
          {/* Hero — Coluna esquerda: textos e botões */}
          <section className="relative flex flex-1 flex-col justify-center gap-10 lg:max-w-xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              <p className="inline-flex items-center rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-slate-300/80 backdrop-blur">
                Estúdio digital focado em impacto real
              </p>

              <h1 className="text-balance text-5xl font-semibold tracking-tight text-slate-50 sm:text-6xl md:text-7xl">
                Transformando visão em{' '}
                <span className="bg-gradient-to-r from-slate-300 via-slate-100 to-slate-400 bg-clip-text text-transparent [text-shadow:0_0_80px_rgba(255,255,255,0.15)]">
                  realidade digital
                </span>
              </h1>

              <p className="max-w-xl text-pretty text-sm text-slate-300/80 sm:text-base">
                Criamos experiências digitais sob medida que conectam marca, produto e resultado.
                Da primeira linha de código ao último pixel, cada detalhe é pensado para elevar a
                percepção da sua empresa no ambiente digital.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Link
                href="/aplicacao"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#600018] via-[#b91c1c] to-[#30000a] px-7 py-3 text-sm font-medium text-slate-50 shadow-[0_0_35px_rgba(248,113,113,0.75)] transition hover:shadow-[0_0_55px_rgba(248,113,113,0.95)] focus:outline-none focus:ring-2 focus:ring-[#f87171]/70 focus:ring-offset-2 focus:ring-offset-black"
              >
                <MessageCircleMore className="h-4 w-4" />
                <span>Falar com Especialista</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-medium text-slate-100/90 backdrop-blur-md transition hover:border-white/40 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-slate-200/60 focus:ring-offset-2 focus:ring-offset-black">
                <span>Ver Portfólio</span>
              </button>
            </motion.div>
          </section>

          {/* Coluna direita: composição visual dinâmica com cards glassmorphism + animação flutuante */}
          <section className="relative hidden min-h-[420px] flex-1 items-center justify-center lg:flex">
            {/* Glow local atrás dos cards — vinho difuso */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="h-72 w-72 rounded-full bg-[#600018] opacity-30 blur-[140px]" />
              <div className="absolute bottom-1/3 right-1/4 h-48 w-48 rounded-full bg-[#30000a] opacity-25 blur-[120px]" />
            </div>

            {/* Composição orgânica: cards com alturas e sobreposição irregulares (profundidade 3D) */}
            <div className="relative flex h-[400px] items-end justify-center gap-0">
              {/* Card 1 — esquerda, um pouco mais baixo; sobrepõe pelo lado */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ delay: 0.15 }}
                className="relative z-10 -translate-x-3 translate-y-8 shrink-0 -mr-5"
              >
                <motion.div
                  animate={{ y: [0, -14, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="flex justify-center"
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="flex h-44 w-52 flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-shadow duration-200 hover:border-white/30 hover:shadow-[0_0_30px_rgba(96,0,24,0.4)]"
                  >
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-slate-300" />
                      <span className="text-xs font-medium uppercase tracking-wider text-slate-400">Performance</span>
                    </div>
                    <div>
                      <p className="text-2xl font-semibold tabular-nums text-slate-100">+148% ROI</p>
                      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '78%' }}
                          transition={{ duration: 1.2, delay: 0.3 }}
                          className="h-full rounded-full bg-gradient-to-r from-[#600018] to-[#800020]"
                        />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Card 2 — centro, ligeiramente mais alto; sobrepõe as bordas dos outros */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ delay: 0.25 }}
                className="relative z-20 shrink-0 -translate-y-10 translate-x-0.5 -mx-1"
              >
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                  className="flex justify-center"
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="flex h-52 w-40 flex-col rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-shadow duration-200 hover:border-white/30 hover:shadow-[0_0_30px_rgba(96,0,24,0.4)]"
                  >
                    <div className="flex items-center gap-2">
                      <Layers className="h-5 w-5 text-slate-300" />
                      <span className="text-xs font-medium uppercase tracking-wider text-slate-400">Design UI/UX</span>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {['#600018', '#800020', '#94a3b8', '#cbd5e1', '#ffffff'].map((color, i) => (
                        <div
                          key={i}
                          className="h-8 w-8 rounded-lg border border-white/10 shadow-inner"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Card 3 — direita, mais baixo; sobrepõe pelo lado esquerdo */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ delay: 0.35 }}
                className="relative z-10 translate-x-2 translate-y-12 shrink-0 -ml-5"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
                  className="flex justify-center"
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="flex h-40 w-48 flex-col rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-shadow duration-200 hover:border-white/30 hover:shadow-[0_0_30px_rgba(96,0,24,0.4)]"
                  >
                    <div className="flex items-center gap-2">
                      <Code2 className="h-5 w-5 text-slate-300" />
                      <span className="text-xs font-medium uppercase tracking-wider text-slate-400">Engenharia Web</span>
                    </div>
                    <div className="mt-3 space-y-1.5 font-mono text-[10px] text-slate-400">
                      <div className="flex gap-2"><span className="text-slate-400">const</span> <span className="text-slate-300">product</span> = <span className="text-slate-200">&#39;digital&#39;</span>;</div>
                      <div className="flex gap-2"><span className="text-slate-400">return</span> <span className="text-slate-300">&lt;Experience /&gt;</span>;</div>
                      <div className="h-px w-3/4 bg-white/10" />
                      <div className="flex gap-2"><span className="text-slate-500">// clean code</span></div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </div>

        {/* Seção Nossos Serviços / Especialidades */}
        <section
          id="servicos"
          className="relative mt-20 w-full lg:mt-24 lg:flex lg:flex-col lg:gap-10 lg:pt-6"
        >
          {/* Glow de fundo para atmosfera vinho sutil e depth visual */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 z-0 h-[440px] w-[95vw] -translate-x-1/2 bg-[#600018]/10 blur-[120px] rounded-3xl"
          />

          {/* Cabeçalho da seção */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="mb-10 text-center lg:mb-12 lg:text-left relative z-10"
          >
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
              Nossos serviços
            </p>
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Nossas Especialidades
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-400 lg:mx-0">
              Uma combinação de estratégia, design e engenharia para construir produtos digitais
              que realmente performam.
            </p>
          </motion.div>

          {/* Grid de serviços com animação em cascata (stagger) */}
          <motion.div
            className="relative z-10 grid gap-8 sm:grid-cols-2 xl:grid-cols-4"
            variants={servicesContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {servicesData.map((service) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
                  variants={serviceCardVariants}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="group flex flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 min-h-[260px] backdrop-blur-xl transition-colors transition-shadow duration-200 hover:border-[#600018]/70 hover:shadow-[0_0_36px_rgba(96,0,24,0.60)]"
                >
                  <div className="mb-7 flex items-center justify-start">
                    <span
                      className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#600018] to-[#30000a] shadow-[0_0_36px_0px_#60001880,0_2px_12px_0px_#30000a40] group-hover:scale-105 transition-transform duration-200"
                    >
                      <Icon className="h-7 w-7 text-white drop-shadow-[0_2px_8px_rgba(96,0,24,0.32)]" />
                    </span>
                  </div>
                  <div className="mb-2">
                    <span className="text-xl font-semibold text-white drop-shadow-[0_1.5px_6px_rgba(255,255,255,0.20)]">
                      {service.title}
                    </span>
                  </div>
                  <p className="text-sm text-slate-200">{service.description}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </section>

        {/* Seção Portfólio / Cases de Sucesso */}
        <section
          id="portfolio"
          className="relative mt-20 w-full lg:mt-24 lg:pt-4"
        >
          {/* Cabeçalho da seção de portfólio */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="mb-10 text-center lg:mb-12 lg:text-left"
          >
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
              Nossos trabalhos
            </p>
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Projetos em Destaque
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-400 lg:mx-0">
              Uma amostra dos produtos digitais que entregamos para marcas que buscam se posicionar
              em um novo patamar.
            </p>
          </motion.div>

          {/* Grid de portfólio — cards grandes, 2 colunas no desktop */}
          <motion.div
            className="grid gap-8 md:grid-cols-2"
            variants={portfolioContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            {portfolioData.map((project) => (
              <motion.article
                key={project.id}
                variants={portfolioCardVariants}
                className="group relative flex h-[260px] flex-col justify-end overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl sm:h-[320px] lg:h-[380px]"
                whileHover={{ y: -14 }}
                transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Fundo base do projeto com cor e leve textura */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: `
                      linear-gradient(120deg, rgba(91,26,49,0.12) 0%, rgba(30,0,12,0.025) 90%),
                      radial-gradient(circle at 0% 0%, rgba(255,255,255,0.08), transparent 40%),
                      radial-gradient(circle at 100% 100%, rgba(15,23,42,0.75), transparent 60%),
                      ${project.color}
                    `,
                    zIndex: 0,
                  }}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                />

                {/* Glow radial de luxo no hover, em vinho bem difuso */}
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 z-10 flex items-end justify-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div
                    className="h-40 w-4/5 rounded-full"
                    style={{
                      filter: 'blur(100px)',
                      background:
                        'radial-gradient(ellipse at center, rgba(96,0,24,0.22) 35%, transparent 80%)',
                    }}
                  />
                </motion.div>

                {/* Gradiente escuro para legibilidade dos textos premium */}
                <div className="absolute inset-x-0 bottom-0 z-20 h-32 bg-gradient-to-t from-black/65 via-black/40 to-transparent" />

                {/* Conteúdo do card (título, categoria, ícone) */}
                <div className="relative z-30 flex items-end justify-between px-8 pb-8 pt-12">
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                      {project.category}
                    </p>
                    <h3 className="text-2xl font-semibold text-white drop-shadow-[0_3px_16px_rgba(0,0,0,0.52)]">
                      {project.title}
                    </h3>
                  </div>
                  <motion.span
                    initial={{ opacity: 0.6, x: 0, y: 0 }}
                    whileHover={{
                      opacity: 1,
                      x: 4,
                      y: -4,
                    }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="ml-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-200 shadow-[0_0_30px_rgba(255,255,255,0.18)] transition group-hover:border-white/30 group-hover:text-white"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </motion.span>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* Seção Manifesto / Quem Somos */}
        {/* Seção de Autoridade / Manifesto com Sócios */}
        <section
          id="quem-somos"
          className="relative w-full py-28 sm:py-32 lg:py-36"
        >
          {/* Importação do ícone Instagram: verifique se está importado em seu import lucide-react */}
          {/* import { Instagram } from 'lucide-react'; */}
          <div className="mx-auto max-w-6xl px-4 flex flex-col items-center">
            {/* Animação do Cabeçalho e Texto */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
                }
              }}
              className="flex flex-col items-center max-w-3xl mx-auto"
            >
              {/* Tagline - Título Premium */}
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-5 py-2 text-base font-semibold uppercase tracking-[0.21em] text-slate-300 backdrop-blur-md mb-3">
                <Sparkles className="h-4 w-4 text-slate-200" />
                Nossa Filosofia
              </span>
              {/* Título grande centralizado gradiente prata */}
              <h2 className="text-center text-5xl sm:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-300 via-slate-50 to-slate-400 [text-shadow:0_2px_48px_rgba(255,255,255,0.16)] mb-6">
                O DNA Change
              </h2>

              {/* Texto manifesto premium centralizado */}
              <div className="flex flex-col gap-4 text-lg sm:text-xl text-slate-100/95 leading-relaxed font-medium max-w-2xl mx-auto text-center mb-14">
                <p>
                  Não somos apenas uma agência de tecnologia. Somos arquitetos de experiências digitais.
                </p>
                <p>
                  Transformamos complexidade em soluções elegantes e visões em impacto real e mensurável.
                </p>
                <p>
                  Onde outros veem limites, nós enxergamos oportunidades: conectamos estratégia, design e tecnologia para marcas que querem liderar.
                </p>
              </div>
            </motion.div>

            {/* Grid dos Sócios com Animação em Cascata */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.08,
                  },
                },
              }}
              className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12"
            >
              {[
                {
                  name: 'SÓCIO 1',
                  role: 'CO-FOUNDER & CEO',
                },
                {
                  name: 'SÓCIO 2',
                  role: 'CO-FOUNDER & CTO',
                },
                {
                  name: 'SÓCIO 3',
                  role: 'CO-FOUNDER & HEAD OF GROWTH',
                },
                {
                  name: 'SÓCIO 4',
                  role: 'CO-FOUNDER & CFO',
                },
              ].map((socio, i) => (
                <motion.div
                  key={socio.name}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
                  }}
                  className="group relative flex flex-col justify-end aspect-[3/4] rounded-3xl border border-white/10 bg-gradient-to-br from-[#600018] via-[#30000a] to-[#1a0911] shadow-[0_2px_44px_rgba(96,0,24,0.11)] overflow-hidden backdrop-blur-md"
                >
                  {/* Glow de destaque ao hover */}
                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 z-10"
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div
                      className="h-full w-full"
                      style={{
                        filter: 'blur(72px)',
                        background:
                          'radial-gradient(ellipse at 56% 75%, rgba(96,0,24,0.20) 50%, transparent 89%)',
                      }}
                    />
                  </motion.div>

                  {/* Placeholder para foto profissional */}
                  <div className="flex items-center justify-center flex-1 w-full">
                    <div className="mt-8 w-24 h-24 rounded-2xl bg-black/70 border border-white/10 flex items-center justify-center shadow-[0_8px_46px_rgba(78,13,26,0.18)]">
                      <span className="text-slate-200/20 font-semibold text-xs select-none tracking-wider">
                        FOTO
                      </span>
                    </div>
                  </div>

                  {/* Nome e Cargo - Tipografia premium */}
                  <div className="flex items-end w-full px-7 py-8 gap-2 relative z-20">
                    <div className="flex flex-col flex-1 min-w-0">
                      <p className="text-lg font-bold text-white leading-tight uppercase tracking-wide drop-shadow-[0_3px_16px_rgba(0,0,0,0.36)]">
                        {socio.name}
                      </p>
                      <span className="text-xs font-light text-slate-400 leading-tight tracking-tight mt-1">
                        {socio.role}
                      </span>
                    </div>
                    {/* Ícone do Instagram com brilho premium */}
                    <span className="ml-3 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-400/70 shadow-[0_0_28px_rgba(255,255,255,0.13)] transition-all duration-300 group-hover:border-white/30 hover:text-white hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)] hover:-translate-y-1 cursor-pointer">
                      <Instagram className="h-6 w-6" /> 
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Seção final CTA / Contato — High-Ticket */}
        <section
          id="contato"
          className="relative w-full py-24 sm:py-28 lg:py-32"
        >
          {/* Glow radial vinho atrás do bloco (brilho magnético) */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-80 w-[min(100%,28rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#600018] opacity-40 blur-[120px]"
          />

          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/5 px-8 py-20 backdrop-blur-xl"
          >
            <div className="flex flex-col items-center gap-8 text-center">
              <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl [text-shadow:0_0_40px_rgba(255,255,255,0.12)]">
                Pronto para o próximo nível?
              </h2>
              <p className="max-w-xl text-base text-slate-400 sm:text-lg">
                Vamos construir o seu próximo case de sucesso. Fale diretamente com a nossa diretoria.
              </p>
              <Link
                href="/aplicacao"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#600018] via-[#b91c1c] to-[#30000a] px-10 py-4 text-base font-medium text-slate-50 shadow-[0_0_40px_rgba(248,113,113,0.4)] transition hover:shadow-[0_0_56px_rgba(248,113,113,0.55)] focus:outline-none focus:ring-2 focus:ring-[#f87171]/60 focus:ring-offset-2 focus:ring-offset-[#0B0406]"
              >
                <span>Iniciar Projeto</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer — Rodapé premium */}
      <footer className="border-t border-white/5 bg-black/20 px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 md:flex-row md:justify-between md:items-center">
          {/* Lado esquerdo: marca e copyright */}
          <div className="flex flex-col items-center gap-2 text-center md:items-start md:text-left">
            <div className="flex items-baseline gap-1.5">
              <span className="font-bold tracking-tight text-white">CHANGE</span>
              <span className="font-light tracking-tight text-slate-400">AGENCY</span>
            </div>
            <p className="text-xs text-slate-500">
              © 2026 Change Agency. Todos os direitos reservados.
            </p>
          </div>

          {/* Lado direito: e-mail e ícones sociais */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-8">
            <a
              href="mailto:hello@change.ag"
              className="text-sm font-medium text-slate-400 transition-colors hover:text-white"
            >
              hello@change.ag
            </a>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/changeagency"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition-colors hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition-colors hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

