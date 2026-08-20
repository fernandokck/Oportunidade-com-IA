export default function SectionHead({
  index,
  title,
  sub,
}: {
  index: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="mb-10 sm:mb-12">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider text-amber-700 dark:text-amberNeon bg-amber-500/10 dark:bg-amberNeon/10 border border-amber-500/30 dark:border-amberNeon/25 mb-3 shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amberNeon animate-pulse"></span>
        {index}
      </div>
      <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
        {title}
      </h2>
      {sub && (
        <p className="mt-3 max-w-3xl text-sm sm:text-base text-slate-600 dark:text-amber-100/70 leading-relaxed">
          {sub}
        </p>
      )}
    </div>
  );
}
