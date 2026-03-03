import {
  Radar,
  Network,
  FlaskConical,
  ShieldCheck,
  FileText,
} from "lucide-react";

const steps = [
  { name: "Spidering", icon: Radar, active: true },
  { name: "Mapping", icon: Network, active: false },
  { name: "Testing", icon: FlaskConical, active: false },
  { name: "Validating", icon: ShieldCheck, active: false },
  { name: "Reporting", icon: FileText, active: false },
];

const metadata = [
  { label: "Scan Type", value: "Grey Box" },
  { label: "Targets", value: "google.com" },
  { label: "Started At", value: "Nov 22, 09:00AM" },
  { label: "Credentials", value: "2 Active" },
  { label: "Files", value: "Control.pdf" },
  { label: "Checklists", value: "40/350", highlight: true },
];

export default function ScanProgress() {
  return (
    <div
      style={{
        background: "var(--bg-card)",
        borderBottom: "1px solid var(--border-primary)",
      }}
    >
      {/* Progress + Steps */}
      <div className="px-8 py-6 flex items-center gap-10">
        {/* Circular Progress */}
        <div className="flex flex-col items-center shrink-0">
          <div className="relative w-24 h-24">
            <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                strokeWidth="6"
                style={{ stroke: "var(--bg-step-line)" }}
              />
              <circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={`${0 * 2.64} ${264}`}
                className="text-teal-500"
                stroke="currentColor"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span
                className="text-2xl font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                0%
              </span>
              <span
                className="text-[10px] font-medium"
                style={{ color: "var(--text-muted)" }}
              >
                In Progress
              </span>
            </div>
          </div>
        </div>

        {/* Step Tracker */}
        <div className="flex items-center flex-1 justify-between">
          {steps.map((step, idx) => (
            <div key={step.name} className="flex items-center flex-1">
              <div className="flex flex-col items-center gap-2 ">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                    step.active
                      ? "bg-teal-500 text-white shadow-lg shadow-teal-500/25"
                      : ""
                  }`}
                  style={
                    !step.active
                      ? {
                          background: "var(--bg-step-circle)",
                          border: "1px solid var(--border-step-circle)",
                        }
                      : undefined
                  }
                >
                  <step.icon
                    className="w-5 h-5"
                    style={
                      !step.active ? { color: "var(--text-step)" } : undefined
                    }
                  />
                </div>
                <span
                  className={`text-xs font-medium ${
                    step.active ? "text-teal-600 dark:text-teal-400" : ""
                  }`}
                  style={
                    !step.active ? { color: "var(--text-step)" } : undefined
                  }
                >
                  {step.name}
                </span>
              </div>
              {idx < steps.length - 1 && (
                <div
                  className="h-px flex-1 -mt-5"
                  style={{ background: "var(--bg-step-line)" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div
        className="px-8 py-3 flex items-center gap-12 text-sm"
        style={{ borderTop: "1px solid var(--border-secondary)" }}
      >
        {metadata.map((item) => (
          <div key={item.label} className="flex flex-col gap-0.5">
            <span
              className="text-[11px] font-medium uppercase tracking-wider"
              style={{ color: "var(--text-tertiary)" }}
            >
              {item.label}
            </span>
            <span
              className={`text-sm font-semibold ${
                item.highlight ? "text-teal-600 dark:text-teal-400" : ""
              }`}
              style={
                !item.highlight ? { color: "var(--text-primary)" } : undefined
              }
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
