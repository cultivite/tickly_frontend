import Button from "@/components/atoms/button";
import { DashboardHeader } from "@/app/dashboard/components/dashboardHeader";
import { DashboardSidebar } from "@/app/dashboard/components/dashboardSidebar";
import { TransactionHistory } from "@/app/dashboard/components/transactionHistory";

export default function Transaction() {
  return (
    <div className="">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar />
        <div className="p-10 w-full">
          <Button className="bg-orange-500 text-white">
            Manage Payment Methods
          </Button>
          <TransactionHistory />
        </div>
      </div>
    </div>
  );
}
