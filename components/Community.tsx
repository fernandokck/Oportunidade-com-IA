import { COMMUNITY_URL } from "@/lib/site";
import TelegramIcon from "./icons/TelegramIcon";

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
    <section id="comunidade" className="section">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/70 bg-gradient-to-br from-white via-[#F2F9FD] to-[#E6F4FB] p-6 shadow-soft sm:p-10">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-telegram/15 blur-[100px]"
            aria-hidden
          />

          <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <img src="/logo.jpg" alt="" className="h-12 w-12 rounded-2xl shadow-soft" />
                <span className="eyebrow bg-telegram/10 text-[#167BB0]">
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

              <dl className="mt-7 grid grid-cols-3 gap-3">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-2xl bg-white/80 p-3 shadow-soft sm:p-4">
                    <dt className="font-display text-2xl font-bold text-ink sm:text-4xl">{s.value}</dt>
                    <dd className="mt-1 text-xs leading-snug text-slate-500 sm:text-sm">{s.label}</dd>
                  </div>
                ))}
              </dl>

              <a href={COMMUNITY_URL} target="_blank" rel="noopener noreferrer" className="btn-tg mt-7">
                <TelegramIcon />
                Quero entrar na comunidade
              </a>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
                O que você aprende lá dentro
              </p>
              <ul className="mt-4 grid gap-2.5">
                {learn.map((l) => (
                  <li
                    key={l.title}
                    className="flex gap-4 rounded-2xl border border-slate-200/70 bg-white p-4 shadow-soft transition hover:border-slate-300"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E8F5FC] text-xl" aria-hidden>
                      {l.icon}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-ink">{l.title}</h3>
                      <p className="mt-1 text-[15px] leading-relaxed text-slate-500">{l.text}</p>
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
