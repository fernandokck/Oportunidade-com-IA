export default function Footer() {
  return (
    <footer className="relative bg-slate-900 dark:bg-cyber-950 py-10 sm:py-12 md:py-16 text-slate-400 border-t border-slate-800 dark:border-cyber-700/80 transition-colors">
      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 pb-8 sm:pb-10 border-b border-slate-800 dark:border-cyber-700/80">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-8 w-8 sm:h-9 sm:w-9 overflow-hidden rounded-full ring-2 ring-amberNeon/50 shadow-md shrink-0">
                <img
                  src="/logo.jpg"
                  alt="Logo Oportunidades com IA"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <span className="font-display text-base sm:text-lg font-black text-white tracking-tight">
                Oportunidades com IA
              </span>
            </div>
            <p className="max-w-xl text-xs sm:text-sm text-slate-300/80 leading-relaxed">
              Portal informativo sobre o mercado global de treinamento de inteligência artificial e robótica doméstica. Vídeos curtos do cotidiano para treinar a próxima geração de modelos inteligentes.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 sm:gap-4 text-xs font-mono">
            <a href="#requisitos" className="text-slate-300 hover:text-amber-400 dark:hover:text-amberNeon transition-colors">
              Guia de Início
            </a>
            <span className="text-slate-700 dark:text-cyber-700">•</span>
            <a href="#plataformas" className="text-slate-300 hover:text-amber-400 dark:hover:text-amberNeon transition-colors">
              Oportunidades
            </a>
            <span className="text-slate-700 dark:text-cyber-700">•</span>
            <a href="#vagas-destaque" className="text-slate-300 hover:text-amber-400 dark:hover:text-amberNeon transition-colors">
              Vagas em Destaque
            </a>
            <span className="text-slate-700 dark:text-cyber-700">•</span>
            <a href="#comparativo" className="text-slate-300 hover:text-amber-400 dark:hover:text-amberNeon transition-colors">
              Comparativo & Ranking
            </a>
            <span className="text-slate-700 dark:text-cyber-700">•</span>
            <a href="#tutoriais" className="text-slate-300 hover:text-amber-400 dark:hover:text-amberNeon transition-colors">
              Vídeos Tutoriais
            </a>
            <span className="text-slate-700 dark:text-cyber-700">•</span>
            <a href="#faq" className="text-slate-300 hover:text-amber-400 dark:hover:text-amberNeon transition-colors">
              Dúvidas Frequentes
            </a>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Oportunidades com IA. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://chat.whatsapp.com/LyX5y4XkizD9Cz2CRSFgey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 hover:underline font-semibold text-xs whitespace-nowrap"
            >
              Comunidade no WhatsApp ↗
            </a>
            <span className="text-slate-700 dark:text-cyber-700">•</span>
            <span className="text-slate-400 text-[11px]">
              Leia sempre os termos das plataformas oficiais.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
