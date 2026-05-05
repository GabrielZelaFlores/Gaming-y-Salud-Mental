"use client";

import dynamic from "next/dynamic";

const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

export default function OverviewPanel() {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div
        className="rounded-xl p-6 md:p-8 border"
        style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #16213E 50%, #0F3460 100%)", borderColor: "#3D3D5C" }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: "#FFFFFF" }}>
          ¿Cómo afectan los videojuegos a la salud mental?
        </h2>
        <p className="text-base md:text-lg leading-relaxed" style={{ color: "#B0B0D0" }}>
          Este análisis explora la relación entre los hábitos de gaming y la salud mental de los jugadores
          utilizando un dataset de <strong style={{ color: "#7B61FF" }}>1,000,000 de registros</strong> con{" "}
          <strong style={{ color: "#7B61FF" }}>39 variables</strong>. A través de tres hipótesis, investigamos
          cómo el gaming nocturno, la toxicidad online y la adicción impactan el bienestar psicológico y el rendimiento.
        </p>
      </div>

      {/* Key Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Registros", value: "1,000,000", color: "#7B61FF" },
          { label: "Variables", value: "39", color: "#FF6B9D" },
          { label: "Rango de Edad", value: "13-59 años", color: "#00C9A7" },
          { label: "Horas Gaming/Día", value: "0-30.4h", color: "#FFD700" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg p-4 border text-center"
            style={{ background: "#1A1A2E", borderColor: "#3D3D5C" }}
          >
            <div className="text-2xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
            <div className="text-xs mt-1" style={{ color: "#B0B0D0" }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Hypothesis Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            id: "H1",
            icon: "🌙",
            title: "Gaming Nocturno, Sueño y Salud Mental",
            question: "¿Los jugadores con mayor night_gaming_ratio presentan niveles más altos de ansiedad y depresión?",
            variables: ["night_gaming_ratio", "sleep_hours", "anxiety_score", "depression_score"],
            color: "#7B61FF",
            borderColor: "#7B61FF33",
          },
          {
            id: "H2",
            icon: "☠️",
            title: "Toxicidad Online y Agresión/Ansiedad",
            question: "¿Los jugadores con mayor toxic_exposure y más sesiones muestran niveles más altos de agresión y ansiedad?",
            variables: ["toxic_exposure", "weekly_sessions", "aggression_score", "anxiety_score"],
            color: "#FF6B35",
            borderColor: "#FF6B3533",
          },
          {
            id: "H3",
            icon: "😴",
            title: "Sueño, Adicción y Rendimiento",
            question: "¿Los jugadores con menor sueño y mayor adicción reportan menor rendimiento académico y laboral?",
            variables: ["sleep_hours", "addiction_level", "academic_performance", "work_productivity"],
            color: "#00C9A7",
            borderColor: "#00C9A733",
          },
        ].map((h) => (
          <div
            key={h.id}
            className="rounded-xl p-5 border transition-transform hover:scale-[1.02]"
            style={{ background: "#1A1A2E", borderColor: h.borderColor }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">{h.icon}</span>
              <span
                className="px-2 py-0.5 rounded text-xs font-bold"
                style={{ background: h.color + "22", color: h.color }}
              >
                {h.id}
              </span>
            </div>
            <h3 className="text-base font-semibold mb-2" style={{ color: "#FFFFFF" }}>
              {h.title}
            </h3>
            <p className="text-sm mb-3 leading-relaxed" style={{ color: "#B0B0D0" }}>
              {h.question}
            </p>
            <div className="flex flex-wrap gap-1">
              {h.variables.map((v) => (
                <span
                  key={v}
                  className="px-2 py-0.5 rounded text-xs"
                  style={{ background: "#2A2A4A", color: "#E0E0FF" }}
                >
                  {v}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Mental Health Distribution */}
      <div
        className="rounded-xl p-6 border"
        style={{ background: "#1A1A2E", borderColor: "#3D3D5C" }}
      >
        <h3 className="text-lg font-bold mb-4" style={{ color: "#FFFFFF" }}>
          Distribución de Variables de Salud Mental
        </h3>
        <div className="h-[350px]">
          <Plot
            data={[
              {
                type: "violin",
                y: [5.0, 5.0, 5.5, 5.0, 5.0, 6.0, 2.8],
                x: [
                  "Ansiedad", "Depresión", "Estrés", "Soledad",
                  "Agresión", "Felicidad", "Adicción"
                ],
                points: "outliers",
                box: { visible: true },
                meanline: { visible: true },
                line: { color: "#7B61FF" },
                fillcolor: "#7B61FF44",
                opacity: 0.75,
              } as any,
            ]}
            layout={{
              paper_bgcolor: "rgba(0,0,0,0)",
              plot_bgcolor: "rgba(0,0,0,0)",
              font: { color: "#B0B0D0", family: "Geist, sans-serif" },
              yaxis: {
                title: "Score (0-10)",
                gridcolor: "#2A2A4A",
                zeroline: false,
              },
              xaxis: { gridcolor: "#2A2A4A" },
              margin: { t: 10, b: 40, l: 50, r: 20 },
              autosize: true,
            }}
            config={{ responsive: true, displayModeBar: false }}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>

      {/* External Validation Summary */}
      <div
        className="rounded-xl p-6 border"
        style={{ background: "#1A1A2E", borderColor: "#3D3D5C" }}
      >
        <h3 className="text-lg font-bold mb-4" style={{ color: "#FFFFFF" }}>
          Validación Externa — Consistencia con la Literatura
        </h3>
        <div className="space-y-3">
          {[
            { source: "APA (2020)", finding: "Gaming excesivo (>6h/día) se asocia con problemas de salud mental", confirmed: true },
            { source: "WHO ICD-11 (2019)", finding: "Gaming Disorder: pérdida de control + consecuencias negativas", confirmed: true },
            { source: "Oxford Internet Institute (2020)", finding: "El gaming como escape se asocia con peor salud mental", confirmed: true },
            { source: "JMIR Metaanálisis (2021)", finding: "Relación curvilínea: beneficios moderados, daños con exceso", confirmed: true },
            { source: "Sleep Foundation (2022)", finding: "Gaming nocturno reduce calidad del sueño (r = -0.38)", confirmed: true },
          ].map((v, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-3 rounded-lg"
              style={{ background: "#0F0F1A" }}
            >
              <span className="text-green-400 text-lg mt-0.5">✅</span>
              <div>
                <span className="text-sm font-semibold" style={{ color: "#7B61FF" }}>{v.source}</span>
                <p className="text-sm" style={{ color: "#B0B0D0" }}>{v.finding}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm mt-4 italic" style={{ color: "#666" }}>
          ⚠️ Limitación: Nuestros datos son transversales (correlación ≠ causalidad)
        </p>
      </div>
    </div>
  );
}
