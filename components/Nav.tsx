"use client";

import { useEffect, useState } from "react";
import { COMMUNITY_URL } from "@/lib/site";
import { RESULTS } from "@/lib/results";
import TelegramIcon from "./icons/TelegramIcon";

const links = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#hub", label: "HUB.xyz" },
  { href: "#calculadora", label: "Calculadora" },
  { href: "#comunidade", label: "Comunidade" },
  ...(RESULTS.length ? [{ href: "#resultados", label: "Resultados" }] : []),
  { href: "#faq", label: "Dúvidas" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "border-b border-slate-200/70 bg-cream/85 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between gap-4">
        <a href="#topo" className="flex items-center gap-2.5">
          <img src="/logo.jpg" alt="" className="h-9 w-9 rounded-xl shadow-soft" />
          <span className="font-display text-[15px] font-bold leading-tight text-ink">
            ParaIA
            <span className="block text-[11px] font-medium text-slate-500">Oportunidades com IA</span>
          </span>
        </a>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-white hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={COMMUNITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-telegram px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110 sm:inline-flex"
          >
            <TelegramIcon className="h-4 w-4" />
            Entrar na comunidade
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="rounded-full p-2 text-slate-600 hover:bg-white lg:hidden"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="container-x pb-4 lg:hidden">
          <ul className="grid gap-0.5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={COMMUNITY_URL} target="_blank" rel="noopener noreferrer" className="btn-tg mt-3 w-full">
            <TelegramIcon />
            Entrar na comunidade
          </a>
        </div>
      )}
    </header>
  );
}
