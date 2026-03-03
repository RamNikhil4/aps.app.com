import Sidebar from "@/components/dashboard/Sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="min-h-screen flex font-sans"
      style={{ background: "var(--bg-secondary)" }}
    >
      <Sidebar />
      <div className="flex-1 ml-[280px]">{children}</div>
    </div>
  );
}
