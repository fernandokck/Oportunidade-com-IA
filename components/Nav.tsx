"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#requisitos", label: "Guia de Início" },
  { href: "#plataformas", label: "Oportunidades" },
  { href: "#vagas-destaque", label: "Vagas em Destaque" },
  { href: "#comparativo", label: "Comparativo & Ranking" },
  { href: "#tutoriais", label: "Vídeos Tutoriais" },
  { href: "#faq", label: "Dúvidas Frequentes" },
];

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 dark:border-cyber-700/80 bg-white/90 dark:bg-cyber-950/90 backdrop-blur-xl transition-colors">
      <div className="mx-auto flex max-w-[1320px] items-center justify-between px-3.5 sm:px-6 py-2.5 sm:py-3 gap-2 sm:gap-4">
        
        {/* Brand Logo with Cyborg Image */}
        <a href="#" className="flex items-center gap-2.5 sm:gap-3 group shrink-0 whitespace-nowrap">
          <div className="relative h-9 w-9 sm:h-10 sm:w-10 overflow-hidden rounded-full ring-2 ring-amberNeon/60 shadow-[0_0_20px_rgba(255,140,0,0.35)] group-hover:scale-105 group-hover:ring-amberNeon transition-all shrink-0">
            <img
              src="/logo.jpg"
              alt="Logo Oportunidades com IA"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div>
            <span className="font-display text-sm sm:text-base lg:text-lg font-extrabold tracking-tight text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amberNeon transition-colors block leading-tight">
              Oportunidades com IA
            </span>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="text-[10px] sm:text-[11px] text-slate-500 dark:text-amber-200/80 font-mono">
                Treinadores Ativos
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-4 xl:gap-6 text-xs xl:text-sm font-medium text-slate-700 dark:text-slate-300 lg:flex whitespace-nowrap shrink-0">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative py-1 transition-colors hover:text-amber-600 dark:hover:text-amberNeon after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-amberNeon after:transition-all hover:after:w-full whitespace-nowrap"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right Action Tools: Theme Toggle + WhatsApp CTA + Mobile Menu Button */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Theme Toggle (Light / Dark) */}
          <ThemeToggle />

          {/* 📲 WhatsApp Group CTA 📲 */}
          <a
            href="https://chat.whatsapp.com/LyX5y4XkizD9Cz2CRSFgey"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 text-[11px] sm:text-xs xl:text-sm font-bold text-cyber-950 bg-gradient-to-r from-amber-400 via-amberNeon to-orange-500 rounded-xl shadow-amber-glow hover:shadow-[0_0_35px_rgba(255,140,0,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 border border-amber-300/50 shrink-0 whitespace-nowrap"
          >
            {/* WhatsApp SVG Icon */}
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current shrink-0"
              viewBox="0 0 24 24"
            >
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.97.53 1.954.819 2.796.82h.005c3.18 0 5.767-2.587 5.768-5.766 0-3.18-2.586-5.767-5.773-5.773zm7.558 5.766c-.002 4.167-3.391 7.555-7.558 7.555-1.266 0-2.51-.318-3.606-.921l-4.004 1.05 1.069-3.908c-.672-1.164-1.027-2.493-1.026-3.776.002-4.167 3.391-7.555 7.559-7.555 4.167.001 7.566 3.39 7.566 7.555zm1.536 0c.001-5.014-4.081-9.095-9.095-9.095-5.014 0-9.095 4.081-9.095 9.095 0 1.602.419 3.167 1.215 4.546l-1.29 4.717 4.827-1.266c1.328.725 2.825 1.108 4.343 1.108 5.015 0 9.095-4.081 9.095-9.095z" />
            </svg>
            <span className="hidden sm:inline">Comunidade do WhatsApp, Participe!</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu mobile"
            className="flex lg:hidden h-9 w-9 items-center justify-center rounded-xl border border-slate-200 dark:border-cyber-700 bg-slate-100 dark:bg-cyber-850 text-slate-700 dark:text-slate-200 hover:border-amberNeon/60 transition-all"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-cyber-700/80 bg-white/95 dark:bg-cyber-950/95 backdrop-blur-2xl px-4 py-4 space-y-2 animate-fadeIn">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-amber-500/10 hover:text-amber-600 dark:hover:text-amberNeon transition-all"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
