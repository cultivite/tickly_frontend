import { DashboardHeader } from "@/app/dashboard/components/dashboardHeader";
import { DashboardSidebar } from "@/app/dashboard/components/dashboardSidebar";
import InfoCard from "@/app/dashboard/components/infoCard";

export default function Users() {
  return (
    <div className="">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar />
        <div className="p-10 w-full flex flex-col items-center gap-10">
          <div className="flex gap-4">
            <InfoCard variant="grey" title="Total User" number={238} />
            <InfoCard variant="grey" title="Web Visitor" number={12300} />
          </div>
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
                    User Name
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-medium text-gray-700">
                    Email
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-medium text-gray-700">
                    Phone
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-medium text-gray-700">
                    Last Visit
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-medium text-gray-700">
                    Transactions
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-medium text-gray-700">
                    Edit
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-medium text-gray-700">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white even:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">Kokomoro</td>
                  <td className="border border-gray-300 px-4 py-2">
                    kokomoro@moro
                  </td>
                  <td className="border border-gray-300 px-4 py-2">02111123</td>
                  <td className="border border-gray-300 px-4 py-2">
                    yesterday
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-blue-600">
                    5
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-green-600">
                    edit
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-red-600">
                    delete
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
