import { COMMUNITY_URL } from "@/lib/site";

const stats = [
  { value: "+570", label: "membros na comunidade" },
  { value: "+400", label: "treinando IA hoje" },
  { value: "+100", label: "recebendo em dólar de empresas internacionais" },
];

const learn = [
  {
    icon: "🌎",
    title: "Jobs internacionais",
    text: "Vagas remotas de empresas de fora que pagam em dólar, compartilhadas assim que abrem.",
  },
  {
    icon: "🤝",
    title: "Suporte para treinar IA",
    text: "Dúvidas de cadastro, gravação, rejeições e saques respondidas por quem já faz.",
  },
  {
    icon: "🔑",
    title: "Informações privilegiadas",
    text: "Novas plataformas, bônus e mudanças de valores antes de virarem notícia.",
  },
  {
    icon: "💰",
    title: "Construção de renda online",
    text: "Como juntar várias fontes e transformar tarefas avulsas em renda constante.",
  },
];

export default function Community() {
  return (
    <section id="comunidade" className="section border-t border-white/[0.06]">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-gradient-to-br from-cyber-850 via-cyber-900 to-cyber-950 p-6 sm:p-12">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-whatsappGreen/15 blur-[100px]"
            aria-hidden
          />

          <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <img src="/logo.jpg" alt="" className="h-12 w-12 rounded-2xl ring-1 ring-white/10" />
                <span className="eyebrow border-whatsappGreen/30 bg-whatsappGreen/10 text-green-300">
                  Comunidade ParaIA
                </span>
              </div>
              <h2 className="h2">
                ParaIA · <span className="text-gradient">Oportunidades com IA</span>
              </h2>
              <p className="lead">
                Você não precisa descobrir tudo sozinho. Na comunidade, centenas de pessoas já estão ganhando com IA e
                compartilham o caminho todos os dias.
              </p>

              <dl className="mt-10 grid grid-cols-3 gap-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt className="font-display text-3xl font-extrabold text-white sm:text-5xl">{s.value}</dt>
                    <dd className="mt-2 text-xs leading-snug text-stone-400 sm:text-sm">{s.label}</dd>
                  </div>
                ))}
              </dl>

              <a href={COMMUNITY_URL} target="_blank" rel="noopener noreferrer" className="btn-wa mt-10">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 004.74 1.21c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.8 14.03c-.24.68-1.41 1.3-1.95 1.35-.5.05-1.12.07-1.81-.11-.42-.13-.95-.31-1.64-.6-2.89-1.25-4.78-4.16-4.92-4.35-.14-.19-1.17-1.56-1.17-2.97 0-1.42.74-2.11 1-2.4.26-.29.57-.36.76-.36h.55c.17 0 .41-.07.64.49.24.57.81 1.98.88 2.12.07.14.12.31.02.5-.09.19-.14.31-.28.48l-.43.5c-.14.14-.29.3-.12.59.17.29.74 1.22 1.59 1.98 1.09.97 2.01 1.27 2.3 1.41.29.14.45.12.62-.07.17-.19.71-.83.9-1.12.19-.29.38-.24.64-.14.26.09 1.67.79 1.95.93.29.14.48.21.55.33.07.12.07.69-.17 1.37z" />
                </svg>
                Quero entrar na comunidade
              </a>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-stone-400">
                O que você aprende lá dentro
              </p>
              <ul className="mt-5 grid gap-3">
                {learn.map((l) => (
                  <li
                    key={l.title}
                    className="flex gap-4 rounded-2xl border border-white/[0.07] bg-black/20 p-5 transition hover:border-white/15"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] text-xl" aria-hidden>
                      {l.icon}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-white">{l.title}</h3>
                      <p className="mt-1 text-[15px] leading-relaxed text-stone-400">{l.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
