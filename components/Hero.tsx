import { HUB_URL } from "@/lib/site";

export default function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden pb-10 pt-28 sm:pb-14 sm:pt-32">
      <div
        className="pointer-events-none absolute -top-32 right-[-10%] h-[480px] w-[620px] rounded-full bg-brand/15 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-40 top-40 h-[360px] w-[420px] rounded-full bg-sky-200/40 blur-[120px]"
        aria-hidden
      />

      <div className="container-x relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            Treinamento de IA · vagas abertas
          </span>

          <h1 className="mt-5 font-display text-[2.5rem] font-bold leading-[1.08] tracking-tight text-ink sm:text-[3.4rem] lg:text-[3.75rem]">
            Receba por hora para <span className="text-gradient">ensinar robôs</span> a fazer o que você já faz.
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-500">
            Empresas de IA pagam para ver tarefas reais pelos seus olhos. Você prende o celular na cabeça, grava
            atividades do dia a dia (em casa ou no trabalho) e recebe por cada hora aprovada.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
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

          <dl className="mt-9 grid max-w-lg grid-cols-3 gap-3">
            {[
              ["R$ 10/h", "tarefas residenciais"],
              ["R$ 67,50/h", "tarefas comerciais"],
              ["Zero", "experiência exigida"],
            ].map(([v, l]) => (
              <div key={l} className="rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-3 shadow-soft">
                <dt className="font-display text-lg font-bold text-ink sm:text-xl">{v}</dt>
                <dd className="mt-0.5 text-xs leading-snug text-slate-500">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="relative overflow-hidden rounded-[2rem] border-4 border-white shadow-lift">
            <img
              src="/hero-person.jpg"
              alt="Pessoa gravando tarefa doméstica com o celular preso na cabeça"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-5 -left-3 w-56 rounded-2xl bg-white p-4 shadow-lift sm:-left-8">
            <p className="text-xs font-medium text-slate-500">12h de tarefas comerciais</p>
            <p className="mt-0.5 font-display text-2xl font-bold text-ink">R$ 810,00</p>
            <p className="mt-0.5 text-xs font-medium text-emerald-600">R$ 67,50 por hora validada</p>
          </div>
          <div className="absolute -right-2 top-6 flex items-center gap-2 rounded-2xl bg-white px-3.5 py-2.5 shadow-lift sm:-right-6">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">✓</span>
            <p className="text-sm font-semibold leading-tight text-ink">
              Pago por
              <span className="block text-xs font-medium text-slate-500">hora aprovada</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
