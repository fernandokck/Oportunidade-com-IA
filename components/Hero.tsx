import { HUB_URL } from "@/lib/site";

export default function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-amberNeon/20 blur-[140px]"
        aria-hidden
      />

      <div className="container-x relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Treinamento de IA · vagas abertas
          </span>

          <h1 className="mt-6 font-display text-[2.6rem] font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[4.25rem]">
            Receba por hora para <span className="text-gradient">ensinar robôs</span> a fazer o que você já faz.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-400">
            Empresas de IA pagam para ver tarefas reais pelos seus olhos. Você prende o celular na cabeça, grava
            atividades do dia a dia (em casa ou no trabalho) e recebe por cada hora aprovada.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#calculadora" className="btn-primary">
              Calcular meus ganhos
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a href={HUB_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              Começar na HUB.xyz
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/[0.08] pt-8">
            {[
              ["R$ 10/h", "tarefas residenciais"],
              ["R$ 67,50/h", "tarefas comerciais"],
              ["0", "experiência exigida"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="font-display text-xl font-bold text-white sm:text-2xl">{v}</dt>
                <dd className="mt-1 text-xs leading-snug text-stone-500 sm:text-sm">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-white/10">
            <img
              src="/hero-person.jpg"
              alt="Pessoa gravando tarefa doméstica com o celular preso na cabeça"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cyber-950 via-transparent to-transparent" />
          </div>

          <div className="card absolute -bottom-6 -left-4 w-60 bg-cyber-900/90 p-4 shadow-2xl sm:-left-10">
            <p className="text-xs font-medium text-stone-400">12h de tarefas comerciais</p>
            <p className="mt-1 font-display text-3xl font-bold text-white">R$ 810,00</p>
            <p className="mt-1 text-xs text-emerald-400">R$ 67,50 por hora validada</p>
          </div>
          <div className="card absolute -right-3 top-6 bg-cyber-900/90 px-4 py-3 shadow-2xl sm:-right-8">
            <p className="text-[11px] font-medium uppercase tracking-wider text-stone-500">Pagamento</p>
            <p className="font-display text-lg font-bold text-white">por hora aprovada</p>
          </div>
        </div>
      </div>
    </section>
  );
}
