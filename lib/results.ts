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
  { src: "/resultados/micro1-3500.jpg", alt: "E-mail da micro1 com pagamento de US$ 3.500,87", label: "micro1 · US$ 3.500,87 recebidos" },
  { src: "/resultados/hub-total-ganho.jpg", alt: "Cartão de ganhos da HUB mostrando R$ 874,85 de total ganho", label: "HUB.xyz · R$ 874,85 de total ganho" },
  { src: "/resultados/relatorio-horas.jpg", alt: "Relatório de pagamentos com US$ 2.779,31 pagos por 39,7 horas e US$ 1.229,53 pendentes", label: "US$ 2.779,31 pagos por 39,7 horas" },
  { src: "/resultados/scale-labs-536.jpg", alt: "Pagamento recebido da Scale Labs de US$ 536,10", label: "Scale Labs · US$ 536,10 recebidos" },
  { src: "/resultados/pagamentos-470.jpg", alt: "R$ 470,76 em pagamentos recebidos", label: "R$ 470,76 em pagamentos recebidos" },
  { src: "/resultados/airtm-180-pix.jpg", alt: "Saldo de 180,74 USDC na Airtm convertido em R$ 1.032,47 via Pix", label: "Airtm · 180,74 USDC = R$ 1.032,47 no Pix" },
  { src: "/resultados/paypal-1862.jpg", alt: "PayPal com R$ 1.862,52 em pagamentos recebidos", label: "PayPal · R$ 1.862,52 recebidos" },
  { src: "/resultados/scale-ai-388.jpg", alt: "Pagamento recebido da Scale AI de 388,04 USDC", label: "Scale AI · 388,04 USDC recebidos" },
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
  { src: "/resultados/outlier-airtm-202.jpg", alt: "Pagamento da Outlier de 202,52 USDC recebido na Airtm", label: "Outlier · 202,52 USDC na Airtm" },
  { src: "/resultados/scale-labs-cambio.jpg", alt: "Pagamento da Scale Labs de US$ 98,74, convertido em R$ 495,09", label: "Scale Labs · US$ 98,74 = R$ 495,09" },
  { src: "/resultados/scale-ai-pagamento-4.jpg", alt: "Pagamento recebido da Scale AI de 130,57 USDC", label: "Scale AI · 130,57 USDC recebidos" },
  { src: "/resultados/scale-labs-81.jpg", alt: "Pagamento recebido da Scale Labs de US$ 81,42", label: "Scale Labs · US$ 81,42 recebidos" },
  { src: "/resultados/nubank-paypal.jpg", alt: "Notificações do Nubank com transferências de R$ 312,26 do PayPal e R$ 107,58", label: "R$ 312,26 + R$ 107,58 no Nubank" },
  { src: "/resultados/scale-labs-110.jpg", alt: "Pagamento recebido da Scale Labs de US$ 110,80", label: "Scale Labs · US$ 110,80 recebidos" },
  { src: "/resultados/scale-labs-98-66.jpg", alt: "Pagamento recebido da Scale Labs de US$ 98,66", label: "Scale Labs · US$ 98,66 recebidos" },
  { src: "/resultados/hub-total-189.jpg", alt: "Total ganho de R$ 189,65", label: "HUB.xyz · R$ 189,65 de total ganho" },
  { src: "/resultados/scale-ai-airtm-59.jpg", alt: "Pagamento da Scale AI de 59,06 USDC recebido na Airtm", label: "Scale AI · 59,06 USDC na Airtm" },
  { src: "/resultados/pagamentos-391.jpg", alt: "R$ 391,95 em pagamentos recebidos, com Scale Labs US$ 76,17 e Tremendous US$ 5,00", label: "R$ 391,95 em pagamentos recebidos" },
  { src: "/resultados/paypal-bb-notificacoes.jpg", alt: "Notificações de US$ 11,02 da Scale Labs via PayPal e Pix de R$ 114,02", label: "PayPal US$ 11,02 + Pix de R$ 114,02" },
  { src: "/resultados/scale-labs-51.jpg", alt: "Pagamento recebido da Scale Labs de US$ 51,34", label: "Scale Labs · US$ 51,34 recebidos" },
  { src: "/resultados/pix-wise-347.jpg", alt: "Notificação de Pix de R$ 347,78 recebido da Wise", label: "Pix de R$ 347,78 via Wise" },
  { src: "/resultados/pix-294.jpg", alt: "Notificação de Pix recebido de R$ 294,33", label: "Pix de R$ 294,33 recebido" },
  { src: "/resultados/hub-total-159.jpg", alt: "Cartão de ganhos da HUB com R$ 159,50 de total ganho", label: "HUB.xyz · R$ 159,50 de total ganho" },
  { src: "/resultados/pix-580.jpg", alt: "Notificação de Pix recebido de R$ 580,89", label: "Pix de R$ 580,89 recebido" },
  { src: "/resultados/hub-saque-311.jpg", alt: "Registro de ganhos da HUB com R$ 311,20 disponível para saque", label: "HUB.xyz · R$ 311,20 para saque" },
  { src: "/resultados/nubank-146.jpg", alt: "Notificação do Nubank de transferência recebida de R$ 146,30", label: "Transferência de R$ 146,30 recebida" },
  { src: "/resultados/pix-101.jpg", alt: "Pix recebido de R$ 101,25", label: "Pix de R$ 101,25 recebido" },
  { src: "/resultados/pix-wise-70.jpg", alt: "Notificação de Pix de R$ 70,05 da Wise", label: "Pix de R$ 70,05 via Wise" },
];
