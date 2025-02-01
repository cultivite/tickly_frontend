import Button from "@/components/atoms/button";
import { DashboardHeader } from "@/components/molecules/dashboardHeader";
import { DashboardSidebar } from "@/components/molecules/dashboardSidebar";
import InfoCard from "@/components/molecules/infoCard";

export default function Event() {
  return (
    <div className="">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar />
        <div className="p-10 w-full flex flex-col items-center gap-2">
          <div className="flex gap-4">
            <InfoCard variant="gold" title="Ticket Sales" number={666} />
            <InfoCard variant="blue" title="Running Sales" number={8} />
          </div>
            <Button className="bg-orange-500 text-white">Manage Ticket Category</Button>
            <div className="font-bold text-xl">Event List</div>
          <div className="flex gap-5">
            <div className="border-2 rounded-full px-2 flex">
              <input className="" placeholder="search" />
              <div>🔍</div>
            </div>
            <div className="border-2 px-2 rounded-full">Filter ▾</div>
          </div>
          <div className="overflow-x-scroll">
            <table className="w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2 text-left font-medium text-gray-700">
                    Event Name
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-medium text-gray-700">
                    Event Date
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-medium text-gray-700">
                    Status
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-medium text-gray-700">
                    Ticket Total
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-medium text-gray-700">
                    Ticket Left
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-medium text-gray-700">
                    Edit
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white even:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">
                    Malu bersama
                  </td>
                  <td className="border border-gray-300 px-4 py-2">3 des</td>
                  <td className="border border-gray-300 px-4 py-2">Running</td>
                  <td className="border border-gray-300 px-4 py-2">5000</td>
                  <td className="border border-gray-300 px-4 py-2">2025</td>
                  <td className="border border-gray-300 px-4 py-2 text-blue-600">
                    edit
                  </td>
                </tr>
                <tr className="odd:bg-white even:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">
                    Lompat ditempat
                  </td>
                  <td className="border border-gray-300 px-4 py-2">2juni</td>
                  <td className="border border-gray-300 px-4 py-2">Complete</td>
                  <td className="border border-gray-300 px-4 py-2">1000</td>
                  <td className="border border-gray-300 px-4 py-2">-</td>
                  <td className="border border-gray-300 text-blue-600 px-4 py-2">
                    edit
                  </td>
                </tr>
                <tr className="odd:bg-white even:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">
                    Gigit Kuncir
                  </td>
                  <td className="border border-gray-300 px-4 py-2">5 juni</td>
                  <td className="border border-gray-300 px-4 py-2">On Hold</td>
                  <td className="border border-gray-300 px-4 py-2">10</td>
                  <td className="border border-gray-300 px-4 py-2">10</td>
                  <td className="border border-gray-300 text-blue-600 px-4 py-2">
                    edit
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
