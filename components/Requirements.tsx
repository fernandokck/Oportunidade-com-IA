import SectionHead from "./SectionHead";

interface RequirementItem {
  step: string;
  badge: string;
  badgeColor: "amber" | "gold" | "orange" | "emerald";
  title: string;
  desc: string;
  tips: string;
  buttonUrl?: string;
  buttonText?: string;
  secondaryButtonUrl?: string;
  secondaryButtonText?: string;
  icon: React.ReactNode;
}

const requirements: RequirementItem[] = [
  {
    step: "01",
    badge: "Essencial",
    badgeColor: "amber",
    title: "Suporte de Cabeça para Celular",
    desc: "É o acessório físico indispensável: um suporte elástico que prende o smartphone na testa, permitindo gravar em primeira pessoa (POV) com as duas mãos 100% livres para realizar as tarefas.",
    tips: "Custa em média R$ 25 a R$ 45 em marketplaces (como Shopee e Mercado Livre).",
    buttonUrl: "https://s.shopee.com.br/20unTpATT6",
    buttonText: "Comprar na Shopee",
    icon: (
      <svg className="w-6 h-6 text-amber-600 dark:text-amberNeon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    step: "02",
    badge: "Hardware",
    badgeColor: "gold",
    title: "Smartphone com Câmera HD",
    desc: "Smartphones com gravação nítida (1080p a 60fps ou 4K) e sensor ultra-wide / angular. Modelos comuns: iPhone 12 em diante, Galaxy S21+, Pixel 6+ ou Xiaomis equivalentes.",
    tips: "Recomenda-se ter pelo menos 5GB a 10GB de espaço livre para vídeos.",
    icon: (
      <svg className="w-6 h-6 text-amber-500 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    step: "03",
    badge: "Elegibilidade",
    badgeColor: "orange",
    title: "Ter 18 Anos e Morar no Brasil / Latam",
    desc: "Requisito padrão de cadastro das plataformas globais. O Brasil e América Latina são os polos de maior demanda atual para coleta de dados de treinamento de IA doméstica.",
    tips: "Documento de identificação válido (RG/CNH) para verificação básica.",
    icon: (
      <svg className="w-6 h-6 text-orange-500 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    step: "04",
    badge: "Pagamento",
    badgeColor: "emerald",
    title: "Conta Digital / Pix ou Carteira Digital",
    desc: "Para receber seus pagamentos em dólar convertidos automaticamente para reais via Pix, ou via conta digital internacional / carteira de criptomoeda dependendo da plataforma escolhida.",
    tips: "A maioria das plataformas processa saques diretamente via Pix ou PayPal.",
    icon: (
      <svg className="w-6 h-6 text-emerald-500 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
];

export default function Requirements() {
  return (
    <section id="requisitos" className="relative border-b border-slate-200 dark:border-cyber-700/80 bg-slate-50/50 dark:bg-cyber-950 py-12 sm:py-16 md:py-24 transition-colors">
      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6">
        <SectionHead
          index="01 · GUIA DE INÍCIO"
          title="O que você precisa para começar"
          sub="O setup é simples e acessível. Você só precisa de tarefas do seu dia a dia, seu smartphone e um suporte elástico de cabeça."
        />

        {/* Modern Interactive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {requirements.map((item) => (
            <div
              key={item.step}
              className="relative flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-cyber-700 bg-white/90 dark:bg-cyber-900/80 p-5 sm:p-6 md:p-8 backdrop-blur-xl hover:border-amber-400 dark:hover:border-amberNeon/50 shadow-sm hover:shadow-md dark:hover:shadow-amber-glow transition-all duration-300 group"
            >
              <div>
                {/* Step indicator & Icon */}
                <div className="flex items-center justify-between mb-5 sm:mb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-slate-100 dark:bg-cyber-800 border border-slate-200 dark:border-cyber-700 group-hover:border-amber-400 dark:group-hover:border-amberNeon/50 group-hover:scale-105 transition-all">
                      {item.icon}
                    </div>
                    <span className="font-display font-black text-xl sm:text-2xl text-slate-400 dark:text-cyber-600 group-hover:text-amber-600 dark:group-hover:text-amberNeon transition-colors">
                      {item.step}
                    </span>
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${
                      item.badgeColor === "amber"
                        ? "bg-amber-500/15 text-amber-700 dark:text-amberNeon border-amber-500/30"
                        : item.badgeColor === "gold"
                        ? "bg-yellow-500/15 text-yellow-700 dark:text-yellow-400 border-yellow-500/30"
                        : item.badgeColor === "orange"
                        ? "bg-orange-500/15 text-orange-700 dark:text-orange-400 border-orange-500/30"
                        : "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/30"
                    }`}
                  >
                    {item.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3 group-hover:text-amber-600 dark:group-hover:text-amberNeon transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-5 sm:mb-6">
                  {item.desc}
                </p>
              </div>

              <div>
                {/* Bottom Tip Box */}
                <div className="rounded-xl border border-slate-200 dark:border-cyber-700 bg-slate-50 dark:bg-cyber-950/70 p-3 sm:p-3.5 flex items-start gap-2.5 text-xs text-slate-700 dark:text-amber-100/80">
                  <span className="text-amber-600 dark:text-amberNeon text-sm leading-none font-bold shrink-0">💡</span>
                  <span>{item.tips}</span>
                </div>

                {/* 🛒 Botão de Ação para Suporte de Cabeça (Shopee) 🛒 */}
                {item.buttonUrl && (
                  <div className="mt-4 pt-4 border-t border-slate-200 dark:border-cyber-700/60 flex items-center">
                    <a
                      href={item.buttonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#EE4D2D] via-[#F25A38] to-[#FF6B4A] shadow-[0_0_20px_rgba(238,77,45,0.35)] hover:shadow-[0_0_30px_rgba(238,77,45,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 border border-orange-400/40 group/shopee whitespace-nowrap"
                    >
                      <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                        <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h14v12z"/>
                      </svg>
                      <span>{item.buttonText || "Comprar na Shopee"}</span>
                      <span className="group-hover/shopee:translate-x-0.5 transition-transform">↗</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Extra Tip Banner */}
        <div className="mt-8 rounded-2xl border border-amber-300/60 dark:border-amberNeon/40 bg-gradient-to-r from-amber-50/90 via-orange-50/50 to-amber-50/90 dark:from-cyber-900 dark:via-cyber-850 dark:to-cyber-900 p-5 sm:p-6 md:p-8 backdrop-blur-xl shadow-lg dark:shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-6">
          <div className="flex items-start sm:items-center gap-3.5 sm:gap-4">
            <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-500/15 border border-amber-500/30 dark:border-amberNeon/40 text-amber-600 dark:text-amberNeon text-xl sm:text-2xl">
              🎯
            </div>
            <div>
              <h4 className="font-display text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">
                Dica de Gravação em Primeira Pessoa (POV)
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                Mantenha a iluminação do ambiente clara e execute os movimentos de forma natural. A inteligência artificial aprende observando o posicionamento exato das mãos e os objetos manipulados na sua rotina.
              </p>
            </div>
          </div>
          <a
            href="#plataformas"
            className="w-full md:w-auto text-center shrink-0 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-cyber-950 bg-gradient-to-r from-amber-400 to-orange-500 shadow-amber-glow hover:scale-105 transition-all"
          >
            Escolher Plataforma
          </a>
        </div>

      </div>
    </section>
  );
}
