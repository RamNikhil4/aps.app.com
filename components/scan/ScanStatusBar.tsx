export default function ScanStatusBar() {
  const stats = [
    { label: "Sub-Agents:", value: "0" },
    { label: "Parallel Executions:", value: "2" },
    { label: "Operations:", value: "1" },
  ];

  const severities = [
    { label: "Critical:", value: "0", color: "text-red-500" },
    { label: "High:", value: "0", color: "text-orange-500" },
    { label: "Medium:", value: "0", color: "text-yellow-500" },
    { label: "Low:", value: "0", color: "text-emerald-500" },
  ];

  return (
    <div
      className="h-8 flex items-center justify-between gap-6 text-[11px] font-medium shrink-0 px-4"
      style={{
        background: "var(--bg-statusbar)",
        borderTop: "1px solid var(--border-statusbar)",
      }}
    >
      <div className="flex items-center gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-center gap-1.5">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span style={{ color: "var(--text-muted)" }}>{stat.label}</span>
            </span>
            <span style={{ color: "var(--text-primary)" }}>{stat.value}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-8 ml-4">
        {severities.map((sev) => (
          <div key={sev.label} className="flex items-center gap-1">
            <span className={`${sev.color} font-semibold`}>{sev.label}</span>
            <span style={{ color: "var(--text-primary)" }}>{sev.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
