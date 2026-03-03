const findings = [
  {
    severity: "Critical",
    severityColor: "bg-red-500",
    time: "10:45:25",
    title: "SQL Injection in Authentication Endpoint",
    endpoint: "/api/users/profile",
    description:
      "Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access.",
  },
  {
    severity: "High",
    severityColor: "bg-orange-500",
    time: "10:45:23",
    title: "Unauthorized Access to User Metadata",
    endpoint: "/api/auth/login",
    description:
      "Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing.",
  },
  {
    severity: "Medium",
    severityColor: "bg-yellow-500",
    time: "10:45:23",
    title: "Broken Authentication Rate Limiting",
    endpoint: "/api/search",
    description:
      "No effective rate limiting detected on login attempts. Automated brute-force attempts possible.",
  },
];

export default function FindingLog() {
  return (
    <div
      className="flex flex-col h-full overflow-hidden"
      style={{ background: "var(--bg-console-body)" }}
    >
      {/* Header */}
      <div
        className="px-4 py-3 shrink-0"
        style={{ borderBottom: "1px solid var(--border-console)" }}
      >
        <span
          className="text-sm font-semibold"
          style={{ color: "var(--text-primary)" }}
        >
          Finding Log
        </span>
      </div>

      {/* Findings */}
      <div className="flex-1 overflow-auto p-4 space-y-3">
        {findings.map((finding, idx) => (
          <div
            key={idx}
            className="rounded-lg p-4"
            style={{
              background: "var(--bg-finding-card)",
              border: "1px solid var(--border-finding-card)",
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <span
                className={`text-[11px] font-semibold text-white px-2 py-0.5 rounded ${finding.severityColor}`}
              >
                {finding.severity}
              </span>
              <span
                className="text-[11px]"
                style={{ color: "var(--text-tertiary)" }}
              >
                {finding.time}
              </span>
            </div>
            <h4
              className="text-sm font-semibold mb-1"
              style={{ color: "var(--text-primary)" }}
            >
              {finding.title}
            </h4>
            <p className="text-xs font-mono text-teal-600 dark:text-teal-400 mb-2">
              {finding.endpoint}
            </p>
            <p
              className="text-xs leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              {finding.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
