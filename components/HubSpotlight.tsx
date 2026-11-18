import { HUB_URL, RATES, brl } from "@/lib/site";

const tiers = [
  {
    key: "residencial" as const,
    label: "Tarefas residenciais",
    img: "/hero-person.jpg",
    alt: "Pessoa gravando tarefas em casa",
    examples: ["Cozinhar", "Lavar louça", "Dobrar roupas", "Organizar", "Limpeza"],
  },
  {
    key: "comercial" as const,
    label: "Tarefas comerciais",
    img: "/worker-tech.jpg",
    alt: "Profissional em ambiente de trabalho",
    examples: ["Elétrica", "Paisagismo", "Costura", "Climatização", "Inspeção"],
  },
];

const videos = [
  { id: "cjQNlW67_os", title: "Como gravar e evitar rejeições" },
  { id: "rdjhmFXLUGM", title: "Pagamentos e saques na HUB" },
];

export default function HubSpotlight() {
  return (
    <section id="hub" className="section overflow-hidden border-t border-white/[0.06]">
      <div
        className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-emerald-500/10 blur-[120px]"
        aria-hidden
      />
      <div className="container-x relative">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow border-emerald-400/25 bg-emerald-400/10 text-emerald-300">
              ★ Plataforma em destaque
            </span>
            <h2 className="h2">
              HUB.xyz: de <span className="text-gradient">R$ 10 a R$ 67,50</span> por hora.
            </h2>
            <p className="lead">
              A plataforma que a comunidade mais usa hoje. Paga por hora de vídeo validada, tanto para tarefas em casa
              quanto para gravações no seu ambiente de trabalho.
            </p>
          </div>
          <a href={HUB_URL} target="_blank" rel="noopener noreferrer" className="btn-primary shrink-0">
            Criar minha conta na HUB
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7-7 7M21 12H3" />
            </svg>
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {tiers.map((t) => {
            const r = RATES[t.key];
            return (
              <article key={t.key} className="card group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={t.img}
                    alt={t.alt}
                    className="h-full w-full object-cover object-[50%_30%] transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-950 via-cyber-950/40 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    {t.label}
                  </span>
                </div>
                <div className="p-7 pt-2">
                  <p className="font-display text-5xl font-extrabold tracking-tight text-white">
                    {brl(r.hour)}
                    <span className="ml-1 text-lg font-semibold text-stone-500">/hora</span>
                  </p>
                  <p className="mt-2 text-sm text-stone-400">
                    12 horas = <strong className="text-white">{brl(r.hour * 12)}</strong>
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {t.examples.map((e) => (
                      <li key={e} className="rounded-full border border-white/10 px-3 py-1 text-xs text-stone-300">
                        {e}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 grid grid-cols-2 gap-3 border-t border-white/[0.08] pt-5 text-sm">
                    <div>
                      <p className="text-stone-500">Seu indicado</p>
                      <p className="font-semibold text-emerald-400">+{brl(r.level1)} por hora</p>
                    </div>
                    <div>
                      <p className="text-stone-500">Indicado do indicado</p>
                      <p className="font-semibold text-emerald-400">+{brl(r.level2)} por hora</p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
          {videos.map((v) => (
            <a
              key={v.id}
              href={`https://www.youtube.com/watch?v=${v.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="card group flex items-center gap-4 p-3 pr-5 transition hover:border-white/20"
            >
              <div className="relative h-20 w-32 shrink-0 overflow-hidden rounded-2xl">
                <img
                  src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-cyber-950">
                    ▶
                  </span>
                </span>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-stone-500">Tutorial HUB.xyz</p>
                <p className="mt-1 font-display font-semibold text-white group-hover:text-amber-300">{v.title}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
