/* Página de Aplicação para Parceria — High-Ticket Lead Qualification */

'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const inputBase =
  'w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-slate-500 focus:border-[#600018] focus:outline-none focus:ring-1 focus:ring-[#600018] transition-colors';
const labelBase = 'mb-2 block text-sm font-medium text-slate-300';
const sectionTitle = 'mb-4 text-lg font-semibold text-white';

/** Número do WhatsApp do comercial (placeholder: troque pelo número real) */
const WHATSAPP_NUMERO = '5511999999999';

export default function AplicacaoPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const ativos = formData.getAll('ativos') as string[];
    const ativosTexto = ativos.length > 0 ? ativos.join(', ') : '—';

    const mensagem = [
      'Olá, diretoria da Change Agency! Acabei de preencher a aplicação no site. Seguem os dados do meu projeto:',
      '',
      '——— SEUS DADOS ———',
      `Empresa/Negócio: ${formData.get('empresa') || '—'}`,
      `Nome e Cargo: ${formData.get('nome') || '—'}`,
      `E-mail: ${formData.get('email') || '—'}`,
      `Telefone (WhatsApp): ${formData.get('telefone') || '—'}`,
      '',
      '——— O NEGÓCIO ———',
      `Nicho: ${formData.get('nicho') || '—'}`,
      `Tempo de atividade: ${formData.get('tempo') || '—'}`,
      `Modelo de vendas: ${formData.get('modelo') || '—'}`,
      '',
      '——— MOMENTO ATUAL ———',
      `Experiência com tráfego pago: ${formData.get('experiencia') || '—'}`,
      `Orçamento mensal: ${formData.get('orcamento') || '—'}`,
      `Ativos configurados: ${ativosTexto}`,
      '',
      '——— EXPECTATIVAS ———',
      `Objetivo principal: ${formData.get('objetivo') || '—'}`,
      `Melhor data/horário para reunião: ${formData.get('data') || '—'}`,
    ].join('\n');

    const mensagemCodificada = encodeURIComponent(mensagem);
    window.open(`https://wa.me/${WHATSAPP_NUMERO}?text=${mensagemCodificada}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0B0406] text-slate-100">
      {/* Glow vinho fixo no centro */}
      <div
        aria-hidden
        className="pointer-events-none fixed left-1/2 top-1/2 z-0 h-[28rem] w-[min(100%,32rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#600018] opacity-20 blur-[120px]"
      />

      <main className="relative z-10 min-h-screen px-4 pt-32 pb-20 sm:px-6">
        <div className="mx-auto max-w-3xl">
          {/* Botão Voltar */}
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Voltar</span>
          </Link>

          {/* Cabeçalho */}
          <header className="mb-12 text-center">
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-slate-50 to-slate-400 sm:text-4xl">
              Aplicação para Parceria
            </h1>
            <p className="text-slate-400 sm:text-lg">
              Preencha os dados abaixo para analisarmos o momento do seu negócio e agendarmos uma sessão estratégica.
            </p>
          </header>

          {/* Formulário */}
          <form
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8 md:p-10"
            onSubmit={handleSubmit}
          >
            {/* Sessão 1: Seus Dados */}
            <fieldset className="mb-10">
              <legend className={sectionTitle}>Seus Dados</legend>
              <div className="space-y-5">
                <div>
                  <label htmlFor="empresa" className={labelBase}>
                    Empresa / Negócio
                  </label>
                  <input
                    id="empresa"
                    name="empresa"
                    type="text"
                    placeholder="Nome da empresa ou negócio"
                    className={inputBase}
                  />
                </div>
                <div>
                  <label htmlFor="nome" className={labelBase}>
                    Nome e Cargo
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    placeholder="Seu nome e cargo"
                    className={inputBase}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelBase}>
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    className={inputBase}
                  />
                </div>
                <div>
                  <label htmlFor="telefone" className={labelBase}>
                    Telefone (WhatsApp)
                  </label>
                  <input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    className={inputBase}
                  />
                </div>
              </div>
            </fieldset>

            {/* Sessão 2: O Negócio */}
            <fieldset className="mb-10">
              <legend className={sectionTitle}>O Negócio</legend>
              <div className="space-y-5">
                <div>
                  <label htmlFor="nicho" className={labelBase}>
                    Nicho de mercado
                  </label>
                  <input
                    id="nicho"
                    name="nicho"
                    type="text"
                    placeholder="Ex.: Saúde, Educação, Tecnologia"
                    className={inputBase}
                  />
                </div>
                <div>
                  <label htmlFor="tempo" className={labelBase}>
                    Tempo de atividade
                  </label>
                  <select id="tempo" name="tempo" className={inputBase}>
                    <option value="">Selecione</option>
                    <option value="ate-1">Até 1 ano</option>
                    <option value="1-3">1 a 3 anos</option>
                    <option value="3-5">3 a 5 anos</option>
                    <option value="5+">Mais de 5 anos</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="modelo" className={labelBase}>
                    Modelo de vendas
                  </label>
                  <select id="modelo" name="modelo" className={inputBase}>
                    <option value="">Selecione</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="b2b">Serviços B2B</option>
                    <option value="b2c">Serviços B2C</option>
                    <option value="infoproduto">Infoproduto</option>
                  </select>
                </div>
              </div>
            </fieldset>

            {/* Sessão 3: Momento Atual */}
            <fieldset className="mb-10">
              <legend className={sectionTitle}>Momento Atual</legend>
              <div className="space-y-5">
                <div>
                  <label htmlFor="experiencia" className={labelBase}>
                    Experiência com tráfego pago
                  </label>
                  <textarea
                    id="experiencia"
                    name="experiencia"
                    rows={4}
                    placeholder="Conte brevemente sua experiência com anúncios, metas, etc."
                    className={`${inputBase} resize-y min-h-[100px]`}
                  />
                </div>
                <div>
                  <label htmlFor="orcamento" className={labelBase}>
                    Orçamento mensal disponível
                  </label>
                  <select id="orcamento" name="orcamento" className={inputBase}>
                    <option value="">Selecione</option>
                    <option value="ate-5">Até R$ 5k</option>
                    <option value="5-15">R$ 5k a R$ 15k</option>
                    <option value="15-30">R$ 15k a R$ 30k</option>
                    <option value="30+">Acima de R$ 30k</option>
                  </select>
                </div>
                <div>
                  <span className={labelBase}>Ativos configurados</span>
                  <div className="mt-3 flex flex-wrap gap-4">
                    {[
                      { id: 'conta', label: 'Conta' },
                      { id: 'pixel', label: 'Pixel' },
                      { id: 'landing', label: 'Landing Page' },
                      { id: 'whatsapp', label: 'WhatsApp' },
                    ].map((item) => (
                      <label
                        key={item.id}
                        className="flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-slate-300 transition-colors has-[:checked]:border-[#600018] has-[:checked]:bg-[#600018]/20 has-[:checked]:text-white"
                      >
                        <input
                          type="checkbox"
                          name="ativos"
                          value={item.id}
                          className="h-4 w-4 rounded border-white/20 bg-black/60 text-[#600018] focus:ring-[#600018]"
                        />
                        <span>{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </fieldset>

            {/* Sessão 4: Expectativas */}
            <fieldset className="mb-10">
              <legend className={sectionTitle}>Expectativas</legend>
              <div className="space-y-5">
                <div>
                  <label htmlFor="objetivo" className={labelBase}>
                    Objetivo principal
                  </label>
                  <textarea
                    id="objetivo"
                    name="objetivo"
                    rows={4}
                    placeholder="Qual o principal resultado que você espera desta parceria?"
                    className={`${inputBase} resize-y min-h-[100px]`}
                  />
                </div>
                <div>
                  <label htmlFor="data" className={labelBase}>
                    Melhor data/horário para reunião
                  </label>
                  <input
                    id="data"
                    name="data"
                    type="text"
                    placeholder="Ex.: Segundas após 14h, quartas pela manhã"
                    className={inputBase}
                  />
                </div>
              </div>
            </fieldset>

            {/* Botão de Envio */}
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-[#600018] via-[#b91c1c] to-[#30000a] py-4 text-base font-semibold text-white shadow-[0_0_40px_rgba(248,113,113,0.25)] transition hover:shadow-[0_0_50px_rgba(248,113,113,0.4)] focus:outline-none focus:ring-2 focus:ring-[#600018] focus:ring-offset-2 focus:ring-offset-[#0B0406]"
            >
              Enviar Aplicação
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
