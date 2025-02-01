import { DashboardHeader } from "@/app/dashboard/components/dashboardHeader";
import { DashboardSidebar } from "@/app/dashboard/components/dashboardSidebar";
import InfoCard from "@/app/dashboard/components/infoCard";
import { TransactionHistory } from "@/app/dashboard/components/transactionHistory";

export default function Home() {
  return (
    <div className="">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar />
        <div className="p-10 w-full ">
          <div className="mb-10 text-xl">Welcome Back Admin..</div>
          {/* info card */}
          <div className="flex gap-10 justify-center flex-col md:flex-row">
            <div className="flex flex-col gap-4">
              <InfoCard variant="grey" title="Total User" number={238} />
              <InfoCard variant="grey" title="Web Visitor" number={12300} />
            </div>
            <div className="flex flex-col gap-4">
              <InfoCard variant="gold" title="Ticket Sales" number={666} />
              <InfoCard variant="blue" title="Running Sales" number={8} />
            </div>
          </div>
          <TransactionHistory />
        </div>
      </div>
    </div>
  );
}
