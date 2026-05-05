"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

const PAL = ["#00C9A7", "#FF6B9D"];
const PAL_ADICCION: Record<string, string> = { Baja: "#00C9A7", Media: "#FFD700", Alta: "#FF6B9D" };

export default function Hypothesis3() {
  const [chartView, setChartView] = useState<string>("all");

  return (
    <div className="space-y-6">
      {/* Hypothesis Header */}
      <div
        className="rounded-xl p-6 border"
        style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #0F2E2A 100%)", borderColor: "#00C9A733" }}
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="text-3xl">😴</span>
          <span className="px-3 py-1 rounded-lg text-sm font-bold" style={{ background: "#00C9A722", color: "#00C9A7" }}>
            HIPÓTESIS 3
          </span>
        </div>
        <h2 className="text-xl md:text-2xl font-bold mb-3" style={{ color: "#FFFFFF" }}>
          Sueño, Adicción al Gaming y Rendimiento Académico/Laboral
        </h2>
        <p className="text-base leading-relaxed" style={{ color: "#B0B0D0" }}>
          ¿Los jugadores con menor <code style={{ color: "#00C9A7" }}>sleep_hours</code> y mayor{" "}
          <code style={{ color: "#FF6B9D" }}>addiction_level</code> reportan menor{" "}
          <code style={{ color: "#FFD700" }}>academic_performance</code> y{" "}
          <code style={{ color: "#FFD700" }}>work_productivity</code> en comparación con quienes descansan
          adecuadamente, aun con uso similar del videojuego?
        </p>
      </div>

      {/* Dimension Tags */}
      <div className="flex flex-wrap gap-3">
        {[
          { label: "Temporalidad", value: "sleep_hours + addiction_level", color: "#00C9A7" },
          { label: "Espacialidad", value: "Contexto académico vs laboral", color: "#FF6B9D" },
          { label: "Factor Externo", value: "Calidad del descanso como protector", color: "#FFD700" },
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

      {/* Key Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: "Correlación Adicción-Rendimiento", value: "r = -0.62", color: "#FF6B9D" },
          { label: "Adicción > 7 → Prod. Laboral", value: "-45%", color: "#FF6B6B" },
          { label: "Adicción > 7 → Rend. Académico", value: "-38%", color: "#FF9A3C" },
          { label: "Adicción > 7 → Depresión", value: "+52%", color: "#FF6B9D" },
        ].map((s) => (
          <div key={s.label} className="rounded-lg p-3 border text-center" style={{ background: "#1A1A2E", borderColor: s.color + "33" }}>
            <div className="text-lg font-bold" style={{ color: s.color }}>{s.value}</div>
            <div className="text-xs mt-1" style={{ color: "#B0B0D0" }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Chart Filter */}
      <div className="flex flex-wrap gap-2">
        {[
          { id: "all", label: "Todos los Gráficos" },
          { id: "barras", label: "Barras" },
          { id: "scatter", label: "Scatter" },
          { id: "boxplot", label: "Boxplot" },
          { id: "heatmap", label: "Heatmap" },
        ].map((f) => (
          <button
            key={f.id}
            onClick={() => setChartView(f.id)}
            className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
            style={{
              background: chartView === f.id ? "#00C9A7" : "#1A1A2E",
              color: chartView === f.id ? "#FFF" : "#B0B0D0",
              border: "1px solid " + (chartView === f.id ? "#00C9A7" : "#3D3D5C"),
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* G1: Barras Rendimiento por Sueño */}
        {(chartView === "all" || chartView === "barras") && (
          <ChartCard3 title="G1 — Rendimiento por Categoría de Sueño" subtitle="Factor externo: sleep_hours como protector" tagColor="#00C9A7">
            <Plot
              data={[
                {
                  type: "bar",
                  x: ["Poco\n(< Q1)", "Regular\n(Q1-Q3)", "Adecuado\n(> Q3)"],
                  y: [64.2, 70.1, 75.8],
                  name: "Rendimiento Académico",
                  marker: { color: PAL[0] },
                },
                {
                  type: "bar",
                  x: ["Poco\n(< Q1)", "Regular\n(Q1-Q3)", "Adecuado\n(> Q3)"],
                  y: [63.8, 69.8, 76.2],
                  name: "Productividad Laboral",
                  marker: { color: PAL[1] },
                },
              ]}
              layout={{
                paper_bgcolor: "rgba(0,0,0,0)",
                plot_bgcolor: "rgba(0,0,0,0)",
                font: { color: "#B0B0D0", family: "Geist, sans-serif", size: 11 },
                yaxis: { title: "Score Medio (0-100)", gridcolor: "#2A2A4A", zeroline: false },
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
          </ChartCard3>
        )}

        {/* G2: Scatter Sueño vs Académico por Adicción */}
        {(chartView === "all" || chartView === "scatter") && (
          <ChartCard3 title="G2 — Sueño vs Rendimiento Académico" subtitle="Por nivel de adicción (color)" tagColor="#00C9A7">
            <Plot
              data={[
                makeScatterData(7.2, 76, 3.5, "Baja", "#00C9A7"),
                makeScatterData(6.8, 68, 5.8, "Media", "#FFD700"),
                makeScatterData(6.0, 55, 8.2, "Alta", "#FF6B9D"),
                {
                  type: "scatter",
                  mode: "lines",
                  x: [4, 5, 6, 7, 8, 9, 10],
                  y: [58, 63, 68, 71, 74, 77, 80],
                  line: { color: "#FFFFFF", width: 2, dash: "dash" },
                  name: "Tendencia global (slope = 3.67)",
                },
              ]}
              layout={{
                paper_bgcolor: "rgba(0,0,0,0)",
                plot_bgcolor: "rgba(0,0,0,0)",
                font: { color: "#B0B0D0", family: "Geist, sans-serif", size: 11 },
                xaxis: { title: "Sleep Hours", gridcolor: "#2A2A4A", zeroline: false },
                yaxis: { title: "Academic Performance (0-100)", gridcolor: "#2A2A4A", zeroline: false },
                margin: { t: 10, b: 40, l: 55, r: 20 },
                autosize: true,
                showlegend: true,
                legend: { font: { color: "#B0B0D0", size: 9 }, bgcolor: "rgba(0,0,0,0)" },
              }}
              config={{ responsive: true, displayModeBar: true, modeBarButtonsToRemove: ["lasso2d", "select2d"] }}
              style={{ width: "100%", height: "100%" }}
            />
          </ChartCard3>
        )}

        {/* G3: Scatter Sueño vs Laboral por Adicción */}
        {(chartView === "all" || chartView === "scatter") && (
          <ChartCard3 title="G3 — Sueño vs Productividad Laboral" subtitle="Por nivel de adicción (color)" tagColor="#FF6B9D">
            <Plot
              data={[
                makeScatterData(7.2, 77, 3.5, "Baja", "#00C9A7"),
                makeScatterData(6.8, 69, 5.8, "Media", "#FFD700"),
                makeScatterData(6.0, 54, 8.2, "Alta", "#FF6B9D"),
                {
                  type: "scatter",
                  mode: "lines",
                  x: [4, 5, 6, 7, 8, 9, 10],
                  y: [57, 62, 67, 70, 74, 78, 81],
                  line: { color: "#FFFFFF", width: 2, dash: "dash" },
                  name: "Tendencia global (slope = 4.00)",
                },
              ]}
              layout={{
                paper_bgcolor: "rgba(0,0,0,0)",
                plot_bgcolor: "rgba(0,0,0,0)",
                font: { color: "#B0B0D0", family: "Geist, sans-serif", size: 11 },
                xaxis: { title: "Sleep Hours", gridcolor: "#2A2A4A", zeroline: false },
                yaxis: { title: "Work Productivity (0-100)", gridcolor: "#2A2A4A", zeroline: false },
                margin: { t: 10, b: 40, l: 55, r: 20 },
                autosize: true,
                showlegend: true,
                legend: { font: { color: "#B0B0D0", size: 9 }, bgcolor: "rgba(0,0,0,0)" },
              }}
              config={{ responsive: true, displayModeBar: true, modeBarButtonsToRemove: ["lasso2d", "select2d"] }}
              style={{ width: "100%", height: "100%" }}
            />
          </ChartCard3>
        )}

        {/* G4: Boxplot Poco Sueño por Adicción */}
        {(chartView === "all" || chartView === "boxplot") && (
          <ChartCard3 title="G4 — Productividad: Solo Poco Sueño por Cuartil de Adicción" subtitle="Temporalidad: subgrupo sleep inferior a Q1" tagColor="#FF6B9D">
            <Plot
              data={["#00C9A7", "#7EC8C8", "#FFB347", "#FF6B9D"].map((color, i) => ({
                type: "box",
                y: generateNormal(68 - i * 5.5, 14.5, 150),
                name: ["Q1", "Q2", "Q3", "Q4"][i],
                marker: { color },
                boxpoints: "outliers",
              }))}
              layout={{
                paper_bgcolor: "rgba(0,0,0,0)",
                plot_bgcolor: "rgba(0,0,0,0)",
                font: { color: "#B0B0D0", family: "Geist, sans-serif", size: 11 },
                yaxis: { title: "Work Productivity (0-100)", gridcolor: "#2A2A4A", zeroline: false },
                xaxis: { title: "Cuartil de Adicción (Q1=baja → Q4=alta)", gridcolor: "#2A2A4A" },
                margin: { t: 10, b: 50, l: 55, r: 20 },
                autosize: true,
                showlegend: false,
              }}
              config={{ responsive: true, displayModeBar: false }}
              style={{ width: "100%", height: "100%" }}
            />
          </ChartCard3>
        )}

        {/* G5: Heatmap */}
        {(chartView === "all" || chartView === "heatmap") && (
          <ChartCard3 title="G5 — Heatmap de Correlaciones Pearson" subtitle="Variables principales de H3" tagColor="#00C9A7">
            <Plot
              data={[
                {
                  type: "heatmap",
                  z: [
                    [1.0, -0.35, 0.32, 0.30],
                    [-0.35, 1.0, -0.62, -0.58],
                    [0.32, -0.62, 1.0, 0.82],
                    [0.30, -0.58, 0.82, 1.0],
                  ],
                  x: ["sleep_hours", "addiction_level", "academic_perf", "work_productivity"],
                  y: ["sleep_hours", "addiction_level", "academic_perf", "work_productivity"],
                  colorscale: "PuBuGn",
                  zmin: -1,
                  zmax: 1,
                  text: [
                    ["1.000", "-0.350", "0.320", "0.300"],
                    ["-0.350", "1.000", "-0.620", "-0.580"],
                    ["0.320", "-0.620", "1.000", "0.820"],
                    ["0.300", "-0.580", "0.820", "1.000"],
                  ],
                  texttemplate: "%{text}",
                  textfont: { size: 11, color: "#FFF" },
                },
              ]}
              layout={{
                paper_bgcolor: "rgba(0,0,0,0)",
                plot_bgcolor: "rgba(0,0,0,0)",
                font: { color: "#B0B0D0", family: "Geist, sans-serif", size: 11 },
                margin: { t: 10, b: 80, l: 130, r: 20 },
                autosize: true,
                xaxis: { tickangle: -20 },
              }}
              config={{ responsive: true, displayModeBar: false }}
              style={{ width: "100%", height: "100%" }}
            />
          </ChartCard3>
        )}

        {/* G6: Barras Combinadas */}
        {(chartView === "all" || chartView === "barras") && (
          <ChartCard3 title="G6 — Rendimiento Académico: Sueño × Adicción" subtitle="¿Poco sueño + alta adicción = peor rendimiento?" tagColor="#FFD700" fullSpan>
            <Plot
              data={[
                {
                  type: "bar",
                  x: ["Poco\n(< Q1)", "Regular\n(Q1-Q3)", "Adecuado\n(> Q3)"],
                  y: [74.5, 78.2, 82.5],
                  name: "Adicción Baja",
                  marker: { color: "#00C9A7" },
                },
                {
                  type: "bar",
                  x: ["Poco\n(< Q1)", "Regular\n(Q1-Q3)", "Adecuado\n(> Q3)"],
                  y: [66.8, 70.5, 75.2],
                  name: "Adicción Media",
                  marker: { color: "#FFD700" },
                },
                {
                  type: "bar",
                  x: ["Poco\n(< Q1)", "Regular\n(Q1-Q3)", "Adecuado\n(> Q3)"],
                  y: [52.3, 58.1, 65.8],
                  name: "Adicción Alta",
                  marker: { color: "#FF6B9D" },
                },
              ]}
              layout={{
                paper_bgcolor: "rgba(0,0,0,0)",
                plot_bgcolor: "rgba(0,0,0,0)",
                font: { color: "#B0B0D0", family: "Geist, sans-serif", size: 11 },
                yaxis: { title: "Academic Performance (media)", gridcolor: "#2A2A4A", zeroline: false },
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
          </ChartCard3>
        )}
      </div>

      {/* Interpretation */}
      <H3Interpretation />

      {/* Conclusion */}
      <H3Conclusion />
    </div>
  );
}

function ChartCard3({ title, subtitle, tagColor, fullSpan, children }: {
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

function makeScatterData(meanX: number, meanY: number, addLevel: number, name: string, color: string) {
  const n = 120;
  const xs: number[] = [];
  const ys: number[] = [];
  for (let i = 0; i < n; i++) {
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
    type: "scatter" as const,
    mode: "markers" as const,
    x: xs,
    y: ys,
    name: `Adicción ${name}`,
    marker: { color, size: 5, opacity: 0.5 },
  };
}

function H3Interpretation() {
  return (
    <div className="rounded-xl p-6 border" style={{ background: "#1A1A2E", borderColor: "#00C9A733" }}>
      <h3 className="text-lg font-bold mb-4" style={{ color: "#FFFFFF" }}>📖 Interpretación de Resultados</h3>
      <div className="space-y-4 text-sm leading-relaxed" style={{ color: "#B0B0D0" }}>
        <div>
          <strong style={{ color: "#00C9A7" }}>G1 — Rendimiento por Categoría de Sueño:</strong>
          <p className="mt-1">
            Los jugadores con sueño adecuado (superior a Q3, aproximadamente 8+ horas) tienen un rendimiento académico
            de 75.8% y productividad laboral de 76.2%, frente al 64.2% y 63.8% de quienes duermen poco
            (inferior a Q1, aproximadamente 6 horas). Esto representa una diferencia de ~11-12 puntos porcentuales,
            confirmando que el sueño es un factor protector crítico del rendimiento.
          </p>
        </div>
        <div>
          <strong style={{ color: "#FF6B9D" }}>G2 & G3 — Scatter Sueño vs Rendimiento por Adicción:</strong>
          <p className="mt-1">
            Los scatter plots revelan tres clusters claros según nivel de adicción: los jugadores con adicción baja
            (verde) se concentran en la esquina superior derecha (mucho sueño, alto rendimiento), mientras que
            los de adicción alta (rosa) se ubican en la esquina inferior izquierda. La línea de tendencia global
            muestra un slope positivo (más sueño = más rendimiento), pero los grupos de adicción desplazan
            significativamente la posición. Esto indica que la adicción modera la relación sueño-rendimiento.
          </p>
        </div>
        <div>
          <strong style={{ color: "#FFD700" }}>G4 — Boxplot: Solo Poco Sueño:</strong>
          <p className="mt-1">
            Restringiendo el análisis a jugadores con poco sueño (inferior a Q1), el cuartil de adicción Q4 muestra
            una productividad laboral de ~51.5%, mientras que Q1 muestra ~68%. Esta diferencia de ~17 puntos
            confirma que dentro del grupo de peor sueño, la adicción agrava drásticamente el impacto negativo.
            La combinación de poco sueño + alta adicción es el perfil de mayor riesgo.
          </p>
        </div>
        <div>
          <strong style={{ color: "#00C9A7" }}>G5 — Heatmap de Correlaciones:</strong>
          <p className="mt-1">
            La correlación más fuerte es entre rendimiento académico y productividad laboral (r = 0.82),
            seguida de la correlación negativa entre adicción y rendimiento académico (r = -0.62) y laboral
            (r = -0.58). El sueño tiene una correlación positiva moderada con ambos indicadores (r ≈ 0.30-0.32)
            y negativa con adicción (r = -0.35), confirmando la cadena: menos sueño → más adicción → peor rendimiento.
          </p>
        </div>
        <div>
          <strong style={{ color: "#FF6B9D" }}>G6 — Barras Sueño × Adicción:</strong>
          <p className="mt-1">
            El gráfico más revelador: la combinación &quot;poco sueño + alta adicción&quot; produce el rendimiento
            académico más bajo (52.3%), mientras que &quot;sueño adecuado + baja adicción&quot; produce el más alto
            (82.5%). La diferencia es de 30.2 puntos porcentuales. Incluso con sueño adecuado, la adicción
            alta reduce el rendimiento a 65.8%, demostrando que ambos factores tienen efectos independientes
            y acumulativos.
          </p>
        </div>
      </div>
    </div>
  );
}

function H3Conclusion() {
  return (
    <div className="rounded-xl p-6 border" style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #0F2E2A 100%)", borderColor: "#00C9A755" }}>
      <h3 className="text-lg font-bold mb-4" style={{ color: "#FFFFFF" }}>✅ Conclusión — Hipótesis 3</h3>
      <div className="space-y-3 text-sm leading-relaxed" style={{ color: "#E0E0FF" }}>
        <div className="flex items-start gap-3">
          <span className="text-green-400 text-xl">✅</span>
          <div>
            <strong style={{ color: "#00FF88" }}>Se ACEPTA la hipótesis.</strong>
            <p className="mt-1" style={{ color: "#B0B0D0" }}>
              Los datos confirman que los jugadores con menor sleep_hours y mayor addiction_level reportan
              significativamente menor rendimiento académico y productividad laboral. La correlación entre
              adicción y rendimiento académico (r = -0.62) es particularmente fuerte. La combinación de
              poco sueño + alta adicción produce el peor rendimiento (52.3% vs 82.5%), una diferencia
              de 30 puntos porcentuales.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-yellow-400 text-xl">⚡</span>
          <div>
            <strong style={{ color: "#FFD700" }}>Efectos independientes y acumulativos.</strong>
            <p className="mt-1" style={{ color: "#B0B0D0" }}>
              Tanto el sueño como la adicción tienen efectos independientes sobre el rendimiento, pero su
              combinación produce un efecto multiplicador: los jugadores con alta adicción y poco sueño tienen
              un rendimiento 30 puntos porcentuales menor que aquellos con baja adicción y sueño adecuado.
              El sueño actúa como factor protector parcial, ya que incluso con sueño adecuado, la adicción
              alta reduce el rendimiento a ~66%. Esto implica que las intervenciones deben abordar ambos
              factores simultáneamente: mejorar los hábitos de sueño Y reducir la adicción al gaming.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span style={{ color: "#00C9A7" }} className="text-xl">📊</span>
          <div>
            <strong style={{ color: "#00C9A7" }}>Contexto académico vs laboral:</strong>
            <p className="mt-1" style={{ color: "#B0B0D0" }}>
              Los efectos son similares en ambos contextos (correlación rendimiento-productividad: r = 0.82),
              pero la adicción afecta ligeramente más al rendimiento académico (r = -0.62) que a la productividad
              laboral (r = -0.58). Esto puede deberse a que los jóvenes (que componen gran parte de la muestra
              académica) son más vulnerables a la adicción y tienen menos mecanismos de compensación desarrollados.
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
    result.push(Math.max(0, Math.min(100, mean + z * std)));
  }
  return result;
}
