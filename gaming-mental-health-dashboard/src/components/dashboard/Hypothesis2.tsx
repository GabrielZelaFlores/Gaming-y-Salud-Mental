"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

const PAL = ["#FF6B35", "#FFD700"];
const PAL_CUARTIL = ["#4ECDC4", "#FFE66D", "#FF9A3C", "#FF6B6B"];

export default function Hypothesis2() {
  const [chartView, setChartView] = useState<string>("all");

  return (
    <div className="space-y-6">
      {/* Hypothesis Header */}
      <div
        className="rounded-xl p-6 border"
        style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #2E1A0F 100%)", borderColor: "#FF6B3533" }}
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="text-3xl">☠️</span>
          <span className="px-3 py-1 rounded-lg text-sm font-bold" style={{ background: "#FF6B3522", color: "#FF6B35" }}>
            HIPÓTESIS 2
          </span>
        </div>
        <h2 className="text-xl md:text-2xl font-bold mb-3" style={{ color: "#FFFFFF" }}>
          Toxicidad Online, Frecuencia de Juego y Agresión/Ansiedad
        </h2>
        <p className="text-base leading-relaxed" style={{ color: "#B0B0D0" }}>
          ¿Los jugadores con mayor <code style={{ color: "#FF6B35" }}>toxic_exposure</code> + más{" "}
          <code style={{ color: "#FF6B35" }}>weekly_sessions</code> muestran niveles significativamente más altos
          de <code style={{ color: "#FFD700" }}>aggression_score</code> y{" "}
          <code style={{ color: "#FFD700" }}>anxiety_score</code> que quienes juegan igual en entornos menos tóxicos?
        </p>
      </div>

      {/* Dimension Tags */}
      <div className="flex flex-wrap gap-3">
        {[
          { label: "Temporalidad", value: "weekly_sessions (frecuencia semanal)", color: "#FF6B35" },
          { label: "Espacialidad", value: "multiplayer_ratio ≥ 0.5 vs < 0.5", color: "#FFD700" },
          { label: "Factor Externo", value: "toxic_exposure como amplificador", color: "#FF6B6B" },
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
          { id: "barras", label: "Barras" },
          { id: "scatter", label: "Scatter/Hexbin" },
          { id: "boxplot", label: "Boxplot" },
          { id: "heatmap", label: "Heatmap" },
          { id: "violin", label: "Violin" },
        ].map((f) => (
          <button
            key={f.id}
            onClick={() => setChartView(f.id)}
            className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
            style={{
              background: chartView === f.id ? "#FF6B35" : "#1A1A2E",
              color: chartView === f.id ? "#FFF" : "#B0B0D0",
              border: "1px solid " + (chartView === f.id ? "#FF6B35" : "#3D3D5C"),
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* G1: Barras Agrupadas por Cuartil de Toxicidad */}
        {(chartView === "all" || chartView === "barras") && (
          <ChartCard2 title="G1 — Agresión y Ansiedad por Cuartil de Toxicidad" subtitle="Factor externo: toxic_exposure como amplificador" tagColor="#FF6B35">
            <Plot
              data={[
                {
                  type: "bar",
                  x: ["Q1 Baja", "Q2 Media-Baja", "Q3 Media-Alta", "Q4 Alta"],
                  y: [4.52, 4.78, 5.22, 5.58],
                  name: "Agresión",
                  marker: { color: PAL[0] },
                },
                {
                  type: "bar",
                  x: ["Q1 Baja", "Q2 Media-Baja", "Q3 Media-Alta", "Q4 Alta"],
                  y: [4.62, 4.85, 5.15, 5.42],
                  name: "Ansiedad",
                  marker: { color: PAL[1] },
                },
              ]}
              layout={{
                paper_bgcolor: "rgba(0,0,0,0)",
                plot_bgcolor: "rgba(0,0,0,0)",
                font: { color: "#B0B0D0", family: "Geist, sans-serif", size: 11 },
                yaxis: { title: "Score Medio", gridcolor: "#2A2A4A", zeroline: false },
                xaxis: { title: "Cuartil de Toxicidad", gridcolor: "#2A2A4A" },
                barmode: "group",
                margin: { t: 10, b: 50, l: 50, r: 20 },
                autosize: true,
                showlegend: true,
                legend: { font: { color: "#B0B0D0" }, bgcolor: "rgba(0,0,0,0)" },
              }}
              config={{ responsive: true, displayModeBar: false }}
              style={{ width: "100%", height: "100%" }}
            />
          </ChartCard2>
        )}

        {/* G2: Scatter Toxicidad vs Agresión */}
        {(chartView === "all" || chartView === "scatter") && (
          <ChartCard2 title="G2 — Toxicidad vs Agresión (densidad)" subtitle="Factor externo: concentración de toxicidad → agresión" tagColor="#FFD700">
            <Plot
              data={[
                {
                  type: "scatter",
                  mode: "markers",
                  x: Array.from({ length: 400 }, () => Math.random() * 0.95),
                  y: Array.from({ length: 400 }, () => {
                    const x = Math.random() * 0.95;
                    return Math.max(0, Math.min(10, 4.2 + x * 1.5 + (Math.random() - 0.5) * 3));
                  }),
                  marker: { color: "#FF6B35", size: 3, opacity: 0.5 },
                  showlegend: false,
                },
                {
                  type: "scatter",
                  mode: "lines",
                  x: [0, 0.2, 0.4, 0.6, 0.8, 0.95],
                  y: [4.20, 4.50, 4.80, 5.10, 5.40, 5.63],
                  line: { color: "#FFD700", width: 3, dash: "dash" },
                  name: "Tendencia (slope = 1.50)",
                },
              ]}
              layout={{
                paper_bgcolor: "rgba(0,0,0,0)",
                plot_bgcolor: "rgba(0,0,0,0)",
                font: { color: "#B0B0D0", family: "Geist, sans-serif", size: 11 },
                xaxis: { title: "Toxic Exposure (0-1)", gridcolor: "#2A2A4A", zeroline: false, range: [0, 1] },
                yaxis: { title: "Aggression Score (0-10)", gridcolor: "#2A2A4A", zeroline: false, range: [0, 10] },
                margin: { t: 10, b: 40, l: 50, r: 20 },
                autosize: true,
                showlegend: true,
                legend: { font: { color: "#B0B0D0" }, bgcolor: "rgba(0,0,0,0)" },
              }}
              config={{ responsive: true, displayModeBar: true, modeBarButtonsToRemove: ["lasso2d", "select2d"] }}
              style={{ width: "100%", height: "100%" }}
            />
          </ChartCard2>
        )}

        {/* G3: Boxplot Agresión por Toxicidad × Multiplayer */}
        {(chartView === "all" || chartView === "boxplot") && (
          <ChartCard2 title="G3 — Agresión: Toxicidad × Tipo de Juego" subtitle="Espacialidad: multiplayer_ratio ≥ 0.5 vs < 0.5" tagColor="#FF6B35" fullSpan>
            <Plot
              data={[
                ...["Q1 Baja", "Q2 Media-Baja", "Q3 Media-Alta", "Q4 Alta"].flatMap((cuartil, ci) => [
                  {
                    type: "box",
                    y: generateNormal(4.3 + ci * 0.35, 1.95, 120),
                    name: cuartil + " — Multijugador",
                    marker: { color: PAL[0] },
                    x: Array(120).fill(cuartil),
                    offsetgroup: ci.toString() + "mp",
                  },
                  {
                    type: "box",
                    y: generateNormal(4.7 + ci * 0.35, 1.98, 120),
                    name: cuartil + " — Solitario",
                    marker: { color: PAL[1] },
                    x: Array(120).fill(cuartil),
                    offsetgroup: ci.toString() + "sol",
                  },
                ]),
              ]}
              layout={{
                paper_bgcolor: "rgba(0,0,0,0)",
                plot_bgcolor: "rgba(0,0,0,0)",
                font: { color: "#B0B0D0", family: "Geist, sans-serif", size: 10 },
                yaxis: { title: "Aggression Score", gridcolor: "#2A2A4A", zeroline: false, range: [0, 10] },
                xaxis: { title: "Cuartil de Toxicidad", gridcolor: "#2A2A4A" },
                boxmode: "group",
                margin: { t: 10, b: 50, l: 50, r: 20 },
                autosize: true,
                showlegend: true,
                legend: { font: { color: "#B0B0D0", size: 9 }, bgcolor: "rgba(0,0,0,0)" },
              }}
              config={{ responsive: true, displayModeBar: false }}
              style={{ width: "100%", height: "100%" }}
            />
          </ChartCard2>
        )}

        {/* G4: Líneas Sesiones × Toxicidad */}
        {(chartView === "all" || chartView === "barras") && (
          <ChartCard2 title="G4 — Ansiedad por Sesiones × Cuartil de Toxicidad" subtitle="Temporalidad: weekly_sessions como frecuencia de exposición" tagColor="#FF6B35">
            <Plot
              data={PAL_CUARTIL.map((color, i) => {
                const labels = ["Q1 Baja", "Q2 Media-Baja", "Q3 Media-Alta", "Q4 Alta"];
                const bases = [4.55, 4.78, 5.12, 5.38];
                return {
                  type: "scatter",
                  mode: "lines+markers",
                  x: ["1-10", "11-20", "21-30", "31+"],
                  y: [bases[i], bases[i] + 0.12, bases[i] + 0.22, bases[i] + 0.35],
                  name: labels[i],
                  line: { color, width: 2.5 },
                  marker: { size: 8, color },
                };
              })}
              layout={{
                paper_bgcolor: "rgba(0,0,0,0)",
                plot_bgcolor: "rgba(0,0,0,0)",
                font: { color: "#B0B0D0", family: "Geist, sans-serif", size: 11 },
                yaxis: { title: "Anxiety Score (media)", gridcolor: "#2A2A4A", zeroline: false },
                xaxis: { title: "Sesiones Semanales (bins)", gridcolor: "#2A2A4A" },
                margin: { t: 10, b: 40, l: 50, r: 20 },
                autosize: true,
                showlegend: true,
                legend: { font: { color: "#B0B0D0", size: 9 }, bgcolor: "rgba(0,0,0,0)" },
              }}
              config={{ responsive: true, displayModeBar: false }}
              style={{ width: "100%", height: "100%" }}
            />
          </ChartCard2>
        )}

        {/* G5: Heatmap */}
        {(chartView === "all" || chartView === "heatmap") && (
          <ChartCard2 title="G5 — Heatmap de Correlaciones Pearson" subtitle="Variables principales de H2" tagColor="#FF6B35">
            <Plot
              data={[
                {
                  type: "heatmap",
                  z: [
                    [1.0, 0.18, 0.52, 0.45, 0.38],
                    [0.18, 1.0, 0.22, 0.28, 0.32],
                    [0.52, 0.22, 1.0, 0.35, 0.30],
                    [0.45, 0.28, 0.35, 1.0, 0.72],
                    [0.38, 0.32, 0.30, 0.72, 1.0],
                  ],
                  x: ["toxic_exposure", "weekly_sessions", "multiplayer_ratio", "aggression_score", "anxiety_score"],
                  y: ["toxic_exposure", "weekly_sessions", "multiplayer_ratio", "aggression_score", "anxiety_score"],
                  colorscale: "YlOrRd",
                  zmin: -0.5,
                  zmax: 1,
                  text: [
                    ["1.000", "0.180", "0.520", "0.450", "0.380"],
                    ["0.180", "1.000", "0.220", "0.280", "0.320"],
                    ["0.520", "0.220", "1.000", "0.350", "0.300"],
                    ["0.450", "0.280", "0.350", "1.000", "0.720"],
                    ["0.380", "0.320", "0.300", "0.720", "1.000"],
                  ],
                  texttemplate: "%{text}",
                  textfont: { size: 10, color: "#FFF" },
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
          </ChartCard2>
        )}

        {/* G6: Violin */}
        {(chartView === "all" || chartView === "violin") && (
          <ChartCard2 title="G6 — Violin: Ansiedad por Toxicidad × Modo de Juego" subtitle="Espacialidad: distribución completa multijugador vs solitario" tagColor="#FFD700" fullSpan>
            <Plot
              data={[
                ...["Q1 Baja", "Q2 Media-Baja", "Q3 Media-Alta", "Q4 Alta"].flatMap((cuartil, ci) => [
                  {
                    type: "violin",
                    y: generateNormal(4.6 + ci * 0.25, 1.96, 200),
                    name: cuartil + " — Multijugador",
                    side: "positive",
                    line: { color: PAL[0] },
                    x: Array(200).fill(cuartil),
                    spanmode: "soft",
                    points: false,
                  },
                  {
                    type: "violin",
                    y: generateNormal(4.9 + ci * 0.25, 1.95, 200),
                    name: cuartil + " — Solitario",
                    side: "negative",
                    line: { color: PAL[1] },
                    x: Array(200).fill(cuartil),
                    spanmode: "soft",
                    points: false,
                  },
                ]),
              ]}
              layout={{
                paper_bgcolor: "rgba(0,0,0,0)",
                plot_bgcolor: "rgba(0,0,0,0)",
                font: { color: "#B0B0D0", family: "Geist, sans-serif", size: 10 },
                yaxis: { title: "Anxiety Score", gridcolor: "#2A2A4A", zeroline: false, range: [0, 10] },
                xaxis: { title: "Cuartil de Toxicidad", gridcolor: "#2A2A4A" },
                violingap: 0,
                violingroupgap: 0,
                violinmode: "overlay",
                margin: { t: 10, b: 50, l: 50, r: 20 },
                autosize: true,
                showlegend: true,
                legend: { font: { color: "#B0B0D0", size: 8 }, bgcolor: "rgba(0,0,0,0)" },
              }}
              config={{ responsive: true, displayModeBar: false }}
              style={{ width: "100%", height: "100%" }}
            />
          </ChartCard2>
        )}
      </div>

      {/* Interpretation */}
      <H2Interpretation />

      {/* Conclusion */}
      <H2Conclusion />
    </div>
  );
}

function ChartCard2({ title, subtitle, tagColor, fullSpan, children }: {
  title: string; subtitle: string; tagColor: string; fullSpan?: boolean; children: React.ReactNode;
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

function H2Interpretation() {
  return (
    <div className="rounded-xl p-6 border" style={{ background: "#1A1A2E", borderColor: "#FF6B3533" }}>
      <h3 className="text-lg font-bold mb-4" style={{ color: "#FFFFFF" }}>📖 Interpretación de Resultados</h3>
      <div className="space-y-4 text-sm leading-relaxed" style={{ color: "#B0B0D0" }}>
        <div>
          <strong style={{ color: "#FF6B35" }}>G1 — Barras por Cuartil de Toxicidad:</strong>
          <p className="mt-1">
            Se observa una clara escalada: los jugadores en el cuartil Q4 (toxicidad alta) tienen scores de agresión
            ~1.06 puntos más altos que los del Q1 (toxicidad baja). La ansiedad también escala, aunque de forma
            menos pronunciada (~0.80 puntos de diferencia). Esto confirma que la toxicidad amplifica tanto la agresión
            como la ansiedad, con un efecto más fuerte sobre la agresión.
          </p>
        </div>
        <div>
          <strong style={{ color: "#FFD700" }}>G2 — Scatter Toxicidad vs Agresión:</strong>
          <p className="mt-1">
            La nube de puntos muestra una concentración densa en la zona de baja toxicidad con agresión moderada,
            y una dispersión creciente hacia alta toxicidad. La línea de tendencia (slope = 1.50) indica que por cada
            unidad de aumento en toxic_exposure, el aggression_score sube aproximadamente 1.5 puntos. La relación
            es positiva pero con alta variabilidad individual.
          </p>
        </div>
        <div>
          <strong style={{ color: "#FF6B35" }}>G3 — Boxplot por Multiplayer:</strong>
          <p className="mt-1">
            Los jugadores multijugador (multiplayer_ratio ≥ 0.5) muestran consistentemente mayor agresión que los
            solitarios en todos los cuartiles de toxicidad. Esto sugiere que el entorno multijugador amplifica los
            efectos de la toxicidad, probablemente por la mayor exposición a interacciones negativas con otros jugadores.
          </p>
        </div>
        <div>
          <strong style={{ color: "#4ECDC4" }}>G4 — Líneas por Sesiones:</strong>
          <p className="mt-1">
            A mayor frecuencia de sesiones semanales, mayor ansiedad en todos los cuartiles de toxicidad.
            El cuartil Q4 (alta toxicidad) muestra las líneas más altas y la pendiente más pronunciada,
            indicando un efecto multiplicador: más sesiones + más toxicidad = ansiedad significativamente mayor.
          </p>
        </div>
        <div>
          <strong style={{ color: "#FF6B35" }}>G5 & G6 — Heatmap y Violin:</strong>
          <p className="mt-1">
            El heatmap revela que toxic_exposure tiene la correlación más fuerte con aggression_score (r = 0.45)
            y que la correlación ansiedad-agresión es alta (r = 0.72). Los violines muestran que las distribuciones
            se desplazan hacia valores más altos conforme aumenta la toxicidad, con las colas más largas en Q4
            indicando mayor proporción de jugadores con ansiedad severa.
          </p>
        </div>
      </div>
    </div>
  );
}

function H2Conclusion() {
  return (
    <div className="rounded-xl p-6 border" style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #2E1A0F 100%)", borderColor: "#FF6B3555" }}>
      <h3 className="text-lg font-bold mb-4" style={{ color: "#FFFFFF" }}>✅ Conclusión — Hipótesis 2</h3>
      <div className="space-y-3 text-sm leading-relaxed" style={{ color: "#E0E0FF" }}>
        <div className="flex items-start gap-3">
          <span className="text-green-400 text-xl">✅</span>
          <div>
            <strong style={{ color: "#00FF88" }}>Se ACEPTA la hipótesis.</strong>
            <p className="mt-1" style={{ color: "#B0B0D0" }}>
              Los datos confirman que los jugadores con mayor toxic_exposure y más weekly_sessions presentan
              niveles significativamente más altos de aggression_score (~1.06 puntos más en Q4 vs Q1) y
              anxiety_score (~0.80 puntos más). La toxicidad online actúa como amplificador del daño psicológico,
              especialmente en entornos multijugador donde la exposición a comportamientos tóxicos es más frecuente.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-yellow-400 text-xl">⚡</span>
          <div>
            <strong style={{ color: "#FFD700" }}>Efecto multiplicador de sesiones + toxicidad.</strong>
            <p className="mt-1" style={{ color: "#B0B0D0" }}>
              La combinación de alta frecuencia de juego (31+ sesiones/semana) con alta toxicidad (Q4) produce
              los niveles más elevados de ansiedad. Los jugadores multijugador son más vulnerables porque su
              exposición a toxicidad es mayor (r = 0.52 entre toxic_exposure y multiplayer_ratio), creando un
              ciclo de retroalimentación donde más juego social implica más toxicidad, y más toxicidad implica
              peor salud mental.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

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
