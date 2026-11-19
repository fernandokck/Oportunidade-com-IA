export const HUB_URL = "https://ai.hub.xyz/r/DEBIN5";
export const COMMUNITY_URL = "https://t.me/+6t10DYAbKAM4NWUx";
export const HEAD_MOUNT_URL = "https://s.shopee.com.br/20unTpATT6";

/** Valores de referência da HUB.xyz (R$ por hora validada). */
export const RATES = {
  residencial: { hour: 10, level1: 1, level2: 0.75 },
  comercial: { hour: 67.5, level1: 2, level2: 1.5 },
} as const;

export type TaskType = keyof typeof RATES;

export const brl = (v: number, digits = 2) =>
  v.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
