import { RESULTS } from "@/lib/results";
import { COMMUNITY_URL } from "@/lib/site";

export default function Results() {
  if (RESULTS.length === 0) return null;

  return (
    <section id="resultados" className="section border-t border-white/[0.06]">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Resultados reais</span>
            <h2 className="h2">Quem está na comunidade já está recebendo.</h2>
            <p className="lead">
              Pagamentos de membros que treinam IA e trabalham com jobs internacionais.
            </p>
          </div>
          <a href={COMMUNITY_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost shrink-0">
            Quero ser o próximo
          </a>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {RESULTS.map((r) => (
            <li key={r.src}>
              <figure className="card flex h-full flex-col overflow-hidden p-2 transition hover:-translate-y-0.5 hover:border-white/20">
                <div className="flex h-48 items-center justify-center rounded-[1.25rem] bg-black/40 p-3">
                  <img src={r.src} alt={r.alt} loading="lazy" className="max-h-full w-full rounded-xl object-contain" />
                </div>
                {r.label && (
                  <figcaption className="px-3 pb-2 pt-3 text-sm font-medium text-stone-300">{r.label}</figcaption>
                )}
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
