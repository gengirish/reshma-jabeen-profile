"use client";

import { graphNodes, projectConnections, skillJourney } from "@/data/resume-data";
import SectionHeading from "./SectionHeading";

const NODE_POSITIONS: Record<string, { x: number; y: number }> = {
  Wipro: { x: 80, y: 200 },
  Infosys: { x: 230, y: 90 },
  Ericsson: { x: 400, y: 220 },
  ALMBrand: { x: 560, y: 80 },
  "TCS-LF": { x: 700, y: 190 },
};

export default function SkillDNA() {
  return (
    <section id="skilldna" className="relative bg-neural-surface/30 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Visualized"
          title="Career DNA"
          subtitle="How roles connect through shared skills, and how core competencies compounded over 19+ years."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Career graph */}
          <div className="glass-card rounded-2xl p-6">
            <h3 className="mb-4 text-sm font-semibold text-slate-200">
              Career Connection Graph
            </h3>
            <svg viewBox="0 0 780 300" className="w-full">
              {projectConnections.map((conn, i) => {
                const from = NODE_POSITIONS[conn.from];
                const to = NODE_POSITIONS[conn.to];
                if (!from || !to) return null;
                return (
                  <line
                    key={i}
                    x1={from.x}
                    y1={from.y}
                    x2={to.x}
                    y2={to.y}
                    stroke="#38bdf8"
                    strokeOpacity={0.25 + conn.strength * 0.06}
                    strokeWidth={conn.strength * 0.8}
                  />
                );
              })}
              {graphNodes.map((node) => {
                const pos = NODE_POSITIONS[node.id];
                if (!pos) return null;
                return (
                  <g key={node.id}>
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={10 + node.size * 3}
                      fill={node.color}
                      fillOpacity={0.18}
                      stroke={node.color}
                      strokeWidth={1.5}
                    />
                    <circle cx={pos.x} cy={pos.y} r={4} fill={node.color} />
                    <text
                      x={pos.x}
                      y={pos.y + 28 + node.size * 2}
                      textAnchor="middle"
                      className="fill-slate-300 font-mono"
                      fontSize="11"
                    >
                      {node.id}
                    </text>
                    <text
                      x={pos.x}
                      y={pos.y + 42 + node.size * 2}
                      textAnchor="middle"
                      className="fill-slate-500 font-mono"
                      fontSize="9"
                    >
                      {node.years}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Skill progression */}
          <div className="glass-card rounded-2xl p-6">
            <h3 className="mb-4 text-sm font-semibold text-slate-200">
              Skill Progression
            </h3>
            <div className="space-y-5">
              {skillJourney.map((journey) => {
                const latest = journey.milestones[journey.milestones.length - 1];
                return (
                  <div key={journey.skill}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="text-slate-300">{journey.skill}</span>
                      <span
                        className="font-mono text-xs"
                        style={{ color: journey.color }}
                      >
                        {latest.level}%
                      </span>
                    </div>
                    <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-neural-bg">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{
                          width: `${latest.level}%`,
                          background: `linear-gradient(90deg, ${journey.color}55, ${journey.color})`,
                        }}
                      />
                    </div>
                    <div className="mt-1 flex justify-between font-mono text-[10px] text-slate-600">
                      <span>{journey.milestones[0].company} {journey.milestones[0].year}</span>
                      <span>{latest.company} {latest.year}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
