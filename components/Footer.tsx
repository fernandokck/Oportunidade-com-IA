import { COMMUNITY_URL, HUB_URL } from "@/lib/site";
import TelegramIcon from "./icons/TelegramIcon";

export default function Footer() {
  return (
    <footer className="pb-6">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-soft via-white to-[#E8F5FC] px-6 py-12 text-center shadow-soft sm:py-14">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-ink sm:text-[2.6rem]">
            Sua primeira hora paga começa com <span className="text-gradient">uma gravação</span>.
          </h2>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href={HUB_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Criar conta na HUB.xyz
            </a>
            <a href={COMMUNITY_URL} target="_blank" rel="noopener noreferrer" className="btn-tg">
              <TelegramIcon />
              Entrar na comunidade ParaIA
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-2 pt-6 text-xs text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} ParaIA · Oportunidades com IA</p>
          <p>Valores de referência sujeitos a alteração pelas plataformas.</p>
        </div>
      </div>
    </footer>
  );
}
