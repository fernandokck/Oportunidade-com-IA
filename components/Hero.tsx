export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 dark:border-cyber-700/80 bg-slate-50 dark:bg-cyber-950 py-10 sm:py-14 md:py-20 transition-colors">
      {/* Background glowing orbs & warm amber grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-60 dark:opacity-70"></div>
      <div className="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 sm:h-96 sm:w-96 rounded-full bg-amber-400/20 dark:bg-amberNeon/15 blur-[100px] sm:blur-[130px] animate-amber-glow"></div>
      <div className="pointer-events-none absolute top-1/3 -right-20 h-80 w-80 sm:h-96 sm:w-96 rounded-full bg-orange-400/15 dark:bg-fireNeon/15 blur-[120px] sm:blur-[150px] animate-amber-glow"></div>

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:gap-12 lg:grid-cols-12">
          
          {/* Left Column: Headline & Subtext */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Top badges bar */}
            <div className="mb-4 sm:mb-6 flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 dark:border-amberNeon/40 bg-amber-500/10 dark:bg-amberNeon/10 px-3.5 py-1 text-xs font-semibold text-amber-700 dark:text-amberNeon shadow-sm">
                <span className="flex h-2 w-2 relative shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 dark:bg-amberNeon opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500 dark:bg-amberNeon"></span>
                </span>
                <span className="tracking-wide">NOVA OPORTUNIDADE GLOBAL EM EXPANSÃO</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[48px] font-black leading-[1.18] tracking-tight text-slate-950 dark:text-white mb-5 sm:mb-6">
              Fazer tarefas domésticas não será mais problema, pois agora{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 dark:from-amber-400 dark:via-amberNeon dark:to-orange-500">
                você é remunerado para treinar IA.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-200/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 font-normal">
              Um novo mercado surgiu no mundo e agora esta chegando no Brasil, mas a grande mídia não fala sobre isto, então esta é sua oportunidade. Vídeos curtos de tarefas do dia a dia, lavar louça, dobrar roupa e cuidar do pet, são usados para treinar modelos de IA e robótica doméstica. Este guia reúne o quais plataformas e oportunidades você pode ter ao começar.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4">
              {/* Botão 1: Acesse a comunidade (WhatsApp) */}
              <a
                href="https://chat.whatsapp.com/IpNve1GYwzG5RnKDWDbixV?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-cyber-950 bg-gradient-to-r from-amber-400 via-amberNeon to-orange-500 shadow-amber-glow hover:shadow-[0_0_40px_rgba(255,140,0,0.65)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 border border-amber-300/50"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 fill-current shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.97.53 1.954.819 2.796.82h.005c3.18 0 5.767-2.587 5.768-5.766 0-3.18-2.586-5.767-5.773-5.773zm7.558 5.766c-.002 4.167-3.391 7.555-7.558 7.555-1.266 0-2.51-.318-3.606-.921l-4.004 1.05 1.069-3.908c-.672-1.164-1.027-2.493-1.026-3.776.002-4.167 3.391-7.555 7.559-7.555 4.167.001 7.566 3.39 7.566 7.555zm1.536 0c.001-5.014-4.081-9.095-9.095-9.095-5.014 0-9.095 4.081-9.095 9.095 0 1.602.419 3.167 1.215 4.546l-1.29 4.717 4.827-1.266c1.328.725 2.825 1.108 4.343 1.108 5.015 0 9.095-4.081 9.095-9.095z" />
                </svg>
                <span>Acesse a comunidade</span>
              </a>

              {/* Botão 2: Ver plataformas disponíveis */}
              <a
                href="#plataformas"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-800 dark:text-amber-100 bg-white dark:bg-cyber-850/90 border border-slate-200 dark:border-cyber-700 hover:border-amber-400 dark:hover:border-amberNeon/60 hover:text-amber-600 dark:hover:text-white transition-all backdrop-blur-md shadow-sm"
              >
                <span>Ver plataformas disponíveis</span>
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Video Demonstration */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="relative w-full max-w-[340px] sm:max-w-[370px] group">
              {/* Fiery back ambient glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-amber-400/30 via-orange-500/20 to-amber-300/20 dark:from-amberNeon/40 dark:via-orange-600/30 dark:to-amber-300/30 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Glass Card Housing */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-amberNeon/40 bg-white/95 dark:bg-cyber-900/90 shadow-2xl backdrop-blur-xl">
                {/* Top HUD bar */}
                <div className="flex items-center justify-between px-3.5 sm:px-4 py-2 sm:py-2.5 bg-slate-100/90 dark:bg-cyber-950/90 border-b border-slate-200 dark:border-cyber-700 text-[11px] sm:text-xs font-mono text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="flex h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-red-500 animate-pulse"></span>
                    <span className="text-red-600 dark:text-red-400 font-bold">DEMO REAL</span>
                    <span className="text-slate-400 dark:text-cyber-600">|</span>
                    <span className="text-amber-700 dark:text-amber-200 font-semibold">POV NA PRÁTICA</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>TREINO ATIVO</span>
                  </div>
                </div>

                {/* Video Embed */}
                <div className="relative aspect-[9/16] w-full overflow-hidden bg-black">
                  <iframe
                    src="https://www.youtube.com/embed/tIg41c37V4Y?autoplay=1&mute=1&loop=1&playlist=tIg41c37V4Y&rel=0&modestbranding=1&playsinline=1"
                    title="Demonstração na prática: gravação de tarefas domésticas para treinamento de IA"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>

                {/* Bottom caption bar */}
                <div className="px-3.5 py-2.5 sm:px-4 sm:py-3 bg-slate-50/95 dark:bg-cyber-950/95 border-t border-slate-200 dark:border-cyber-700 text-xs text-slate-700 dark:text-amber-100 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-[11px] sm:text-xs font-medium">
                    <span className="text-amber-600 dark:text-amberNeon font-bold">✓</span> Veja como funciona na prática
                  </span>
                  <span className="text-slate-500 dark:text-amber-200/80 font-mono text-[10px] sm:text-[11px]">Gravação em 1ª pessoa</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 🌟 STATS / HIGHLIGHT BAR LOGO ABAIXO 🌟 */}
        <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-slate-200 dark:border-cyber-700/80">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-6">
            
            {/* Stat 1: Plataformas Testadas */}
            <div className="relative rounded-2xl border border-slate-200 dark:border-cyber-700 bg-white/90 dark:bg-cyber-900/80 p-4 sm:p-5 backdrop-blur-xl hover:border-amber-400 dark:hover:border-amberNeon/50 shadow-sm hover:shadow-md dark:hover:shadow-amber-glow transition-all group">
              <div className="flex items-center gap-3.5 sm:gap-4">
                <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 border border-amber-500/30 dark:border-amberNeon/40 text-amber-600 dark:text-amberNeon group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-amber-200/70">
                    Mapeamento Completo
                  </div>
                  <div className="text-base sm:text-lg lg:text-xl font-display font-black text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amberNeon transition-colors">
                    Plataformas testadas: <span className="text-amber-600 dark:text-amberNeon">5</span>
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-300 mt-0.5">+ 3 novas em análise</div>
                </div>
              </div>
            </div>

            {/* Stat 2: Remuneração por hora */}
            <div className="relative rounded-2xl border border-slate-200 dark:border-cyber-700 bg-white/90 dark:bg-cyber-900/80 p-4 sm:p-5 backdrop-blur-xl hover:border-emerald-400/50 shadow-sm hover:shadow-md transition-all group">
              <div className="flex items-center gap-3.5 sm:gap-4">
                <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 border border-emerald-500/30 dark:border-emerald-400/40 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-amber-200/70">
                    Ganho Estimado
                  </div>
                  <div className="text-base sm:text-lg lg:text-xl font-display font-black text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    <span className="text-emerald-600 dark:text-emerald-400">$5 a $8</span> por hora
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-300 mt-0.5">Pagamentos em USD / Pix / Cripto</div>
                </div>
              </div>
            </div>

            {/* Stat 3: Sem experiência */}
            <div className="relative rounded-2xl border border-slate-200 dark:border-cyber-700 bg-white/90 dark:bg-cyber-900/80 p-4 sm:p-5 backdrop-blur-xl hover:border-amber-400/50 shadow-sm hover:shadow-md transition-all group">
              <div className="flex items-center gap-3.5 sm:gap-4">
                <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 border border-amber-500/30 dark:border-amber-400/40 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-amber-200/70">
                    Facilidade de Início
                  </div>
                  <div className="text-base sm:text-lg lg:text-xl font-display font-black text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                    Não precisa de experiência
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-300 mt-0.5">Basta celular e tarefas da sua rotina</div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
