import {
  Ban,
  AlertTriangle,
  RefreshCw,
  TrendingUp,
  TrendingDown,
  Search,
} from "lucide-react";

export default function StatsOverview() {
  return (
    <div
      style={{
        background: "var(--bg-primary)",
        borderBottom: "1px solid var(--border-primary)",
      }}
    >
      <div className="px-8 py-4 flex items-center justify-between text-sm whitespace-nowrap overflow-x-auto">
        <div
          className="flex items-center space-x-8"
          style={{ color: "var(--text-secondary)" }}
        >
          <div className="flex items-center">
            <span className="mr-2" style={{ color: "var(--text-tertiary)" }}>
              Org:
            </span>
            <span
              className="font-medium"
              style={{ color: "var(--text-primary)" }}
            >
              Project X
            </span>
          </div>
          <div
            className="w-px h-4"
            style={{ background: "var(--border-primary)" }}
          />
          <div className="flex items-center">
            <span className="mr-2" style={{ color: "var(--text-tertiary)" }}>
              Owner:
            </span>
            <span
              className="font-medium"
              style={{ color: "var(--text-primary)" }}
            >
              Nammagiri
            </span>
          </div>
          <div
            className="w-px h-4"
            style={{ background: "var(--border-primary)" }}
          />
          <div className="flex items-center">
            <span className="mr-2" style={{ color: "var(--text-tertiary)" }}>
              Total Scans:
            </span>
            <span
              className="font-medium"
              style={{ color: "var(--text-primary)" }}
            >
              100
            </span>
          </div>
          <div
            className="w-px h-4"
            style={{ background: "var(--border-primary)" }}
          />
          <div className="flex items-center">
            <span className="mr-2" style={{ color: "var(--text-tertiary)" }}>
              Scheduled:
            </span>
            <span
              className="font-medium"
              style={{ color: "var(--text-primary)" }}
            >
              1000
            </span>
          </div>
          <div
            className="w-px h-4"
            style={{ background: "var(--border-primary)" }}
          />
          <div className="flex items-center">
            <span className="mr-2" style={{ color: "var(--text-tertiary)" }}>
              Rescans:
            </span>
            <span
              className="font-medium"
              style={{ color: "var(--text-primary)" }}
            >
              100
            </span>
          </div>
          <div
            className="w-px h-4"
            style={{ background: "var(--border-primary)" }}
          />
          <div className="flex items-center">
            <span className="mr-2" style={{ color: "var(--text-tertiary)" }}>
              Failed Scans:
            </span>
            <span
              className="font-medium"
              style={{ color: "var(--text-primary)" }}
            >
              100
            </span>
          </div>
        </div>

        <div className="flex items-center text-teal-600 dark:text-teal-400 font-medium ml-8">
          <RefreshCw className="w-4 h-4 mr-2" />
          10 mins ago
        </div>
      </div>

      <div
        className="h-px w-full"
        style={{ background: "var(--border-secondary)" }}
      />

      <div className="px-8 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        <div className="flex flex-col space-y-3">
          <div className="flex items-center justify-between">
            <span
              className="font-medium font-sans"
              style={{ color: "var(--text-muted)" }}
            >
              Critical Severity
            </span>
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: "var(--bg-pink-icon)" }}
            >
              <Ban className="w-4 h-4 text-pink-600 dark:text-pink-500" />
            </div>
          </div>
          <div className="flex items-baseline space-x-3">
            <span
              className="text-3xl font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              86
            </span>
            <div className="flex items-center text-xs font-medium text-pink-600 dark:text-pink-500">
              <TrendingUp className="w-3 h-3 mr-1" />
              +2% increase than yesterday
            </div>
          </div>
        </div>

        {/* High */}
        <div className="flex flex-col space-y-3">
          <div className="flex items-center justify-between">
            <span
              className="font-medium font-sans"
              style={{ color: "var(--text-muted)" }}
            >
              High Severity
            </span>
            <div
              className="w-8 h-8 rounded-md flex items-center justify-center"
              style={{ background: "var(--bg-orange-icon)" }}
            >
              <AlertTriangle className="w-4 h-4 text-orange-500" />
            </div>
          </div>
          <div className="flex items-baseline space-x-3">
            <span
              className="text-3xl font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              16
            </span>
            <div className="flex items-center text-xs font-medium text-pink-600 dark:text-pink-500">
              <TrendingUp className="w-3 h-3 mr-1" />
              +0.9% increase than yesterday
            </div>
          </div>
        </div>

        {/* Medium */}
        <div className="flex flex-col space-y-3">
          <div className="flex items-center justify-between">
            <span
              className="font-medium font-sans"
              style={{ color: "var(--text-muted)" }}
            >
              Medium Severity
            </span>
            <div
              className="w-8 h-8 rounded-md flex items-center justify-center"
              style={{ background: "var(--bg-yellow-icon)" }}
            >
              <AlertTriangle className="w-4 h-4 text-yellow-500" />
            </div>
          </div>
          <div className="flex items-baseline space-x-3">
            <span
              className="text-3xl font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              26
            </span>
            <div className="flex items-center text-xs font-medium text-green-600 dark:text-green-500">
              <TrendingDown className="w-3 h-3 mr-1" />
              -0.9% decrease than yesterday
            </div>
          </div>
        </div>

        {/* Low */}
        <div className="flex flex-col space-y-3">
          <div className="flex items-center justify-between">
            <span
              className="font-medium font-sans"
              style={{ color: "var(--text-muted)" }}
            >
              Low Severity
            </span>
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: "var(--bg-blue-icon)" }}
            >
              <Search className="w-4 h-4 text-blue-500" />
            </div>
          </div>
          <div className="flex items-baseline space-x-3">
            <span
              className="text-3xl font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              16
            </span>
            <div className="flex items-center text-xs font-medium text-pink-600 dark:text-pink-500">
              <TrendingUp className="w-3 h-3 mr-1" />
              +0.9% increase than yesterday
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
