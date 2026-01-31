import { OHLCData } from "../core/types";

/** Convertit un tfLabel (ex: 1m, 1h, 1D, 1M) en intervalle en millisecondes */
function tfLabelToMs(tfLabel: string): number {
    const match = tfLabel.trim().match(/^(\d+)\s*([smhdwM])$/i);
    if (!match) return 60 * 1000; // défaut: 1 minute
    const n = parseInt(match[1], 10);
    const unit = match[2].toLowerCase();
    const M = match[2] === 'M'; // M = mois (majuscule uniquement)
    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;
    const week = 7 * day;
    const month = 30 * day; // ~1 mois
    if (M) return n * month;
    switch (unit) {
        case 's': return n * 1000;
        case 'm': return n * minute;
        case 'h': return n * hour;
        case 'd': return n * day;
        case 'w': return n * week;
        default: return n * minute;
    }
}

/**
 * Génère des données OHLC de démo.
 * @param count Nombre de bougies à créer
 * @param tfLabel Durée d'une bougie (ex: 1m = 1 minute, 1h = 1 heure, 1D = 1 jour, 1M = 1 mois)
 */
export function generateSampleData(count: number, tfLabel: string = "1m"): OHLCData[] {
    const data: OHLCData[] = [];
    const now = Date.now();
    const intervalMs = tfLabelToMs(tfLabel);
    let price = 100;

    for (let i = 0; i < count; i++) {
        const volatility = 0.5 + Math.random() * 1;
        const open = price;
        const change = (Math.random() - 0.5) * volatility;
        const close = open + change;
        const high = Math.max(open, close) + Math.random() * volatility * 0.3;
        const low = Math.min(open, close) - Math.random() * volatility * 0.3;

        data.push({
            time: now - (count - i) * intervalMs,
            open,
            high,
            low,
            close,
        });

        price = close;
    }

    return data;
}