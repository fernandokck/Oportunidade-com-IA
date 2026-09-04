import SectionHead from "./SectionHead";

export default function VideoGuide() {
  return (
    <section
      id="como-gravar"
      className="relative border-b border-slate-200 dark:border-cyber-700/80 bg-slate-50/70 dark:bg-cyber-900/60 py-12 sm:py-16 md:py-24 transition-colors"
    >
      {/* Background glowing accents */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-50"></div>
      <div className="hidden sm:block pointer-events-none absolute top-10 right-1/4 h-80 w-80 rounded-full bg-amber-400/10 dark:bg-amberNeon/10 blur-[130px]"></div>
      <div className="hidden sm:block pointer-events-none absolute bottom-10 left-10 h-72 w-72 rounded-full bg-orange-500/10 dark:bg-fireNeon/10 blur-[120px]"></div>

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6">
        <SectionHead
          index="04 · GUIA PRÁTICO DE GRAVAÇÃO"
          title="Como Gravar Bons Vídeos"
          sub="Siga o passo a passo correto de posicionamento, preparação do ambiente e execução para ter 100% dos seus envios aprovados de primeira."
        />

        {/* 🎬 3 PASSOS DE GRAVAÇÃO 🎬 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 lg:mb-16">
          
          {/* PASSO 1 */}
          <div className="relative flex flex-col justify-between rounded-3xl border border-slate-200 dark:border-cyber-700 bg-white/95 dark:bg-cyber-950/90 p-6 sm:p-7 backdrop-blur-xl shadow-sm hover:shadow-md hover:border-amber-400 dark:hover:border-amberNeon/50 transition-all duration-300 group">
            <div>
              {/* Step number badge */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-600 dark:text-amberNeon font-display font-black text-xl shadow-inner group-hover:scale-110 transition-transform">
                  01
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-amber-700 dark:text-amber-200/80 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full">
                  Ângulo & Suporte
                </span>
              </div>

              <h3 className="font-display text-lg sm:text-xl font-black text-slate-900 dark:text-white mb-2.5 group-hover:text-amber-600 dark:group-hover:text-amberNeon transition-colors">
                Posicione seu celular
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                Prenda o celular na testa, inclinado uns <strong>45° para baixo</strong> para que suas mãos e pés fiquem no quadro. Grave na <strong>horizontal (celular deitado)</strong>.
              </p>

              {/* Teste de ângulo comparison widget */}
              <div className="rounded-2xl border border-slate-200 dark:border-cyber-700 bg-slate-50 dark:bg-cyber-900/80 p-3.5 sm:p-4 mb-4">
                <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-amber-200/70 mb-2.5 flex items-center gap-1.5">
                  <span>📐</span>
                  <span>Teste de ângulo</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 dark:bg-rose-500/15 p-2.5 text-center">
                    <span className="font-bold text-rose-600 dark:text-rose-400 block text-[11px] mb-0.5">✕ Errado</span>
                    <span className="text-[11px] text-slate-700 dark:text-slate-300 leading-tight block">Você só vê a parede</span>
                  </div>
                  <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 dark:bg-emerald-500/15 p-2.5 text-center">
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 block text-[11px] mb-0.5">✓ Certo</span>
                    <span className="text-[11px] text-slate-700 dark:text-slate-300 leading-tight block">Mãos e pés visíveis</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tip Footer */}
            <div className="pt-3 border-t border-slate-200 dark:border-cyber-700/80 text-[11px] text-amber-700 dark:text-amber-300 font-semibold flex items-center gap-1.5">
              <span>💡</span>
              <span>Grave na horizontal: vire o celular de lado na faixa.</span>
            </div>
          </div>

          {/* PASSO 2 */}
          <div className="relative flex flex-col justify-between rounded-3xl border border-slate-200 dark:border-cyber-700 bg-white/95 dark:bg-cyber-950/90 p-6 sm:p-7 backdrop-blur-xl shadow-sm hover:shadow-md hover:border-amber-400 dark:hover:border-amberNeon/50 transition-all duration-300 group">
            <div>
              {/* Step number badge */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-600 dark:text-amberNeon font-display font-black text-xl shadow-inner group-hover:scale-110 transition-transform">
                  02
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-amber-700 dark:text-amber-200/80 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full">
                  Setup & Iluminação
                </span>
              </div>

              <h3 className="font-display text-lg sm:text-xl font-black text-slate-900 dark:text-white mb-2.5 group-hover:text-amber-600 dark:group-hover:text-amberNeon transition-colors">
                Prepare o ambiente
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                Boa iluminação e uniforme (luz natural é melhor), um ambiente calmo, a lente limpa e o celular carregado ou uma bateria portátil.
              </p>

              {/* Checklist list */}
              <div className="space-y-2 mb-4">
                {[
                  "Boa iluminação, uniforme",
                  "Um ambiente calmo",
                  "Lente limpa",
                  "Celular carregado",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 p-2 rounded-xl border border-slate-200/80 dark:border-cyber-700 bg-slate-50/80 dark:bg-cyber-900/60 text-xs text-slate-800 dark:text-slate-200 font-medium"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                      ✓
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tip Footer */}
            <div className="pt-3 border-t border-slate-200 dark:border-cyber-700/80 text-[11px] text-amber-700 dark:text-amber-300 font-semibold flex items-center gap-1.5">
              <span>🔋</span>
              <span>Dica: Use um powerbank no bolso se for gravar várias horas.</span>
            </div>
          </div>

          {/* PASSO 3 */}
          <div className="relative flex flex-col justify-between rounded-3xl border border-slate-200 dark:border-cyber-700 bg-white/95 dark:bg-cyber-950/90 p-6 sm:p-7 backdrop-blur-xl shadow-sm hover:shadow-md hover:border-amber-400 dark:hover:border-amberNeon/50 transition-all duration-300 group">
            <div>
              {/* Step number badge */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-600 dark:text-amberNeon font-display font-black text-xl shadow-inner group-hover:scale-110 transition-transform">
                  03
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-amber-700 dark:text-amber-200/80 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full">
                  Execução Real
                </span>
              </div>

              <h3 className="font-display text-lg sm:text-xl font-black text-slate-900 dark:text-white mb-2.5 group-hover:text-amber-600 dark:group-hover:text-amberNeon transition-colors">
                Faça de verdade
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Trabalhe no seu ritmo natural e complete uma tarefa do início ao fim. Mantenha as mãos no quadro ao pegar, segurar ou soltar.
              </p>

              {/* Notice pill */}
              <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 dark:bg-amber-500/15 p-3.5 mb-4 text-xs text-slate-800 dark:text-amber-100 leading-relaxed">
                <strong className="text-amber-700 dark:text-amber-300 block mb-1">⚠️ Atenção:</strong>
                Não trabalhe devagar de propósito, nem faça tarefas falsas ou repetitivas. A IA precisa aprender com ações humanas genuínas.
              </div>
            </div>

            {/* Tip Footer */}
            <div className="pt-3 border-t border-slate-200 dark:border-cyber-700/80 text-[11px] text-amber-700 dark:text-amber-300 font-semibold flex items-center gap-1.5">
              <span>⏱️</span>
              <span>Conclua cada tarefa inteira antes de parar a gravação.</span>
            </div>
          </div>

        </div>

        {/* ⚖️ RESUMO: O QUE É APROVADO vs O QUE É REJEITADO ⚖️ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          
          {/* O QUE É APROVADO */}
          <div className="relative flex flex-col justify-between rounded-3xl border-2 border-emerald-500/30 dark:border-emerald-400/40 bg-white/95 dark:bg-cyber-900/90 p-6 sm:p-8 backdrop-blur-2xl shadow-lg">
            <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>

            <div>
              <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-emerald-500/20">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xl font-bold">
                    ✓
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold block">
                      Padrão de Qualidade
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">
                      O que é aprovado
                    </h3>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-500/15 border border-emerald-500/30">
                  100% Pagamento
                </span>
              </div>

              <div className="space-y-3 sm:space-y-3.5">
                {[
                  "Visão estável da testa, levemente para baixo",
                  "Mãos e dedos visíveis enquanto você trabalha",
                  "Imagem nítida e bem iluminada",
                  "Uma tarefa completa, em ritmo natural",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 sm:p-3.5 rounded-2xl border border-emerald-500/15 bg-emerald-50/50 dark:bg-cyber-950/60"
                  >
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-emerald-500 text-white font-bold text-xs">
                      ✓
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-emerald-500/20 text-[11px] text-emerald-700 dark:text-emerald-300/90 font-medium">
              Tarefas com esses critérios são processadas e liberadas sem pendências.
            </div>
          </div>

          {/* O QUE É REJEITADO */}
          <div className="relative flex flex-col justify-between rounded-3xl border-2 border-rose-500/30 dark:border-rose-400/40 bg-white/95 dark:bg-cyber-900/90 p-6 sm:p-8 backdrop-blur-2xl shadow-lg">
            <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>

            <div>
              <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-rose-500/20">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-500/20 text-rose-600 dark:text-rose-400 text-xl font-bold">
                    ✕
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-rose-600 dark:text-rose-400 font-bold block">
                      Principais Motivos de Recusa
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-black text-rose-600 dark:text-rose-400">
                      O que é rejeitado
                    </h3>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-bold text-rose-800 dark:text-rose-300 bg-rose-500/15 border border-rose-500/30">
                  Descarte Automático
                </span>
              </div>

              <div className="space-y-3 sm:space-y-3.5">
                {[
                  "Câmera tremida, inclinada ou obstruída, ou pouca luz",
                  "Mãos levantadas de propósito ou movimento robótico",
                  "Mãos fora do quadro mais de 10% do tempo",
                  "Sentado, pausas longas ou tarefas encenadas",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 sm:p-3.5 rounded-2xl border border-rose-500/15 bg-rose-50/50 dark:bg-cyber-950/60"
                  >
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-rose-500 text-white font-bold text-xs">
                      ✕
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-rose-500/20 text-[11px] text-rose-700 dark:text-rose-300/90 font-medium">
              Evite estes erros para não perder tempo de gravação nem ter envios invalidados.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
