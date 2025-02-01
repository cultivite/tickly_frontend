import Button from "@/components/atoms/button";
import { DashboardHeader } from "@/app/dashboard/components/dashboardHeader";
import { DashboardSidebar } from "@/app/dashboard/components/dashboardSidebar";

export default function CreateEvent() {
  return (
    <div className="">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar />
        <div className="p-10 w-full flex flex-col items-center">
          <div className="font-bold">Create Event</div>
          <form action="">
            <div>
              <div className="font-bold border-b-2 border-black">
                General Info
              </div>
              <div>
                <div>Event Title</div>
                <input className="border-2" type="text" />
              </div>
              <div>
                <div>Organizer</div>
                <input className="border-2" type="text" />
              </div>
              <div>
                <div>Type & Category</div>
                <input className="border-2" type="text" />
              </div>
              <div>
                <div>Location</div>
                <input className="border-2" type="text" />
              </div>
            </div>
            <div>
              <div className="font-bold border-b-2 border-black mt-3">
                Date & Time
              </div>
              <div>
                <div>Event Starts</div>
                <input className="border-2" type="text" />
              </div>
              <div>
                <div>Start Time</div>
                <input className="border-2" type="text" />
              </div>
              <div>
                <div>Event Ends</div>
                <input className="border-2" type="text" />
              </div>
              <div>
                <div>End Time</div>
                <input className="border-2" type="text" />
              </div>
            </div>
          </form>
          <Button className="bg-green-500 rounded-full mt-2 text-white">
            Create
          </Button>
        </div>
      </div>
    </div>
  );
}
