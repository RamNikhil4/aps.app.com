export default function Header() {
  return (
    <div
      className="h-[65px] flex items-center justify-between px-8"
      style={{
        background: "var(--bg-primary)",
        borderBottom: "1px solid var(--border-primary)",
      }}
    >
      <div className="flex items-center space-x-2 text-sm">
        <span
          className="font-semibold"
          style={{ color: "var(--text-primary)" }}
        >
          Scan
        </span>
        <span
          className="flex items-center"
          style={{ color: "var(--text-tertiary)" }}
        >
          <svg
            className="w-5 h-5 mx-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          /
        </span>
        <span style={{ color: "var(--text-muted)" }}>Private Assets</span>
        <span className="mx-1" style={{ color: "var(--text-tertiary)" }}>
          /
        </span>
        <span className="font-medium text-teal-600 dark:text-teal-400">
          New Scan
        </span>
      </div>

      <div className="flex items-center space-x-4">
        <button
          className="px-4 py-2 text-sm font-medium rounded-lg transition-colors"
          style={{
            background: "var(--bg-btn-secondary)",
            border: "1px solid var(--border-btn-secondary)",
            color: "var(--text-btn-secondary)",
          }}
        >
          Export Report
        </button>
        <button
          className="px-4 py-2 text-sm font-medium rounded-lg transition-colors"
          style={{
            background: "var(--bg-btn-stop)",
            border: "1px solid var(--border-btn-stop)",
            color: "var(--text-btn-stop)",
          }}
        >
          Stop Scan
        </button>
      </div>
    </div>
  );
}
