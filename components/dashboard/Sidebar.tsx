"use client";

import {
  LayoutDashboard,
  FolderOpen,
  Activity,
  Calendar,
  Bell,
  Settings,
  Info,
  ChevronRight,
  Sun,
  Moon,
  Monitor,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { name: "Projects", icon: FolderOpen, href: "#" },
  { name: "Scans", icon: Activity, href: "/scan" },
  { name: "Schedule", icon: Calendar, href: "#" },
];

const secondaryNavItems = [
  { name: "Notifications", icon: Bell },
  { name: "Settings", icon: Settings },
  { name: "Support", icon: Info },
];

export default function Sidebar() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/dashboard") return pathname === "/dashboard";
    return pathname.startsWith(href);
  };

  return (
    <div
      className="w-[280px] h-screen flex flex-col fixed left-0 top-0"
      style={{
        background: "var(--bg-primary)",
        borderRight: "1px solid var(--border-primary)",
      }}
    >
      {/* Brand */}
      <div className="p-8 flex items-center space-x-2">
        <div className="h-6 w-6 rounded-full bg-teal-500 flex items-center justify-center relative">
          <div className="h-2 w-2 rounded-full bg-white absolute"></div>
        </div>
        <span className="text-xl font-bold tracking-tight text-teal-500 dark:text-teal-400">
          aps
        </span>
      </div>

      {/* Main Navigation */}
      <div className="px-4 flex-1">
        <nav className="space-y-1">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center px-4 py-3 rounded-full text-sm font-medium transition-colors"
                style={
                  active
                    ? {
                        background: "var(--bg-active-nav)",
                        color: "var(--text-active-nav)",
                      }
                    : { color: "var(--text-secondary)" }
                }
              >
                <item.icon
                  className="mr-3 h-5 w-5"
                  style={{
                    color: active
                      ? "var(--icon-active-nav)"
                      : "var(--text-tertiary)",
                  }}
                />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="mt-8">
          <nav className="space-y-1">
            {secondaryNavItems.map((item) => (
              <Link
                key={item.name}
                href="#"
                className="flex items-center px-4 py-3 rounded-full text-sm font-medium transition-colors"
                style={{ color: "var(--text-secondary)" }}
              >
                <item.icon
                  className="mr-3 h-5 w-5"
                  style={{ color: "var(--text-tertiary)" }}
                />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Theme Toggle */}
        <div className="mt-8 px-4">
          <div className="flex items-center justify-between px-4 py-2">
            <span
              className="text-sm font-medium flex items-center gap-2"
              style={{ color: "var(--text-secondary)" }}
            >
              {theme === "light" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
              {theme === "light" ? "Light Mode" : "Dark Mode"}
            </span>
            <button
              onClick={() =>
                setTheme(
                  theme === "dark" || theme === "system" ? "light" : "dark",
                )
              }
              className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${theme === "dark" || theme === "system" ? "bg-teal-500" : "bg-zinc-200"}`}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${theme === "dark" || theme === "system" ? "translate-x-5" : "translate-x-0"}`}
              />
            </button>
          </div>
        </div>
      </div>

      <div
        className="p-4"
        style={{ borderTop: "1px solid var(--border-primary)" }}
      >
        <div
          className="flex items-center p-2 rounded-xl cursor-pointer transition-colors"
          style={{}}
        >
          <div className="h-10 w-10 rounded-full bg-yellow-400 flex items-center justify-center shrink-0">
            <svg
              className="w-6 h-6 text-yellow-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <div className="ml-3 flex-1 overflow-hidden">
            <p
              className="text-sm font-medium truncate"
              style={{ color: "var(--text-primary)" }}
            >
              admin@edu.com
            </p>
            <p
              className="text-xs font-medium truncate"
              style={{ color: "var(--text-muted)" }}
            >
              Security Lead
            </p>
          </div>
          <ChevronRight
            className="h-5 w-5 shrink-0"
            style={{ color: "var(--text-tertiary)" }}
          />
        </div>
      </div>
    </div>
  );
}
