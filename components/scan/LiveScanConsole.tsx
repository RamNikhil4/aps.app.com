"use client";

import { useState } from "react";
import { ChevronDown, X } from "lucide-react";

const activityLogs = [
  {
    time: "09:00:00",
    content: [
      { text: "I'll begin a systematic penetration test on " },
      { text: "helpdesk.democorp.com", type: "url" as const },
      { text: ". Let me start with reconnaissance and enumeration." },
    ],
  },
  {
    time: "09:01:00",
    content: [
      {
        text: "Good! target is online. Now let me perform port scanning to identify running services.",
      },
    ],
  },
  {
    time: "09:02:00",
    content: [
      { text: "Excellent reconnaissance results:\n" },
      {
        text: "  • helpdesk.democorp.com: Apache httpd 2.4.65 on port 80 (web server)",
        type: "dim" as const,
      },
      {
        text: "\nLet me probe the web server on target first to understand its structure.",
      },
    ],
  },
  {
    time: "09:03:00",
    content: [
      {
        text: 'Great! I found a login page for a Help Desk Platform. I can see a useful comment: "TODO: Delete the testing account (test:test)". Let me test this credential. The login redirects to ',
      },
      { text: "/password/test", type: "highlight" as const },
      { text: ". Let me follow that path and explore it." },
    ],
  },
  {
    time: "09:04:00",
    content: [
      {
        text: "The POST method is not allowed on /password/test. Let me check what the JavaScript does - it posts to ",
      },
      { text: "'#'", type: "keyword" as const },
      {
        text: " which means the current page. Let me try a different approach.",
      },
    ],
  },
  {
    time: "09:05:00",
    content: [
      {
        text: "It redirects back to /password/test. Let me check if there's an /api endpoint or look for other paths. Let me also try exploring with the ",
      },
      { text: "test:test", type: "url" as const },
      { text: " password directly on other endpoints." },
    ],
  },
  {
    time: "09:06:00",
    content: [
      { text: "Great! I can access the dashboard using the " },
      { text: '"X-UserId: 10032"', type: "header" as const },
      {
        text: ' header. The dashboard shows "Welcome, John Doe". This suggests an ',
      },
      { text: "**IDOR vulnerability**", type: "keyword" as const },
      {
        text: " - I can access any user's dashboard by just changing the X-UserId header. Let me explore more of the application...",
      },
    ],
  },
];

const verificationLogs = [
  {
    time: "09:10:00",
    content: [
      { text: "Verifying SQL injection on " },
      { text: "/api/users/profile", type: "url" as const },
      { text: " — confirming blind boolean-based injection vector." },
    ],
  },
  {
    time: "09:11:00",
    content: [
      { text: "Re-testing IDOR on " },
      { text: "/api/auth/login", type: "url" as const },
      { text: " endpoint with varied user IDs. Confirmed exploitable." },
    ],
  },
  {
    time: "09:12:00",
    content: [
      { text: "Verifying rate limiting bypass on " },
      { text: "/api/search", type: "url" as const },
      { text: " — no throttling after 500 requests in 10s window." },
    ],
  },
];

type ContentSegment = {
  text: string;
  type?: "url" | "highlight" | "header" | "keyword" | "dim";
};

function LogContent({ segments }: { segments: ContentSegment[] }) {
  return (
    <span>
      {segments.map((seg, i) => {
        switch (seg.type) {
          case "url":
            return (
              <span
                key={i}
                className="text-teal-600 dark:text-teal-400 underline decoration-teal-600/30 dark:decoration-teal-400/30"
              >
                {seg.text}
              </span>
            );
          case "highlight":
            return (
              <span
                key={i}
                className="px-1.5 py-0.5 rounded text-teal-700 dark:text-teal-300 bg-teal-100 dark:bg-teal-500/20 font-mono text-[12px]"
              >
                {seg.text}
              </span>
            );
          case "header":
            return (
              <span
                key={i}
                className="px-1.5 py-0.5 rounded text-pink-700 dark:text-pink-300 bg-pink-100 dark:bg-pink-500/20 font-mono text-[12px]"
              >
                {seg.text}
              </span>
            );
          case "keyword":
            return (
              <span
                key={i}
                className="font-semibold text-orange-600 dark:text-orange-400"
              >
                {seg.text}
              </span>
            );
          case "dim":
            return (
              <span key={i} style={{ color: "var(--text-muted)" }}>
                {seg.text}
              </span>
            );
          default:
            return <span key={i}>{seg.text}</span>;
        }
      })}
    </span>
  );
}

export default function LiveScanConsole() {
  const [activeTab, setActiveTab] = useState<"activity" | "verification">(
    "activity",
  );

  const logs = activeTab === "activity" ? activityLogs : verificationLogs;

  return (
    <div
      className="flex flex-col h-full rounded-tl-xl overflow-hidden"
      style={{
        background: "var(--bg-console)",
        borderRight: "1px solid var(--border-console)",
      }}
    >
      {/* Console Header */}
      <div
        className="px-4 py-3 flex items-center justify-between shrink-0"
        style={{ borderBottom: "1px solid var(--border-console)" }}
      >
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span
              className="text-sm font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              Live Scan Console
            </span>
          </div>
          <span
            className="text-xs px-2 py-0.5 rounded-full"
            style={{
              color: "var(--text-muted)",
              background: "var(--bg-elevated)",
            }}
          >
            ⏳ Running...
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            className="p-1 rounded transition-colors"
            style={{ color: "var(--text-tertiary)" }}
          >
            <ChevronDown className="w-4 h-4" />
          </button>
          <button
            className="p-1 rounded transition-colors"
            style={{ color: "var(--text-tertiary)" }}
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div
        className="flex shrink-0"
        style={{ borderBottom: "1px solid var(--border-console)" }}
      >
        <button
          onClick={() => setActiveTab("activity")}
          className="px-4 py-2.5 text-sm font-medium transition-colors relative"
          style={{
            color:
              activeTab === "activity"
                ? "var(--text-tab-active)"
                : "var(--text-tab-inactive)",
          }}
        >
          Activity Log
          {activeTab === "activity" && (
            <div
              className="absolute bottom-0 left-0 right-0 h-0.5"
              style={{ background: "var(--border-tab-active)" }}
            />
          )}
        </button>
        <button
          onClick={() => setActiveTab("verification")}
          className="px-4 py-2.5 text-sm font-medium transition-colors relative"
          style={{
            color:
              activeTab === "verification"
                ? "var(--text-tab-active)"
                : "var(--text-tab-inactive)",
          }}
        >
          Verification Loops
          {activeTab === "verification" && (
            <div
              className="absolute bottom-0 left-0 right-0 h-0.5"
              style={{ background: "var(--border-tab-active)" }}
            />
          )}
        </button>
      </div>

      {/* Log Output */}
      <div
        className="flex-1 overflow-auto px-5 py-4 font-mono text-[13px] leading-relaxed space-y-5"
        style={{
          background: "var(--bg-console-body)",
          color: "var(--text-secondary)",
        }}
      >
        {logs.map((log, idx) => (
          <div key={idx} className="flex gap-0">
            <span
              className="shrink-0 font-semibold mr-2 select-none"
              style={{ color: "var(--text-tertiary)" }}
            >
              [{log.time}]
            </span>
            <div className="flex-1 whitespace-pre-wrap">
              <LogContent segments={log.content} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
