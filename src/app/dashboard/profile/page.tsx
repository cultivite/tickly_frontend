import Button from "@/components/atoms/button";
import { DashboardHeader } from "@/app/dashboard/components/dashboardHeader";
import { DashboardSidebar } from "@/app/dashboard/components/dashboardSidebar";

export default function Profile() {
  return (
    <div className="">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar />
        <div className="p-10 w-full flex flex-col items-center gap-10">
          <div className="flex flex-col items-center">
            <div className="text-5xl">👤</div>
            <div>
              <div className="text-xl">PinkMan</div>
              <div>admin</div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex gap-2 mb-2">
              <div className="font-bold text-xl">PROFILE</div>
              <Button className="bg-gray-300 text-xs h-fit">Edit</Button>
            </div>
            <div>
              <div>Admin Name: Murtojo Awalludin</div>
              <div>Role: SuperAdmin</div>
              <div>Status: Mager</div>
            </div>
            <Button className="bg-blue-400 text-white mt-3">
              Save Changes
            </Button>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <Button className="bg-red-700 text-white">Delete Account</Button>
            <Button className="bg-gray-400">Log Out</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
