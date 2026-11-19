const faqs = [
  {
    q: "O que exatamente eu vou gravar?",
    a: "Tarefas do dia a dia, do seu ponto de vista: lavar louça, dobrar roupa, cozinhar, organizar ou, nas tarefas comerciais, atividades do seu trabalho como elétrica, costura ou paisagismo. O app da HUB.xyz mostra quais tarefas estão disponíveis.",
  },
  {
    q: "Preciso mostrar meu rosto?",
    a: "Não. A gravação é em primeira pessoa (POV), com o celular preso na testa. Só aparecem suas mãos e os objetos.",
  },
  {
    q: "Qual a diferença entre tarefa residencial e comercial?",
    a: "Residenciais são gravadas em casa e pagam a partir de R$ 10 por hora validada. Comerciais são gravadas em ambiente de trabalho e chegam a R$ 67,50 por hora validada.",
  },
  {
    q: "Como funcionam os ganhos por indicação?",
    a: "Quando alguém se cadastra pelo seu link, você ganha R$ 1,00 por hora residencial validada dessa pessoa e R$ 2,00 por hora comercial. Se ela também indicar outras pessoas, você ganha R$ 0,75 (residencial) e R$ 1,50 (comercial) por hora validada dessas pessoas.",
  },
  {
    q: "Preciso de equipamento caro?",
    a: "Não. Um celular com câmera boa (1080p ou mais) e um suporte de cabeça que custa entre R$ 25 e R$ 45.",
  },
  {
    q: "E se meu vídeo for rejeitado?",
    a: "Geralmente é por iluminação ruim ou mãos fora do quadro. Siga as orientações do app e grave de novo. Na comunidade ParaIA a gente ajuda a entender cada rejeição.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="section">
      <div className="container-x grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <span className="eyebrow">Dúvidas</span>
          <h2 className="h2">Perguntas frequentes</h2>
          <p className="lead">Não achou sua resposta? Pergunte direto na comunidade.</p>
        </div>
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((f, i) => (
            <details key={f.q} className="group py-5" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition group-open:rotate-45 group-open:text-brand-deep">
                  +
                </span>
              </summary>
              <p className="mt-3 pr-12 leading-relaxed text-slate-500">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
