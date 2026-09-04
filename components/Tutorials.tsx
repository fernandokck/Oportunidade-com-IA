"use client";

import { useState, useMemo } from "react";
import SectionHead from "./SectionHead";

export interface TutorialVideo {
  id: string;
  project: string;
  projectSlug: string;
  youtubeId: string;
  url: string;
  title: string;
  tag: string;
  description: string;
}

const tutorialsData: TutorialVideo[] = [
  // 1. Hub.xyz (2 vídeos)
  {
    id: "hub-1",
    project: "Hub.xyz",
    projectSlug: "hub",
    youtubeId: "rdjhmFXLUGM",
    url: "https://youtu.be/rdjhmFXLUGM?si=PExWSq_XLIoiPnQD",
    title: "Hub.xyz: Processamento de Pagamentos e Saques",
    tag: "Pagamentos & Saques",
    description:
      "Aprenda o passo a passo de como funciona o painel de ganhos, transferências automáticas e como sacar seu saldo no Hub.xyz.",
  },
  {
    id: "hub-2",
    project: "Hub.xyz",
    projectSlug: "hub",
    youtubeId: "cjQNlW67_os",
    url: "https://youtu.be/cjQNlW67_os?si=4_jRpnVkfQ4MV2Pv",
    title: "Hub.xyz: Gravação de Tarefas e Como Evitar Rejeições",
    tag: "Gravação & Aprovação",
    description:
      "Diretrizes práticas de enquadramento, iluminação e posicionamento das mãos para ter seus vídeos aprovados de primeira.",
  },

  // 2. Crowtado (1 vídeo)
  {
    id: "crowtado-1",
    project: "Crowtado",
    projectSlug: "crowtado",
    youtubeId: "pEXs90dgDvA",
    url: "https://www.youtube.com/watch?v=pEXs90dgDvA",
    title: "Crowtado: Tutorial Completo de Execução e Tarefas",
    tag: "Guia Completo",
    description:
      "Apresentação prática de como navegar na esteira de missões da Crowtado, submeter clipes e receber em dólar convertido via Pix.",
  },

  // 3. Claru.ai (1 vídeo)
  {
    id: "claru-1",
    project: "Claru.ai",
    projectSlug: "claru",
    youtubeId: "1uVMIyhR_eQ",
    url: "https://www.youtube.com/watch?v=1uVMIyhR_eQ",
    title: "Claru.ai: Cadastro, Envio de Vídeos e Remuneração",
    tag: "Passo a Passo",
    description:
      "Como se cadastrar na Claru.ai, entender o pagamento semanal automático às terças-feiras e cumprir as horas exigidas.",
  },

  // 4. Micro 1 (1 vídeo)
  {
    id: "micro1-1",
    project: "Micro 1",
    projectSlug: "micro1",
    youtubeId: "bf5e-6nL2HY",
    url: "https://www.youtube.com/watch?v=bf5e-6nL2HY",
    title: "Micro 1: Avaliação Técnica e Processo de Aplicação",
    tag: "Processo Seletivo",
    description:
      "Entenda como aplicar para a Micro 1, as exigências de avaliação e como atingir a remuneração de até US$ 15/hora sem fluência.",
  },

  // 5. Configurando o MINUTE App (1 vídeo)
  {
    id: "minute-1",
    project: "MINUTE App",
    projectSlug: "minute",
    youtubeId: "30ua7df5QRc",
    url: "https://www.youtube.com/watch?v=30ua7df5QRc",
    title: "Configurando o MINUTE App: Setup e Otimização",
    tag: "Configuração de App",
    description:
      "Instruções completas para instalar, configurar permissões e otimizar o aplicativo MINUTE para gravação contínua e sem travamentos.",
  },
];

const projectTabs = [
  { slug: "todos", name: "Todos", count: 6 },
  { slug: "hub", name: "Hub.xyz", count: 2 },
  { slug: "crowtado", name: "Crowtado", count: 1 },
  { slug: "claru", name: "Claru.ai", count: 1 },
  { slug: "micro1", name: "Micro 1", count: 1 },
  { slug: "minute", name: "MINUTE App", count: 1 },
];

export default function Tutorials() {
  const [selectedProject, setSelectedProject] = useState<string>("todos");
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const filteredTutorials = useMemo(() => {
    if (selectedProject === "todos") return tutorialsData;
    return tutorialsData.filter((item) => item.projectSlug === selectedProject);
  }, [selectedProject]);

  return (
    <section id="tutoriais" className="relative border-b border-slate-200 dark:border-cyber-700/80 bg-white dark:bg-cyber-950 py-12 sm:py-16 md:py-20 transition-colors">
      {/* Ambient background accents */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-50"></div>
      <div className="pointer-events-none absolute top-1/4 right-10 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-amber-400/10 dark:bg-amberNeon/10 blur-[140px]"></div>

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6">
        <SectionHead
          index="07 · VÍDEOS TUTORIAIS"
          title="Tutoriais em Vídeo por Projeto & Atividade"
          sub="Selecione o projeto desejado para assistir aos tutoriais práticos de gravação, setup de equipamentos, configuração de aplicativos e saques."
        />

        {/* 🎛️ Filtro Compacto & Sofisticado por Projeto 🎛️ */}
        <div className="mb-6 sm:mb-8 overflow-x-auto pb-2 scrollbar-thin">
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-max">
            {projectTabs.map((tab) => {
              const isActive = selectedProject === tab.slug;
              return (
                <button
                  key={tab.slug}
                  onClick={() => setSelectedProject(tab.slug)}
                  className={`inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-bold transition-all duration-200 shrink-0 ${
                    isActive
                      ? "bg-gradient-to-r from-amber-400 via-amberNeon to-orange-500 text-cyber-950 shadow-sm shadow-amberNeon/40 scale-[1.02]"
                      : "bg-slate-100 dark:bg-cyber-900/80 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-cyber-800 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-cyber-700"
                  }`}
                >
                  <span>{tab.name}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      isActive
                        ? "bg-cyber-950/20 text-cyber-950 font-black"
                        : "bg-slate-200 dark:bg-cyber-800 text-slate-500 dark:text-amber-200/70"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 🎬 Grid Compacto e Sofisticado de Vídeos 🎬 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {filteredTutorials.map((v) => {
            const thumbnailUrl = `https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg`;

            return (
              <div
                key={v.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200 dark:border-cyber-700 bg-white dark:bg-cyber-900/90 shadow-sm hover:shadow-lg dark:hover:shadow-amber-glow backdrop-blur-xl transition-all duration-300 hover:border-amber-400 dark:hover:border-amberNeon/60 hover:-translate-y-0.5"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>

                  {/* Project & Tag Badge */}
                  <div className="absolute top-2 left-2 flex items-center gap-1.5">
                    <span className="inline-flex items-center gap-1 rounded-md border border-amber-400/50 bg-black/80 px-2 py-0.5 text-[10px] font-mono font-bold text-amber-300 backdrop-blur-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                      {v.project}
                    </span>
                  </div>

                  {/* Centered Glowing Play Button (Compact & Sleek) */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-amber-500/95 dark:bg-amberNeon/95 text-cyber-950 shadow-[0_0_20px_rgba(255,140,0,0.6)] group-hover:scale-110 group-hover:shadow-[0_0_35px_rgba(255,140,0,0.85)] group-hover:bg-amber-400 transition-all duration-300">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 translate-x-0.5 fill-current" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Tag Pill Bottom */}
                  <div className="absolute bottom-2 right-2 rounded bg-black/80 px-1.5 py-0.5 text-[9px] font-mono text-slate-300 border border-white/15">
                    {v.tag}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-amber-700 dark:text-amber-200/70 mb-1">
                      {v.project}
                    </div>
                    <h3 className="font-display text-sm sm:text-[15px] font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-amber-600 dark:group-hover:text-amberNeon transition-colors leading-snug line-clamp-2">
                      {v.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300/90 leading-relaxed line-clamp-2 mb-3">
                      {v.description}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between gap-2 pt-2.5 border-t border-slate-100 dark:border-cyber-700/80 text-[11px]">
                    <button
                      onClick={() => setActiveVideo(v.youtubeId)}
                      className="inline-flex items-center gap-1 font-bold text-amber-600 dark:text-amberNeon hover:text-amber-700 dark:hover:text-white transition-colors"
                    >
                      <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      <span>Assistir</span>
                    </button>

                    <a
                      href={v.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-300 transition-colors whitespace-nowrap"
                    >
                      <span>YouTube</span>
                      <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer info tip */}
        <div className="mt-6 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono px-1">
          <span>Mostrando <strong>{filteredTutorials.length}</strong> de <strong>{tutorialsData.length}</strong> vídeos</span>
          <span className="hidden sm:inline">Clique no vídeo para reproduzir diretamente na página</span>
        </div>
      </div>

      {/* 📺 Modal Sofisticado de Reprodução de Vídeo 📺 */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 sm:p-4 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-amberNeon/50 bg-cyber-950 shadow-[0_0_60px_rgba(255,140,0,0.4)]">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-cyber-700 bg-cyber-900 px-4 py-2.5">
              <span className="text-xs font-mono font-bold text-amberNeon flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amberNeon animate-ping"></span>
                Reproduzindo Tutorial Oficial
              </span>
              <button
                onClick={() => setActiveVideo(null)}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-cyber-800 hover:text-white transition-all"
                aria-label="Fechar vídeo"
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
