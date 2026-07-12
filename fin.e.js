// GHOST-SCAN Kernfunktion
export function GHOST_SCAN_REAL(r) {
    // Wenn Datei fehlt → MISS
    if (r.MISS) {
        return {
            NAME: r.NAME,
            ID: "NONE",
            STATUS: "MISS",
            RESULT: "ERROR",
            OUT: null,
            WAHRHEIT: false,
            IST_IST: "MISS",
            ERROR: true
        };
    }

    // Wenn Datei existiert → normaler Scan
    return {
        NAME: r.NAME,
        ID: r.ID || "ID-NULL",
        STATUS: r.STATUS || "UNSET",
        RESULT: r.RESULT || "OK",
        OUT: r.OUT || {},
        WAHRHEIT: r.WAHRHEIT || true,
        IST_IST: r.IST_IST || "REAL",
        ERROR: false
    };
}
