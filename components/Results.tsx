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

        <ul className="mt-12 columns-2 gap-4 sm:columns-3 lg:columns-4">
          {RESULTS.map((r) => (
            <li key={r.src} className="mb-4 break-inside-avoid">
              <figure className="card overflow-hidden p-1.5 transition hover:-translate-y-0.5 hover:border-white/20">
                <img src={r.src} alt={r.alt} loading="lazy" className="w-full rounded-[1.25rem]" />
                {r.label && (
                  <figcaption className="px-3 pb-2 pt-3 text-xs font-medium text-stone-400">{r.label}</figcaption>
                )}
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
