import { RESULTS, Result } from "@/lib/results";
import { COMMUNITY_URL } from "@/lib/site";
import TelegramIcon from "./icons/TelegramIcon";

function Row({ items, direction }: { items: Result[]; direction: "left" | "right" }) {
  // A lista é duplicada para o loop ficar contínuo, sem emenda.
  const loop = [...items, ...items];
  return (
    <div className="marquee overflow-hidden py-2">
      <ul
        className={`marquee-track flex w-max gap-4 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
        style={{ ["--duration" as string]: `${items.length * 5}s` }}
      >
        {loop.map((r, i) => (
          <li key={`${r.src}-${i}`} aria-hidden={i >= items.length} className="w-[260px] shrink-0 sm:w-[300px]">
            <figure className="card flex h-full flex-col overflow-hidden p-2">
              <div className="flex h-36 items-center justify-center rounded-2xl bg-sand p-2.5 sm:h-40">
                <img
                  src={r.src}
                  alt={i >= items.length ? "" : r.alt}
                  decoding="async"
                  className="max-h-full w-full rounded-xl object-contain"
                />
              </div>
              {r.label && (
                <figcaption className="px-2 pb-1 pt-2.5 text-[13px] font-medium text-slate-600">{r.label}</figcaption>
              )}
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Results() {
  if (RESULTS.length === 0) return null;
  const top = RESULTS.filter((_, i) => i % 2 === 0);
  const bottom = RESULTS.filter((_, i) => i % 2 === 1);

  return (
    <section id="resultados" className="section overflow-hidden">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Resultados reais · {RESULTS.length} pagamentos</span>
            <h2 className="h2">Quem está na comunidade já está recebendo.</h2>
            <p className="lead">Pagamentos de membros que treinam IA e trabalham com jobs internacionais.</p>
          </div>
          <a href={COMMUNITY_URL} target="_blank" rel="noopener noreferrer" className="btn-tg shrink-0">
            <TelegramIcon />
            Quero ser o próximo
          </a>
        </div>
      </div>

      <div className="mt-8 space-y-2">
        <Row items={top} direction="left" />
        <Row items={bottom} direction="right" />
      </div>
      <p className="container-x mt-3 hidden text-center text-xs text-slate-400 sm:block">Passe o mouse para pausar.</p>
    </section>
  );
}
