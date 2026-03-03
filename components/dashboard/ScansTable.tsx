"use client";

import { useState, useMemo } from "react";
import { Search, Filter, Columns, Plus, X, ChevronDown } from "lucide-react";

const tableData = [
  {
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vulns: { critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: "4d ago",
  },
  {
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vulns: { critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: "4d ago",
  },
  {
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vulns: { critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: "4d ago",
  },
  {
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vulns: { critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: "4d ago",
  },
  {
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vulns: { critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: "4d ago",
  },
  {
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vulns: { critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: "4d ago",
  },
  {
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vulns: { critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: "4d ago",
  },
  {
    name: "Web App Servers",
    type: "Greybox",
    status: "Scheduled",
    progress: 100,
    vulns: { critical: 5, high: 12, medium: 0, low: 0 },
    lastScan: "4d ago",
  },
  {
    name: "Web App Servers",
    type: "Greybox",
    status: "Scheduled",
    progress: 100,
    vulns: { critical: 5, high: 12, medium: 0, low: 0 },
    lastScan: "4d ago",
  },
  {
    name: "IoT Devices",
    type: "Blackbox",
    status: "Failed",
    progress: 10,
    vulns: { critical: 2, high: 4, medium: 8, low: 1 },
    lastScan: "3d ago",
  },
  {
    name: "Temp Data",
    type: "Blackbox",
    status: "Failed",
    progress: 10,
    vulns: { critical: 2, high: 4, medium: 8, low: 1 },
    lastScan: "3d ago",
  },
];

function getStatusStyle(status: string) {
  switch (status) {
    case "Completed":
      return {
        color: "var(--status-completed-text)",
        background: "var(--status-completed-bg)",
        border: "1px solid var(--status-completed-border)",
      };
    case "Scheduled":
      return {
        color: "var(--status-scheduled-text)",
        background: "var(--status-scheduled-bg)",
        border: "1px solid var(--status-scheduled-border)",
      };
    case "Failed":
      return {
        color: "var(--status-failed-text)",
        background: "var(--status-failed-bg)",
        border: "1px solid var(--status-failed-border)",
      };
    default:
      return {};
  }
}

const STATUS_OPTIONS = ["Completed", "Scheduled", "Failed"];
const TYPE_OPTIONS = ["Greybox", "Blackbox"];

export default function ScansTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState<string[]>([]);
  const [typeFilter, setTypeFilter] = useState<string[]>([]);

  const toggleFilter = (
    value: string,
    current: string[],
    setter: (v: string[]) => void,
  ) => {
    setter(
      current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value],
    );
  };

  const activeFilterCount = statusFilter.length + typeFilter.length;

  const filteredData = useMemo(() => {
    return tableData.filter((row) => {
      const q = searchQuery.toLowerCase();
      if (
        q &&
        !row.name.toLowerCase().includes(q) &&
        !row.type.toLowerCase().includes(q)
      ) {
        return false;
      }

      if (statusFilter.length > 0 && !statusFilter.includes(row.status)) {
        return false;
      }

      if (typeFilter.length > 0 && !typeFilter.includes(row.type)) {
        return false;
      }
      return true;
    });
  }, [searchQuery, statusFilter, typeFilter]);

  const clearFilters = () => {
    setStatusFilter([]);
    setTypeFilter([]);
  };

  return (
    <div
      className="rounded-xl shadow-sm overflow-hidden m-4 mb-0"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border-primary)",
      }}
    >
      <div
        className="px-4 py-2.5 flex items-center justify-between"
        style={{ borderBottom: "1px solid var(--border-primary)" }}
      >
        <div className="relative w-80">
          <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
            <Search
              className="h-3.5 w-3.5"
              style={{ color: "var(--text-tertiary)" }}
            />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-8 pr-3 py-1.5 rounded-lg leading-5 text-xs transition-colors focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
            style={{
              background: "var(--bg-input)",
              border: "1px solid var(--border-input)",
              color: "var(--text-primary)",
            }}
            placeholder="Search scans by name or type..."
          />
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
              style={
                activeFilterCount > 0
                  ? {
                      border: "1px solid var(--border-filter-active)",
                      color: "var(--text-filter-active)",
                      background: "var(--bg-filter-active)",
                    }
                  : {
                      border: "1px solid var(--border-input)",
                      color: "var(--text-secondary)",
                      background: "var(--bg-input)",
                    }
              }
            >
              <Filter
                className="h-3.5 w-3.5 mr-1.5"
                style={{ color: "var(--text-tertiary)" }}
              />
              Filter
              {activeFilterCount > 0 && (
                <span className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full bg-teal-600 text-white text-[10px] font-bold">
                  {activeFilterCount}
                </span>
              )}
              <ChevronDown
                className="h-3 w-3 ml-1"
                style={{ color: "var(--text-tertiary)" }}
              />
            </button>

            {/* Filter dropdown */}
            {filterOpen && (
              <div
                className="absolute right-0 mt-1 w-56 rounded-lg shadow-lg z-30 py-2"
                style={{
                  background: "var(--bg-dropdown)",
                  border: "1px solid var(--border-dropdown)",
                }}
              >
                <div className="px-3 py-1.5 flex items-center justify-between">
                  <span
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Filters
                  </span>
                  {activeFilterCount > 0 && (
                    <button
                      onClick={clearFilters}
                      className="text-[10px] text-teal-600 dark:text-teal-400 hover:opacity-80 font-medium"
                    >
                      Clear all
                    </button>
                  )}
                </div>

                <div
                  className="mt-1 pt-1"
                  style={{ borderTop: "1px solid var(--border-secondary)" }}
                >
                  <div
                    className="px-3 py-1 text-[10px] font-semibold uppercase tracking-wider"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    Status
                  </div>
                  {STATUS_OPTIONS.map((status) => (
                    <label
                      key={status}
                      className="flex items-center px-3 py-1 cursor-pointer transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={statusFilter.includes(status)}
                        onChange={() =>
                          toggleFilter(status, statusFilter, setStatusFilter)
                        }
                        className="h-3.5 w-3.5 rounded text-teal-600 focus:ring-teal-500"
                        style={{
                          borderColor: "var(--border-checkbox)",
                          background: "var(--bg-checkbox)",
                        }}
                      />
                      <span
                        className="ml-2 text-xs"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {status}
                      </span>
                    </label>
                  ))}
                </div>

                <div
                  className="mt-1 pt-1"
                  style={{ borderTop: "1px solid var(--border-secondary)" }}
                >
                  <div
                    className="px-3 py-1 text-[10px] font-semibold uppercase tracking-wider"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    Type
                  </div>
                  {TYPE_OPTIONS.map((type) => (
                    <label
                      key={type}
                      className="flex items-center px-3 py-1 cursor-pointer transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={typeFilter.includes(type)}
                        onChange={() =>
                          toggleFilter(type, typeFilter, setTypeFilter)
                        }
                        className="h-3.5 w-3.5 rounded text-teal-600 focus:ring-teal-500"
                        style={{
                          borderColor: "var(--border-checkbox)",
                          background: "var(--bg-checkbox)",
                        }}
                      />
                      <span
                        className="ml-2 text-xs"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {type}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
          <button
            className="flex items-center px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
            style={{
              border: "1px solid var(--border-input)",
              color: "var(--text-secondary)",
              background: "var(--bg-input)",
            }}
          >
            <Columns
              className="h-3.5 w-3.5 mr-1.5"
              style={{ color: "var(--text-tertiary)" }}
            />
            Column
          </button>
          <button className="flex items-center px-3 py-1.5 border border-transparent rounded-lg shadow-sm text-xs font-medium text-white bg-teal-600 hover:bg-teal-700 transition-colors">
            <Plus className="h-3.5 w-3.5 mr-1.5" />
            New scan
          </button>
        </div>
      </div>

      {activeFilterCount > 0 && (
        <div
          className="px-4 py-1.5 flex items-center gap-1.5"
          style={{
            borderBottom: "1px solid var(--border-secondary)",
            background: "var(--bg-elevated)",
          }}
        >
          <span
            className="text-[10px] font-medium mr-1"
            style={{ color: "var(--text-tertiary)" }}
          >
            Active:
          </span>
          {statusFilter.map((s) => (
            <span
              key={s}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium"
              style={{
                background: "var(--bg-filter-active)",
                border: "1px solid var(--border-filter-active)",
                color: "var(--text-filter-active)",
              }}
            >
              {s}
              <X
                className="h-2.5 w-2.5 cursor-pointer hover:opacity-70"
                onClick={() => toggleFilter(s, statusFilter, setStatusFilter)}
              />
            </span>
          ))}
          {typeFilter.map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-500/15 border border-indigo-200 dark:border-indigo-500/30 text-[10px] font-medium text-indigo-700 dark:text-indigo-400"
            >
              {t}
              <X
                className="h-2.5 w-2.5 cursor-pointer hover:opacity-70"
                onClick={() => toggleFilter(t, typeFilter, setTypeFilter)}
              />
            </span>
          ))}
          <button
            onClick={clearFilters}
            className="ml-auto text-[10px] hover:opacity-70"
            style={{ color: "var(--text-tertiary)" }}
          >
            Clear all
          </button>
        </div>
      )}

      {/* Table */}
      <div className="overflow-auto h-[calc(100vh-355px)]">
        <table
          className="min-w-full"
          style={{ borderCollapse: "separate", borderSpacing: 0 }}
        >
          <thead>
            <tr style={{ background: "var(--bg-thead-sticky)" }}>
              <th
                scope="col"
                className="px-4 py-2 text-left text-[11px] font-semibold uppercase tracking-wider sticky top-0 z-10"
                style={{
                  color: "var(--text-muted)",
                  background: "var(--bg-thead-sticky)",
                  borderBottom: "1px solid var(--divide-table)",
                }}
              >
                Scan Name
              </th>
              <th
                scope="col"
                className="px-4 py-2 text-left text-[11px] font-semibold uppercase tracking-wider sticky top-0 z-10"
                style={{
                  color: "var(--text-muted)",
                  background: "var(--bg-thead-sticky)",
                  borderBottom: "1px solid var(--divide-table)",
                }}
              >
                Type
              </th>
              <th
                scope="col"
                className="px-4 py-2 text-left text-[11px] font-semibold uppercase tracking-wider sticky top-0 z-10"
                style={{
                  color: "var(--text-muted)",
                  background: "var(--bg-thead-sticky)",
                  borderBottom: "1px solid var(--divide-table)",
                }}
              >
                Status
              </th>
              <th
                scope="col"
                className="px-4 py-2 text-left text-[11px] font-semibold uppercase tracking-wider sticky top-0 z-10"
                style={{
                  color: "var(--text-muted)",
                  background: "var(--bg-thead-sticky)",
                  borderBottom: "1px solid var(--divide-table)",
                }}
              >
                Progress
              </th>
              <th
                scope="col"
                className="px-4 py-2 text-left text-[11px] font-semibold uppercase tracking-wider sticky top-0 z-10"
                style={{
                  color: "var(--text-muted)",
                  background: "var(--bg-thead-sticky)",
                  borderBottom: "1px solid var(--divide-table)",
                }}
              >
                Vulnerability
              </th>
              <th
                scope="col"
                className="px-4 py-2 text-right text-[11px] font-semibold uppercase tracking-wider sticky top-0 z-10"
                style={{
                  color: "var(--text-muted)",
                  background: "var(--bg-thead-sticky)",
                  borderBottom: "1px solid var(--divide-table)",
                }}
              >
                Last Scan
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="px-4 py-8 text-center text-sm"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  No scans match your search or filters.
                </td>
              </tr>
            ) : (
              filteredData.map((row, idx) => (
                <tr
                  key={idx}
                  className="transition-colors"
                  style={{
                    borderBottom:
                      idx < filteredData.length - 1
                        ? "1px solid var(--divide-body)"
                        : undefined,
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "var(--bg-row-hover)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "transparent")
                  }
                >
                  <td
                    className="px-4 py-2 whitespace-nowrap text-xs font-medium"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {row.name}
                  </td>
                  <td
                    className="px-4 py-2 whitespace-nowrap text-xs"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {row.type}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <span
                      className="inline-flex items-center px-2 py-px rounded text-[11px] font-medium"
                      style={getStatusStyle(row.status)}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <div className="flex items-center space-x-2 w-36">
                      <div
                        className="w-full rounded-full h-1.5"
                        style={{ background: "var(--bg-progress-track)" }}
                      >
                        <div
                          className={`h-1.5 rounded-full ${
                            row.status === "Failed"
                              ? "bg-pink-500"
                              : "bg-teal-500"
                          }`}
                          style={{ width: `${row.progress}%` }}
                        ></div>
                      </div>
                      <span
                        className="text-xs font-medium tabular-nums"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {row.progress}%
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <div className="flex items-center space-x-1">
                      {row.vulns.critical > 0 && (
                        <span className="inline-flex items-center justify-center w-6 h-5 rounded bg-pink-500 text-white text-[10px] font-medium">
                          {row.vulns.critical}
                        </span>
                      )}
                      {row.vulns.high > 0 && (
                        <span className="inline-flex items-center justify-center w-6 h-5 rounded bg-orange-500 text-white text-[10px] font-medium">
                          {row.vulns.high}
                        </span>
                      )}
                      {row.vulns.medium > 0 && (
                        <span className="inline-flex items-center justify-center w-6 h-5 rounded bg-yellow-400 text-white text-[10px] font-medium">
                          {row.vulns.medium}
                        </span>
                      )}
                      {row.vulns.low > 0 && (
                        <span className="inline-flex items-center justify-center w-6 h-5 rounded bg-emerald-500 text-white text-[10px] font-medium">
                          {row.vulns.low}
                        </span>
                      )}
                    </div>
                  </td>
                  <td
                    className="px-4 py-2 whitespace-nowrap text-right text-xs"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {row.lastScan}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
