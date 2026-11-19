export default function TelegramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M21.94 4.3a1.2 1.2 0 0 0-1.62-1.33L2.9 9.77c-1.14.45-1.13 1.08-.2 1.37l4.47 1.4 1.72 5.3c.21.58.1.81.71.81.47 0 .68-.21.94-.47l2.25-2.18 4.67 3.45c.86.47 1.48.23 1.7-.8l3.08-14.5zM8.4 12.2l9.66-6.1c.46-.28.88-.13.53.18l-8.2 7.4-.32 3.4-1.67-4.88z" />
    </svg>
  );
}
