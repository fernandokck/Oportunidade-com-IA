"use client";

import { useState } from "react";
import SectionHead from "./SectionHead";

const faqs = [
  {
    q: "Como funciona o treinamento de IA com tarefas domésticas?",
    a: "Empresas de robótica e inteligência artificial precisam de milhões de horas de dados de visão computacional em primeira pessoa (POV) para ensinar robôs humanóides e modelos de IA a entender o mundo real — como segurar pratos, dobrar tecidos, limpar mesas e interagir com objetos cotidianos com segurança.",
  },
  {
    q: "Quanto tempo demora para receber o primeiro pagamento?",
    a: "Varia de acordo com cada plataforma. A Claru.ai processa pagamentos automaticamente toda terça-feira (com saque ao bater US$ 50 ou 5h gravadas); a Crowtado tem saque mínimo de US$ 10 via Pix; e a Invent Money paga em cripto sob demanda. Sempre confirme os prazos no aplicativo oficial.",
  },
  {
    q: "Posso me cadastrar em mais de uma plataforma ao mesmo tempo?",
    a: "Sim. Como cada plataforma opera como um serviço independente e paga por tarefas ou horas concluídas, você pode testar várias para descobrir qual possui a melhor esteira de tarefas e taxa de pagamento para sua rotina.",
  },
  {
    q: "Preciso mostrar meu rosto nos vídeos?",
    a: "Não. O foco do treinamento de IA é exclusivamente na perspectiva em primeira pessoa (POV), capturando os movimentos das mãos e a interação com os objetos. O rosto não precisa aparecer.",
  },
  {
    q: "O que acontece se um vídeo não for aprovado?",
    a: "As plataformas fornecem diretrizes simples antes da gravação (como manter as mãos visíveis e boa iluminação). Caso um vídeo seja rejeitado por enquadramento incorreto, basta gravar uma nova tarefa seguindo as instruções do app.",
  },
  {
    q: "Preciso de algum equipamento caro para começar?",
    a: "Não. Tudo o que você precisa é de um celular com câmera nítida e um suporte elástico de cabeça (head mount) para fixar o smartphone na testa, que custa cerca de R$ 25 a R$ 45 em lojas de acessórios ou pode ser obtido em campanhas promocionais.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative border-b border-slate-200 dark:border-cyber-700/80 bg-slate-50/70 dark:bg-cyber-950/80 py-12 sm:py-16 md:py-24 transition-colors">
      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6">
        <SectionHead
          index="07 · DÚVIDAS FREQUENTES"
          title="Perguntas e Respostas sobre Treinar IA"
          sub="Tire suas dúvidas sobre funcionamento, equipamentos, aprovações e recebimento dos valores."
        />

        <div className="mx-auto max-w-4xl space-y-3 sm:space-y-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`rounded-2xl border transition-all duration-300 backdrop-blur-xl overflow-hidden ${
                  isOpen
                    ? "border-amber-400 dark:border-amberNeon/50 bg-white dark:bg-cyber-900/90 shadow-md dark:shadow-amber-glow"
                    : "border-slate-200 dark:border-cyber-700 bg-white/70 dark:bg-cyber-900/60 hover:border-slate-300 dark:hover:border-cyber-600"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 text-left"
                >
                  <span className="font-display text-sm sm:text-base md:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    {f.q}
                  </span>
                  <div
                    className={`flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg border transition-all ${
                      isOpen
                        ? "bg-amber-500 dark:bg-amberNeon text-cyber-950 border-amber-500 dark:border-amberNeon rotate-180"
                        : "bg-slate-100 dark:bg-cyber-800 text-slate-700 dark:text-amber-200 border-slate-200 dark:border-cyber-700"
                    }`}
                  >
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 md:px-6 text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200 dark:border-cyber-700/80 pt-3 sm:pt-4">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
