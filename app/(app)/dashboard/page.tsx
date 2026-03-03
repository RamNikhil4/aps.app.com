import Header from "@/components/dashboard/Header";
import StatsOverview from "@/components/dashboard/StatsOverview";
import ScansTable from "@/components/dashboard/ScansTable";

export default function DashboardPage() {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <main className="flex-1 py-3 pb-0">
        <StatsOverview />
        <ScansTable />
      </main>
    </div>
  );
}
