import { HUB_URL } from "@/lib/site";

const VIDEO_ID = "tIg41c37V4Y";

/** Balões que explicam, na prática, o que acontece no vídeo. */
const BALLOONS = [
  {
    step: "1 · Prepare",
    title: "Celular preso na testa",
    text: "Suporte de cabeça e bateria carregada",
    icon: "📱",
    pos: "right-[calc(100%-72px)] top-[6%]",
    delay: "0s",
  },
  {
    step: "2 · Ilumine",
    title: "Ambiente bem claro",
    text: "Luz natural, sem contraluz",
    icon: "💡",
    pos: "right-[calc(100%-72px)] top-[50%]",
    delay: "1.2s",
  },
  {
    step: "3 · Grave",
    title: "Mãos sempre no quadro",
    text: "Pegue e solte os objetos devagar",
    icon: "🙌",
    pos: "left-[calc(100%-80px)] top-[26%]",
    delay: "0.6s",
  },
  {
    step: "4 · Envie",
    title: "Vídeo aprovado",
    text: "+ R$ 10 a R$ 67,50 por hora",
    icon: "✅",
    pos: "left-[calc(100%-80px)] bottom-[8%]",
    delay: "1.8s",
    highlight: true,
  },
];

function Balloon({ b }: { b: (typeof BALLOONS)[number] }) {
  return (
    <div
      className={`flex w-48 items-start gap-2.5 rounded-2xl border bg-white/95 p-3 shadow-lift backdrop-blur ${
        b.highlight ? "border-emerald-200" : "border-slate-200/70"
      }`}
    >
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-lg ${
          b.highlight ? "bg-emerald-50" : "bg-brand-soft"
        }`}
        aria-hidden
      >
        {b.icon}
      </span>
      <div className="min-w-0">
        <p className={`text-[11px] font-semibold ${b.highlight ? "text-emerald-700" : "text-brand-deep"}`}>{b.step}</p>
        <p className="text-sm font-semibold leading-tight text-ink">{b.title}</p>
        <p className="mt-0.5 text-xs leading-snug text-slate-500">{b.text}</p>
      </div>
    </div>
  );
}

function HeroVideo() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="relative mx-auto w-[270px] sm:w-[290px]">
        {/* Moldura de celular */}
        <div className="relative overflow-hidden rounded-[2.4rem] border-[7px] border-ink bg-ink shadow-lift">
          <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-ink" aria-hidden />
          <div className="absolute right-3 top-9 z-10 flex items-center gap-1.5 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
            REC · POV na prática
          </div>
          <div className="relative aspect-[9/16] w-full bg-ink">
            <iframe
              src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&rel=0&modestbranding=1&playsinline=1&controls=0`}
              title="Demonstração na prática: gravação de tarefas para treinamento de IA"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-full w-full border-0"
            />
          </div>
        </div>

        {/* Balões ao redor do vídeo (telas médias e grandes) */}
        {BALLOONS.map((b) => (
          <div
            key={b.step}
            className={`absolute z-20 hidden sm:block ${b.pos}`}
          >
            <div className="animate-float" style={{ animationDelay: b.delay }}>
              <Balloon b={b} />
            </div>
          </div>
        ))}
      </div>

      {/* No celular, os balões viram um passo a passo abaixo do vídeo */}
      <ol className="mt-5 grid grid-cols-2 gap-2.5 sm:hidden">
        {BALLOONS.map((b) => (
          <li key={b.step} className="[&>div]:w-full">
            <Balloon b={b} />
          </li>
        ))}
      </ol>
    </div>
  );
}

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

        <HeroVideo />
      </div>
    </section>
  );
}
