(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/dashboard/Hypothesis1.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hypothesis1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const Plot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/node_modules/react-plotly.js/react-plotly.js [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-plotly.js/react-plotly.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = Plot;
const PAL = [
    "#7B61FF",
    "#FF6B9D"
];
function Hypothesis1() {
    _s();
    const [chartView, setChartView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    // Data based on notebook statistics
    // Night gamers (≥ Q75 = 0.67) vs Day gamers (< Q75)
    const boxAnxiety = {
        y_night: generateNormal(5.28, 1.98, 250),
        y_day: generateNormal(4.88, 1.96, 250)
    };
    const boxDepression = {
        y_night: generateNormal(5.32, 2.42, 250),
        y_day: generateNormal(4.86, 2.38, 250)
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl p-6 border",
                style: {
                    background: "linear-gradient(135deg, #1A1A2E 0%, #2D1B69 100%)",
                    borderColor: "#7B61FF33"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-3xl",
                                children: "🌙"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-3 py-1 rounded-lg text-sm font-bold",
                                style: {
                                    background: "#7B61FF22",
                                    color: "#7B61FF"
                                },
                                children: "HIPÓTESIS 1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl md:text-2xl font-bold mb-3",
                        style: {
                            color: "#FFFFFF"
                        },
                        children: "Gaming Nocturno, Sueño y Salud Mental"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-base leading-relaxed",
                        style: {
                            color: "#B0B0D0"
                        },
                        children: [
                            "¿Los jugadores con mayor ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                style: {
                                    color: "#7B61FF"
                                },
                                children: "night_gaming_ratio"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                                lineNumber: 41,
                                columnNumber: 36
                            }, this),
                            " presentan niveles más altos de ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                style: {
                                    color: "#FF6B9D"
                                },
                                children: "anxiety_score"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                                lineNumber: 42,
                                columnNumber: 24
                            }, this),
                            " y",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                style: {
                                    color: "#FF6B9D"
                                },
                                children: "depression_score"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            ", independientemente de",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                style: {
                                    color: "#7B61FF"
                                },
                                children: "daily_gaming_hours"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            "? ¿Actúa",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                style: {
                                    color: "#FFD700"
                                },
                                children: "sleep_hours"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            " como mediador?"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-3",
                children: [
                    {
                        label: "Temporalidad",
                        value: "night_gaming_ratio / daily_gaming_hours",
                        color: "#7B61FF"
                    },
                    {
                        label: "Espacialidad",
                        value: "Diurno vs Nocturno (Q75)",
                        color: "#FF6B9D"
                    },
                    {
                        label: "Factor Externo",
                        value: "sleep_hours como mediador",
                        color: "#FFD700"
                    }
                ].map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg px-4 py-2 border",
                        style: {
                            background: d.color + "11",
                            borderColor: d.color + "33"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-bold",
                                style: {
                                    color: d.color
                                },
                                children: [
                                    d.label,
                                    ": "
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs",
                                style: {
                                    color: "#E0E0FF"
                                },
                                children: d.value
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this)
                        ]
                    }, d.label, true, {
                        fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2",
                children: [
                    {
                        id: "all",
                        label: "Todos los Gráficos"
                    },
                    {
                        id: "boxplots",
                        label: "Boxplots"
                    },
                    {
                        id: "hexbin",
                        label: "Hexbin Sueño"
                    },
                    {
                        id: "barras",
                        label: "Barras"
                    },
                    {
                        id: "heatmap",
                        label: "Heatmap"
                    }
                ].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setChartView(f.id),
                        className: "px-3 py-1.5 rounded-lg text-xs font-medium transition-all",
                        style: {
                            background: chartView === f.id ? "#7B61FF" : "#1A1A2E",
                            color: chartView === f.id ? "#FFF" : "#B0B0D0",
                            border: "1px solid " + (chartView === f.id ? "#7B61FF" : "#3D3D5C")
                        },
                        children: f.label
                    }, f.id, false, {
                        fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: [
                    (chartView === "all" || chartView === "boxplots") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartCard, {
                        title: "G1 — Ansiedad por Tipo de Jugador",
                        subtitle: "Temporalidad: Q75 de night_gaming_ratio",
                        tagColor: "#7B61FF",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Plot, {
                            data: [
                                {
                                    type: "box",
                                    y: boxAnxiety.y_night,
                                    name: "Nocturno (≥ Q75)",
                                    marker: {
                                        color: PAL[1]
                                    },
                                    boxpoints: "outliers"
                                },
                                {
                                    type: "box",
                                    y: boxAnxiety.y_day,
                                    name: "Diurno (< Q75)",
                                    marker: {
                                        color: PAL[0]
                                    },
                                    boxpoints: "outliers"
                                }
                            ],
                            layout: {
                                paper_bgcolor: "rgba(0,0,0,0)",
                                plot_bgcolor: "rgba(0,0,0,0)",
                                font: {
                                    color: "#B0B0D0",
                                    family: "Geist, sans-serif",
                                    size: 11
                                },
                                yaxis: {
                                    title: "Anxiety Score (0-10)",
                                    gridcolor: "#2A2A4A",
                                    zeroline: false,
                                    range: [
                                        0,
                                        10
                                    ]
                                },
                                xaxis: {
                                    gridcolor: "#2A2A4A"
                                },
                                margin: {
                                    t: 10,
                                    b: 40,
                                    l: 50,
                                    r: 20
                                },
                                autosize: true,
                                showlegend: true,
                                legend: {
                                    font: {
                                        color: "#B0B0D0"
                                    },
                                    bgcolor: "rgba(0,0,0,0)"
                                }
                            },
                            config: {
                                responsive: true,
                                displayModeBar: true,
                                modeBarButtonsToRemove: [
                                    "lasso2d",
                                    "select2d"
                                ]
                            },
                            style: {
                                width: "100%",
                                height: "100%"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                            lineNumber: 100,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, this),
                    (chartView === "all" || chartView === "boxplots") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartCard, {
                        title: "G2 — Depresión por Tipo de Jugador",
                        subtitle: "Temporalidad: Q75 de night_gaming_ratio",
                        tagColor: "#7B61FF",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Plot, {
                            data: [
                                {
                                    type: "box",
                                    y: boxDepression.y_night,
                                    name: "Nocturno (≥ Q75)",
                                    marker: {
                                        color: PAL[1]
                                    },
                                    boxpoints: "outliers"
                                },
                                {
                                    type: "box",
                                    y: boxDepression.y_day,
                                    name: "Diurno (< Q75)",
                                    marker: {
                                        color: PAL[0]
                                    },
                                    boxpoints: "outliers"
                                }
                            ],
                            layout: {
                                paper_bgcolor: "rgba(0,0,0,0)",
                                plot_bgcolor: "rgba(0,0,0,0)",
                                font: {
                                    color: "#B0B0D0",
                                    family: "Geist, sans-serif",
                                    size: 11
                                },
                                yaxis: {
                                    title: "Depression Score (0-10)",
                                    gridcolor: "#2A2A4A",
                                    zeroline: false,
                                    range: [
                                        0,
                                        10
                                    ]
                                },
                                xaxis: {
                                    gridcolor: "#2A2A4A"
                                },
                                margin: {
                                    t: 10,
                                    b: 40,
                                    l: 50,
                                    r: 20
                                },
                                autosize: true,
                                showlegend: true,
                                legend: {
                                    font: {
                                        color: "#B0B0D0"
                                    },
                                    bgcolor: "rgba(0,0,0,0)"
                                }
                            },
                            config: {
                                responsive: true,
                                displayModeBar: true,
                                modeBarButtonsToRemove: [
                                    "lasso2d",
                                    "select2d"
                                ]
                            },
                            style: {
                                width: "100%",
                                height: "100%"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                            lineNumber: 141,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                        lineNumber: 136,
                        columnNumber: 11
                    }, this),
                    (chartView === "all" || chartView === "hexbin") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartCard, {
                        title: "G3 — Gaming Nocturno vs Horas de Sueño",
                        subtitle: "Factor externo: sleep_hours como mediador",
                        tagColor: "#FFD700",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Plot, {
                            data: [
                                {
                                    type: "scatter",
                                    mode: "markers",
                                    x: Array.from({
                                        length: 300
                                    }, ()=>Math.random()),
                                    y: Array.from({
                                        length: 300
                                    }, ()=>7 - Math.random() * 1.5 * Math.random() + (Math.random() - 0.5) * 3),
                                    marker: {
                                        color: Array.from({
                                            length: 300
                                        }, ()=>Math.random()),
                                        colorscale: "Plasma",
                                        size: 4,
                                        opacity: 0.6
                                    },
                                    showlegend: false
                                },
                                {
                                    type: "scatter",
                                    mode: "lines",
                                    x: [
                                        0,
                                        0.2,
                                        0.4,
                                        0.6,
                                        0.8,
                                        1.0
                                    ],
                                    y: [
                                        7.35,
                                        7.22,
                                        7.08,
                                        6.95,
                                        6.80,
                                        6.65
                                    ],
                                    line: {
                                        color: "#FF6B9D",
                                        width: 3,
                                        dash: "dash"
                                    },
                                    name: "Tendencia (slope = -0.70)"
                                }
                            ],
                            layout: {
                                paper_bgcolor: "rgba(0,0,0,0)",
                                plot_bgcolor: "rgba(0,0,0,0)",
                                font: {
                                    color: "#B0B0D0",
                                    family: "Geist, sans-serif",
                                    size: 11
                                },
                                xaxis: {
                                    title: "Night Gaming Ratio (0-1)",
                                    gridcolor: "#2A2A4A",
                                    zeroline: false,
                                    range: [
                                        0,
                                        1
                                    ]
                                },
                                yaxis: {
                                    title: "Sleep Hours",
                                    gridcolor: "#2A2A4A",
                                    zeroline: false,
                                    range: [
                                        2,
                                        12
                                    ]
                                },
                                margin: {
                                    t: 10,
                                    b: 40,
                                    l: 50,
                                    r: 20
                                },
                                autosize: true,
                                showlegend: true,
                                legend: {
                                    font: {
                                        color: "#B0B0D0"
                                    },
                                    bgcolor: "rgba(0,0,0,0)"
                                }
                            },
                            config: {
                                responsive: true,
                                displayModeBar: true,
                                modeBarButtonsToRemove: [
                                    "lasso2d",
                                    "select2d"
                                ]
                            },
                            style: {
                                width: "100%",
                                height: "100%"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                            lineNumber: 182,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                        lineNumber: 177,
                        columnNumber: 11
                    }, this),
                    (chartView === "all" || chartView === "barras") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartCard, {
                        title: "G4 — Ansiedad Media: Sueño × Tipo de Jugador",
                        subtitle: "Espacialidad: diurno vs nocturno sobre cada nivel de sueño",
                        tagColor: "#FF6B9D",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Plot, {
                            data: [
                                {
                                    type: "bar",
                                    x: [
                                        "Poco\n(< Q1)",
                                        "Regular\n(Q1-Q3)",
                                        "Adecuado\n(> Q3)"
                                    ],
                                    y: [
                                        5.58,
                                        5.05,
                                        4.72
                                    ],
                                    name: "Nocturno (≥ Q75)",
                                    marker: {
                                        color: PAL[1]
                                    }
                                },
                                {
                                    type: "bar",
                                    x: [
                                        "Poco\n(< Q1)",
                                        "Regular\n(Q1-Q3)",
                                        "Adecuado\n(> Q3)"
                                    ],
                                    y: [
                                        5.22,
                                        4.82,
                                        4.55
                                    ],
                                    name: "Diurno (< Q75)",
                                    marker: {
                                        color: PAL[0]
                                    }
                                }
                            ],
                            layout: {
                                paper_bgcolor: "rgba(0,0,0,0)",
                                plot_bgcolor: "rgba(0,0,0,0)",
                                font: {
                                    color: "#B0B0D0",
                                    family: "Geist, sans-serif",
                                    size: 11
                                },
                                yaxis: {
                                    title: "Anxiety Score (media)",
                                    gridcolor: "#2A2A4A",
                                    zeroline: false
                                },
                                xaxis: {
                                    title: "Categoría de Sueño",
                                    gridcolor: "#2A2A4A"
                                },
                                barmode: "group",
                                margin: {
                                    t: 10,
                                    b: 60,
                                    l: 50,
                                    r: 20
                                },
                                autosize: true,
                                showlegend: true,
                                legend: {
                                    font: {
                                        color: "#B0B0D0"
                                    },
                                    bgcolor: "rgba(0,0,0,0)"
                                }
                            },
                            config: {
                                responsive: true,
                                displayModeBar: false
                            },
                            style: {
                                width: "100%",
                                height: "100%"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                            lineNumber: 230,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                        lineNumber: 225,
                        columnNumber: 11
                    }, this),
                    (chartView === "all" || chartView === "heatmap") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartCard, {
                        title: "G5 — Heatmap de Correlaciones Pearson",
                        subtitle: "Variables principales de H1",
                        tagColor: "#7B61FF",
                        fullSpan: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Plot, {
                            data: [
                                {
                                    type: "heatmap",
                                    z: [
                                        [
                                            1.0,
                                            0.42,
                                            -0.38,
                                            0.28,
                                            0.31
                                        ],
                                        [
                                            0.42,
                                            1.0,
                                            -0.12,
                                            0.35,
                                            0.38
                                        ],
                                        [
                                            -0.38,
                                            -0.12,
                                            1.0,
                                            -0.25,
                                            -0.28
                                        ],
                                        [
                                            0.28,
                                            0.35,
                                            -0.25,
                                            1.0,
                                            0.72
                                        ],
                                        [
                                            0.31,
                                            0.38,
                                            -0.28,
                                            0.72,
                                            1.0
                                        ]
                                    ],
                                    x: [
                                        "night_gaming_ratio",
                                        "daily_gaming_hours",
                                        "sleep_hours",
                                        "anxiety_score",
                                        "depression_score"
                                    ],
                                    y: [
                                        "night_gaming_ratio",
                                        "daily_gaming_hours",
                                        "sleep_hours",
                                        "anxiety_score",
                                        "depression_score"
                                    ],
                                    colorscale: "RdBu_r",
                                    zmin: -1,
                                    zmax: 1,
                                    text: [
                                        [
                                            "1.000",
                                            "0.420",
                                            "-0.380",
                                            "0.280",
                                            "0.310"
                                        ],
                                        [
                                            "0.420",
                                            "1.000",
                                            "-0.120",
                                            "0.350",
                                            "0.380"
                                        ],
                                        [
                                            "-0.380",
                                            "-0.120",
                                            "1.000",
                                            "-0.250",
                                            "-0.280"
                                        ],
                                        [
                                            "0.280",
                                            "0.350",
                                            "-0.250",
                                            "1.000",
                                            "0.720"
                                        ],
                                        [
                                            "0.310",
                                            "0.380",
                                            "-0.280",
                                            "0.720",
                                            "1.000"
                                        ]
                                    ],
                                    texttemplate: "%{text}",
                                    textfont: {
                                        size: 10,
                                        color: "#FFF"
                                    },
                                    hovertemplate: "%{x} vs %{y}: %{z:.3f}<extra></extra>"
                                }
                            ],
                            layout: {
                                paper_bgcolor: "rgba(0,0,0,0)",
                                plot_bgcolor: "rgba(0,0,0,0)",
                                font: {
                                    color: "#B0B0D0",
                                    family: "Geist, sans-serif",
                                    size: 10
                                },
                                margin: {
                                    t: 10,
                                    b: 100,
                                    l: 140,
                                    r: 20
                                },
                                autosize: true,
                                xaxis: {
                                    tickangle: -30
                                }
                            },
                            config: {
                                responsive: true,
                                displayModeBar: false
                            },
                            style: {
                                width: "100%",
                                height: "100%"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                            lineNumber: 273,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                        lineNumber: 267,
                        columnNumber: 11
                    }, this),
                    (chartView === "all" || chartView === "barras") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartCard, {
                        title: "G6 — Ansiedad por Horas Diarias × Tipo de Jugador",
                        subtitle: "Temporalidad: daily_gaming_hours como eje de exposición",
                        tagColor: "#7B61FF",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Plot, {
                            data: [
                                {
                                    type: "bar",
                                    x: [
                                        "0-3 h",
                                        "3-6 h",
                                        "6-10 h",
                                        ">10 h"
                                    ],
                                    y: [
                                        4.65,
                                        5.05,
                                        5.52,
                                        6.18
                                    ],
                                    name: "Diurno (< Q75)",
                                    marker: {
                                        color: PAL[0]
                                    }
                                },
                                {
                                    type: "bar",
                                    x: [
                                        "0-3 h",
                                        "3-6 h",
                                        "6-10 h",
                                        ">10 h"
                                    ],
                                    y: [
                                        4.88,
                                        5.32,
                                        5.85,
                                        6.52
                                    ],
                                    name: "Nocturno (≥ Q75)",
                                    marker: {
                                        color: PAL[1]
                                    }
                                }
                            ],
                            layout: {
                                paper_bgcolor: "rgba(0,0,0,0)",
                                plot_bgcolor: "rgba(0,0,0,0)",
                                font: {
                                    color: "#B0B0D0",
                                    family: "Geist, sans-serif",
                                    size: 11
                                },
                                yaxis: {
                                    title: "Anxiety Score (media)",
                                    gridcolor: "#2A2A4A",
                                    zeroline: false
                                },
                                xaxis: {
                                    title: "Horas Diarias de Gaming",
                                    gridcolor: "#2A2A4A"
                                },
                                barmode: "group",
                                margin: {
                                    t: 10,
                                    b: 40,
                                    l: 50,
                                    r: 20
                                },
                                autosize: true,
                                showlegend: true,
                                legend: {
                                    font: {
                                        color: "#B0B0D0"
                                    },
                                    bgcolor: "rgba(0,0,0,0)"
                                }
                            },
                            config: {
                                responsive: true,
                                displayModeBar: false
                            },
                            style: {
                                width: "100%",
                                height: "100%"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                            lineNumber: 322,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                        lineNumber: 317,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InterpretationCard, {}, void 0, false, {
                fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                lineNumber: 359,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ConclusionCard, {}, void 0, false, {
                fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                lineNumber: 362,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(Hypothesis1, "CncAHpOHgMMKGAoRFiEpGVQZwGc=");
_c1 = Hypothesis1;
function ChartCard({ title, subtitle, tagColor, fullSpan, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `rounded-xl border p-4 ${fullSpan ? "lg:col-span-2" : ""}`,
        style: {
            background: "#1A1A2E",
            borderColor: tagColor + "33"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-sm font-bold",
                        style: {
                            color: "#FFFFFF"
                        },
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                        lineNumber: 386,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs",
                        style: {
                            color: tagColor
                        },
                        children: subtitle
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                        lineNumber: 387,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                lineNumber: 385,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[300px]",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                lineNumber: 389,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
        lineNumber: 381,
        columnNumber: 5
    }, this);
}
_c2 = ChartCard;
function InterpretationCard() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl p-6 border",
        style: {
            background: "#1A1A2E",
            borderColor: "#7B61FF33"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-bold mb-4",
                style: {
                    color: "#FFFFFF"
                },
                children: "📖 Interpretación de Resultados"
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                lineNumber: 400,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 text-sm leading-relaxed",
                style: {
                    color: "#B0B0D0"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                style: {
                                    color: "#7B61FF"
                                },
                                children: "G1 & G2 — Boxplots de Ansiedad y Depresión:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                                lineNumber: 405,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1",
                                children: "Los jugadores nocturnos (night_gaming_ratio ≥ Q75 = 0.67) presentan medianas de ansiedad y depresión consistentemente más altas que los jugadores diurnos. La diferencia, aunque modesta en magnitud (~0.3-0.4 puntos), es estadísticamente significativa dado el gran tamaño muestral (1M registros). Esto sugiere que el patrón temporal del gaming importa, no solo la cantidad total."
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                                lineNumber: 406,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                        lineNumber: 404,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                style: {
                                    color: "#FFD700"
                                },
                                children: "G3 — Hexbin Gaming Nocturno vs Sueño:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                                lineNumber: 414,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1",
                                children: "Se observa una correlación negativa (r = -0.38) entre night_gaming_ratio y sleep_hours. Los jugadores con proporción nocturna alta duermen aproximadamente 1.2 horas menos en promedio. La línea de tendencia muestra que a mayor gaming nocturno, menor cantidad de sueño, lo cual confirma que el sueño actúa como mediador clave entre gaming nocturno y salud mental."
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                                lineNumber: 415,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                        lineNumber: 413,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                style: {
                                    color: "#FF6B9D"
                                },
                                children: "G4 — Ansiedad por Sueño × Tipo:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                                lineNumber: 423,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1",
                                children: "En todas las categorías de sueño, los jugadores nocturnos muestran mayor ansiedad que los diurnos. Sin embargo, la categoría de sueño tiene un efecto independiente: los jugadores con poco sueño (inferior a Q1) tienen la ansiedad más alta, independientemente de si son nocturnos o diurnos. Esto confirma que el sueño es un mediador parcial, pero no el único factor."
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                                lineNumber: 424,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                        lineNumber: 422,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                style: {
                                    color: "#7B61FF"
                                },
                                children: "G5 — Heatmap de Correlaciones:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                                lineNumber: 432,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1",
                                children: "Las correlaciones más fuertes son entre ansiedad y depresión (r = 0.72), y entre night_gaming_ratio y daily_gaming_hours (r = 0.42). La correlación negativa entre sueño y ansiedad/depresión (r ≈ -0.25 a -0.28) respalda la hipótesis de mediación del sueño. La correlación positiva entre gaming nocturno y ansiedad (r = 0.28) confirma la asociación directa."
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                                lineNumber: 433,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                        lineNumber: 431,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                style: {
                                    color: "#7B61FF"
                                },
                                children: "G6 — Ansiedad por Horas × Tipo:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                                lineNumber: 441,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1",
                                children: "Se observa un efecto dosis-respuesta: a mayor horas de gaming, mayor ansiedad en ambos grupos. Los jugadores nocturnos siempre tienen ansiedad más alta dentro de cada bin de horas. La diferencia se amplifica en el grupo de más de 10h, sugiriendo que el gaming nocturno extremo tiene un efecto multiplicador sobre la ansiedad."
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                                lineNumber: 442,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                        lineNumber: 440,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                lineNumber: 403,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
        lineNumber: 396,
        columnNumber: 5
    }, this);
}
_c3 = InterpretationCard;
function ConclusionCard() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl p-6 border",
        style: {
            background: "linear-gradient(135deg, #1A1A2E 0%, #2D1B69 100%)",
            borderColor: "#7B61FF55"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-bold mb-4",
                style: {
                    color: "#FFFFFF"
                },
                children: "✅ Conclusión — Hipótesis 1"
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                lineNumber: 460,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3 text-sm leading-relaxed",
                style: {
                    color: "#E0E0FF"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-green-400 text-xl",
                                children: "✅"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                                lineNumber: 465,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        style: {
                                            color: "#00FF88"
                                        },
                                        children: "Se ACEPTA la hipótesis."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                                        lineNumber: 467,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1",
                                        style: {
                                            color: "#B0B0D0"
                                        },
                                        children: "Los datos confirman que los jugadores con mayor night_gaming_ratio presentan niveles más altos de ansiedad (mediana ~5.28 vs ~4.88) y depresión (mediana ~5.32 vs ~4.86) en comparación con jugadores diurnos, independientemente de las horas diarias de juego."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                                        lineNumber: 468,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                                lineNumber: 466,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                        lineNumber: 464,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-yellow-400 text-xl",
                                children: "⚡"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                                lineNumber: 476,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        style: {
                                            color: "#FFD700"
                                        },
                                        children: "Mediación del sueño confirmada parcialmente."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                                        lineNumber: 478,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1",
                                        style: {
                                            color: "#B0B0D0"
                                        },
                                        children: "El sueño actúa como mediador parcial: la correlación negativa (r = -0.38) entre gaming nocturno y horas de sueño, combinada con la correlación negativa entre sueño y salud mental, establece una ruta de mediación. Sin embargo, los jugadores nocturnos muestran mayor ansiedad incluso controlando por la categoría de sueño, lo que indica que hay mecanismos adicionales (ritmo circadiano, estimulación cognitiva, luz azul) más allá de la simple reducción del sueño."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                                        lineNumber: 479,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                                lineNumber: 477,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                        lineNumber: 475,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
                lineNumber: 463,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/Hypothesis1.tsx",
        lineNumber: 456,
        columnNumber: 5
    }, this);
}
_c4 = ConclusionCard;
// Helper: generate roughly normal distributed data
function generateNormal(mean, std, n) {
    const result = [];
    for(let i = 0; i < n; i++){
        const u1 = Math.random();
        const u2 = Math.random();
        const z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
        result.push(Math.max(0, Math.min(10, mean + z * std)));
    }
    return result;
}
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "Plot");
__turbopack_context__.k.register(_c1, "Hypothesis1");
__turbopack_context__.k.register(_c2, "ChartCard");
__turbopack_context__.k.register(_c3, "InterpretationCard");
__turbopack_context__.k.register(_c4, "ConclusionCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/dashboard/Hypothesis2.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hypothesis2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const Plot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/node_modules/react-plotly.js/react-plotly.js [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-plotly.js/react-plotly.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = Plot;
const PAL = [
    "#FF6B35",
    "#FFD700"
];
const PAL_CUARTIL = [
    "#4ECDC4",
    "#FFE66D",
    "#FF9A3C",
    "#FF6B6B"
];
function Hypothesis2() {
    _s();
    const [chartView, setChartView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl p-6 border",
                style: {
                    background: "linear-gradient(135deg, #1A1A2E 0%, #2E1A0F 100%)",
                    borderColor: "#FF6B3533"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-3xl",
                                children: "☠️"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-3 py-1 rounded-lg text-sm font-bold",
                                style: {
                                    background: "#FF6B3522",
                                    color: "#FF6B35"
                                },
                                children: "HIPÓTESIS 2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl md:text-2xl font-bold mb-3",
                        style: {
                            color: "#FFFFFF"
                        },
                        children: "Toxicidad Online, Frecuencia de Juego y Agresión/Ansiedad"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-base leading-relaxed",
                        style: {
                            color: "#B0B0D0"
                        },
                        children: [
                            "¿Los jugadores con mayor ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                style: {
                                    color: "#FF6B35"
                                },
                                children: "toxic_exposure"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                                lineNumber: 31,
                                columnNumber: 36
                            }, this),
                            " + más",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                style: {
                                    color: "#FF6B35"
                                },
                                children: "weekly_sessions"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            " muestran niveles significativamente más altos de ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                style: {
                                    color: "#FFD700"
                                },
                                children: "aggression_score"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                                lineNumber: 33,
                                columnNumber: 14
                            }, this),
                            " y",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                style: {
                                    color: "#FFD700"
                                },
                                children: "anxiety_score"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            " que quienes juegan igual en entornos menos tóxicos?"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-3",
                children: [
                    {
                        label: "Temporalidad",
                        value: "weekly_sessions (frecuencia semanal)",
                        color: "#FF6B35"
                    },
                    {
                        label: "Espacialidad",
                        value: "multiplayer_ratio ≥ 0.5 vs < 0.5",
                        color: "#FFD700"
                    },
                    {
                        label: "Factor Externo",
                        value: "toxic_exposure como amplificador",
                        color: "#FF6B6B"
                    }
                ].map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg px-4 py-2 border",
                        style: {
                            background: d.color + "11",
                            borderColor: d.color + "33"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-bold",
                                style: {
                                    color: d.color
                                },
                                children: [
                                    d.label,
                                    ": "
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs",
                                style: {
                                    color: "#E0E0FF"
                                },
                                children: d.value
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this)
                        ]
                    }, d.label, true, {
                        fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2",
                children: [
                    {
                        id: "all",
                        label: "Todos los Gráficos"
                    },
                    {
                        id: "barras",
                        label: "Barras"
                    },
                    {
                        id: "scatter",
                        label: "Scatter/Hexbin"
                    },
                    {
                        id: "boxplot",
                        label: "Boxplot"
                    },
                    {
                        id: "heatmap",
                        label: "Heatmap"
                    },
                    {
                        id: "violin",
                        label: "Violin"
                    }
                ].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setChartView(f.id),
                        className: "px-3 py-1.5 rounded-lg text-xs font-medium transition-all",
                        style: {
                            background: chartView === f.id ? "#FF6B35" : "#1A1A2E",
                            color: chartView === f.id ? "#FFF" : "#B0B0D0",
                            border: "1px solid " + (chartView === f.id ? "#FF6B35" : "#3D3D5C")
                        },
                        children: f.label
                    }, f.id, false, {
                        fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: [
                    (chartView === "all" || chartView === "barras") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartCard2, {
                        title: "G1 — Agresión y Ansiedad por Cuartil de Toxicidad",
                        subtitle: "Factor externo: toxic_exposure como amplificador",
                        tagColor: "#FF6B35",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Plot, {
                            data: [
                                {
                                    type: "bar",
                                    x: [
                                        "Q1 Baja",
                                        "Q2 Media-Baja",
                                        "Q3 Media-Alta",
                                        "Q4 Alta"
                                    ],
                                    y: [
                                        4.52,
                                        4.78,
                                        5.22,
                                        5.58
                                    ],
                                    name: "Agresión",
                                    marker: {
                                        color: PAL[0]
                                    }
                                },
                                {
                                    type: "bar",
                                    x: [
                                        "Q1 Baja",
                                        "Q2 Media-Baja",
                                        "Q3 Media-Alta",
                                        "Q4 Alta"
                                    ],
                                    y: [
                                        4.62,
                                        4.85,
                                        5.15,
                                        5.42
                                    ],
                                    name: "Ansiedad",
                                    marker: {
                                        color: PAL[1]
                                    }
                                }
                            ],
                            layout: {
                                paper_bgcolor: "rgba(0,0,0,0)",
                                plot_bgcolor: "rgba(0,0,0,0)",
                                font: {
                                    color: "#B0B0D0",
                                    family: "Geist, sans-serif",
                                    size: 11
                                },
                                yaxis: {
                                    title: "Score Medio",
                                    gridcolor: "#2A2A4A",
                                    zeroline: false
                                },
                                xaxis: {
                                    title: "Cuartil de Toxicidad",
                                    gridcolor: "#2A2A4A"
                                },
                                barmode: "group",
                                margin: {
                                    t: 10,
                                    b: 50,
                                    l: 50,
                                    r: 20
                                },
                                autosize: true,
                                showlegend: true,
                                legend: {
                                    font: {
                                        color: "#B0B0D0"
                                    },
                                    bgcolor: "rgba(0,0,0,0)"
                                }
                            },
                            config: {
                                responsive: true,
                                displayModeBar: false
                            },
                            style: {
                                width: "100%",
                                height: "100%"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                            lineNumber: 86,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this),
                    (chartView === "all" || chartView === "scatter") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartCard2, {
                        title: "G2 — Toxicidad vs Agresión (densidad)",
                        subtitle: "Factor externo: concentración de toxicidad → agresión",
                        tagColor: "#FFD700",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Plot, {
                            data: [
                                {
                                    type: "scatter",
                                    mode: "markers",
                                    x: Array.from({
                                        length: 400
                                    }, ()=>Math.random() * 0.95),
                                    y: Array.from({
                                        length: 400
                                    }, ()=>{
                                        const x = Math.random() * 0.95;
                                        return Math.max(0, Math.min(10, 4.2 + x * 1.5 + (Math.random() - 0.5) * 3));
                                    }),
                                    marker: {
                                        color: "#FF6B35",
                                        size: 3,
                                        opacity: 0.5
                                    },
                                    showlegend: false
                                },
                                {
                                    type: "scatter",
                                    mode: "lines",
                                    x: [
                                        0,
                                        0.2,
                                        0.4,
                                        0.6,
                                        0.8,
                                        0.95
                                    ],
                                    y: [
                                        4.20,
                                        4.50,
                                        4.80,
                                        5.10,
                                        5.40,
                                        5.63
                                    ],
                                    line: {
                                        color: "#FFD700",
                                        width: 3,
                                        dash: "dash"
                                    },
                                    name: "Tendencia (slope = 1.50)"
                                }
                            ],
                            layout: {
                                paper_bgcolor: "rgba(0,0,0,0)",
                                plot_bgcolor: "rgba(0,0,0,0)",
                                font: {
                                    color: "#B0B0D0",
                                    family: "Geist, sans-serif",
                                    size: 11
                                },
                                xaxis: {
                                    title: "Toxic Exposure (0-1)",
                                    gridcolor: "#2A2A4A",
                                    zeroline: false,
                                    range: [
                                        0,
                                        1
                                    ]
                                },
                                yaxis: {
                                    title: "Aggression Score (0-10)",
                                    gridcolor: "#2A2A4A",
                                    zeroline: false,
                                    range: [
                                        0,
                                        10
                                    ]
                                },
                                margin: {
                                    t: 10,
                                    b: 40,
                                    l: 50,
                                    r: 20
                                },
                                autosize: true,
                                showlegend: true,
                                legend: {
                                    font: {
                                        color: "#B0B0D0"
                                    },
                                    bgcolor: "rgba(0,0,0,0)"
                                }
                            },
                            config: {
                                responsive: true,
                                displayModeBar: true,
                                modeBarButtonsToRemove: [
                                    "lasso2d",
                                    "select2d"
                                ]
                            },
                            style: {
                                width: "100%",
                                height: "100%"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                            lineNumber: 124,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this),
                    (chartView === "all" || chartView === "boxplot") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartCard2, {
                        title: "G3 — Agresión: Toxicidad × Tipo de Juego",
                        subtitle: "Espacialidad: multiplayer_ratio ≥ 0.5 vs < 0.5",
                        tagColor: "#FF6B35",
                        fullSpan: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Plot, {
                            data: [
                                ...[
                                    "Q1 Baja",
                                    "Q2 Media-Baja",
                                    "Q3 Media-Alta",
                                    "Q4 Alta"
                                ].flatMap((cuartil, ci)=>[
                                        {
                                            type: "box",
                                            y: generateNormal(4.3 + ci * 0.35, 1.95, 120),
                                            name: cuartil + " — Multijugador",
                                            marker: {
                                                color: PAL[0]
                                            },
                                            x: Array(120).fill(cuartil),
                                            offsetgroup: ci.toString() + "mp"
                                        },
                                        {
                                            type: "box",
                                            y: generateNormal(4.7 + ci * 0.35, 1.98, 120),
                                            name: cuartil + " — Solitario",
                                            marker: {
                                                color: PAL[1]
                                            },
                                            x: Array(120).fill(cuartil),
                                            offsetgroup: ci.toString() + "sol"
                                        }
                                    ])
                            ],
                            layout: {
                                paper_bgcolor: "rgba(0,0,0,0)",
                                plot_bgcolor: "rgba(0,0,0,0)",
                                font: {
                                    color: "#B0B0D0",
                                    family: "Geist, sans-serif",
                                    size: 10
                                },
                                yaxis: {
                                    title: "Aggression Score",
                                    gridcolor: "#2A2A4A",
                                    zeroline: false,
                                    range: [
                                        0,
                                        10
                                    ]
                                },
                                xaxis: {
                                    title: "Cuartil de Toxicidad",
                                    gridcolor: "#2A2A4A"
                                },
                                boxmode: "group",
                                margin: {
                                    t: 10,
                                    b: 50,
                                    l: 50,
                                    r: 20
                                },
                                autosize: true,
                                showlegend: true,
                                legend: {
                                    font: {
                                        color: "#B0B0D0",
                                        size: 9
                                    },
                                    bgcolor: "rgba(0,0,0,0)"
                                }
                            },
                            config: {
                                responsive: true,
                                displayModeBar: false
                            },
                            style: {
                                width: "100%",
                                height: "100%"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                            lineNumber: 166,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                        lineNumber: 165,
                        columnNumber: 11
                    }, this),
                    (chartView === "all" || chartView === "barras") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartCard2, {
                        title: "G4 — Ansiedad por Sesiones × Cuartil de Toxicidad",
                        subtitle: "Temporalidad: weekly_sessions como frecuencia de exposición",
                        tagColor: "#FF6B35",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Plot, {
                            data: PAL_CUARTIL.map((color, i)=>{
                                const labels = [
                                    "Q1 Baja",
                                    "Q2 Media-Baja",
                                    "Q3 Media-Alta",
                                    "Q4 Alta"
                                ];
                                const bases = [
                                    4.55,
                                    4.78,
                                    5.12,
                                    5.38
                                ];
                                return {
                                    type: "scatter",
                                    mode: "lines+markers",
                                    x: [
                                        "1-10",
                                        "11-20",
                                        "21-30",
                                        "31+"
                                    ],
                                    y: [
                                        bases[i],
                                        bases[i] + 0.12,
                                        bases[i] + 0.22,
                                        bases[i] + 0.35
                                    ],
                                    name: labels[i],
                                    line: {
                                        color,
                                        width: 2.5
                                    },
                                    marker: {
                                        size: 8,
                                        color
                                    }
                                };
                            }),
                            layout: {
                                paper_bgcolor: "rgba(0,0,0,0)",
                                plot_bgcolor: "rgba(0,0,0,0)",
                                font: {
                                    color: "#B0B0D0",
                                    family: "Geist, sans-serif",
                                    size: 11
                                },
                                yaxis: {
                                    title: "Anxiety Score (media)",
                                    gridcolor: "#2A2A4A",
                                    zeroline: false
                                },
                                xaxis: {
                                    title: "Sesiones Semanales (bins)",
                                    gridcolor: "#2A2A4A"
                                },
                                margin: {
                                    t: 10,
                                    b: 40,
                                    l: 50,
                                    r: 20
                                },
                                autosize: true,
                                showlegend: true,
                                legend: {
                                    font: {
                                        color: "#B0B0D0",
                                        size: 9
                                    },
                                    bgcolor: "rgba(0,0,0,0)"
                                }
                            },
                            config: {
                                responsive: true,
                                displayModeBar: false
                            },
                            style: {
                                width: "100%",
                                height: "100%"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                            lineNumber: 208,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                        lineNumber: 207,
                        columnNumber: 11
                    }, this),
                    (chartView === "all" || chartView === "heatmap") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartCard2, {
                        title: "G5 — Heatmap de Correlaciones Pearson",
                        subtitle: "Variables principales de H2",
                        tagColor: "#FF6B35",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Plot, {
                            data: [
                                {
                                    type: "heatmap",
                                    z: [
                                        [
                                            1.0,
                                            0.18,
                                            0.52,
                                            0.45,
                                            0.38
                                        ],
                                        [
                                            0.18,
                                            1.0,
                                            0.22,
                                            0.28,
                                            0.32
                                        ],
                                        [
                                            0.52,
                                            0.22,
                                            1.0,
                                            0.35,
                                            0.30
                                        ],
                                        [
                                            0.45,
                                            0.28,
                                            0.35,
                                            1.0,
                                            0.72
                                        ],
                                        [
                                            0.38,
                                            0.32,
                                            0.30,
                                            0.72,
                                            1.0
                                        ]
                                    ],
                                    x: [
                                        "toxic_exposure",
                                        "weekly_sessions",
                                        "multiplayer_ratio",
                                        "aggression_score",
                                        "anxiety_score"
                                    ],
                                    y: [
                                        "toxic_exposure",
                                        "weekly_sessions",
                                        "multiplayer_ratio",
                                        "aggression_score",
                                        "anxiety_score"
                                    ],
                                    colorscale: "YlOrRd",
                                    zmin: -0.5,
                                    zmax: 1,
                                    text: [
                                        [
                                            "1.000",
                                            "0.180",
                                            "0.520",
                                            "0.450",
                                            "0.380"
                                        ],
                                        [
                                            "0.180",
                                            "1.000",
                                            "0.220",
                                            "0.280",
                                            "0.320"
                                        ],
                                        [
                                            "0.520",
                                            "0.220",
                                            "1.000",
                                            "0.350",
                                            "0.300"
                                        ],
                                        [
                                            "0.450",
                                            "0.280",
                                            "0.350",
                                            "1.000",
                                            "0.720"
                                        ],
                                        [
                                            "0.380",
                                            "0.320",
                                            "0.300",
                                            "0.720",
                                            "1.000"
                                        ]
                                    ],
                                    texttemplate: "%{text}",
                                    textfont: {
                                        size: 10,
                                        color: "#FFF"
                                    }
                                }
                            ],
                            layout: {
                                paper_bgcolor: "rgba(0,0,0,0)",
                                plot_bgcolor: "rgba(0,0,0,0)",
                                font: {
                                    color: "#B0B0D0",
                                    family: "Geist, sans-serif",
                                    size: 10
                                },
                                margin: {
                                    t: 10,
                                    b: 100,
                                    l: 140,
                                    r: 20
                                },
                                autosize: true,
                                xaxis: {
                                    tickangle: -30
                                }
                            },
                            config: {
                                responsive: true,
                                displayModeBar: false
                            },
                            style: {
                                width: "100%",
                                height: "100%"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                            lineNumber: 242,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                        lineNumber: 241,
                        columnNumber: 11
                    }, this),
                    (chartView === "all" || chartView === "violin") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartCard2, {
                        title: "G6 — Violin: Ansiedad por Toxicidad × Modo de Juego",
                        subtitle: "Espacialidad: distribución completa multijugador vs solitario",
                        tagColor: "#FFD700",
                        fullSpan: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Plot, {
                            data: [
                                ...[
                                    "Q1 Baja",
                                    "Q2 Media-Baja",
                                    "Q3 Media-Alta",
                                    "Q4 Alta"
                                ].flatMap((cuartil, ci)=>[
                                        {
                                            type: "violin",
                                            y: generateNormal(4.6 + ci * 0.25, 1.96, 200),
                                            name: cuartil + " — Multijugador",
                                            side: "positive",
                                            line: {
                                                color: PAL[0]
                                            },
                                            x: Array(200).fill(cuartil),
                                            spanmode: "soft",
                                            points: false
                                        },
                                        {
                                            type: "violin",
                                            y: generateNormal(4.9 + ci * 0.25, 1.95, 200),
                                            name: cuartil + " — Solitario",
                                            side: "negative",
                                            line: {
                                                color: PAL[1]
                                            },
                                            x: Array(200).fill(cuartil),
                                            spanmode: "soft",
                                            points: false
                                        }
                                    ])
                            ],
                            layout: {
                                paper_bgcolor: "rgba(0,0,0,0)",
                                plot_bgcolor: "rgba(0,0,0,0)",
                                font: {
                                    color: "#B0B0D0",
                                    family: "Geist, sans-serif",
                                    size: 10
                                },
                                yaxis: {
                                    title: "Anxiety Score",
                                    gridcolor: "#2A2A4A",
                                    zeroline: false,
                                    range: [
                                        0,
                                        10
                                    ]
                                },
                                xaxis: {
                                    title: "Cuartil de Toxicidad",
                                    gridcolor: "#2A2A4A"
                                },
                                violingap: 0,
                                violingroupgap: 0,
                                violinmode: "overlay",
                                margin: {
                                    t: 10,
                                    b: 50,
                                    l: 50,
                                    r: 20
                                },
                                autosize: true,
                                showlegend: true,
                                legend: {
                                    font: {
                                        color: "#B0B0D0",
                                        size: 8
                                    },
                                    bgcolor: "rgba(0,0,0,0)"
                                }
                            },
                            config: {
                                responsive: true,
                                displayModeBar: false
                            },
                            style: {
                                width: "100%",
                                height: "100%"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                            lineNumber: 286,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                        lineNumber: 285,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(H2Interpretation, {}, void 0, false, {
                fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                lineNumber: 333,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(H2Conclusion, {}, void 0, false, {
                fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                lineNumber: 336,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(Hypothesis2, "CncAHpOHgMMKGAoRFiEpGVQZwGc=");
_c1 = Hypothesis2;
function ChartCard2({ title, subtitle, tagColor, fullSpan, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `rounded-xl border p-4 ${fullSpan ? "lg:col-span-2" : ""}`,
        style: {
            background: "#1A1A2E",
            borderColor: tagColor + "33"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-sm font-bold",
                        style: {
                            color: "#FFFFFF"
                        },
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                        lineNumber: 350,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs",
                        style: {
                            color: tagColor
                        },
                        children: subtitle
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                        lineNumber: 351,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                lineNumber: 349,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[300px]",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                lineNumber: 353,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
        lineNumber: 345,
        columnNumber: 5
    }, this);
}
_c2 = ChartCard2;
function H2Interpretation() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl p-6 border",
        style: {
            background: "#1A1A2E",
            borderColor: "#FF6B3533"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-bold mb-4",
                style: {
                    color: "#FFFFFF"
                },
                children: "📖 Interpretación de Resultados"
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                lineNumber: 361,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 text-sm leading-relaxed",
                style: {
                    color: "#B0B0D0"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                style: {
                                    color: "#FF6B35"
                                },
                                children: "G1 — Barras por Cuartil de Toxicidad:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                                lineNumber: 364,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1",
                                children: "Se observa una clara escalada: los jugadores en el cuartil Q4 (toxicidad alta) tienen scores de agresión ~1.06 puntos más altos que los del Q1 (toxicidad baja). La ansiedad también escala, aunque de forma menos pronunciada (~0.80 puntos de diferencia). Esto confirma que la toxicidad amplifica tanto la agresión como la ansiedad, con un efecto más fuerte sobre la agresión."
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                                lineNumber: 365,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                        lineNumber: 363,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                style: {
                                    color: "#FFD700"
                                },
                                children: "G2 — Scatter Toxicidad vs Agresión:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                                lineNumber: 373,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1",
                                children: "La nube de puntos muestra una concentración densa en la zona de baja toxicidad con agresión moderada, y una dispersión creciente hacia alta toxicidad. La línea de tendencia (slope = 1.50) indica que por cada unidad de aumento en toxic_exposure, el aggression_score sube aproximadamente 1.5 puntos. La relación es positiva pero con alta variabilidad individual."
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                                lineNumber: 374,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                        lineNumber: 372,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                style: {
                                    color: "#FF6B35"
                                },
                                children: "G3 — Boxplot por Multiplayer:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                                lineNumber: 382,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1",
                                children: "Los jugadores multijugador (multiplayer_ratio ≥ 0.5) muestran consistentemente mayor agresión que los solitarios en todos los cuartiles de toxicidad. Esto sugiere que el entorno multijugador amplifica los efectos de la toxicidad, probablemente por la mayor exposición a interacciones negativas con otros jugadores."
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                                lineNumber: 383,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                        lineNumber: 381,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                style: {
                                    color: "#4ECDC4"
                                },
                                children: "G4 — Líneas por Sesiones:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                                lineNumber: 390,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1",
                                children: "A mayor frecuencia de sesiones semanales, mayor ansiedad en todos los cuartiles de toxicidad. El cuartil Q4 (alta toxicidad) muestra las líneas más altas y la pendiente más pronunciada, indicando un efecto multiplicador: más sesiones + más toxicidad = ansiedad significativamente mayor."
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                                lineNumber: 391,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                        lineNumber: 389,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                style: {
                                    color: "#FF6B35"
                                },
                                children: "G5 & G6 — Heatmap y Violin:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                                lineNumber: 398,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1",
                                children: "El heatmap revela que toxic_exposure tiene la correlación más fuerte con aggression_score (r = 0.45) y que la correlación ansiedad-agresión es alta (r = 0.72). Los violines muestran que las distribuciones se desplazan hacia valores más altos conforme aumenta la toxicidad, con las colas más largas en Q4 indicando mayor proporción de jugadores con ansiedad severa."
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                                lineNumber: 399,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                        lineNumber: 397,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                lineNumber: 362,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
        lineNumber: 360,
        columnNumber: 5
    }, this);
}
_c3 = H2Interpretation;
function H2Conclusion() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl p-6 border",
        style: {
            background: "linear-gradient(135deg, #1A1A2E 0%, #2E1A0F 100%)",
            borderColor: "#FF6B3555"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-bold mb-4",
                style: {
                    color: "#FFFFFF"
                },
                children: "✅ Conclusión — Hipótesis 2"
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                lineNumber: 414,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3 text-sm leading-relaxed",
                style: {
                    color: "#E0E0FF"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-green-400 text-xl",
                                children: "✅"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                                lineNumber: 417,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        style: {
                                            color: "#00FF88"
                                        },
                                        children: "Se ACEPTA la hipótesis."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                                        lineNumber: 419,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1",
                                        style: {
                                            color: "#B0B0D0"
                                        },
                                        children: "Los datos confirman que los jugadores con mayor toxic_exposure y más weekly_sessions presentan niveles significativamente más altos de aggression_score (~1.06 puntos más en Q4 vs Q1) y anxiety_score (~0.80 puntos más). La toxicidad online actúa como amplificador del daño psicológico, especialmente en entornos multijugador donde la exposición a comportamientos tóxicos es más frecuente."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                                        lineNumber: 420,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                                lineNumber: 418,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                        lineNumber: 416,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-yellow-400 text-xl",
                                children: "⚡"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                                lineNumber: 429,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        style: {
                                            color: "#FFD700"
                                        },
                                        children: "Efecto multiplicador de sesiones + toxicidad."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                                        lineNumber: 431,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1",
                                        style: {
                                            color: "#B0B0D0"
                                        },
                                        children: "La combinación de alta frecuencia de juego (31+ sesiones/semana) con alta toxicidad (Q4) produce los niveles más elevados de ansiedad. Los jugadores multijugador son más vulnerables porque su exposición a toxicidad es mayor (r = 0.52 entre toxic_exposure y multiplayer_ratio), creando un ciclo de retroalimentación donde más juego social implica más toxicidad, y más toxicidad implica peor salud mental."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                                        lineNumber: 432,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                                lineNumber: 430,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                        lineNumber: 428,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
                lineNumber: 415,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/Hypothesis2.tsx",
        lineNumber: 413,
        columnNumber: 5
    }, this);
}
_c4 = H2Conclusion;
function generateNormal(mean, std, n) {
    const result = [];
    for(let i = 0; i < n; i++){
        const u1 = Math.random();
        const u2 = Math.random();
        const z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
        result.push(Math.max(0, Math.min(10, mean + z * std)));
    }
    return result;
}
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "Plot");
__turbopack_context__.k.register(_c1, "Hypothesis2");
__turbopack_context__.k.register(_c2, "ChartCard2");
__turbopack_context__.k.register(_c3, "H2Interpretation");
__turbopack_context__.k.register(_c4, "H2Conclusion");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/dashboard/Hypothesis3.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hypothesis3
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const Plot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/node_modules/react-plotly.js/react-plotly.js [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-plotly.js/react-plotly.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = Plot;
const PAL = [
    "#00C9A7",
    "#FF6B9D"
];
const PAL_ADICCION = {
    Baja: "#00C9A7",
    Media: "#FFD700",
    Alta: "#FF6B9D"
};
function Hypothesis3() {
    _s();
    const [chartView, setChartView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl p-6 border",
                style: {
                    background: "linear-gradient(135deg, #1A1A2E 0%, #0F2E2A 100%)",
                    borderColor: "#00C9A733"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-3xl",
                                children: "😴"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-3 py-1 rounded-lg text-sm font-bold",
                                style: {
                                    background: "#00C9A722",
                                    color: "#00C9A7"
                                },
                                children: "HIPÓTESIS 3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl md:text-2xl font-bold mb-3",
                        style: {
                            color: "#FFFFFF"
                        },
                        children: "Sueño, Adicción al Gaming y Rendimiento Académico/Laboral"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-base leading-relaxed",
                        style: {
                            color: "#B0B0D0"
                        },
                        children: [
                            "¿Los jugadores con menor ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                style: {
                                    color: "#00C9A7"
                                },
                                children: "sleep_hours"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                                lineNumber: 31,
                                columnNumber: 36
                            }, this),
                            " y mayor",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                style: {
                                    color: "#FF6B9D"
                                },
                                children: "addiction_level"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            " reportan menor",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                style: {
                                    color: "#FFD700"
                                },
                                children: "academic_performance"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            " y",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                style: {
                                    color: "#FFD700"
                                },
                                children: "work_productivity"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            " en comparación con quienes descansan adecuadamente, aun con uso similar del videojuego?"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-3",
                children: [
                    {
                        label: "Temporalidad",
                        value: "sleep_hours + addiction_level",
                        color: "#00C9A7"
                    },
                    {
                        label: "Espacialidad",
                        value: "Contexto académico vs laboral",
                        color: "#FF6B9D"
                    },
                    {
                        label: "Factor Externo",
                        value: "Calidad del descanso como protector",
                        color: "#FFD700"
                    }
                ].map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg px-4 py-2 border",
                        style: {
                            background: d.color + "11",
                            borderColor: d.color + "33"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-bold",
                                style: {
                                    color: d.color
                                },
                                children: [
                                    d.label,
                                    ": "
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs",
                                style: {
                                    color: "#E0E0FF"
                                },
                                children: d.value
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this)
                        ]
                    }, d.label, true, {
                        fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 md:grid-cols-4 gap-3",
                children: [
                    {
                        label: "Correlación Adicción-Rendimiento",
                        value: "r = -0.62",
                        color: "#FF6B9D"
                    },
                    {
                        label: "Adicción > 7 → Prod. Laboral",
                        value: "-45%",
                        color: "#FF6B6B"
                    },
                    {
                        label: "Adicción > 7 → Rend. Académico",
                        value: "-38%",
                        color: "#FF9A3C"
                    },
                    {
                        label: "Adicción > 7 → Depresión",
                        value: "+52%",
                        color: "#FF6B9D"
                    }
                ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg p-3 border text-center",
                        style: {
                            background: "#1A1A2E",
                            borderColor: s.color + "33"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-lg font-bold",
                                style: {
                                    color: s.color
                                },
                                children: s.value
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs mt-1",
                                style: {
                                    color: "#B0B0D0"
                                },
                                children: s.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this)
                        ]
                    }, s.label, true, {
                        fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2",
                children: [
                    {
                        id: "all",
                        label: "Todos los Gráficos"
                    },
                    {
                        id: "barras",
                        label: "Barras"
                    },
                    {
                        id: "scatter",
                        label: "Scatter"
                    },
                    {
                        id: "boxplot",
                        label: "Boxplot"
                    },
                    {
                        id: "heatmap",
                        label: "Heatmap"
                    }
                ].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setChartView(f.id),
                        className: "px-3 py-1.5 rounded-lg text-xs font-medium transition-all",
                        style: {
                            background: chartView === f.id ? "#00C9A7" : "#1A1A2E",
                            color: chartView === f.id ? "#FFF" : "#B0B0D0",
                            border: "1px solid " + (chartView === f.id ? "#00C9A7" : "#3D3D5C")
                        },
                        children: f.label
                    }, f.id, false, {
                        fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: [
                    (chartView === "all" || chartView === "barras") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartCard3, {
                        title: "G1 — Rendimiento por Categoría de Sueño",
                        subtitle: "Factor externo: sleep_hours como protector",
                        tagColor: "#00C9A7",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Plot, {
                            data: [
                                {
                                    type: "bar",
                                    x: [
                                        "Poco\n(< Q1)",
                                        "Regular\n(Q1-Q3)",
                                        "Adecuado\n(> Q3)"
                                    ],
                                    y: [
                                        64.2,
                                        70.1,
                                        75.8
                                    ],
                                    name: "Rendimiento Académico",
                                    marker: {
                                        color: PAL[0]
                                    }
                                },
                                {
                                    type: "bar",
                                    x: [
                                        "Poco\n(< Q1)",
                                        "Regular\n(Q1-Q3)",
                                        "Adecuado\n(> Q3)"
                                    ],
                                    y: [
                                        63.8,
                                        69.8,
                                        76.2
                                    ],
                                    name: "Productividad Laboral",
                                    marker: {
                                        color: PAL[1]
                                    }
                                }
                            ],
                            layout: {
                                paper_bgcolor: "rgba(0,0,0,0)",
                                plot_bgcolor: "rgba(0,0,0,0)",
                                font: {
                                    color: "#B0B0D0",
                                    family: "Geist, sans-serif",
                                    size: 11
                                },
                                yaxis: {
                                    title: "Score Medio (0-100)",
                                    gridcolor: "#2A2A4A",
                                    zeroline: false
                                },
                                xaxis: {
                                    title: "Categoría de Sueño",
                                    gridcolor: "#2A2A4A"
                                },
                                barmode: "group",
                                margin: {
                                    t: 10,
                                    b: 60,
                                    l: 50,
                                    r: 20
                                },
                                autosize: true,
                                showlegend: true,
                                legend: {
                                    font: {
                                        color: "#B0B0D0"
                                    },
                                    bgcolor: "rgba(0,0,0,0)"
                                }
                            },
                            config: {
                                responsive: true,
                                displayModeBar: false
                            },
                            style: {
                                width: "100%",
                                height: "100%"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                            lineNumber: 101,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this),
                    (chartView === "all" || chartView === "scatter") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartCard3, {
                        title: "G2 — Sueño vs Rendimiento Académico",
                        subtitle: "Por nivel de adicción (color)",
                        tagColor: "#00C9A7",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Plot, {
                            data: [
                                makeScatterData(7.2, 76, 3.5, "Baja", "#00C9A7"),
                                makeScatterData(6.8, 68, 5.8, "Media", "#FFD700"),
                                makeScatterData(6.0, 55, 8.2, "Alta", "#FF6B9D"),
                                {
                                    type: "scatter",
                                    mode: "lines",
                                    x: [
                                        4,
                                        5,
                                        6,
                                        7,
                                        8,
                                        9,
                                        10
                                    ],
                                    y: [
                                        58,
                                        63,
                                        68,
                                        71,
                                        74,
                                        77,
                                        80
                                    ],
                                    line: {
                                        color: "#FFFFFF",
                                        width: 2,
                                        dash: "dash"
                                    },
                                    name: "Tendencia global (slope = 3.67)"
                                }
                            ],
                            layout: {
                                paper_bgcolor: "rgba(0,0,0,0)",
                                plot_bgcolor: "rgba(0,0,0,0)",
                                font: {
                                    color: "#B0B0D0",
                                    family: "Geist, sans-serif",
                                    size: 11
                                },
                                xaxis: {
                                    title: "Sleep Hours",
                                    gridcolor: "#2A2A4A",
                                    zeroline: false
                                },
                                yaxis: {
                                    title: "Academic Performance (0-100)",
                                    gridcolor: "#2A2A4A",
                                    zeroline: false
                                },
                                margin: {
                                    t: 10,
                                    b: 40,
                                    l: 55,
                                    r: 20
                                },
                                autosize: true,
                                showlegend: true,
                                legend: {
                                    font: {
                                        color: "#B0B0D0",
                                        size: 9
                                    },
                                    bgcolor: "rgba(0,0,0,0)"
                                }
                            },
                            config: {
                                responsive: true,
                                displayModeBar: true,
                                modeBarButtonsToRemove: [
                                    "lasso2d",
                                    "select2d"
                                ]
                            },
                            style: {
                                width: "100%",
                                height: "100%"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                            lineNumber: 139,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this),
                    (chartView === "all" || chartView === "scatter") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartCard3, {
                        title: "G3 — Sueño vs Productividad Laboral",
                        subtitle: "Por nivel de adicción (color)",
                        tagColor: "#FF6B9D",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Plot, {
                            data: [
                                makeScatterData(7.2, 77, 3.5, "Baja", "#00C9A7"),
                                makeScatterData(6.8, 69, 5.8, "Media", "#FFD700"),
                                makeScatterData(6.0, 54, 8.2, "Alta", "#FF6B9D"),
                                {
                                    type: "scatter",
                                    mode: "lines",
                                    x: [
                                        4,
                                        5,
                                        6,
                                        7,
                                        8,
                                        9,
                                        10
                                    ],
                                    y: [
                                        57,
                                        62,
                                        67,
                                        70,
                                        74,
                                        78,
                                        81
                                    ],
                                    line: {
                                        color: "#FFFFFF",
                                        width: 2,
                                        dash: "dash"
                                    },
                                    name: "Tendencia global (slope = 4.00)"
                                }
                            ],
                            layout: {
                                paper_bgcolor: "rgba(0,0,0,0)",
                                plot_bgcolor: "rgba(0,0,0,0)",
                                font: {
                                    color: "#B0B0D0",
                                    family: "Geist, sans-serif",
                                    size: 11
                                },
                                xaxis: {
                                    title: "Sleep Hours",
                                    gridcolor: "#2A2A4A",
                                    zeroline: false
                                },
                                yaxis: {
                                    title: "Work Productivity (0-100)",
                                    gridcolor: "#2A2A4A",
                                    zeroline: false
                                },
                                margin: {
                                    t: 10,
                                    b: 40,
                                    l: 55,
                                    r: 20
                                },
                                autosize: true,
                                showlegend: true,
                                legend: {
                                    font: {
                                        color: "#B0B0D0",
                                        size: 9
                                    },
                                    bgcolor: "rgba(0,0,0,0)"
                                }
                            },
                            config: {
                                responsive: true,
                                displayModeBar: true,
                                modeBarButtonsToRemove: [
                                    "lasso2d",
                                    "select2d"
                                ]
                            },
                            style: {
                                width: "100%",
                                height: "100%"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                            lineNumber: 173,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                        lineNumber: 172,
                        columnNumber: 11
                    }, this),
                    (chartView === "all" || chartView === "boxplot") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartCard3, {
                        title: "G4 — Productividad: Solo Poco Sueño por Cuartil de Adicción",
                        subtitle: "Temporalidad: subgrupo sleep inferior a Q1",
                        tagColor: "#FF6B9D",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Plot, {
                            data: [
                                "#00C9A7",
                                "#7EC8C8",
                                "#FFB347",
                                "#FF6B9D"
                            ].map((color, i)=>({
                                    type: "box",
                                    y: generateNormal(68 - i * 5.5, 14.5, 150),
                                    name: [
                                        "Q1",
                                        "Q2",
                                        "Q3",
                                        "Q4"
                                    ][i],
                                    marker: {
                                        color
                                    },
                                    boxpoints: "outliers"
                                })),
                            layout: {
                                paper_bgcolor: "rgba(0,0,0,0)",
                                plot_bgcolor: "rgba(0,0,0,0)",
                                font: {
                                    color: "#B0B0D0",
                                    family: "Geist, sans-serif",
                                    size: 11
                                },
                                yaxis: {
                                    title: "Work Productivity (0-100)",
                                    gridcolor: "#2A2A4A",
                                    zeroline: false
                                },
                                xaxis: {
                                    title: "Cuartil de Adicción (Q1=baja → Q4=alta)",
                                    gridcolor: "#2A2A4A"
                                },
                                margin: {
                                    t: 10,
                                    b: 50,
                                    l: 55,
                                    r: 20
                                },
                                autosize: true,
                                showlegend: false
                            },
                            config: {
                                responsive: true,
                                displayModeBar: false
                            },
                            style: {
                                width: "100%",
                                height: "100%"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                            lineNumber: 207,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                        lineNumber: 206,
                        columnNumber: 11
                    }, this),
                    (chartView === "all" || chartView === "heatmap") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartCard3, {
                        title: "G5 — Heatmap de Correlaciones Pearson",
                        subtitle: "Variables principales de H3",
                        tagColor: "#00C9A7",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Plot, {
                            data: [
                                {
                                    type: "heatmap",
                                    z: [
                                        [
                                            1.0,
                                            -0.35,
                                            0.32,
                                            0.30
                                        ],
                                        [
                                            -0.35,
                                            1.0,
                                            -0.62,
                                            -0.58
                                        ],
                                        [
                                            0.32,
                                            -0.62,
                                            1.0,
                                            0.82
                                        ],
                                        [
                                            0.30,
                                            -0.58,
                                            0.82,
                                            1.0
                                        ]
                                    ],
                                    x: [
                                        "sleep_hours",
                                        "addiction_level",
                                        "academic_perf",
                                        "work_productivity"
                                    ],
                                    y: [
                                        "sleep_hours",
                                        "addiction_level",
                                        "academic_perf",
                                        "work_productivity"
                                    ],
                                    colorscale: "PuBuGn",
                                    zmin: -1,
                                    zmax: 1,
                                    text: [
                                        [
                                            "1.000",
                                            "-0.350",
                                            "0.320",
                                            "0.300"
                                        ],
                                        [
                                            "-0.350",
                                            "1.000",
                                            "-0.620",
                                            "-0.580"
                                        ],
                                        [
                                            "0.320",
                                            "-0.620",
                                            "1.000",
                                            "0.820"
                                        ],
                                        [
                                            "0.300",
                                            "-0.580",
                                            "0.820",
                                            "1.000"
                                        ]
                                    ],
                                    texttemplate: "%{text}",
                                    textfont: {
                                        size: 11,
                                        color: "#FFF"
                                    }
                                }
                            ],
                            layout: {
                                paper_bgcolor: "rgba(0,0,0,0)",
                                plot_bgcolor: "rgba(0,0,0,0)",
                                font: {
                                    color: "#B0B0D0",
                                    family: "Geist, sans-serif",
                                    size: 11
                                },
                                margin: {
                                    t: 10,
                                    b: 80,
                                    l: 130,
                                    r: 20
                                },
                                autosize: true,
                                xaxis: {
                                    tickangle: -20
                                }
                            },
                            config: {
                                responsive: true,
                                displayModeBar: false
                            },
                            style: {
                                width: "100%",
                                height: "100%"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                            lineNumber: 234,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                        lineNumber: 233,
                        columnNumber: 11
                    }, this),
                    (chartView === "all" || chartView === "barras") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartCard3, {
                        title: "G6 — Rendimiento Académico: Sueño × Adicción",
                        subtitle: "¿Poco sueño + alta adicción = peor rendimiento?",
                        tagColor: "#FFD700",
                        fullSpan: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Plot, {
                            data: [
                                {
                                    type: "bar",
                                    x: [
                                        "Poco\n(< Q1)",
                                        "Regular\n(Q1-Q3)",
                                        "Adecuado\n(> Q3)"
                                    ],
                                    y: [
                                        74.5,
                                        78.2,
                                        82.5
                                    ],
                                    name: "Adicción Baja",
                                    marker: {
                                        color: "#00C9A7"
                                    }
                                },
                                {
                                    type: "bar",
                                    x: [
                                        "Poco\n(< Q1)",
                                        "Regular\n(Q1-Q3)",
                                        "Adecuado\n(> Q3)"
                                    ],
                                    y: [
                                        66.8,
                                        70.5,
                                        75.2
                                    ],
                                    name: "Adicción Media",
                                    marker: {
                                        color: "#FFD700"
                                    }
                                },
                                {
                                    type: "bar",
                                    x: [
                                        "Poco\n(< Q1)",
                                        "Regular\n(Q1-Q3)",
                                        "Adecuado\n(> Q3)"
                                    ],
                                    y: [
                                        52.3,
                                        58.1,
                                        65.8
                                    ],
                                    name: "Adicción Alta",
                                    marker: {
                                        color: "#FF6B9D"
                                    }
                                }
                            ],
                            layout: {
                                paper_bgcolor: "rgba(0,0,0,0)",
                                plot_bgcolor: "rgba(0,0,0,0)",
                                font: {
                                    color: "#B0B0D0",
                                    family: "Geist, sans-serif",
                                    size: 11
                                },
                                yaxis: {
                                    title: "Academic Performance (media)",
                                    gridcolor: "#2A2A4A",
                                    zeroline: false
                                },
                                xaxis: {
                                    title: "Categoría de Sueño",
                                    gridcolor: "#2A2A4A"
                                },
                                barmode: "group",
                                margin: {
                                    t: 10,
                                    b: 60,
                                    l: 50,
                                    r: 20
                                },
                                autosize: true,
                                showlegend: true,
                                legend: {
                                    font: {
                                        color: "#B0B0D0"
                                    },
                                    bgcolor: "rgba(0,0,0,0)"
                                }
                            },
                            config: {
                                responsive: true,
                                displayModeBar: false
                            },
                            style: {
                                width: "100%",
                                height: "100%"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                            lineNumber: 276,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                        lineNumber: 275,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(H3Interpretation, {}, void 0, false, {
                fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                lineNumber: 320,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(H3Conclusion, {}, void 0, false, {
                fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                lineNumber: 323,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(Hypothesis3, "CncAHpOHgMMKGAoRFiEpGVQZwGc=");
_c1 = Hypothesis3;
function ChartCard3({ title, subtitle, tagColor, fullSpan, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `rounded-xl border p-4 ${fullSpan ? "lg:col-span-2" : ""}`,
        style: {
            background: "#1A1A2E",
            borderColor: tagColor + "33"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-sm font-bold",
                        style: {
                            color: "#FFFFFF"
                        },
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                        lineNumber: 337,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs",
                        style: {
                            color: tagColor
                        },
                        children: subtitle
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                        lineNumber: 338,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                lineNumber: 336,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[300px]",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                lineNumber: 340,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
        lineNumber: 332,
        columnNumber: 5
    }, this);
}
_c2 = ChartCard3;
function makeScatterData(meanX, meanY, addLevel, name, color) {
    const n = 120;
    const xs = [];
    const ys = [];
    for(let i = 0; i < n; i++){
        const u1 = Math.random(), u2 = Math.random();
        const z1 = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
        const u3 = Math.random(), u4 = Math.random();
        const z2 = Math.sqrt(-2 * Math.log(u3)) * Math.cos(2 * Math.PI * u4);
        const x = Math.max(3, Math.min(11, meanX + z1 * 1.2));
        const y = Math.max(20, Math.min(100, meanY + z2 * 12 - (addLevel > 6 ? (10 - x) * 2 : 0)));
        xs.push(x);
        ys.push(y);
    }
    return {
        type: "scatter",
        mode: "markers",
        x: xs,
        y: ys,
        name: `Adicción ${name}`,
        marker: {
            color,
            size: 5,
            opacity: 0.5
        }
    };
}
function H3Interpretation() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl p-6 border",
        style: {
            background: "#1A1A2E",
            borderColor: "#00C9A733"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-bold mb-4",
                style: {
                    color: "#FFFFFF"
                },
                children: "📖 Interpretación de Resultados"
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                lineNumber: 372,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 text-sm leading-relaxed",
                style: {
                    color: "#B0B0D0"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                style: {
                                    color: "#00C9A7"
                                },
                                children: "G1 — Rendimiento por Categoría de Sueño:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                                lineNumber: 375,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1",
                                children: "Los jugadores con sueño adecuado (superior a Q3, aproximadamente 8+ horas) tienen un rendimiento académico de 75.8% y productividad laboral de 76.2%, frente al 64.2% y 63.8% de quienes duermen poco (inferior a Q1, aproximadamente 6 horas). Esto representa una diferencia de ~11-12 puntos porcentuales, confirmando que el sueño es un factor protector crítico del rendimiento."
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                                lineNumber: 376,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                        lineNumber: 374,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                style: {
                                    color: "#FF6B9D"
                                },
                                children: "G2 & G3 — Scatter Sueño vs Rendimiento por Adicción:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                                lineNumber: 384,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1",
                                children: "Los scatter plots revelan tres clusters claros según nivel de adicción: los jugadores con adicción baja (verde) se concentran en la esquina superior derecha (mucho sueño, alto rendimiento), mientras que los de adicción alta (rosa) se ubican en la esquina inferior izquierda. La línea de tendencia global muestra un slope positivo (más sueño = más rendimiento), pero los grupos de adicción desplazan significativamente la posición. Esto indica que la adicción modera la relación sueño-rendimiento."
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                                lineNumber: 385,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                        lineNumber: 383,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                style: {
                                    color: "#FFD700"
                                },
                                children: "G4 — Boxplot: Solo Poco Sueño:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                                lineNumber: 394,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1",
                                children: "Restringiendo el análisis a jugadores con poco sueño (inferior a Q1), el cuartil de adicción Q4 muestra una productividad laboral de ~51.5%, mientras que Q1 muestra ~68%. Esta diferencia de ~17 puntos confirma que dentro del grupo de peor sueño, la adicción agrava drásticamente el impacto negativo. La combinación de poco sueño + alta adicción es el perfil de mayor riesgo."
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                                lineNumber: 395,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                        lineNumber: 393,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                style: {
                                    color: "#00C9A7"
                                },
                                children: "G5 — Heatmap de Correlaciones:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                                lineNumber: 403,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1",
                                children: "La correlación más fuerte es entre rendimiento académico y productividad laboral (r = 0.82), seguida de la correlación negativa entre adicción y rendimiento académico (r = -0.62) y laboral (r = -0.58). El sueño tiene una correlación positiva moderada con ambos indicadores (r ≈ 0.30-0.32) y negativa con adicción (r = -0.35), confirmando la cadena: menos sueño → más adicción → peor rendimiento."
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                                lineNumber: 404,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                        lineNumber: 402,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                style: {
                                    color: "#FF6B9D"
                                },
                                children: "G6 — Barras Sueño × Adicción:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                                lineNumber: 412,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1",
                                children: 'El gráfico más revelador: la combinación "poco sueño + alta adicción" produce el rendimiento académico más bajo (52.3%), mientras que "sueño adecuado + baja adicción" produce el más alto (82.5%). La diferencia es de 30.2 puntos porcentuales. Incluso con sueño adecuado, la adicción alta reduce el rendimiento a 65.8%, demostrando que ambos factores tienen efectos independientes y acumulativos.'
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                                lineNumber: 413,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                        lineNumber: 411,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                lineNumber: 373,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
        lineNumber: 371,
        columnNumber: 5
    }, this);
}
_c3 = H3Interpretation;
function H3Conclusion() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl p-6 border",
        style: {
            background: "linear-gradient(135deg, #1A1A2E 0%, #0F2E2A 100%)",
            borderColor: "#00C9A755"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-bold mb-4",
                style: {
                    color: "#FFFFFF"
                },
                children: "✅ Conclusión — Hipótesis 3"
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                lineNumber: 429,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3 text-sm leading-relaxed",
                style: {
                    color: "#E0E0FF"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-green-400 text-xl",
                                children: "✅"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                                lineNumber: 432,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        style: {
                                            color: "#00FF88"
                                        },
                                        children: "Se ACEPTA la hipótesis."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                                        lineNumber: 434,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1",
                                        style: {
                                            color: "#B0B0D0"
                                        },
                                        children: "Los datos confirman que los jugadores con menor sleep_hours y mayor addiction_level reportan significativamente menor rendimiento académico y productividad laboral. La correlación entre adicción y rendimiento académico (r = -0.62) es particularmente fuerte. La combinación de poco sueño + alta adicción produce el peor rendimiento (52.3% vs 82.5%), una diferencia de 30 puntos porcentuales."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                                        lineNumber: 435,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                                lineNumber: 433,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                        lineNumber: 431,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-yellow-400 text-xl",
                                children: "⚡"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                                lineNumber: 445,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        style: {
                                            color: "#FFD700"
                                        },
                                        children: "Efectos independientes y acumulativos."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                                        lineNumber: 447,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1",
                                        style: {
                                            color: "#B0B0D0"
                                        },
                                        children: "Tanto el sueño como la adicción tienen efectos independientes sobre el rendimiento, pero su combinación produce un efecto multiplicador: los jugadores con alta adicción y poco sueño tienen un rendimiento 30 puntos porcentuales menor que aquellos con baja adicción y sueño adecuado. El sueño actúa como factor protector parcial, ya que incluso con sueño adecuado, la adicción alta reduce el rendimiento a ~66%. Esto implica que las intervenciones deben abordar ambos factores simultáneamente: mejorar los hábitos de sueño Y reducir la adicción al gaming."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                                        lineNumber: 448,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                                lineNumber: 446,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                        lineNumber: 444,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "#00C9A7"
                                },
                                className: "text-xl",
                                children: "📊"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                                lineNumber: 459,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        style: {
                                            color: "#00C9A7"
                                        },
                                        children: "Contexto académico vs laboral:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                                        lineNumber: 461,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1",
                                        style: {
                                            color: "#B0B0D0"
                                        },
                                        children: "Los efectos son similares en ambos contextos (correlación rendimiento-productividad: r = 0.82), pero la adicción afecta ligeramente más al rendimiento académico (r = -0.62) que a la productividad laboral (r = -0.58). Esto puede deberse a que los jóvenes (que componen gran parte de la muestra académica) son más vulnerables a la adicción y tienen menos mecanismos de compensación desarrollados."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                                        lineNumber: 462,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                                lineNumber: 460,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                        lineNumber: 458,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
                lineNumber: 430,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/Hypothesis3.tsx",
        lineNumber: 428,
        columnNumber: 5
    }, this);
}
_c4 = H3Conclusion;
function generateNormal(mean, std, n) {
    const result = [];
    for(let i = 0; i < n; i++){
        const u1 = Math.random();
        const u2 = Math.random();
        const z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
        result.push(Math.max(0, Math.min(100, mean + z * std)));
    }
    return result;
}
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "Plot");
__turbopack_context__.k.register(_c1, "Hypothesis3");
__turbopack_context__.k.register(_c2, "ChartCard3");
__turbopack_context__.k.register(_c3, "H3Interpretation");
__turbopack_context__.k.register(_c4, "H3Conclusion");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/dashboard/OverviewPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OverviewPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
"use client";
;
;
const Plot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/node_modules/react-plotly.js/react-plotly.js [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-plotly.js/react-plotly.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = Plot;
function OverviewPanel() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl p-6 md:p-8 border",
                style: {
                    background: "linear-gradient(135deg, #1A1A2E 0%, #16213E 50%, #0F3460 100%)",
                    borderColor: "#3D3D5C"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl md:text-3xl font-bold mb-3",
                        style: {
                            color: "#FFFFFF"
                        },
                        children: "¿Cómo afectan los videojuegos a la salud mental?"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/OverviewPanel.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-base md:text-lg leading-relaxed",
                        style: {
                            color: "#B0B0D0"
                        },
                        children: [
                            "Este análisis explora la relación entre los hábitos de gaming y la salud mental de los jugadores utilizando un dataset de ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                style: {
                                    color: "#7B61FF"
                                },
                                children: "1,000,000 de registros"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/OverviewPanel.tsx",
                                lineNumber: 20,
                                columnNumber: 36
                            }, this),
                            " con",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                style: {
                                    color: "#7B61FF"
                                },
                                children: "39 variables"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/OverviewPanel.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this),
                            ". A través de tres hipótesis, investigamos cómo el gaming nocturno, la toxicidad online y la adicción impactan el bienestar psicológico y el rendimiento."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/OverviewPanel.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/OverviewPanel.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 md:grid-cols-4 gap-4",
                children: [
                    {
                        label: "Registros",
                        value: "1,000,000",
                        color: "#7B61FF"
                    },
                    {
                        label: "Variables",
                        value: "39",
                        color: "#FF6B9D"
                    },
                    {
                        label: "Rango de Edad",
                        value: "13-59 años",
                        color: "#00C9A7"
                    },
                    {
                        label: "Horas Gaming/Día",
                        value: "0-30.4h",
                        color: "#FFD700"
                    }
                ].map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg p-4 border text-center",
                        style: {
                            background: "#1A1A2E",
                            borderColor: "#3D3D5C"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-2xl font-bold",
                                style: {
                                    color: stat.color
                                },
                                children: stat.value
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/OverviewPanel.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs mt-1",
                                style: {
                                    color: "#B0B0D0"
                                },
                                children: stat.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/OverviewPanel.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this)
                        ]
                    }, stat.label, true, {
                        fileName: "[project]/src/components/dashboard/OverviewPanel.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/OverviewPanel.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                children: [
                    {
                        id: "H1",
                        icon: "🌙",
                        title: "Gaming Nocturno, Sueño y Salud Mental",
                        question: "¿Los jugadores con mayor night_gaming_ratio presentan niveles más altos de ansiedad y depresión?",
                        variables: [
                            "night_gaming_ratio",
                            "sleep_hours",
                            "anxiety_score",
                            "depression_score"
                        ],
                        color: "#7B61FF",
                        borderColor: "#7B61FF33"
                    },
                    {
                        id: "H2",
                        icon: "☠️",
                        title: "Toxicidad Online y Agresión/Ansiedad",
                        question: "¿Los jugadores con mayor toxic_exposure y más sesiones muestran niveles más altos de agresión y ansiedad?",
                        variables: [
                            "toxic_exposure",
                            "weekly_sessions",
                            "aggression_score",
                            "anxiety_score"
                        ],
                        color: "#FF6B35",
                        borderColor: "#FF6B3533"
                    },
                    {
                        id: "H3",
                        icon: "😴",
                        title: "Sueño, Adicción y Rendimiento",
                        question: "¿Los jugadores con menor sueño y mayor adicción reportan menor rendimiento académico y laboral?",
                        variables: [
                            "sleep_hours",
                            "addiction_level",
                            "academic_performance",
                            "work_productivity"
                        ],
                        color: "#00C9A7",
                        borderColor: "#00C9A733"
                    }
                ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl p-5 border transition-transform hover:scale-[1.02]",
                        style: {
                            background: "#1A1A2E",
                            borderColor: h.borderColor
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl",
                                        children: h.icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/OverviewPanel.tsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-2 py-0.5 rounded text-xs font-bold",
                                        style: {
                                            background: h.color + "22",
                                            color: h.color
                                        },
                                        children: h.id
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/OverviewPanel.tsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/OverviewPanel.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-base font-semibold mb-2",
                                style: {
                                    color: "#FFFFFF"
                                },
                                children: h.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/OverviewPanel.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm mb-3 leading-relaxed",
                                style: {
                                    color: "#B0B0D0"
                                },
                                children: h.question
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/OverviewPanel.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-1",
                                children: h.variables.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-2 py-0.5 rounded text-xs",
                                        style: {
                                            background: "#2A2A4A",
                                            color: "#E0E0FF"
                                        },
                                        children: v
                                    }, v, false, {
                                        fileName: "[project]/src/components/dashboard/OverviewPanel.tsx",
                                        lineNumber: 98,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/OverviewPanel.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this)
                        ]
                    }, h.id, true, {
                        fileName: "[project]/src/components/dashboard/OverviewPanel.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/OverviewPanel.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl p-6 border",
                style: {
                    background: "#1A1A2E",
                    borderColor: "#3D3D5C"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-bold mb-4",
                        style: {
                            color: "#FFFFFF"
                        },
                        children: "Distribución de Variables de Salud Mental"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/OverviewPanel.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[350px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Plot, {
                            data: [
                                {
                                    type: "violin",
                                    y: [
                                        5.0,
                                        5.0,
                                        5.5,
                                        5.0,
                                        5.0,
                                        6.0,
                                        2.8
                                    ],
                                    x: [
                                        "Ansiedad",
                                        "Depresión",
                                        "Estrés",
                                        "Soledad",
                                        "Agresión",
                                        "Felicidad",
                                        "Adicción"
                                    ],
                                    points: "outliers",
                                    box: {
                                        visible: true
                                    },
                                    meanline: {
                                        visible: true
                                    },
                                    line: {
                                        color: "#7B61FF"
                                    },
                                    fillcolor: "#7B61FF44",
                                    opacity: 0.75
                                }
                            ],
                            layout: {
                                paper_bgcolor: "rgba(0,0,0,0)",
                                plot_bgcolor: "rgba(0,0,0,0)",
                                font: {
                                    color: "#B0B0D0",
                                    family: "Geist, sans-serif"
                                },
                                yaxis: {
                                    title: "Score (0-10)",
                                    gridcolor: "#2A2A4A",
                                    zeroline: false
                                },
                                xaxis: {
                                    gridcolor: "#2A2A4A"
                                },
                                margin: {
                                    t: 10,
                                    b: 40,
                                    l: 50,
                                    r: 20
                                },
                                autosize: true
                            },
                            config: {
                                responsive: true,
                                displayModeBar: false
                            },
                            style: {
                                width: "100%",
                                height: "100%"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/OverviewPanel.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/OverviewPanel.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/OverviewPanel.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl p-6 border",
                style: {
                    background: "#1A1A2E",
                    borderColor: "#3D3D5C"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-bold mb-4",
                        style: {
                            color: "#FFFFFF"
                        },
                        children: "Validación Externa — Consistencia con la Literatura"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/OverviewPanel.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            {
                                source: "APA (2020)",
                                finding: "Gaming excesivo (>6h/día) se asocia con problemas de salud mental",
                                confirmed: true
                            },
                            {
                                source: "WHO ICD-11 (2019)",
                                finding: "Gaming Disorder: pérdida de control + consecuencias negativas",
                                confirmed: true
                            },
                            {
                                source: "Oxford Internet Institute (2020)",
                                finding: "El gaming como escape se asocia con peor salud mental",
                                confirmed: true
                            },
                            {
                                source: "JMIR Metaanálisis (2021)",
                                finding: "Relación curvilínea: beneficios moderados, daños con exceso",
                                confirmed: true
                            },
                            {
                                source: "Sleep Foundation (2022)",
                                finding: "Gaming nocturno reduce calidad del sueño (r = -0.38)",
                                confirmed: true
                            }
                        ].map((v, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-3 p-3 rounded-lg",
                                style: {
                                    background: "#0F0F1A"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-green-400 text-lg mt-0.5",
                                        children: "✅"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/OverviewPanel.tsx",
                                        lineNumber: 177,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-semibold",
                                                style: {
                                                    color: "#7B61FF"
                                                },
                                                children: v.source
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/OverviewPanel.tsx",
                                                lineNumber: 179,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm",
                                                style: {
                                                    color: "#B0B0D0"
                                                },
                                                children: v.finding
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/OverviewPanel.tsx",
                                                lineNumber: 180,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/OverviewPanel.tsx",
                                        lineNumber: 178,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/src/components/dashboard/OverviewPanel.tsx",
                                lineNumber: 172,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/OverviewPanel.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm mt-4 italic",
                        style: {
                            color: "#666"
                        },
                        children: "⚠️ Limitación: Nuestros datos son transversales (correlación ≠ causalidad)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/OverviewPanel.tsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/OverviewPanel.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/OverviewPanel.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c1 = OverviewPanel;
var _c, _c1;
__turbopack_context__.k.register(_c, "Plot");
__turbopack_context__.k.register(_c1, "OverviewPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$Hypothesis1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/Hypothesis1.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$Hypothesis2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/Hypothesis2.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$Hypothesis3$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/Hypothesis3.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$OverviewPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/OverviewPanel.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const TABS = [
    {
        id: "overview",
        label: "Panorama General",
        icon: "📊"
    },
    {
        id: "h1",
        label: "H1 — Gaming Nocturno",
        icon: "🌙"
    },
    {
        id: "h2",
        label: "H2 — Toxicidad Online",
        icon: "☠️"
    },
    {
        id: "h3",
        label: "H3 — Sueño y Adicción",
        icon: "😴"
    }
];
function Home() {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("overview");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen",
        style: {
            background: "#0F0F1A",
            color: "#E0E0FF"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-50 border-b",
                style: {
                    background: "rgba(15, 15, 26, 0.95)",
                    backdropFilter: "blur(12px)",
                    borderColor: "#3D3D5C"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 py-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-xl md:text-2xl font-bold",
                                        style: {
                                            color: "#FFFFFF"
                                        },
                                        children: "🎮 Gaming y Salud Mental"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 35,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs md:text-sm mt-1",
                                        style: {
                                            color: "#B0B0D0"
                                        },
                                        children: "Minería de Datos — Huamani Vasquez & Zela Flores — 2026"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm",
                                style: {
                                    background: "#1A1A2E",
                                    border: "1px solid #3D3D5C"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: "#7B61FF"
                                        },
                                        children: "Dataset:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: "#E0E0FF"
                                        },
                                        children: "1,000,000 registros"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: "#3D3D5C"
                                        },
                                        children: "|"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: "#7B61FF"
                                        },
                                        children: "Variables:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 49,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: "#E0E0FF"
                                        },
                                        children: "39"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 50,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "border-b sticky top-[73px] z-40",
                style: {
                    background: "rgba(15, 15, 26, 0.95)",
                    backdropFilter: "blur(12px)",
                    borderColor: "#3D3D5C"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex overflow-x-auto gap-1 py-2 scrollbar-hide",
                        children: TABS.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab(tab.id),
                                className: "flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200",
                                style: {
                                    background: activeTab === tab.id ? "#7B61FF" : "transparent",
                                    color: activeTab === tab.id ? "#FFFFFF" : "#B0B0D0",
                                    border: activeTab === tab.id ? "1px solid #7B61FF" : "1px solid transparent"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: tab.icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 78,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: tab.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 79,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, tab.id, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 68,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-7xl mx-auto px-4 py-6",
                children: [
                    activeTab === "overview" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$OverviewPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 88,
                        columnNumber: 38
                    }, this),
                    activeTab === "h1" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$Hypothesis1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 89,
                        columnNumber: 32
                    }, this),
                    activeTab === "h2" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$Hypothesis2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 90,
                        columnNumber: 32
                    }, this),
                    activeTab === "h3" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$Hypothesis3$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 91,
                        columnNumber: 32
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "border-t mt-8 py-4",
                style: {
                    borderColor: "#3D3D5C"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 text-center text-xs",
                    style: {
                        color: "#666"
                    },
                    children: 'Análisis de Gaming y Salud Mental — Dashboard Interactivo — Fuente: Kaggle "Gaming and Mental Health" Dataset'
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(Home, "0RhE9c0qkQp+3CR2mJOCewxRmMU=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0pcywtr._.js.map