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
  { src: "/resultados/scale-ai-pagamento.jpg", alt: "Pagamento recebido da Scale AI de 185,93 USDC", label: "Scale AI · pagamento em dólar" },
  { src: "/resultados/hub-saque.jpg", alt: "Saldo de R$ 499,00 disponível para saque na HUB", label: "HUB.xyz · R$ 499 disponível para saque" },
  { src: "/resultados/scale-aether-ganhos.jpg", alt: "Painel de ganhos com US$ 211 entre abril e setembro de 2026", label: "Projeto Aether · US$ 211 em ganhos" },
  { src: "/resultados/scale-labs-pagamento.jpg", alt: "Pagamento recebido da Scale Labs de US$ 162,49", label: "Scale Labs · US$ 162,49 recebidos" },
];
