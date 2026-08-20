"use client";

import { useState } from "react";
import SectionHead from "./SectionHead";

type Difficulty = "todos" | "facil" | "medio" | "dificil";

interface ComparisonRow {
  p: string;
  rank: number;
  difficulty: "Fácil" | "Médio" | "Difícil";
  pay: string;
  saque: string;
  min: string;
  status: "Ativo" | "Em análise" | "Saque Pausado";
  url: string;
  notes: string;
}

const allRows: ComparisonRow[] = [
  // FÁCIL
  {
    p: "Hub.xyz",
    rank: 1,
    difficulty: "Fácil",
    pay: "US$ 5 a US$ 8 / hora",
    saque: "Pix / Dolar",
    min: "US$ 20",
    status: "Ativo",
    url: "https://ai.hub.xyz/r/DEBIN5",
    notes: "Aprovação rápida e interface amigável para tarefas cotidianas simples.",
  },
  {
    p: "Crowtado",
    rank: 2,
    difficulty: "Fácil",
    pay: "US$ 8 / hora",
    saque: "Pix / Dolar",
    min: "US$ 10",
    status: "Ativo",
    url: "https://www.crowtado.com/sign-up?ref=N432SDBG",
    notes: "Maior taxa fixa por hora para tarefas domésticas básicas em vídeo.",
  },
  {
    p: "Claru.ai",
    rank: 3,
    difficulty: "Fácil",
    pay: "US$ 5 a US$ 8 / hora",
    saque: "Pix",
    min: "US$ 50 (ou 5h na 1ª semana)",
    status: "Ativo",
    url: "https://app.claru.ai/signup?ref=8a2r3gfj",
    notes: "Pagamento semanal automático toda terça-feira e bônus por horas.",
  },

  // MÉDIO
  {
    p: "Invent Money",
    rank: 1,
    difficulty: "Médio",
    pay: "US$ 5 a US$ 8 / hora",
    saque: "Dólar / Cripto",
    min: "Sem mínimo",
    status: "Em análise",
    url: "https://parabuilders.io",
    notes: "Tarefas domésticas e comerciais em mais de 100 países.",
  },
  {
    p: "Silencio",
    rank: 2,
    difficulty: "Médio",
    pay: "US$ 10 a US$ 20 / hora",
    saque: "Cripto / Transferência",
    min: "Sem mínimo",
    status: "Ativo",
    url: "https://ai.silencio.store/opportunities/portuguese-brasil-3?ref=FSLDAE",
    notes: "Treino de IA via voz e ruídos acústicos. Não exige fluência.",
  },
  {
    p: "Kgen",
    rank: 3,
    difficulty: "Médio",
    pay: "US$ 3 + Bônus por hora",
    saque: "Pix / Semanal",
    min: "US$ 3",
    status: "Ativo",
    url: "https://www.kgen.quest/invite/37c39886",
    notes: "Aprovação mediante análise, boa alternativa para fluxo contínuo.",
  },

  // DIFÍCIL
  {
    p: "Micro 1",
    rank: 1,
    difficulty: "Difícil",
    pay: "US$ 20 a US$ 70 / hora",
    saque: "Dolar",
    min: "Por projeto / hora",
    status: "Ativo",
    url: "https://refer.micro1.ai/referral/jobs?referralCode=175e2125-56c3-4585-abeb-763f284cbf07&utm_source=referral&utm_medium=share&utm_campaign=job_referral",
    notes: "Avaliação técnica de IA e revisão. Requer processo seletivo, porém paga muito.",
  },
];

export default function Comparison() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>("todos");

  const filteredRows =
    selectedDifficulty === "todos"
      ? allRows
      : allRows.filter(
        (r) =>
          (selectedDifficulty === "facil" && r.difficulty === "Fácil") ||
          (selectedDifficulty === "medio" && r.difficulty === "Médio") ||
          (selectedDifficulty === "dificil" && r.difficulty === "Difícil")
      );

  return (
    <section id="comparativo" className="relative border-b border-slate-200 dark:border-cyber-700/80 bg-slate-50/50 dark:bg-cyber-950/70 py-12 sm:py-16 md:py-24 transition-colors">
      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6">
        <SectionHead
          index="03 · COMPARATIVO DIRETO & RANKING"
          title="Ranking das Plataformas por Nível de Dificuldade"
          sub="Selecione seu nível de conhecimento para ver o ranking das melhores plataformas recomendadas para o seu perfil."
        />

        {/* 🎛️ Barra de Seleção por Nível de Conhecimento 🎛️ */}
        <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 rounded-2xl border border-slate-200 dark:border-cyber-700 bg-white dark:bg-cyber-900/90 p-3 sm:p-4 backdrop-blur-xl shadow-sm dark:shadow-lg">
          <div className="flex items-center gap-2 px-1 sm:px-2 text-xs font-mono text-slate-700 dark:text-amber-200/80">
            <span className="text-amber-600 dark:text-amberNeon font-bold">FILTRAR POR NÍVEL:</span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 w-full sm:w-auto">
            {/* Todos */}
            <button
              onClick={() => setSelectedDifficulty("todos")}
              className={`flex-1 sm:flex-none px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${selectedDifficulty === "todos"
                ? "bg-gradient-to-r from-amber-400 to-orange-500 text-cyber-950 shadow-amber-glow scale-105"
                : "bg-slate-100 dark:bg-cyber-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-cyber-700 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-cyber-700"
                }`}
            >
              Todos ({allRows.length})
            </button>

            {/* Fácil */}
            <button
              onClick={() => setSelectedDifficulty("facil")}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${selectedDifficulty === "facil"
                ? "bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.5)] scale-105"
                : "bg-slate-100 dark:bg-cyber-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-cyber-700 hover:text-emerald-600 dark:hover:text-emerald-400 border border-slate-200 dark:border-cyber-700"
                }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
              <span>Fácil (Iniciante)</span>
            </button>

            {/* Médio */}
            <button
              onClick={() => setSelectedDifficulty("medio")}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${selectedDifficulty === "medio"
                ? "bg-yellow-400 text-cyber-950 shadow-[0_0_20px_rgba(250,204,21,0.5)] scale-105"
                : "bg-slate-100 dark:bg-cyber-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-cyber-700 hover:text-yellow-600 dark:hover:text-yellow-400 border border-slate-200 dark:border-cyber-700"
                }`}
            >
              <span className="w-2 h-2 rounded-full bg-yellow-500 shrink-0"></span>
              <span>Médio (Intermediário)</span>
            </button>

            {/* Difícil */}
            <button
              onClick={() => setSelectedDifficulty("dificil")}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${selectedDifficulty === "dificil"
                ? "bg-rose-500 text-white shadow-[0_0_20px_rgba(244,63,94,0.5)] scale-105"
                : "bg-slate-100 dark:bg-cyber-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-cyber-700 hover:text-rose-600 dark:hover:text-rose-400 border border-slate-200 dark:border-cyber-700"
                }`}
            >
              <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0"></span>
              <span>Difícil (Avançado)</span>
            </button>
          </div>
        </div>

        {/* 📊 Tabela Comparativa com Ranking 📊 */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-cyber-700 bg-white dark:bg-cyber-900/90 shadow-sm dark:shadow-2xl backdrop-blur-xl">
          <table className="w-full min-w-[780px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-cyber-700 bg-slate-100/90 dark:bg-cyber-950/90 text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-amber-200/80">
                <th className="px-5 sm:px-6 py-3.5 sm:py-4">Nível</th>
                <th className="px-5 sm:px-6 py-3.5 sm:py-4">Plataforma</th>
                <th className="px-5 sm:px-6 py-3.5 sm:py-4">Remuneração</th>
                <th className="px-5 sm:px-6 py-3.5 sm:py-4">Forma de Saque</th>
                <th className="px-5 sm:px-6 py-3.5 sm:py-4">Mínimo p/ Saque</th>
                <th className="px-5 sm:px-6 py-3.5 sm:py-4">Status</th>
                <th className="px-5 sm:px-6 py-3.5 sm:py-4 text-right">Ação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-cyber-700/60">
              {filteredRows.map((r) => {
                return (
                  <tr key={r.p} className="hover:bg-slate-50 dark:hover:bg-cyber-800/50 transition-colors group">
                    {/* Nível */}
                    <td className="px-5 sm:px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-bold border whitespace-nowrap ${r.difficulty === "Fácil"
                          ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/30"
                          : r.difficulty === "Médio"
                            ? "bg-yellow-500/15 text-yellow-700 dark:text-yellow-400 border-yellow-500/30"
                            : "bg-rose-500/15 text-rose-700 dark:text-rose-400 border-rose-500/30"
                          }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full shrink-0 ${r.difficulty === "Fácil"
                            ? "bg-emerald-500 dark:bg-emerald-400"
                            : r.difficulty === "Médio"
                              ? "bg-yellow-500 dark:bg-yellow-400"
                              : "bg-rose-500 dark:bg-rose-400"
                            }`}
                        ></span>
                        {r.difficulty}
                      </span>
                    </td>

                    {/* Nome da Plataforma & Nota */}
                    <td className="px-5 sm:px-6 py-4">
                      <div className="font-display font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amberNeon transition-colors text-sm sm:text-base">
                        {r.p}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 max-w-xs leading-relaxed">
                        {r.notes}
                      </div>
                    </td>

                    {/* Remuneração (refletindo exatamente quanto está pagando) */}
                    <td className="px-5 sm:px-6 py-4">
                      <span className="font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-amber-600 to-orange-600 dark:from-emerald-400 dark:via-amber-300 dark:to-amberNeon">
                        {r.pay}
                      </span>
                    </td>

                    {/* Forma de Saque */}
                    <td className="px-5 sm:px-6 py-4 text-slate-700 dark:text-slate-200 font-medium text-xs sm:text-sm">
                      {r.saque}
                    </td>

                    {/* Mínimo para Saque */}
                    <td className="px-5 sm:px-6 py-4 text-slate-600 dark:text-amber-200/70 font-mono text-xs">
                      {r.min}
                    </td>

                    {/* Status sincronizado com Oportunidades */}
                    <td className="px-5 sm:px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border whitespace-nowrap shrink-0 ${r.status === "Ativo"
                          ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/30"
                          : r.status === "Saque Pausado"
                            ? "bg-rose-500/15 text-rose-700 dark:text-rose-400 border-rose-500/30"
                            : "bg-yellow-500/15 text-yellow-700 dark:text-yellow-400 border-yellow-500/30"
                          }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full shrink-0 ${r.status === "Ativo"
                            ? "bg-emerald-500 dark:bg-emerald-400 animate-pulse"
                            : r.status === "Saque Pausado"
                              ? "bg-rose-500 dark:bg-rose-400 animate-pulse"
                              : "bg-yellow-500 dark:bg-yellow-400 animate-pulse"
                            }`}
                        ></span>
                        {r.status}
                      </span>
                    </td>

                    {/* Link Oficial */}
                    <td className="px-5 sm:px-6 py-4 text-right">
                      <a
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-cyber-950 bg-gradient-to-r from-amber-400 to-orange-500 shadow-sm hover:shadow-amber-glow hover:scale-105 active:scale-95 transition-all"
                      >
                        <span>Acessar</span>
                        <span>↗</span>
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Resumo explicativo abaixo da tabela */}
        <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 px-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
          <div>
            💡 Mostrando <strong>{filteredRows.length}</strong> plataformas no ranking
          </div>
          <div>
            * Deslize para o lado para visualizar todos os dados na horizontal se estiver no celular.
          </div>
        </div>
      </div>
    </section>
  );
}
