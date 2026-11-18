import { COMMUNITY_URL, HUB_URL } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="container-x py-20 text-center">
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Sua primeira hora paga começa com <span className="text-gradient">uma gravação</span>.
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={HUB_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Criar conta na HUB.xyz
          </a>
          <a href={COMMUNITY_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            Entrar na comunidade ParaIA
          </a>
        </div>
      </div>
      <div className="border-t border-white/[0.06]">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-stone-500 sm:flex-row">
          <p>© {new Date().getFullYear()} ParaIA · Oportunidades com IA</p>
          <p>Valores de referência sujeitos a alteração pelas plataformas.</p>
        </div>
      </div>
    </footer>
  );
}
