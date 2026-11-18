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

export const RESULTS: Result[] = [];
