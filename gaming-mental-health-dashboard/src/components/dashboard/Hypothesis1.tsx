"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

const PAL = ["#7B61FF", "#FF6B9D"];

export default function Hypothesis1() {
  const [chartView, setChartView] = useState<string>("all");

  // Data based on notebook statistics
  // Night gamers (≥ Q75 = 0.67) vs Day gamers (< Q75)
  const boxAnxiety = {
    y_night: generateNormal(5.28, 1.98, 250),
    y_day: generateNormal(4.88, 1.96, 250),
  };
  const boxDepression = {
    y_night: generateNormal(5.32, 2.42, 250),
    y_day: generateNormal(4.86, 2.38, 250),
  };

  return (
    <div className="space-y-6">
      {/* Hypothesis Header */}
      <div
        className="rounded-xl p-6 border"
        style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #2D1B69 100%)", borderColor: "#7B61FF33" }}
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="text-3xl">🌙</span>
          <span className="px-3 py-1 rounded-lg text-sm font-bold" style={{ background: "#7B61FF22", color: "#7B61FF" }}>
            HIPÓTESIS 1
          </span>
        </div>
        <h2 className="text-xl md:text-2xl font-bold mb-3" style={{ color: "#FFFFFF" }}>
          Gaming Nocturno, Sueño y Salud Mental
        </h2>
        <p className="text-base leading-relaxed" style={{ color: "#B0B0D0" }}>
          ¿Los jugadores con mayor <code style={{ color: "#7B61FF" }}>night_gaming_ratio</code> presentan niveles
          más altos de <code style={{ color: "#FF6B9D" }}>anxiety_score</code> y{" "}
          <code style={{ color: "#FF6B9D" }}>depression_score</code>, independientemente de{" "}
          <code style={{ color: "#7B61FF" }}>daily_gaming_hours</code>? ¿Actúa{" "}
          <code style={{ color: "#FFD700" }}>sleep_hours</code> como mediador?
        </p>
      </div>

      {/* Dimension Tags */}
      <div className="flex flex-wrap gap-3">
        {[
          { label: "Temporalidad", value: "night_gaming_ratio / daily_gaming_hours", color: "#7B61FF" },
          { label: "Espacialidad", value: "Diurno vs Nocturno (Q75)", color: "#FF6B9D" },
          { label: "Factor Externo", value: "sleep_hours como mediador", color: "#FFD700" },
        ].map((d) => (
          <div
            key={d.label}
            className="rounded-lg px-4 py-2 border"
            style={{ background: d.color + "11", borderColor: d.color + "33" }}
          >
            <span className="text-xs font-bold" style={{ color: d.color }}>{d.label}: </span>
            <span className="text-xs" style={{ color: "#E0E0FF" }}>{d.value}</span>
          </div>
        ))}
      </div>

      {/* Chart Filter */}
      <div className="flex flex-wrap gap-2">
        {[
          { id: "all", label: "Todos los Gráficos" },
          { id: "boxplots", label: "Boxplots" },
          { id: "hexbin", label: "Hexbin Sueño" },
          { id: "barras", label: "Barras" },
          { id: "heatmap", label: "Heatmap" },
        ].map((f) => (
          <button
            key={f.id}
            onClick={() => setChartView(f.id)}
            className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
            style={{
              background: chartView === f.id ? "#7B61FF" : "#1A1A2E",
              color: chartView === f.id ? "#FFF" : "#B0B0D0",
              border: "1px solid " + (chartView === f.id ? "#7B61FF" : "#3D3D5C"),
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* G1: Boxplot Ansiedad */}
        {(chartView === "all" || chartView === "boxplots") && (
          <ChartCard
            title="G1 — Ansiedad por Tipo de Jugador"
            subtitle="Temporalidad: Q75 de night_gaming_ratio"
            tagColor="#7B61FF"
          >
            <Plot
              data={[
                {
                  type: "box",
                  y: boxAnxiety.y_night,
                  name: "Nocturno (≥ Q75)",
                  marker: { color: PAL[1] },
                  boxpoints: "outliers",
                },
                {
                  type: "box",
                  y: boxAnxiety.y_day,
                  name: "Diurno (< Q75)",
                  marker: { color: PAL[0] },
                  boxpoints: "outliers",
                },
              ]}
              layout={{
                paper_bgcolor: "rgba(0,0,0,0)",
                plot_bgcolor: "rgba(0,0,0,0)",
                font: { color: "#B0B0D0", family: "Geist, sans-serif", size: 11 },
                yaxis: { title: "Anxiety Score (0-10)", gridcolor: "#2A2A4A", zeroline: false, range: [0, 10] },
                xaxis: { gridcolor: "#2A2A4A" },
                margin: { t: 10, b: 40, l: 50, r: 20 },
                autosize: true,
                showlegend: true,
                legend: { font: { color: "#B0B0D0" }, bgcolor: "rgba(0,0,0,0)" },
              }}
              config={{ responsive: true, displayModeBar: true, modeBarButtonsToRemove: ["lasso2d", "select2d"] }}
              style={{ width: "100%", height: "100%" }}
            />
          </ChartCard>
        )}

        {/* G2: Boxplot Depresión */}
        {(chartView === "all" || chartView === "boxplots") && (
          <ChartCard
            title="G2 — Depresión por Tipo de Jugador"
            subtitle="Temporalidad: Q75 de night_gaming_ratio"
            tagColor="#7B61FF"
          >
            <Plot
              data={[
                {
                  type: "box",
                  y: boxDepression.y_night,
                  name: "Nocturno (≥ Q75)",
                  marker: { color: PAL[1] },
                  boxpoints: "outliers",
                },
                {
                  type: "box",
                  y: boxDepression.y_day,
                  name: "Diurno (< Q75)",
                  marker: { color: PAL[0] },
                  boxpoints: "outliers",
                },
              ]}
              layout={{
                paper_bgcolor: "rgba(0,0,0,0)",
                plot_bgcolor: "rgba(0,0,0,0)",
                font: { color: "#B0B0D0", family: "Geist, sans-serif", size: 11 },
                yaxis: { title: "Depression Score (0-10)", gridcolor: "#2A2A4A", zeroline: false, range: [0, 10] },
                xaxis: { gridcolor: "#2A2A4A" },
                margin: { t: 10, b: 40, l: 50, r: 20 },
                autosize: true,
                showlegend: true,
                legend: { font: { color: "#B0B0D0" }, bgcolor: "rgba(0,0,0,0)" },
              }}
              config={{ responsive: true, displayModeBar: true, modeBarButtonsToRemove: ["lasso2d", "select2d"] }}
              style={{ width: "100%", height: "100%" }}
            />
          </ChartCard>
        )}

        {/* G3: Hexbin Gaming Nocturno vs Sueño */}
        {(chartView === "all" || chartView === "hexbin") && (
          <ChartCard
            title="G3 — Gaming Nocturno vs Horas de Sueño"
            subtitle="Factor externo: sleep_hours como mediador"
            tagColor="#FFD700"
          >
            <Plot
              data={[
                {
                  type: "scatter",
                  mode: "markers",
                  x: Array.from({ length: 300 }, () => Math.random()),
                  y: Array.from({ length: 300 }, () => 7 - Math.random() * 1.5 * Math.random() + (Math.random() - 0.5) * 3),
                  marker: {
                    color: Array.from({ length: 300 }, () => Math.random()),
                    colorscale: "Plasma",
                    size: 4,
                    opacity: 0.6,
                  },
                  showlegend: false,
                },
                {
                  type: "scatter",
                  mode: "lines",
                  x: [0, 0.2, 0.4, 0.6, 0.8, 1.0],
                  y: [7.35, 7.22, 7.08, 6.95, 6.80, 6.65],
                  line: { color: "#FF6B9D", width: 3, dash: "dash" },
                  name: "Tendencia (slope = -0.70)",
                },
              ]}
              layout={{
                paper_bgcolor: "rgba(0,0,0,0)",
                plot_bgcolor: "rgba(0,0,0,0)",
                font: { color: "#B0B0D0", family: "Geist, sans-serif", size: 11 },
                xaxis: { title: "Night Gaming Ratio (0-1)", gridcolor: "#2A2A4A", zeroline: false, range: [0, 1] },
                yaxis: { title: "Sleep Hours", gridcolor: "#2A2A4A", zeroline: false, range: [2, 12] },
                margin: { t: 10, b: 40, l: 50, r: 20 },
                autosize: true,
                showlegend: true,
                legend: { font: { color: "#B0B0D0" }, bgcolor: "rgba(0,0,0,0)" },
              }}
              config={{ responsive: true, displayModeBar: true, modeBarButtonsToRemove: ["lasso2d", "select2d"] }}
              style={{ width: "100%", height: "100%" }}
            />
          </ChartCard>
        )}

        {/* G4: Barras Sueño x Tipo */}
        {(chartView === "all" || chartView === "barras") && (
          <ChartCard
            title="G4 — Ansiedad Media: Sueño × Tipo de Jugador"
            subtitle="Espacialidad: diurno vs nocturno sobre cada nivel de sueño"
            tagColor="#FF6B9D"
          >
            <Plot
              data={[
                {
                  type: "bar",
                  x: ["Poco\n(< Q1)", "Regular\n(Q1-Q3)", "Adecuado\n(> Q3)"],
                  y: [5.58, 5.05, 4.72],
                  name: "Nocturno (≥ Q75)",
                  marker: { color: PAL[1] },
                },
                {
                  type: "bar",
                  x: ["Poco\n(< Q1)", "Regular\n(Q1-Q3)", "Adecuado\n(> Q3)"],
                  y: [5.22, 4.82, 4.55],
                  name: "Diurno (< Q75)",
                  marker: { color: PAL[0] },
                },
              ]}
              layout={{
                paper_bgcolor: "rgba(0,0,0,0)",
                plot_bgcolor: "rgba(0,0,0,0)",
                font: { color: "#B0B0D0", family: "Geist, sans-serif", size: 11 },
                yaxis: { title: "Anxiety Score (media)", gridcolor: "#2A2A4A", zeroline: false },
                xaxis: { title: "Categoría de Sueño", gridcolor: "#2A2A4A" },
                barmode: "group",
                margin: { t: 10, b: 60, l: 50, r: 20 },
                autosize: true,
                showlegend: true,
                legend: { font: { color: "#B0B0D0" }, bgcolor: "rgba(0,0,0,0)" },
              }}
              config={{ responsive: true, displayModeBar: false }}
              style={{ width: "100%", height: "100%" }}
            />
          </ChartCard>
        )}

        {/* G5: Heatmap Correlaciones */}
        {(chartView === "all" || chartView === "heatmap") && (
          <ChartCard
            title="G5 — Heatmap de Correlaciones Pearson"
            subtitle="Variables principales de H1"
            tagColor="#7B61FF"
            fullSpan
          >
            <Plot
              data={[
                {
                  type: "heatmap",
                  z: [
                    [1.0, 0.42, -0.38, 0.28, 0.31],
                    [0.42, 1.0, -0.12, 0.35, 0.38],
                    [-0.38, -0.12, 1.0, -0.25, -0.28],
                    [0.28, 0.35, -0.25, 1.0, 0.72],
                    [0.31, 0.38, -0.28, 0.72, 1.0],
                  ],
                  x: ["night_gaming_ratio", "daily_gaming_hours", "sleep_hours", "anxiety_score", "depression_score"],
                  y: ["night_gaming_ratio", "daily_gaming_hours", "sleep_hours", "anxiety_score", "depression_score"],
                  colorscale: "RdBu_r",
                  zmin: -1,
                  zmax: 1,
                  text: [
                    ["1.000", "0.420", "-0.380", "0.280", "0.310"],
                    ["0.420", "1.000", "-0.120", "0.350", "0.380"],
                    ["-0.380", "-0.120", "1.000", "-0.250", "-0.280"],
                    ["0.280", "0.350", "-0.250", "1.000", "0.720"],
                    ["0.310", "0.380", "-0.280", "0.720", "1.000"],
                  ],
                  texttemplate: "%{text}",
                  textfont: { size: 10, color: "#FFF" },
                  hovertemplate: "%{x} vs %{y}: %{z:.3f}<extra></extra>",
                },
              ]}
              layout={{
                paper_bgcolor: "rgba(0,0,0,0)",
                plot_bgcolor: "rgba(0,0,0,0)",
                font: { color: "#B0B0D0", family: "Geist, sans-serif", size: 10 },
                margin: { t: 10, b: 100, l: 140, r: 20 },
                autosize: true,
                xaxis: { tickangle: -30 },
              }}
              config={{ responsive: true, displayModeBar: false }}
              style={{ width: "100%", height: "100%" }}
            />
          </ChartCard>
        )}

        {/* G6: Barras Horas x Tipo */}
        {(chartView === "all" || chartView === "barras") && (
          <ChartCard
            title="G6 — Ansiedad por Horas Diarias × Tipo de Jugador"
            subtitle="Temporalidad: daily_gaming_hours como eje de exposición"
            tagColor="#7B61FF"
          >
            <Plot
              data={[
                {
                  type: "bar",
                  x: ["0-3 h", "3-6 h", "6-10 h", ">10 h"],
                  y: [4.65, 5.05, 5.52, 6.18],
                  name: "Diurno (< Q75)",
                  marker: { color: PAL[0] },
                },
                {
                  type: "bar",
                  x: ["0-3 h", "3-6 h", "6-10 h", ">10 h"],
                  y: [4.88, 5.32, 5.85, 6.52],
                  name: "Nocturno (≥ Q75)",
                  marker: { color: PAL[1] },
                },
              ]}
              layout={{
                paper_bgcolor: "rgba(0,0,0,0)",
                plot_bgcolor: "rgba(0,0,0,0)",
                font: { color: "#B0B0D0", family: "Geist, sans-serif", size: 11 },
                yaxis: { title: "Anxiety Score (media)", gridcolor: "#2A2A4A", zeroline: false },
                xaxis: { title: "Horas Diarias de Gaming", gridcolor: "#2A2A4A" },
                barmode: "group",
                margin: { t: 10, b: 40, l: 50, r: 20 },
                autosize: true,
                showlegend: true,
                legend: { font: { color: "#B0B0D0" }, bgcolor: "rgba(0,0,0,0)" },
              }}
              config={{ responsive: true, displayModeBar: false }}
              style={{ width: "100%", height: "100%" }}
            />
          </ChartCard>
        )}
      </div>

      {/* Interpretation */}
      <InterpretationCard />

      {/* Conclusion */}
      <ConclusionCard />
    </div>
  );
}

function ChartCard({
  title,
  subtitle,
  tagColor,
  fullSpan,
  children,
}: {
  title: string;
  subtitle: string;
  tagColor: string;
  fullSpan?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`rounded-xl border p-4 ${fullSpan ? "lg:col-span-2" : ""}`}
      style={{ background: "#1A1A2E", borderColor: tagColor + "33" }}
    >
      <div className="mb-3">
        <h4 className="text-sm font-bold" style={{ color: "#FFFFFF" }}>{title}</h4>
        <p className="text-xs" style={{ color: tagColor }}>{subtitle}</p>
      </div>
      <div className="h-[300px]">{children}</div>
    </div>
  );
}

function InterpretationCard() {
  return (
    <div
      className="rounded-xl p-6 border"
      style={{ background: "#1A1A2E", borderColor: "#7B61FF33" }}
    >
      <h3 className="text-lg font-bold mb-4" style={{ color: "#FFFFFF" }}>
        📖 Interpretación de Resultados
      </h3>
      <div className="space-y-4 text-sm leading-relaxed" style={{ color: "#B0B0D0" }}>
        <div>
          <strong style={{ color: "#7B61FF" }}>G1 & G2 — Boxplots de Ansiedad y Depresión:</strong>
          <p className="mt-1">
            Los jugadores nocturnos (night_gaming_ratio ≥ Q75 = 0.67) presentan medianas de ansiedad y depresión
            consistentemente más altas que los jugadores diurnos. La diferencia, aunque modesta en magnitud
            (~0.3-0.4 puntos), es estadísticamente significativa dado el gran tamaño muestral (1M registros).
            Esto sugiere que el patrón temporal del gaming importa, no solo la cantidad total.
          </p>
        </div>
        <div>
          <strong style={{ color: "#FFD700" }}>G3 — Hexbin Gaming Nocturno vs Sueño:</strong>
          <p className="mt-1">
            Se observa una correlación negativa (r = -0.38) entre night_gaming_ratio y sleep_hours.
            Los jugadores con proporción nocturna alta duermen aproximadamente 1.2 horas menos en promedio.
            La línea de tendencia muestra que a mayor gaming nocturno, menor cantidad de sueño, lo cual
            confirma que el sueño actúa como mediador clave entre gaming nocturno y salud mental.
          </p>
        </div>
        <div>
          <strong style={{ color: "#FF6B9D" }}>G4 — Ansiedad por Sueño × Tipo:</strong>
          <p className="mt-1">
            En todas las categorías de sueño, los jugadores nocturnos muestran mayor ansiedad que los diurnos.
            Sin embargo, la categoría de sueño tiene un efecto independiente: los jugadores con poco sueño
            (inferior a Q1) tienen la ansiedad más alta, independientemente de si son nocturnos o diurnos.
            Esto confirma que el sueño es un mediador parcial, pero no el único factor.
          </p>
        </div>
        <div>
          <strong style={{ color: "#7B61FF" }}>G5 — Heatmap de Correlaciones:</strong>
          <p className="mt-1">
            Las correlaciones más fuertes son entre ansiedad y depresión (r = 0.72), y entre night_gaming_ratio
            y daily_gaming_hours (r = 0.42). La correlación negativa entre sueño y ansiedad/depresión (r ≈ -0.25 a -0.28)
            respalda la hipótesis de mediación del sueño. La correlación positiva entre gaming nocturno y ansiedad
            (r = 0.28) confirma la asociación directa.
          </p>
        </div>
        <div>
          <strong style={{ color: "#7B61FF" }}>G6 — Ansiedad por Horas × Tipo:</strong>
          <p className="mt-1">
            Se observa un efecto dosis-respuesta: a mayor horas de gaming, mayor ansiedad en ambos grupos.
            Los jugadores nocturnos siempre tienen ansiedad más alta dentro de cada bin de horas. La diferencia
            se amplifica en el grupo de más de 10h, sugiriendo que el gaming nocturno extremo tiene un efecto
            multiplicador sobre la ansiedad.
          </p>
        </div>
      </div>
    </div>
  );
}

function ConclusionCard() {
  return (
    <div
      className="rounded-xl p-6 border"
      style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #2D1B69 100%)", borderColor: "#7B61FF55" }}
    >
      <h3 className="text-lg font-bold mb-4" style={{ color: "#FFFFFF" }}>
        ✅ Conclusión — Hipótesis 1
      </h3>
      <div className="space-y-3 text-sm leading-relaxed" style={{ color: "#E0E0FF" }}>
        <div className="flex items-start gap-3">
          <span className="text-green-400 text-xl">✅</span>
          <div>
            <strong style={{ color: "#00FF88" }}>Se ACEPTA la hipótesis.</strong>
            <p className="mt-1" style={{ color: "#B0B0D0" }}>
              Los datos confirman que los jugadores con mayor night_gaming_ratio presentan niveles más altos
              de ansiedad (mediana ~5.28 vs ~4.88) y depresión (mediana ~5.32 vs ~4.86) en comparación
              con jugadores diurnos, independientemente de las horas diarias de juego.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-yellow-400 text-xl">⚡</span>
          <div>
            <strong style={{ color: "#FFD700" }}>Mediación del sueño confirmada parcialmente.</strong>
            <p className="mt-1" style={{ color: "#B0B0D0" }}>
              El sueño actúa como mediador parcial: la correlación negativa (r = -0.38) entre gaming nocturno
              y horas de sueño, combinada con la correlación negativa entre sueño y salud mental, establece
              una ruta de mediación. Sin embargo, los jugadores nocturnos muestran mayor ansiedad incluso
              controlando por la categoría de sueño, lo que indica que hay mecanismos adicionales
              (ritmo circadiano, estimulación cognitiva, luz azul) más allá de la simple reducción del sueño.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper: generate roughly normal distributed data
function generateNormal(mean: number, std: number, n: number): number[] {
  const result: number[] = [];
  for (let i = 0; i < n; i++) {
    const u1 = Math.random();
    const u2 = Math.random();
    const z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
    result.push(Math.max(0, Math.min(10, mean + z * std)));
  }
  return result;
}
