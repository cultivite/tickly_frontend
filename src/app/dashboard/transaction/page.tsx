import Button from "@/components/atoms/button";
import { DashboardHeader } from "@/components/molecules/dashboardHeader";
import { DashboardSidebar } from "@/components/molecules/dashboardSidebar";
import { TransactionHistory } from "@/components/molecules/transactionHistory";

export default function Transaction() {
  return (
    <div className="">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar />
        <div className="p-10 w-full">
            <Button className="bg-orange-500 text-white">Manage Payment Methods</Button>
          <TransactionHistory />
        </div>
      </div>
    </div>
  );
}
