"use client";

import { useId, useMemo, useState } from "react";
import { HUB_URL, RATES, TaskType, brl } from "@/lib/site";

interface SliderProps {
  label: string;
  hint?: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  format: (v: number) => string;
  onChange: (v: number) => void;
}

function Slider({ label, hint, value, min, max, step = 1, format, onChange }: SliderProps) {
  const id = useId();
  const fill = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="text-sm font-medium text-stone-300">
          {label}
        </label>
        <output htmlFor={id} className="shrink-0 whitespace-nowrap font-display text-lg font-bold tabular-nums text-white">
          {format(value)}
        </output>
      </div>
      {hint && <p className="mt-0.5 text-xs text-stone-500">{hint}</p>}
      <input
        id={id}
        type="range"
        className="range mt-3"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ ["--fill" as string]: `${fill}%` }}
      />
    </div>
  );
}

const TABLE_ROWS = [1, 5, 10, 20, 30, 40, 50];

export default function EarningsCalculator() {
  const [type, setType] = useState<TaskType>("residencial");
  const [hours, setHours] = useState(12);
  const [days, setDays] = useState(20);
  const [referrals, setReferrals] = useState(10);
  const [refHours, setRefHours] = useState(4);
  const [subPerRef, setSubPerRef] = useState(2);

  const r = RATES[type];

  const calc = (n: number) => {
    const own = hours * r.hour;
    const l1 = n * refHours * r.level1;
    const l2 = n * subPerRef * refHours * r.level2;
    return { own, l1, l2, total: own + l1 + l2 };
  };

  const day = useMemo(() => calc(referrals), [type, hours, referrals, refHours, subPerRef]); // eslint-disable-line react-hooks/exhaustive-deps
  const month = {
    own: day.own * days,
    l1: day.l1 * days,
    l2: day.l2 * days,
    total: day.total * days,
  };
  const level2People = referrals * subPerRef;

  const parts = [
    { label: "Suas horas", value: month.own, color: "bg-amberNeon" },
    { label: `${referrals} indicados diretos`, value: month.l1, color: "bg-emerald-400" },
    { label: `${level2People} indicados dos indicados`, value: month.l2, color: "bg-cyan-400" },
  ];

  return (
    <section id="calculadora" className="section overflow-hidden border-t border-white/[0.06]">
      <div
        className="pointer-events-none absolute left-1/2 top-40 h-[480px] w-[780px] -translate-x-1/2 rounded-full bg-amberNeon/10 blur-[140px]"
        aria-hidden
      />
      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Calculadora de ganhos</span>
          <h2 className="h2">Quanto você pode ganhar treinando IA?</h2>
          <p className="lead mx-auto">
            Ajuste as horas, a quantidade de pessoas que você indica e veja o resultado com os valores atuais da HUB.xyz.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-[1fr_1fr]">
          {/* Controles */}
          <div className="card space-y-8 p-6 sm:p-8">
            <div>
              <p className="text-sm font-medium text-stone-300">Tipo de tarefa</p>
              <div role="radiogroup" className="mt-3 grid grid-cols-2 gap-1 rounded-2xl bg-black/40 p-1">
                {(Object.keys(RATES) as TaskType[]).map((t) => (
                  <button
                    key={t}
                    role="radio"
                    aria-checked={type === t}
                    onClick={() => setType(t)}
                    className={`rounded-xl px-3 py-3 text-left transition ${
                      type === t ? "bg-white text-cyber-950 shadow" : "text-stone-400 hover:text-white"
                    }`}
                  >
                    <span className="block text-sm font-bold capitalize">{t}</span>
                    <span className="block text-xs opacity-75">{brl(RATES[t].hour)}/hora</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-amber-300">
                Seu trabalho
              </p>
              <div className="space-y-6">
              <Slider
                label="Horas trabalhadas por dia"
                value={hours}
                min={1}
                max={12}
                format={(v) => `${v}h`}
                onChange={setHours}
              />
              <Slider
                label="Dias trabalhados no mês"
                value={days}
                min={1}
                max={30}
                format={(v) => `${v} dias`}
                onChange={setDays}
              />
              </div>
            </div>

            <div className="border-t border-white/[0.08] pt-7">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-300">
                Suas indicações
              </p>
              <div className="space-y-6">
              <Slider
                label="Pessoas indicadas pelo seu link"
                hint={`Você ganha ${brl(r.level1)} por hora validada de cada uma`}
                value={referrals}
                min={0}
                max={50}
                format={(v) => `${v} ${v === 1 ? "pessoa" : "pessoas"}`}
                onChange={setReferrals}
              />
              <Slider
                label="Horas validadas por indicado, por dia"
                value={refHours}
                min={1}
                max={12}
                format={(v) => `${v}h`}
                onChange={setRefHours}
              />
              <Slider
                label="Quantas pessoas cada indicado convida"
                hint={`Você ganha ${brl(r.level2)} por hora validada dos indicados deles`}
                value={subPerRef}
                min={0}
                max={10}
                format={(v) => `${v}`}
                onChange={setSubPerRef}
              />
              </div>
            </div>
          </div>

          {/* Resultado */}
          <div className="card flex flex-col bg-gradient-to-b from-amberNeon/[0.08] to-transparent p-6 sm:p-8 lg:sticky lg:top-24 lg:self-start">
            <p className="text-sm font-medium text-stone-400">Ganho estimado no mês</p>
            <p
              className="mt-2 break-words font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl"
              aria-live="polite"
            >
              {brl(month.total)}
            </p>
            <p className="mt-2 text-sm text-stone-400">
              {brl(day.total)} por dia · {days} dias
            </p>

            <div className="mt-8 flex h-3 overflow-hidden rounded-full bg-white/[0.06]" aria-hidden>
              {parts.map((p) =>
                month.total > 0 && p.value > 0 ? (
                  <div
                    key={p.label}
                    className={`${p.color} h-full transition-all duration-500`}
                    style={{ width: `${(p.value / month.total) * 100}%` }}
                  />
                ) : null
              )}
            </div>

            <dl className="mt-6 divide-y divide-white/[0.06]">
              {parts.map((p) => (
                <div key={p.label} className="flex items-center justify-between gap-4 py-3.5">
                  <dt className="flex items-center gap-2.5 text-sm text-stone-300">
                    <span className={`h-2.5 w-2.5 rounded-full ${p.color}`} />
                    {p.label}
                  </dt>
                  <dd className="font-display font-bold tabular-nums text-white">{brl(p.value)}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-4 rounded-2xl bg-black/30 p-4 text-xs leading-relaxed text-stone-400">
              <p>
                <strong className="text-stone-200">Como calculamos:</strong> {hours}h × {brl(r.hour)} ={" "}
                {brl(day.own)} por dia com suas tarefas. Indicados: {referrals} × {refHours}h × {brl(r.level1)}.
                Indicados dos indicados: {level2People} × {refHours}h × {brl(r.level2)}.
              </p>
            </div>

            <a href={HUB_URL} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 w-full">
              Começar a ganhar na HUB.xyz
            </a>
          </div>
        </div>

        {/* Tabela por quantidade de indicados */}
        <div className="card mt-5 overflow-hidden">
          <div className="flex flex-col justify-between gap-2 border-b border-white/[0.08] p-6 sm:flex-row sm:items-end">
            <div>
              <h3 className="font-display text-xl font-bold text-white">Ganhos por quantidade de indicados</h3>
              <p className="mt-1 text-sm text-stone-400">
                Tarefas {type === "residencial" ? "residenciais" : "comerciais"} · indicados com {refHours}h/dia · cada um convida {subPerRef} · {days} dias no mês
              </p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-sm">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wider text-stone-500">
                  <th className="px-6 py-3 font-semibold">Indicados</th>
                  <th className="px-6 py-3 text-right font-semibold">Bônus diretos</th>
                  <th className="px-6 py-3 text-right font-semibold">Bônus 2º nível</th>
                  <th className="px-6 py-3 text-right font-semibold">Só indicações</th>
                  <th className="px-6 py-3 text-right font-semibold text-amber-300">Total com suas horas</th>
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map((n) => {
                  const c = calc(n);
                  const active = n === referrals;
                  return (
                    <tr
                      key={n}
                      onClick={() => setReferrals(n)}
                      className={`cursor-pointer border-t border-white/[0.05] tabular-nums transition ${
                        active ? "bg-amberNeon/10" : "hover:bg-white/[0.03]"
                      }`}
                    >
                      <td className="whitespace-nowrap px-6 py-3.5 font-semibold text-white">
                        {n} {n === 1 ? "pessoa" : "pessoas"}
                      </td>
                      <td className="px-6 py-3.5 text-right text-stone-300">{brl(c.l1 * days)}</td>
                      <td className="px-6 py-3.5 text-right text-stone-300">{brl(c.l2 * days)}</td>
                      <td className="px-6 py-3.5 text-right text-emerald-400">{brl((c.l1 + c.l2) * days)}</td>
                      <td className="px-6 py-3.5 text-right font-display font-bold text-white">
                        {brl(c.total * days)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-5 text-center text-xs text-stone-500">
          Simulação com os valores atuais da HUB.xyz. Os ganhos reais dependem das tarefas disponíveis e da aprovação de
          cada vídeo, e os valores podem mudar a qualquer momento pela plataforma.
        </p>
      </div>
    </section>
  );
}
