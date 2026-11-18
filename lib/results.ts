/**
 * Prints de resultados da comunidade.
 * Coloque as imagens recortadas em /public/resultados e liste aqui.
 * Enquanto a lista estiver vazia, a seção de resultados não aparece no site.
 */
export interface Result {
  src: string;
  alt: string;
  /** Legenda curta opcional, ex.: "Pagamento HUB.xyz" */
  label?: string;
}

export const RESULTS: Result[] = [
  { src: "/resultados/hub-total-ganho.jpg", alt: "Cartão de ganhos da HUB mostrando R$ 874,85 de total ganho", label: "HUB.xyz · R$ 874,85 de total ganho" },
  { src: "/resultados/paypal-1862.jpg", alt: "PayPal com R$ 1.862,52 em pagamentos recebidos", label: "PayPal · R$ 1.862,52 recebidos" },
  { src: "/resultados/scale-ai-pagamento.jpg", alt: "Pagamento recebido da Scale AI de 185,93 USDC", label: "Scale AI · pagamento em dólar" },
  { src: "/resultados/hub-saque.jpg", alt: "Saldo de R$ 499,00 disponível para saque na HUB", label: "HUB.xyz · R$ 499 disponível para saque" },
  { src: "/resultados/scale-aether-ganhos.jpg", alt: "Painel de ganhos com US$ 211 entre abril e setembro de 2026", label: "Projeto Aether · US$ 211 em ganhos" },
  { src: "/resultados/scale-labs-pagamento.jpg", alt: "Pagamento recebido da Scale Labs de US$ 162,49", label: "Scale Labs · US$ 162,49 recebidos" },
  { src: "/resultados/scale-ai-pagamento-2.jpg", alt: "Pagamento recebido da Scale AI de 240,64 USDC", label: "Scale AI · 240,64 USDC recebidos" },
  { src: "/resultados/pix-micro1.jpg", alt: "Notificação de Pix recebido de R$ 450,83 da DLOCAL", label: "micro1 · Pix de R$ 450,83" },
  { src: "/resultados/scale-labs-pagamento-2.jpg", alt: "Pagamento recebido da Scale Labs de US$ 183,92", label: "Scale Labs · US$ 183,92 recebidos" },
  { src: "/resultados/micro1-saques.jpg", alt: "Saques recentes em dólar no painel da micro1: US$ 79,11 e US$ 168,28", label: "micro1 · saques em dólar" },
  { src: "/resultados/earnings-14h.jpg", alt: "Painel com US$ 130,56 ganhos em 14 horas", label: "US$ 130,56 em 14 horas de tarefas" },
  { src: "/resultados/pix-xgate.jpg", alt: "Notificação do Nubank de transferência recebida de R$ 135,99", label: "Transferência de R$ 135,99 recebida" },
  { src: "/resultados/earnings-371.jpg", alt: "Painel de ganhos com US$ 371", label: "US$ 371 em ganhos" },
  { src: "/resultados/earnings-203.jpg", alt: "Painel de ganhos com US$ 203 entre abril e setembro de 2026", label: "Outlier · US$ 203 em ganhos" },
  { src: "/resultados/scale-ai-pagamento-3.jpg", alt: "Pagamento recebido da Scale AI de 92,74 USDC", label: "Scale AI · 92,74 USDC recebidos" },
];
