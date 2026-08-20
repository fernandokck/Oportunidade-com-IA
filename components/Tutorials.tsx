"use client";

import { useState } from "react";
import SectionHead from "./SectionHead";

interface TutorialVideo {
  id: string;
  youtubeId: string;
  url: string;
  title: string;
  tag: string;
  description: string;
}

const tutorials: TutorialVideo[] = [
  {
    id: "1",
    youtubeId: "kik77s48KxA",
    url: "https://youtu.be/kik77s48KxA?si=UpeSFYq9ig01BnX0",
    title: "Treinamento de IA com Tarefas Domésticas: Como Funciona na Prática",
    tag: "Tutorial Completo",
    description:
      "Apresentação prática de como gravar as tarefas do cotidiano, preparar o ambiente e submeter seus primeiros clipes.",
  },
  {
    id: "2",
    youtubeId: "jep0jc5TwKM",
    url: "https://youtu.be/jep0jc5TwKM?si=bhZIfZvy0uUoN3tn",
    title: "Setup do Suporte de Cabeça e Ângulo Correto de POV",
    tag: "Equipamento & Enquadramento",
    description:
      "Como posicionar o celular na testa para capturar a perspectiva exata em primeira pessoa exigida pelos modelos de visão da IA.",
  },
  {
    id: "3",
    youtubeId: "cjQNlW67_os",
    url: "https://youtu.be/cjQNlW67_os?si=11LRONEJ4fQVFkdm",
    title: "Passo a Passo de Cadastro e Como Evitar Rejeições",
    tag: "Aprovação Rápida",
    description:
      "Instruções detalhadas para aprovação de vídeos de primeira: iluminação, visibilidade das mãos e parâmetros técnicos.",
  },
  {
    id: "4",
    youtubeId: "rdjhmFXLUGM",
    url: "https://youtu.be/rdjhmFXLUGM?si=dCVAAHnnbHW0mZ9p",
    title: "Processamento de Pagamentos, Saques via Pix e Cripto",
    tag: "Pagamentos & Saques",
    description:
      "Demonstração do painel de ganhos, fechamento de marcos, transferências automáticas e como sacar seu saldo.",
  },
];

export default function Tutorials() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="tutoriais" className="relative border-b border-slate-200 dark:border-cyber-700/80 bg-white dark:bg-cyber-950 py-12 sm:py-16 md:py-24 transition-colors">
      {/* Glow ambient background */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-50"></div>
      <div className="pointer-events-none absolute top-1/4 right-10 h-80 w-80 sm:h-96 sm:w-96 rounded-full bg-amber-400/10 dark:bg-amberNeon/10 blur-[140px]"></div>

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6">
        <SectionHead
          index="04 · VÍDEOS TUTORIAIS"
          title="Aprenda na Prática com os Tutoriais em Vídeo"
          sub="Assista às demonstrações gravadas em vídeo para entender o funcionamento real das plataformas, o uso do suporte e os detalhes de saque."
        />

        {/* 🎬 Grid de Miniaturas de Vídeos 🎬 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {tutorials.map((v, index) => {
            const thumbnailUrl = `https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg`;

            return (
              <div
                key={v.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 dark:border-cyber-700 bg-white dark:bg-cyber-900/90 shadow-sm hover:shadow-xl dark:hover:shadow-amber-glow backdrop-blur-xl transition-all duration-300 hover:border-amber-400 dark:hover:border-amberNeon/60"
              >
                {/* Thumbnail Header with Play Overlay */}
                <div
                  className="relative aspect-video w-full overflow-hidden bg-slate-900 cursor-pointer"
                  onClick={() => setActiveVideo(v.youtubeId)}
                >
                  <img
                    src={thumbnailUrl}
                    alt={v.title}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                  {/* Top Tag */}
                  <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3">
                    <span className="inline-flex items-center gap-1.5 rounded-lg border border-amber-400/50 bg-black/80 px-2.5 py-1 text-[11px] font-mono font-bold text-amber-400 backdrop-blur-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                      {v.tag}
                    </span>
                  </div>

                  {/* Centered Glowing Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-amber-500 dark:bg-amberNeon text-cyber-950 shadow-[0_0_30px_rgba(255,140,0,0.7)] group-hover:scale-110 group-hover:shadow-[0_0_45px_rgba(255,140,0,0.9)] transition-all duration-300">
                      <svg className="w-5 h-5 sm:w-7 sm:h-7 translate-x-0.5 fill-current" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Duration / Click Hint */}
                  <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 rounded bg-black/80 px-2 py-0.5 text-[10px] sm:text-[11px] font-mono text-slate-200 border border-white/20">
                    Assistir Vídeo
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-mono text-amber-700 dark:text-amber-200/70 mb-1">
                      Vídeo 0{index + 1}
                    </div>
                    <h3 className="font-display text-base sm:text-lg lg:text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amberNeon transition-colors leading-snug">
                      {v.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 sm:mb-5">
                      {v.description}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between gap-2 pt-3.5 sm:pt-4 border-t border-slate-200 dark:border-cyber-700/80 text-xs">
                    <button
                      onClick={() => setActiveVideo(v.youtubeId)}
                      className="inline-flex items-center gap-1.5 font-bold text-amber-600 dark:text-amberNeon hover:text-amber-700 dark:hover:text-white transition-colors"
                    >
                      <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      <span>Reproduzir na tela</span>
                    </button>

                    <a
                      href={v.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-300 transition-colors whitespace-nowrap"
                    >
                      <span>No YouTube</span>
                      <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 📺 Modal de Reprodução de Vídeo Embutido 📺 */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 sm:p-4 backdrop-blur-md">
          <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-amberNeon/50 bg-cyber-950 shadow-[0_0_60px_rgba(255,140,0,0.4)]">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-cyber-700 bg-cyber-900 px-4 py-3">
              <span className="text-xs font-mono font-bold text-amberNeon flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amberNeon animate-ping"></span>
                Reproduzindo Tutorial
              </span>
              <button
                onClick={() => setActiveVideo(null)}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-cyber-800 hover:text-white transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Embedded YouTube Iframe */}
            <div className="relative aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                title="Tutorial de Treinamento de IA"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full border-0"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
