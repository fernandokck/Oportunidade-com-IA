import { HEAD_MOUNT_URL } from "@/lib/site";

const steps = [
  {
    n: "01",
    title: "Prenda o celular na testa",
    text: "Com um suporte de cabeça simples (R$ 25 a R$ 45), a câmera grava em primeira pessoa e suas mãos ficam livres.",
  },
  {
    n: "02",
    title: "Grave tarefas reais",
    text: "Lavar louça, dobrar roupa, organizar, consertar, atender no trabalho. O app indica o que gravar.",
  },
  {
    n: "03",
    title: "Envie e receba",
    text: "Cada hora de vídeo aprovada vira dinheiro na sua conta. Seu rosto não aparece.",
  },
];

const reasons = [
  {
    icon: "📈",
    title: "Demanda que só cresce",
    text: "Robôs humanoides precisam de milhões de horas de vídeo real para aprender. Quem entra cedo pega as melhores tarefas.",
  },
  {
    icon: "🏠",
    title: "Você já faz essas tarefas",
    text: "Não é um trabalho novo: é ser pago pela rotina que você já tem em casa ou no seu emprego.",
  },
  {
    icon: "⏱️",
    title: "No seu horário",
    text: "Sem chefe e sem turno. Grave quando quiser, quantas horas quiser.",
  },
  {
    icon: "🎓",
    title: "Sem diploma, sem experiência",
    text: "Precisa ter 18 anos, um celular com boa câmera e seguir as orientações de gravação.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="section border-t border-white/[0.06]">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="eyebrow">O que é</span>
          <h2 className="h2">
            Treinar IA é gravar o seu dia a dia para que máquinas aprendam com ele.
          </h2>
          <p className="lead">
            Robôs e modelos de inteligência artificial aprendem observando pessoas. As empresas que os desenvolvem
            pagam para receber vídeos reais, gravados do ponto de vista de quem executa a tarefa. É isso que você faz.
          </p>
        </div>

        <ol className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {steps.map((s) => (
            <li key={s.n} className="card relative p-7">
              <span className="font-display text-sm font-bold text-amberNeon">{s.n}</span>
              <h3 className="mt-3 font-display text-xl font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-stone-400">{s.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-sm text-stone-500">
          Ainda não tem o suporte?{" "}
          <a href={HEAD_MOUNT_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-amber-300 underline-offset-4 hover:underline">
            Veja uma opção na Shopee
          </a>
          .
        </p>

        <div className="mt-24 grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="eyebrow">Por que fazer</span>
            <h2 className="h2">Uma renda nova, com o que você já sabe fazer.</h2>
            <p className="lead">
              O mercado de dados para IA está em plena expansão, e o Brasil é hoje um dos países com mais demanda para
              esse tipo de gravação.
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {reasons.map((r) => (
              <li key={r.title} className="card p-6">
                <span className="text-2xl" aria-hidden>
                  {r.icon}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-white">{r.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-stone-400">{r.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
