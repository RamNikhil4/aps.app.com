import Header from "@/components/dashboard/Header";
import ScanProgress from "@/components/scan/ScanProgress";
import LiveScanConsole from "@/components/scan/LiveScanConsole";
import FindingLog from "@/components/scan/FindingLog";
import ScanStatusBar from "@/components/scan/ScanStatusBar";

export default function ScanPage() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <ScanProgress />
      <div
        className="flex-1 flex overflow-hidden"
        style={{ borderTop: "1px solid var(--border-primary)" }}
      >
        <div className="flex-1 min-w-0">
          <LiveScanConsole />
        </div>
        <div
          className="w-[340px] shrink-0"
          style={{ borderLeft: "1px solid var(--border-console)" }}
        >
          <FindingLog />
        </div>
      </div>
      <ScanStatusBar />
    </div>
  );
}
