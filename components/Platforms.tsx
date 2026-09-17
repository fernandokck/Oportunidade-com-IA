import SectionHead from "./SectionHead";

interface PlatformItem {
  id: string;
  name: string;
  categoryTag?: string;
  titleBadge?: string;
  titleBadgeIcon?: string;
  payout: string;
  payoutBadge?: string;
  url: string;
  status: "Ativo" | "Em análise" | "Saque Pausado" | "Pendente" | "Ausente";
  highlight: string;
  description: React.ReactNode;
  isBlank?: boolean;
}

const platforms: PlatformItem[] = [
  {
    id: "flambra",
    name: "Flambra",
    titleBadge: "Plataforma Nova!",
    titleBadgeIcon: "✨",
    payout: "US$ 5 / hora",
    payoutBadge: "Toda Sexta-feira",
    url: "https://app.flambra.com/?ref=58C7E55071",
    status: "Ativo",
    highlight: "Tarefas do dia a dia · Minute App",
    description:
      "Upload de vídeos usando o aplicativo da minute que tem como regra aparelhos de uso como Iphone 12 pra cima e Samsung S21 pra cima. Pagamento toda sexta-feira.",
  },
  {
    id: "hub",
    name: "Hub.xyz",
    titleBadge: "Dá suporte gratuito",
    titleBadgeIcon: "🎁",
    payout: "US$ 5 a US$ 8 / hora",
    payoutBadge: "Dá suporte gratuito",
    url: "https://ai.hub.xyz/r/DEBIN5",
    status: "Ativo",
    highlight: "Aprovação rápida de vídeos & Suporte de Cabeça Grátis",
    description:
      "Aprova os vídeos enviados mais rápido e tem suporte responsivo. Envia o suporte elástico de cabeça gratuitamente para os usuários gravarem suas tarefas cotidianas.",
  },
  {
    id: "invent",
    name: "Invent Money",
    titleBadge: "Ganhos em Dólar",
    titleBadgeIcon: "💵",
    payout: "US$ 5 a US$ 8 / hora",
    payoutBadge: "Ganhos em Dólar",
    url: "https://app.inventmoney.com/r/DNXHJWUM",
    status: "Ativo",
    highlight: "Tarefas do dia a dia + comerciais",
    description:
      "Upload de Vídeos direto na plataforma, não tem exigência de aparelhos celulares, mais a qualidade da filmagem precisa ser boa e na resolução 1080p 30fps ou 60pfs no modo 0,50x da camera.",
  },
  {
    id: "claru",
    name: "Claru.ai",
    payout: "US$ 5 a US$ 8 / hora",
    payoutBadge: "+ Bônus por marcos",
    url: "https://app.claru.ai/signup?ref=8a2r3gfj",
    status: "Ativo",
    highlight: "Pagamento semanal automático",
    description:
      "Paga por hora gravada mais bônus por marco de horas. Processa pagamento toda terça-feira, com saque automático via Pix ao bater US$ 50 — ou já na primeira semana, se você gravar 5h.",
  },
  {
    id: "crowtado",
    name: "Crowtado",
    payout: "US$ 8 / hora",
    payoutBadge: "Alerta de Instabilidade",
    url: "https://www.crowtado.com/sign-up?ref=N432SDBG",
    status: "Pendente",
    highlight: "Problemas em Pagamentos e Upload",
    description:
      "Atenção: A plataforma está sinalizada com instabilidades e problemas no processamento de pagamentos e no upload de vídeos. Recomendamos cautela e priorizar as demais plataformas ativas no momento.",
  },
  {
    id: "micro1",
    name: "Micro 1",
    payout: "US$ 20 a US$ 70 / hora",
    payoutBadge: "Requer Entrevista",
    url: "https://refer.micro1.ai/referral/jobs?referralCode=175e2125-56c3-4585-abeb-763f284cbf07&utm_source=referral&utm_medium=share&utm_campaign=job_referral",
    status: "Ativo",
    highlight: "Treino de Agentes IA",
    description: (
      <>
        Aqui são para trabalhos de IA, tradução, leitura de texto, revisão de audio etc. Paga muito porém precisa ser selecionado no processo seletivo.{" "}
        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-amber-300 to-amberNeon">
          Compensa demais aplicar pois não exige fluência em inglês.
        </span>
      </>
    ),
  },
];

export default function Platforms() {
  return (
    <section id="plataformas" className="relative border-b border-slate-200 dark:border-cyber-700/80 bg-white dark:bg-cyber-950 py-12 sm:py-16 md:py-24 transition-colors">
      {/* Ambient glowing accents */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-50"></div>
      <div className="hidden sm:block pointer-events-none absolute bottom-10 left-1/3 h-80 w-80 rounded-full bg-amber-400/10 dark:bg-amberNeon/10 blur-[130px]"></div>

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6">
        <SectionHead
          index="03 · OPORTUNIDADES"
          title="Plataformas de Treinamento de IA"
          sub="Compare o quanto cada plataforma está pagando, as características de cada tarefa e acesse diretamente os sites oficiais para começar."
        />

        {/* Responsive Grid Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {platforms.map((p, index) => {
            const isPaused = p.status === "Saque Pausado";
            const isPending = p.status === "Pendente" || p.status === "Ausente";
            const isAnalyzing = p.status === "Em análise";

            return (
              <div
                key={p.id}
                className={`relative flex flex-col justify-between rounded-2xl border p-5 sm:p-6 transition-all duration-300 backdrop-blur-xl group hover:-translate-y-1 ${
                  p.isBlank
                    ? "border-slate-200 dark:border-cyber-700/60 bg-slate-50/70 dark:bg-cyber-900/50 hover:border-slate-300 dark:hover:border-cyber-600"
                    : isPaused
                    ? "border-rose-400/40 dark:border-rose-500/30 bg-white dark:bg-cyber-900/80 hover:border-rose-500/60 hover:shadow-[0_0_25px_rgba(244,63,94,0.15)]"
                    : isPending
                    ? "border-amber-400/50 dark:border-amber-500/40 bg-amber-500/[0.03] dark:bg-cyber-900/85 hover:border-amber-500/70 hover:shadow-[0_0_25px_rgba(245,158,11,0.18)]"
                    : isAnalyzing
                    ? "border-yellow-400/40 dark:border-yellow-500/30 bg-white dark:bg-cyber-900/80 hover:border-yellow-500/60 hover:shadow-[0_0_25px_rgba(234,179,8,0.15)]"
                    : "border-slate-200 dark:border-cyber-700 bg-white dark:bg-cyber-900/90 hover:border-amber-400 dark:hover:border-amberNeon/60 shadow-sm hover:shadow-md dark:hover:shadow-amber-glow"
                }`}
              >
                {/* Top Header inside card */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-slate-100 dark:bg-cyber-800 border border-slate-200 dark:border-cyber-700 text-xs font-mono font-bold text-slate-700 dark:text-amber-200">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-amber-200/70">
                        {p.categoryTag || "Plataforma"}
                      </span>
                    </div>

                    {/* Status Pill */}
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium border whitespace-nowrap shrink-0 ${
                        p.status === "Ativo"
                          ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/30"
                          : p.status === "Saque Pausado"
                          ? "bg-rose-500/15 text-rose-700 dark:text-rose-400 border-rose-500/30"
                          : p.status === "Pendente" || p.status === "Ausente"
                          ? "bg-amber-500/15 text-amber-800 dark:text-amber-300 border-amber-500/40"
                          : "bg-yellow-500/15 text-yellow-700 dark:text-yellow-400 border-yellow-500/30"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                          p.status === "Ativo"
                            ? "bg-emerald-500 dark:bg-emerald-400 animate-pulse"
                            : p.status === "Saque Pausado"
                            ? "bg-rose-500 dark:bg-rose-400 animate-pulse"
                            : p.status === "Pendente" || p.status === "Ausente"
                            ? "bg-amber-500 dark:bg-amber-400 animate-pulse"
                            : "bg-yellow-500 dark:bg-yellow-400 animate-pulse"
                        }`}
                      ></span>
                      {p.status}
                    </span>
                  </div>

                  {/* Title + Highlight Title Badge */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <h3 className="font-display text-xl sm:text-2xl font-black text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amberNeon transition-colors">
                      {p.name}
                    </h3>
                    {p.titleBadge && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-extrabold text-cyber-950 bg-gradient-to-r from-emerald-400 via-amber-300 to-amberNeon shadow-sm animate-pulse border border-amber-300/60">
                        <span>{p.titleBadgeIcon || "🎁"}</span>
                        <span>{p.titleBadge}</span>
                      </span>
                    )}
                  </div>

                  {/* 💰 QUANTO ESTÁ PAGANDO (EM DESTAQUE NA COLUNA) 💰 */}
                  <div className="mb-4 sm:mb-5 rounded-xl border border-slate-200 dark:border-cyber-700 bg-slate-50 dark:bg-cyber-950/80 p-3.5 sm:p-4 shadow-inner">
                    <div className="text-[11px] uppercase font-mono tracking-wider text-slate-500 dark:text-amber-200/70 mb-1 flex items-center justify-between">
                      <span>Quanto está pagando:</span>
                      {p.payoutBadge && (
                        <span className="text-[10px] text-amber-800 dark:text-amber-300 font-sans font-semibold px-2 py-0.5 rounded bg-amber-500/15 border border-amber-500/20">
                          {p.payoutBadge}
                        </span>
                      )}
                    </div>
                    <div
                      className={`font-display text-lg sm:text-2xl font-black tracking-tight ${
                        p.isBlank
                          ? "text-slate-400 font-mono text-base font-normal italic"
                          : "text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-amber-600 to-orange-600 dark:from-emerald-400 dark:via-amber-300 dark:to-amberNeon"
                      }`}
                    >
                      {p.payout}
                    </div>
                  </div>

                  {/* Highlight tag */}
                  <div className="mb-2.5 sm:mb-3 text-xs font-semibold text-amber-700 dark:text-amber-300 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-amber-500 dark:text-amberNeon shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>{p.highlight}</span>
                  </div>

                  {/* Description */}
                  <p className={`text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6 ${p.isBlank ? "text-slate-400 italic" : "text-slate-600 dark:text-slate-300"}`}>
                    {p.description}
                  </p>
                </div>

                {/* 🔗 LINK DO SITE OFICIAL (BOTÃO) 🔗 */}
                <div className="pt-3.5 sm:pt-4 border-t border-slate-200 dark:border-cyber-700/80">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl py-2.5 px-4 text-xs font-bold text-slate-800 dark:text-white bg-slate-100 dark:bg-cyber-800 hover:bg-gradient-to-r hover:from-amber-400 hover:to-orange-500 hover:text-cyber-950 dark:hover:text-cyber-950 border border-slate-200 dark:border-cyber-600 hover:border-amber-400 dark:hover:border-amberNeon shadow-sm transition-all duration-300"
                  >
                    <span>Acessar Site Oficial</span>
                    <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
