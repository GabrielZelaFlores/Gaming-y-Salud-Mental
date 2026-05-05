"use client";

import { useState } from "react";
import Hypothesis1 from "@/components/dashboard/Hypothesis1";
import Hypothesis2 from "@/components/dashboard/Hypothesis2";
import Hypothesis3 from "@/components/dashboard/Hypothesis3";
import OverviewPanel from "@/components/dashboard/OverviewPanel";

const TABS = [
  { id: "overview", label: "Panorama General", icon: "📊" },
  { id: "h1", label: "H1 — Gaming Nocturno", icon: "🌙" },
  { id: "h2", label: "H2 — Toxicidad Online", icon: "☠️" },
  { id: "h3", label: "H3 — Sueño y Adicción", icon: "😴" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId>("overview");

  return (
    <div className="min-h-screen" style={{ background: "#0F0F1A", color: "#E0E0FF" }}>
      {/* Header */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{
          background: "rgba(15, 15, 26, 0.95)",
          backdropFilter: "blur(12px)",
          borderColor: "#3D3D5C",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl md:text-2xl font-bold" style={{ color: "#FFFFFF" }}>
                🎮 Gaming y Salud Mental
              </h1>
              <p className="text-xs md:text-sm mt-1" style={{ color: "#B0B0D0" }}>
                Minería de Datos — Huamani Vasquez & Zela Flores — 2026
              </p>
            </div>
            <div
              className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm"
              style={{ background: "#1A1A2E", border: "1px solid #3D3D5C" }}
            >
              <span style={{ color: "#7B61FF" }}>Dataset:</span>
              <span style={{ color: "#E0E0FF" }}>1,000,000 registros</span>
              <span style={{ color: "#3D3D5C" }}>|</span>
              <span style={{ color: "#7B61FF" }}>Variables:</span>
              <span style={{ color: "#E0E0FF" }}>39</span>
            </div>
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <nav
        className="border-b sticky top-[73px] z-40"
        style={{
          background: "rgba(15, 15, 26, 0.95)",
          backdropFilter: "blur(12px)",
          borderColor: "#3D3D5C",
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto gap-1 py-2 scrollbar-hide">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200"
                style={{
                  background: activeTab === tab.id ? "#7B61FF" : "transparent",
                  color: activeTab === tab.id ? "#FFFFFF" : "#B0B0D0",
                  border: activeTab === tab.id ? "1px solid #7B61FF" : "1px solid transparent",
                }}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {activeTab === "overview" && <OverviewPanel />}
        {activeTab === "h1" && <Hypothesis1 />}
        {activeTab === "h2" && <Hypothesis2 />}
        {activeTab === "h3" && <Hypothesis3 />}
      </main>

      {/* Footer */}
      <footer
        className="border-t mt-8 py-4"
        style={{ borderColor: "#3D3D5C" }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center text-xs" style={{ color: "#666" }}>
          Análisis de Gaming y Salud Mental — Dashboard Interactivo — Fuente: Kaggle &quot;Gaming and Mental Health&quot; Dataset
        </div>
      </footer>
    </div>
  );
}
