"use client";

import { useState, useEffect } from "react";

interface ActivitySlide {
  id: string;
  theme: "emerald-mint" | "cyber-dark" | "amber-gold";
  badgeText?: string;
  badgeType?: "bonus" | "new" | "gift";
  avatarImage?: string;
  avatarType?: "runner" | "worker" | "gift";
  bonusTag?: string;
  title: string;
  subtitle?: string;
  payoutHighlight?: {
    prefix: string;
    rate: string;
  };
  tags?: { icon: string; label: string }[];
  countdownEnd?: string;
  countdownLabel?: string;
  referralCode?: string;
  ctaText: string;
  ctaUrl: string;
}

const ACTIVITIES: ActivitySlide[] = [
  {
    id: "sorteio-5x-iphones",
    theme: "emerald-mint",
    bonusTag: "5x",
    badgeText: "SORTEIO — ATIVO AGORA",
    badgeType: "bonus",
    avatarType: "gift",
    title: "Sorteio de 5x iPhones",
    subtitle: "5 iPhones para ganhar - Complete tarefas no trabalho",
    countdownLabel: "termina em",
    countdownEnd: "2026-09-30T23:59:59",
    ctaText: "Ver detalhes",
    ctaUrl: "https://ai.hub.xyz/r/DEBIN5",
  },
  {
    id: "gravar-no-trabalho",
    theme: "cyber-dark",
    badgeText: "NOVA CATEGORIA",
    badgeType: "new",
    avatarType: "worker",
    avatarImage: "/worker-tech.jpg",
    title: "Agora você pode gravar no trabalho",
    payoutHighlight: {
      prefix: "Ganhe até",
      rate: "R$ 35/h",
    },
    tags: [
      { icon: "🌿", label: "Paisagismo" },
      { icon: "⚡", label: "Elétrica" },
      { icon: "🛡️", label: "Inspeção" },
      { icon: "✂️", label: "Costura" },
      { icon: "❄️", label: "Climatização" },
    ],
    referralCode: "WM529RMG",
    ctaText: "Acessar HUB",
    ctaUrl: "https://ai.hub.xyz/r/DEBIN5",
  },
  {
    id: "suporte-gratis-hub",
    theme: "amber-gold",
    badgeText: "SUPORTE OFICIAL GRÁTIS",
    badgeType: "gift",
    avatarType: "gift",
    title: "Suporte de Cabeça Grátis + Aprovação Rápida",
    subtitle: "A Hub.xyz envia gratuitamente o suporte de gravação para sua casa para filmar em primeira pessoa!",
    tags: [
      { icon: "📦", label: "Frete 100% Grátis" },
      { icon: "⚡", label: "Aprovação em 24h" },
      { icon: "💵", label: "Pagamento em Dólar" },
    ],
    referralCode: "DEBIN5",
    ctaText: "Garantir meu suporte",
    ctaUrl: "https://ai.hub.xyz/r/DEBIN5",
  },
];

export default function HubActivitiesBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 8, minutes: 42, seconds: 35 });
  const [animatingDirection, setAnimatingDirection] = useState<"next" | "prev">("next");
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-rotation timer
  const ROTATION_INTERVAL = 6500; // 6.5s per slide

  useEffect(() => {
    if (isPaused || isDismissed) return;

    const timer = setInterval(() => {
      setAnimatingDirection("next");
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % ACTIVITIES.length);
        setIsTransitioning(false);
      }, 250);
    }, ROTATION_INTERVAL);

    return () => clearInterval(timer);
  }, [isPaused, isDismissed, currentIndex]);

  // Live countdown ticker
  useEffect(() => {
    const countdownTimer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return { days: 1, hours: 12, minutes: 30, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(countdownTimer);
  }, []);

  const handleNext = () => {
    setAnimatingDirection("next");
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % ACTIVITIES.length);
      setIsTransitioning(false);
    }, 200);
  };

  const handlePrev = () => {
    setAnimatingDirection("prev");
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + ACTIVITIES.length) % ACTIVITIES.length);
      setIsTransitioning(false);
    }, 200);
  };

  const handleCopyCode = (code: string, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(code);
    }
    setCopiedCode(code);
    setTimeout(() => {
      setCopiedCode(null);
    }, 2500);
  };

  const currentActivity = ACTIVITIES[currentIndex];

  if (isDismissed) {
    return (
      <div className="mx-auto max-w-[1320px] px-3.5 sm:px-6 py-1 flex justify-end">
        <button
          onClick={() => setIsDismissed(false)}
          className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-700 dark:text-emerald-400 font-bold text-[11px] border border-emerald-500/30 transition-all"
        >
          <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
          <span>⚡ Novidades HUB.xyz</span>
        </button>
      </div>
    );
  }

  return (
    <div className="relative z-30 w-full px-2 sm:px-4 py-1.5 sm:py-2">
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="mx-auto max-w-[1320px] relative rounded-xl sm:rounded-2xl overflow-hidden shadow-md transition-all duration-300 border backdrop-blur-xl"
        style={{
          boxShadow:
            currentActivity.theme === "emerald-mint"
              ? "0 4px 25px -5px rgba(16, 185, 129, 0.35), 0 0 15px 1px rgba(52, 211, 153, 0.15)"
              : currentActivity.theme === "cyber-dark"
              ? "0 4px 25px -5px rgba(0, 0, 0, 0.6), 0 0 20px 1px rgba(16, 185, 129, 0.2)"
              : "0 4px 25px -5px rgba(245, 158, 11, 0.35), 0 0 15px 1px rgba(251, 191, 36, 0.2)",
        }}
      >
        {/* Animated Progress Bar (Top) */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-black/15 dark:bg-white/10 z-20 overflow-hidden">
          <div
            key={currentIndex}
            className={`h-full ${
              currentActivity.theme === "emerald-mint"
                ? "bg-emerald-500"
                : currentActivity.theme === "cyber-dark"
                ? "bg-gradient-to-r from-emerald-400 to-teal-300"
                : "bg-amber-400"
            }`}
            style={{
              animation: isPaused ? "none" : `hubProgressBar ${ROTATION_INTERVAL}ms linear infinite`,
            }}
          />
        </div>

        {/* Ambient background styling per theme */}
        {currentActivity.theme === "emerald-mint" && (
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 via-emerald-100/90 to-teal-50 dark:from-[#062419] dark:via-[#093524] dark:to-[#041a12] border-t-2 border-emerald-400/80 dark:border-emerald-500">
            <div className="absolute inset-0 opacity-10 dark:opacity-20 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]" />
          </div>
        )}

        {currentActivity.theme === "cyber-dark" && (
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1410] via-[#0f1d17] to-[#0a120e] border-t-2 border-emerald-400 dark:border-emerald-400">
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#34d399_1px,transparent_1px)] [background-size:16px_16px]" />
          </div>
        )}

        {currentActivity.theme === "amber-gold" && (
          <div className="absolute inset-0 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-100/80 dark:from-[#211508] dark:via-[#2e1d09] dark:to-[#1a0f05] border-t-2 border-amber-400 dark:border-amber-400">
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]" />
          </div>
        )}

        {/* Inner Content Container */}
        <div
          className={`relative z-10 px-3.5 sm:px-6 py-2.5 sm:py-3 transition-all duration-200 ${
            isTransitioning
              ? animatingDirection === "next"
                ? "opacity-40 translate-y-1 scale-[0.99]"
                : "opacity-40 -translate-y-1 scale-[0.99]"
              : "opacity-100 translate-y-0 scale-100"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-2.5 sm:gap-4">
            {/* LEFT / CENTER: Graphic + Main Announcement Content */}
            <div className="flex items-center gap-3 sm:gap-4 w-full md:w-auto min-w-0">
              {/* Visual Avatar / Graphic Icon */}
              <div className="relative shrink-0 flex items-center justify-center">
                {currentActivity.bonusTag && (
                  <div className="absolute -top-2.5 -left-1.5 z-20 bg-emerald-500 text-cyber-950 dark:text-white font-black text-[11px] sm:text-xs px-1.5 py-0.5 rounded-md shadow-md animate-bounce border border-emerald-300 dark:border-emerald-400">
                    {currentActivity.bonusTag}
                  </div>
                )}

                {currentActivity.avatarImage ? (
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden ring-2 ring-emerald-400/80 shadow-md bg-black/40">
                    <img
                      src={currentActivity.avatarImage}
                      alt={currentActivity.title}
                      className="w-full h-full object-cover object-center transform hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                ) : currentActivity.id === "sorteio-5x-iphones" ? (
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-500 via-teal-600 to-emerald-700 flex items-center justify-center text-xl shadow-md ring-2 ring-emerald-400/80">
                    📱
                  </div>
                ) : (
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-xl shadow-md ring-2 ring-amber-300">
                    🎁
                  </div>
                )}
              </div>

              {/* Text content & badges */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-0.5">
                  {/* Badge pill */}
                  {currentActivity.badgeText && (
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                      {currentActivity.badgeText}
                    </span>
                  )}

                  <span className="font-display font-black text-sm sm:text-base md:text-lg text-slate-900 dark:text-white tracking-tight truncate">
                    {currentActivity.title}
                  </span>

                  {/* Payout highlight if available */}
                  {currentActivity.payoutHighlight && (
                    <span className="inline-flex items-center gap-1 text-xs sm:text-sm font-sans">
                      <span className="text-slate-600 dark:text-slate-300 text-xs">
                        {currentActivity.payoutHighlight.prefix}
                      </span>
                      <span className="font-extrabold text-emerald-600 dark:text-emerald-400 text-sm sm:text-base tracking-tight bg-emerald-500/10 px-1.5 py-0.2 rounded border border-emerald-500/20">
                        {currentActivity.payoutHighlight.rate}
                      </span>
                    </span>
                  )}
                </div>

                {/* Subtitle description */}
                {currentActivity.subtitle && (
                  <p className="text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 line-clamp-1 sm:line-clamp-none font-medium">
                    {currentActivity.subtitle}
                  </p>
                )}

                {/* Tag Pills (e.g. Troca de óleo, Marcenaria, etc) */}
                {currentActivity.tags && currentActivity.tags.length > 0 && (
                  <div className="flex items-center gap-1.5 sm:gap-2 mt-1 overflow-x-auto no-scrollbar py-0.5">
                    {currentActivity.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[11px] font-medium bg-slate-200/80 dark:bg-white/10 text-slate-800 dark:text-slate-200 border border-slate-300/60 dark:border-white/10 shrink-0 whitespace-nowrap shadow-xs hover:border-emerald-400 transition-colors"
                      >
                        <span>{tag.icon}</span>
                        <span>{tag.label}</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT: Countdown Badge / Referral Code + CTA Button + Controls */}
            <div className="flex items-center justify-between md:justify-end gap-2 sm:gap-3 w-full md:w-auto shrink-0 border-t md:border-t-0 pt-2 md:pt-0 border-black/5 dark:border-white/10">
              {/* Limited time Countdown Badge */}
              {currentActivity.countdownEnd && (
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/10 dark:bg-black/40 border border-black/10 dark:border-white/15 text-slate-800 dark:text-slate-200 text-xs font-mono">
                  <span className="text-emerald-500">⏱</span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 font-sans">
                    {currentActivity.countdownLabel || "termina em"}
                  </span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400 tracking-wider">
                    {timeLeft.days > 0 ? `${timeLeft.days}d ` : ""}{timeLeft.hours}h {String(timeLeft.minutes).padStart(2, "0")}m
                  </span>
                </div>
              )}

              {/* Referral Code Copy Button */}
              {currentActivity.referralCode && (
                <div className="inline-flex items-center rounded-lg bg-black/10 dark:bg-black/40 border border-black/10 dark:border-white/15 overflow-hidden text-xs">
                  <span className="px-2 py-1 font-mono font-bold text-slate-900 dark:text-white select-all">
                    {currentActivity.referralCode}
                  </span>
                  <button
                    onClick={(e) => handleCopyCode(currentActivity.referralCode!, e)}
                    className="flex items-center gap-1 px-2 py-1 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-800 dark:text-emerald-300 border-l border-black/10 dark:border-white/15 transition-colors font-medium text-[11px]"
                    title="Copiar código de convite"
                  >
                    {copiedCode === currentActivity.referralCode ? (
                      <>
                        <svg className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-bold text-emerald-600 dark:text-emerald-400">Copiado!</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        <span>Copiar</span>
                      </>
                    )}
                  </button>
                </div>
              )}

              {/* Main CTA Action Button */}
              <a
                href={currentActivity.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-extrabold text-cyber-950 bg-emerald-400 hover:bg-emerald-300 dark:bg-emerald-400 dark:hover:bg-emerald-300 shadow-md shadow-emerald-500/25 hover:shadow-emerald-500/40 transform hover:scale-[1.02] active:scale-95 transition-all duration-200 shrink-0 border border-emerald-300"
              >
                <span>{currentActivity.ctaText}</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              {/* Slider Dots & Navigation Controls */}
              <div className="flex items-center gap-1 pl-1 shrink-0">
                <button
                  onClick={handlePrev}
                  aria-label="Atividade anterior"
                  className="p-1 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Indicator Dots */}
                <div className="flex items-center gap-1">
                  {ACTIVITIES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setIsTransitioning(true);
                        setTimeout(() => {
                          setCurrentIndex(idx);
                          setIsTransitioning(false);
                        }, 150);
                      }}
                      aria-label={`Ir para atividade ${idx + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentIndex
                          ? "w-4 bg-emerald-500 dark:bg-emerald-400"
                          : "w-1.5 bg-slate-400/50 dark:bg-white/30 hover:bg-slate-600 dark:hover:bg-white/60"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  aria-label="Próxima atividade"
                  className="p-1 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Dismiss / Minimize button */}
                <button
                  onClick={() => setIsDismissed(true)}
                  aria-label="Minimizar aviso"
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-colors ml-0.5"
                  title="Minimizar"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
