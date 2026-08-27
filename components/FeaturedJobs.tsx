"use client";

import { useState, useMemo } from "react";

export interface FeaturedJob {
  id: string;
  title: string;
  company: string;
  spots: number;
  spotsLabel: string;
  payRate: string;
  payMin: number;
  payMax: number;
  payBRL: string;
  category: "audio" | "data" | "support" | "design";
  categoryLabel: string;
  workType: string;
  location: string;
  description: string;
  highlights: string[];
  requirements: string[];
  isHot?: boolean;
  applyUrl: string;
}

const featuredJobsData: FeaturedJob[] = [
  {
    id: "facial-data-collector",
    title: "AI Facial Data Collection Contributor [referrals]",
    company: "Micro 1",
    spots: 4000,
    spotsLabel: "4.000 vagas abertas",
    payRate: "$139 - $140 / hour",
    payMin: 139,
    payMax: 140,
    payBRL: "≈ R$ 780 a R$ 800 / hora",
    category: "data",
    categoryLabel: "Visão & IA",
    workType: "100% Remoto",
    location: "Global / Brasil",
    description:
      "Coleta e validação de dados faciais para treinamento de modelos de visão computacional de última geração. É a posição com o maior volume de vagas e uma das maiores remunerações por hora do mercado.",
    highlights: [
      "Altíssima demanda imediata (+4.000 vagas)",
      "Pagamento em Dólar direto na sua conta",
      "Flexibilidade total de horários para submissão",
      "Processo de envio 100% digital e rápido",
    ],
    requirements: [
      "Smartphone com câmera HD ou webcam de boa resolução",
      "Maior de 18 anos",
      "Acesso estável à internet",
    ],
    isHot: true,
    applyUrl:
      "https://jobs.micro1.ai/post/5117b4ab-ad3d-467a-80a0-2a993db4cee2?referralCode=175e2125-56c3-4585-abeb-763f284cbf07&utm_source=referral&utm_medium=share&utm_campaign=job_referral",
  },
  {
    id: "audio-expert",
    title: "Audio Expert",
    company: "Micro 1",
    spots: 10,
    spotsLabel: "10 vagas",
    payRate: "$50 - $100 / hour",
    payMin: 50,
    payMax: 100,
    payBRL: "≈ R$ 280 a R$ 560 / hora",
    category: "audio",
    categoryLabel: "Áudio Especializado",
    workType: "100% Remoto",
    location: "Global / Brasil",
    description:
      "Avaliação técnica de arquivos de áudio, controle de qualidade acústica, análise de clareza vocal e modulação sonora para alimentar modelos generativos de voz e IA conversacional.",
    highlights: [
      "Até $100 por hora trabalhada",
      "Trabalho focado em precisão sonora e acústica",
      "Processo seletivo simplificado para audiófilos e editores",
      "Contrato remoto internacional",
    ],
    requirements: [
      "Boa percepção auditiva e atenção aos detalhes",
      "Fones de ouvido de boa fidelidade",
      "Computador ou notebook",
    ],
    isHot: true,
    applyUrl:
      "https://jobs.micro1.ai/post/8a0ef31d-212b-49e4-ba4a-6075436f5f6b?referralCode=175e2125-56c3-4585-abeb-763f284cbf07&utm_source=referral&utm_medium=share&utm_campaign=job_referral",
  },
  {
    id: "ai-data-annotation",
    title: "AI Data Annotation Expert",
    company: "Micro 1",
    spots: 100,
    spotsLabel: "100 vagas",
    payRate: "$40 - $80 / hour",
    payMin: 40,
    payMax: 80,
    payBRL: "≈ R$ 225 a R$ 450 / hora",
    category: "data",
    categoryLabel: "Anotação de Dados",
    workType: "100% Remoto",
    location: "Global / Brasil",
    description:
      "Rotulagem, refinamento e anotação contextual de datasets textuais e multimodais para o aprimoramento contínuo de Grandes Modelos de Linguagem (LLMs) e agentes inteligentes.",
    highlights: [
      "100 vagas disponíveis para contratação",
      "Excelente relação de horas trabalhadas e ganhos",
      "Contato direto com tecnologias de ponta em IA",
      "Trabalho independente e sem metas rígidas",
    ],
    requirements: [
      "Boa capacidade analítica e interpretação de texto",
      "Atenção a diretrizes e padrões de classificação",
      "Disponibilidade para tarefas remotas",
    ],
    applyUrl:
      "https://jobs.micro1.ai/post/00790f76-0b22-4b18-8910-6596efa752ca?referralCode=175e2125-56c3-4585-abeb-763f284cbf07&utm_source=referral&utm_medium=share&utm_campaign=job_referral",
  },
  {
    id: "computer-user-support",
    title: "Computer User Support Specialists",
    company: "Micro 1",
    spots: 25,
    spotsLabel: "25 vagas",
    payRate: "$30 - $55 / hour",
    payMin: 30,
    payMax: 55,
    payBRL: "≈ R$ 170 a R$ 310 / hora",
    category: "support",
    categoryLabel: "Suporte Técnico",
    workType: "100% Remoto",
    location: "Global / Brasil",
    description:
      "Suporte técnico a usuários finais, diagnóstico de dúvidas operacionais, auxílio na configuração de softwares e atendimento resolutivo em ecossistemas de tecnologia.",
    highlights: [
      "Ambiente de suporte corporativo moderno",
      "Remuneração horária atrativa em dólar",
      "Oportunidade contínua de escala de chamados",
      "Contratação direta online",
    ],
    requirements: [
      "Noções básicas a intermediárias de sistemas operacionais",
      "Boa comunicação escrita e paciência para suporte",
      "Computador com acesso à internet",
    ],
    applyUrl:
      "https://jobs.micro1.ai/post/d8e034e6-dac0-443b-8ae4-552f239cdca4?referralCode=175e2125-56c3-4585-abeb-763f284cbf07&utm_source=referral&utm_medium=share&utm_campaign=job_referral",
  },
  {
    id: "portuguese-audio-recording",
    title: "Portuguese Audio Recording Expert (Brazil)",
    company: "Micro 1",
    spots: 25,
    spotsLabel: "25 vagas",
    payRate: "$20 - $40 / hour",
    payMin: 20,
    payMax: 40,
    payBRL: "≈ R$ 110 a R$ 225 / hora",
    category: "audio",
    categoryLabel: "Áudio & Fala",
    workType: "100% Remoto",
    location: "Brasil",
    description:
      "Gravação de trechos de voz e leitura de roteiros em português do Brasil nativo para treino de compreensão auditiva, transcrição e síntese de voz de assistentes virtuais.",
    highlights: [
      "Sem exigência de inglês fluente",
      "Vaga exclusiva para falantes nativos do Brasil",
      "Tarefas dinâmicas de leitura e fala natural",
      "Pagamento pontual por hora gravada",
    ],
    requirements: [
      "Português nativo do Brasil com boa dicção",
      "Ambiente silencioso para gravações",
      "Microfone do smartphone ou headset",
    ],
    applyUrl:
      "https://jobs.micro1.ai/post/065d39e1-31ac-4a73-9bae-bf5bdaaf2b7c?referralCode=175e2125-56c3-4585-abeb-763f284cbf07&utm_source=referral&utm_medium=share&utm_campaign=job_referral",
  },
  {
    id: "graphic-designer",
    title: "Graphic Designer - Editorial, Poster & Marketing Layout",
    company: "Micro 1",
    spots: 30,
    spotsLabel: "30 vagas",
    payRate: "$20 - $50 / hour",
    payMin: 20,
    payMax: 50,
    payBRL: "≈ R$ 110 a R$ 280 / hora",
    category: "design",
    categoryLabel: "Design Gráfico",
    workType: "100% Remoto",
    location: "Global / Brasil",
    description:
      "Criação e diagramação de peças visuais, posters, capas editoriais e materiais de comunicação digital para marcas parceiras e ecossistema global de tecnologia.",
    highlights: [
      "30 vagas para profissionais criativos",
      "Construção de portfólio internacional",
      "Liberdade criativa em projetos diversificados",
      "Pagamento flexível por hora / projeto",
    ],
    requirements: [
      "Domínio de ferramentas de design (Figma, Photoshop ou Illustrator)",
      "Portfólio com amostras de layout ou posters",
      "Criatividade e senso estético",
    ],
    applyUrl:
      "https://jobs.micro1.ai/post/22bec98f-7484-42b4-af15-17e033f0136f?referralCode=175e2125-56c3-4585-abeb-763f284cbf07&utm_source=referral&utm_medium=share&utm_campaign=job_referral",
  },
  {
    id: "customer-support-assistant",
    title: "Customer Support Assistant",
    company: "Micro 1",
    spots: 10,
    spotsLabel: "10 vagas",
    payRate: "$21 - $45 / hour",
    payMin: 21,
    payMax: 45,
    payBRL: "≈ R$ 115 a R$ 250 / hora",
    category: "support",
    categoryLabel: "Atendimento",
    workType: "100% Remoto",
    location: "Global / Brasil",
    description:
      "Atendimento a clientes via canais digitais (chat e e-mail), triagem de tickets, acolhimento de dúvidas e suporte operacional aos usuários de ferramentas digitais.",
    highlights: [
      "100% Home Office com escala flexível",
      "Atendimento via chat e mensagens",
      "Remuneração horária competitiva em moeda forte",
      "Treinamento inicial fornecido pela plataforma",
    ],
    requirements: [
      "Boa redação e cordialidade",
      "Facilidade com uso de plataformas web",
      "Conexão estável à internet",
    ],
    applyUrl:
      "https://jobs.micro1.ai/post/58347acf-d921-40a6-9ea4-0794c052287f?referralCode=175e2125-56c3-4585-abeb-763f284cbf07&utm_source=referral&utm_medium=share&utm_campaign=job_referral",
  },
];

const categoryFilters = [
  { id: "all", label: "Todas as Vagas" },
  { id: "data", label: "IA & Dados" },
  { id: "audio", label: "Áudio & Voz" },
  { id: "support", label: "Suporte & Atendimento" },
  { id: "design", label: "Design" },
];

export default function FeaturedJobs() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"highestPay" | "mostSpots">("highestPay");
  const [openJobId, setOpenJobId] = useState<string | null>("facial-data-collector");

  const toggleJob = (id: string) => {
    setOpenJobId((prev) => (prev === id ? null : id));
  };

  const filteredAndSortedJobs = useMemo(() => {
    let result = [...featuredJobsData];

    if (selectedCategory !== "all") {
      result = result.filter((job) => job.category === selectedCategory);
    }

    if (sortBy === "highestPay") {
      result.sort((a, b) => b.payMax - a.payMax);
    } else if (sortBy === "mostSpots") {
      result.sort((a, b) => b.spots - a.spots);
    }

    return result;
  }, [selectedCategory, sortBy]);

  const totalSpots = useMemo(() => {
    return featuredJobsData.reduce((acc, job) => acc + job.spots, 0);
  }, []);

  return (
    <section
      id="vagas-destaque"
      className="relative border-b border-slate-200 dark:border-cyber-700/80 bg-slate-50/70 dark:bg-cyber-900/60 py-12 sm:py-16 md:py-24 transition-colors"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-50"></div>
      <div className="pointer-events-none absolute -top-10 right-1/4 h-80 w-80 rounded-full bg-amber-500/10 dark:bg-amberNeon/10 blur-[130px] animate-amber-glow"></div>
      <div className="pointer-events-none absolute bottom-10 left-10 h-72 w-72 rounded-full bg-orange-500/10 dark:bg-fireNeon/10 blur-[120px]"></div>

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider text-amber-700 dark:text-amberNeon bg-amber-500/10 dark:bg-amberNeon/10 border border-amber-500/30 dark:border-amberNeon/25 mb-3 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amberNeon animate-ping"></span>
              03 · OPORTUNIDADES DE DESTAQUE
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Vagas Abertas com Pagamento em Dólar por Hora
            </h2>
            <p className="mt-3 max-w-3xl text-sm sm:text-base text-slate-600 dark:text-amber-100/70 leading-relaxed">
              Clique em cada oportunidade para expandir todos os detalhes, requisitos, tabela de valores por hora e o botão direto para aplicação.
            </p>
          </div>

          {/* Quick Stat Counter Badge */}
          <div className="inline-flex items-center gap-3 self-start lg:self-auto rounded-2xl border border-amber-400/40 dark:border-amberNeon/40 bg-white/90 dark:bg-cyber-850/90 px-4 py-3 shadow-sm backdrop-blur-xl shrink-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/15 text-amber-600 dark:text-amberNeon text-xl">
              ⚡
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-amber-200/70">
                Total de Posições
              </div>
              <div className="font-display text-base sm:text-lg font-black text-slate-900 dark:text-white">
                +{totalSpots.toLocaleString("pt-BR")} vagas abertas
              </div>
            </div>
          </div>
        </div>

        {/* 🎛️ Filtros de Categoria e Ordenação 🎛️ */}
        <div className="mb-6 sm:mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 rounded-2xl border border-slate-200 dark:border-cyber-700 bg-white dark:bg-cyber-850/90 p-3 sm:p-4 backdrop-blur-xl shadow-sm">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {categoryFilters.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const count =
                cat.id === "all"
                  ? featuredJobsData.length
                  : featuredJobsData.filter((j) => j.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-amber-400 via-amberNeon to-orange-500 text-cyber-950 shadow-sm shadow-amberNeon/40 scale-[1.02]"
                      : "bg-slate-100 dark:bg-cyber-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-cyber-700 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-cyber-700"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      isActive
                        ? "bg-cyber-950/20 text-cyber-950 font-black"
                        : "bg-slate-200 dark:bg-cyber-700 text-slate-600 dark:text-amber-200/70"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Sort selector */}
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-cyber-700 bg-slate-50 dark:bg-cyber-900 px-3 py-1.5 text-xs text-slate-700 dark:text-slate-300 w-full sm:w-auto">
              <span className="text-[11px] font-mono text-slate-400">Ordenar:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "highestPay" | "mostSpots")}
                className="bg-transparent font-bold text-slate-800 dark:text-amber-200 focus:outline-none cursor-pointer text-xs"
              >
                <option value="highestPay" className="bg-white dark:bg-cyber-900 text-slate-900 dark:text-white">
                  Maior Valor / Hora
                </option>
                <option value="mostSpots" className="bg-white dark:bg-cyber-900 text-slate-900 dark:text-white">
                  Mais Vagas
                </option>
              </select>
            </div>
          </div>
        </div>

        {/* 📋 LISTA EXTENDIDA DE OPORTUNIDADES (ESTILO ACCORDION ESTENDIDO PARA A DIREITA) 📋 */}
        <div className="space-y-3.5 sm:space-y-4">
          {filteredAndSortedJobs.map((job) => {
            const isOpen = openJobId === job.id;

            return (
              <div
                key={job.id}
                className={`rounded-2xl border transition-all duration-300 backdrop-blur-xl overflow-hidden ${
                  isOpen
                    ? "border-amber-400 dark:border-amberNeon/50 bg-white dark:bg-cyber-900/95 shadow-md dark:shadow-amber-glow"
                    : "border-slate-200 dark:border-cyber-700 bg-white/80 dark:bg-cyber-900/60 hover:border-slate-300 dark:hover:border-cyber-600 hover:shadow-sm"
                }`}
              >
                {/* 🔘 Header do Card da Vaga (Barra Horizontal Expandível) 🔘 */}
                <button
                  onClick={() => toggleJob(job.id)}
                  aria-expanded={isOpen}
                  className="flex w-full flex-col lg:flex-row lg:items-center justify-between gap-3.5 sm:gap-4 p-4 sm:p-5 md:p-6 text-left transition-colors hover:bg-slate-50/60 dark:hover:bg-cyber-850/50"
                >
                  {/* Lado Esquerdo: Tag, Empresa, Título e Vagas */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="flex h-6 items-center gap-1.5 rounded-lg bg-slate-100 dark:bg-cyber-800 border border-slate-200 dark:border-cyber-700 px-2 text-xs font-bold text-slate-800 dark:text-white">
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500"></span>
                        {job.company}
                      </span>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-amber-200/70">
                        {job.categoryLabel}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-bold border whitespace-nowrap ${
                          job.spots >= 1000
                            ? "bg-rose-500/15 text-rose-700 dark:text-rose-400 border-rose-500/30 animate-pulse"
                            : "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/30"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            job.spots >= 1000 ? "bg-rose-500" : "bg-emerald-500"
                          }`}
                        ></span>
                        {job.spotsLabel}
                      </span>
                    </div>

                    <h3 className="font-display text-base sm:text-lg md:text-xl font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amberNeon transition-colors leading-snug">
                      {job.title}
                    </h3>
                  </div>

                  {/* Lado Direito: Remuneração por Hora e Botão Expandir */}
                  <div className="flex items-center justify-between lg:justify-end gap-4 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-slate-100 dark:border-cyber-800/80">
                    {/* Bloco de Pagamento no Header */}
                    <div className="text-left lg:text-right">
                      <div className="text-[10px] sm:text-[11px] uppercase font-mono tracking-wider text-slate-500 dark:text-amber-200/70">
                        Valor por hora:
                      </div>
                      <div className="font-display text-lg sm:text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-amber-600 to-orange-600 dark:from-emerald-400 dark:via-amber-300 dark:to-amberNeon">
                        {job.payRate}
                      </div>
                      <div className="text-[10px] sm:text-[11px] font-mono text-slate-500 dark:text-amber-200/60">
                        {job.payBRL}
                      </div>
                    </div>

                    {/* Botão de Chevron Animado */}
                    <div
                      className={`flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-xl border transition-all ${
                        isOpen
                          ? "bg-amber-500 dark:bg-amberNeon text-cyber-950 border-amber-500 dark:border-amberNeon rotate-180 shadow-sm shadow-amberNeon/40"
                          : "bg-slate-100 dark:bg-cyber-800 text-slate-700 dark:text-amber-200 border-slate-200 dark:border-cyber-700"
                      }`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>

                {/* 📖 ÁREA EXTENDIDA COM DETALHES COMPLETOS DA VAGA 📖 */}
                {isOpen && (
                  <div className="px-4 pb-5 sm:px-6 sm:pb-6 md:px-8 md:pb-8 border-t border-slate-200 dark:border-cyber-700/80 pt-5 sm:pt-6 animate-fadeIn">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                      
                      {/* Coluna Esquerda: Descrição, Diferenciais e Requisitos (7 colunas) */}
                      <div className="lg:col-span-7 space-y-4">
                        <div>
                          <h4 className="text-xs uppercase font-mono tracking-wider font-bold text-amber-700 dark:text-amberNeon mb-1.5 flex items-center gap-1.5">
                            <span>📝</span> Sobre a oportunidade
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            {job.description}
                          </p>
                        </div>

                        {/* Checklist de Destaques */}
                        <div>
                          <h4 className="text-xs uppercase font-mono tracking-wider font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-1.5">
                            <span>✨</span> Destaques da vaga
                          </h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300">
                            {job.highlights.map((h, i) => (
                              <li key={i} className="flex items-center gap-2 rounded-lg bg-slate-50 dark:bg-cyber-800/60 p-2 border border-slate-200/60 dark:border-cyber-700/60">
                                <svg
                                  className="w-3.5 h-3.5 text-amber-500 dark:text-amberNeon shrink-0"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Requisitos Básicos */}
                        {job.requirements && job.requirements.length > 0 && (
                          <div>
                            <h4 className="text-xs uppercase font-mono tracking-wider font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-1.5">
                              <span>📌</span> Requisitos recomendados
                            </h4>
                            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                              {job.requirements.map((r, i) => (
                                <li key={i} className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amberNeon shrink-0"></span>
                                  <span>{r}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* Coluna Direita: Caixa de Remuneração e Botão de Aplicação (5 colunas) */}
                      <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-4">
                        {/* Caixa de Destaque Financeiro */}
                        <div className="rounded-2xl border border-amber-400/40 dark:border-amberNeon/30 bg-gradient-to-br from-amber-500/10 via-slate-50 to-orange-500/5 dark:from-cyber-950 dark:via-cyber-950 dark:to-cyber-850 p-4 sm:p-5 shadow-inner">
                          <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-amber-200/70 mb-2">
                            <span>Remuneração por Hora:</span>
                            <span className="font-sans font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                              {job.workType}
                            </span>
                          </div>

                          <div className="font-display text-2xl sm:text-3xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-amber-600 to-orange-600 dark:from-emerald-400 dark:via-amber-300 dark:to-amberNeon">
                            {job.payRate}
                          </div>

                          <div className="text-xs font-mono text-slate-600 dark:text-amber-200/80 mt-1">
                            Conversão estimada: <strong>{job.payBRL}</strong>
                          </div>

                          <div className="mt-3 pt-3 border-t border-slate-200 dark:border-cyber-700/60 text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
                            <span>Localização: <strong>{job.location}</strong></span>
                            <span>Status: <strong className="text-emerald-600 dark:text-emerald-400">Contratação Ativa</strong></span>
                          </div>
                        </div>

                        {/* 🚀 BOTÃO "APLIQUE PARA A VAGA" 🚀 */}
                        <div>
                          <a
                            href={job.applyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn flex w-full items-center justify-center gap-2 rounded-xl py-3.5 px-5 text-sm font-bold text-cyber-950 bg-gradient-to-r from-amber-400 via-amberNeon to-orange-500 hover:from-amber-300 hover:to-orange-400 shadow-amber-glow hover:shadow-[0_0_35px_rgba(255,140,0,0.6)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 border border-amber-300/60"
                          >
                            <span>Aplique para a vaga</span>
                            <svg
                              className="w-4 h-4 shrink-0 transition-transform group-hover/btn:translate-x-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </a>
                          <div className="text-center mt-2 text-[11px] text-slate-400 dark:text-slate-500">
                            * Inscrição oficial e gratuita diretamente no portal Micro 1
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Helper Footer Banner */}
        <div className="mt-8 rounded-2xl border border-slate-200 dark:border-cyber-700 bg-white/80 dark:bg-cyber-900/80 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-600 dark:text-slate-300 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <span className="text-xl">💼</span>
            <div>
              <span className="font-bold text-slate-900 dark:text-white">Dica de Aplicação: </span>
              Você pode aplicar para múltiplas vagas simultaneamente na Micro 1 para acelerar sua aprovação no processo seletivo.
            </div>
          </div>
          <a
            href="https://chat.whatsapp.com/LyX5y4XkizD9Cz2CRSFgey"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-bold text-amber-700 dark:text-amberNeon hover:underline whitespace-nowrap shrink-0"
          >
            <span>Dúvidas? Entre no Grupo WhatsApp</span>
            <span>↗</span>
          </a>
        </div>

      </div>
    </section>
  );
}
