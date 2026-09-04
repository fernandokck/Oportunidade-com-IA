import SectionHead from "./SectionHead";

const doItems = [
  {
    title: "Boa iluminação, de preferência luz natural",
    desc: "Ambientes bem iluminados facilitam o reconhecimento de objetos e texturas pelos modelos de visão computacional.",
  },
  {
    title: "Mãos visíveis ao pegar e soltar objetos",
    desc: "A inteligência artificial aprende observando o posicionamento exato dos dedos e a manipulação dos itens.",
  },
  {
    title: "Fique de pé ou em movimento",
    desc: "A perspectiva em primeira pessoa (POV) em pé replica com precisão a postura humana nas tarefas do dia a dia.",
  },
  {
    title: "Movimente-se naturalmente",
    desc: "Execute a atividade na sua velocidade normal, mantendo a fluidez cotidiana sem movimentos artificiais.",
  },
  {
    title: "Celular bem preso, sem balançar",
    desc: "Ajuste firmemente o suporte elástico de cabeça para que a filmagem fique estável e sem tremores excessivos.",
  },
];

const dontItems = [
  {
    title: "Sentar durante a gravação",
    desc: "Grave sempre em pé para garantir a altura correta do campo de visão exigido pelas plataformas.",
  },
  {
    title: "Gravar no escuro",
    desc: "Ambientes com pouca luz geram ruído digital na imagem e causam rejeição imediata da tarefa.",
  },
  {
    title: "Fazer movimentos bruscos com a cabeça",
    desc: "Girar a cabeça muito rápido desfoca o vídeo e prejudica o aprendizado contínuo do modelo de IA.",
  },
  {
    title: "Gravar em locais públicos",
    desc: "O treinamento é focado em tarefas domésticas e privadas — respeite a privacidade e as regras do app.",
  },
];

export default function Guidelines() {
  return (
    <section id="diretrizes" className="relative border-b border-slate-200 dark:border-cyber-700/80 bg-white dark:bg-cyber-950 py-12 sm:py-16 md:py-24 transition-colors">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-40 dark:opacity-50"></div>
      <div className="hidden sm:block pointer-events-none absolute top-1/3 left-10 h-72 w-72 rounded-full bg-emerald-500/10 dark:bg-emerald-500/10 blur-[130px]"></div>
      <div className="hidden sm:block pointer-events-none absolute bottom-1/4 right-10 h-72 w-72 rounded-full bg-rose-500/10 dark:bg-rose-500/10 blur-[130px]"></div>

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6">
        <SectionHead
          index="02 · REGRAS & BOAS PRÁTICAS"
          title="O que pode e não pode fazer no treinamento de IA"
          sub="Siga estas instruções essenciais durante as gravações para garantir aprovação rápida das suas tarefas e pagamentos sem rejeições."
        />

        {/* 2-Column Comparison Grid: FAÇA vs NÃO FAÇA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          
          {/* 🟢 COLUNA 1: FAÇA (RECOMENDADO / PERMITIDO) 🟢 */}
          <div className="relative flex flex-col justify-between rounded-3xl border-2 border-emerald-500/30 dark:border-emerald-400/40 bg-white/95 dark:bg-cyber-900/90 p-6 sm:p-8 backdrop-blur-2xl shadow-lg hover:shadow-emerald-500/10 transition-all duration-300">
            {/* Ambient top border glow */}
            <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>

            <div>
              {/* Header Badge & Title */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-5 border-b border-emerald-500/20 dark:border-emerald-500/20">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 dark:bg-emerald-400/20 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 shadow-inner">
                    <svg className="w-6 h-6 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold block">
                      Boas Práticas
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400 tracking-tight flex items-center gap-2">
                      <span>FAÇA</span>
                      <span className="text-lg">✓</span>
                    </h3>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold text-emerald-800 dark:text-emerald-300 bg-emerald-500/15 border border-emerald-500/30">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Garante Aprovação
                </span>
              </div>

              {/* Items List */}
              <div className="space-y-4 sm:space-y-5">
                {doItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-2xl border border-emerald-500/15 dark:border-emerald-500/15 bg-emerald-50/50 dark:bg-cyber-950/60 hover:border-emerald-500/35 hover:bg-emerald-50/90 dark:hover:bg-cyber-950/90 transition-all duration-200 group"
                  >
                    <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-white dark:bg-emerald-400 dark:text-cyber-950 font-bold shadow-sm group-hover:scale-110 transition-transform">
                      <svg className="w-4 h-4 stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug mb-0.5">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300/90 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom highlight pill */}
            <div className="mt-6 pt-4 border-t border-emerald-500/20 text-xs text-emerald-800 dark:text-emerald-300/90 font-medium flex items-center gap-2">
              <span className="font-bold">Dica:</span>
              <span>Vídeos gravados com esses requisitos têm prioridade na fila de pagamento.</span>
            </div>
          </div>

          {/* 🔴 COLUNA 2: NÃO FAÇA (PROIBIDO / EVITE) 🔴 */}
          <div className="relative flex flex-col justify-between rounded-3xl border-2 border-rose-500/30 dark:border-rose-400/40 bg-white/95 dark:bg-cyber-900/90 p-6 sm:p-8 backdrop-blur-2xl shadow-lg hover:shadow-rose-500/10 transition-all duration-300">
            {/* Ambient top border glow */}
            <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>

            <div>
              {/* Header Badge & Title */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-5 border-b border-rose-500/20 dark:border-rose-500/20">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-500/15 dark:bg-rose-400/20 border border-rose-500/30 text-rose-600 dark:text-rose-400 shadow-inner">
                    <svg className="w-6 h-6 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-rose-600 dark:text-rose-400 font-bold block">
                      Atenção / Proibido
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-black text-rose-600 dark:text-rose-400 tracking-tight flex items-center gap-2">
                      <span>NÃO FAÇA</span>
                      <span className="text-lg">✕</span>
                    </h3>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold text-rose-800 dark:text-rose-300 bg-rose-500/15 border border-rose-500/30">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                  Evite Rejeições
                </span>
              </div>

              {/* Items List */}
              <div className="space-y-4 sm:space-y-5">
                {dontItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-2xl border border-rose-500/15 dark:border-rose-500/15 bg-rose-50/50 dark:bg-cyber-950/60 hover:border-rose-500/35 hover:bg-rose-50/90 dark:hover:bg-cyber-950/90 transition-all duration-200 group"
                  >
                    <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-xl bg-rose-500 text-white dark:bg-rose-500 dark:text-white font-bold shadow-sm group-hover:scale-110 transition-transform">
                      <svg className="w-4 h-4 stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug mb-0.5">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300/90 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom highlight pill */}
            <div className="mt-6 pt-4 border-t border-rose-500/20 text-xs text-rose-800 dark:text-rose-300/90 font-medium flex items-center gap-2">
              <span className="font-bold">Aviso:</span>
              <span>Vídeos com esses erros são descartados e não geram pagamento.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
