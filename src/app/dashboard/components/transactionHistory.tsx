export const TransactionHistory = () => {
  return (
    <div className="p-4">
      <div className="text-2xl font-semibold mb-4">Recent Orders</div>
      <div className="overflow-x-scroll">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-left font-medium text-gray-700">
                Order#
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left font-medium text-gray-700">
                Buyer
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left font-medium text-gray-700">
                Quantity
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left font-medium text-gray-700">
                Price
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left font-medium text-gray-700">
                Date
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left font-medium text-gray-700">
                Payment
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white even:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">1322</td>
              <td className="border border-gray-300 px-4 py-2">Jokowiw</td>
              <td className="border border-gray-300 px-4 py-2">3</td>
              <td className="border border-gray-300 px-4 py-2">Rp.2000</td>
              <td className="border border-gray-300 px-4 py-2">2025-01-28</td>
              <td className="border border-gray-300 px-4 py-2">Paid</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">66251</td>
              <td className="border border-gray-300 px-4 py-2">Bu Jali</td>
              <td className="border border-gray-300 px-4 py-2">2</td>
              <td className="border border-gray-300 px-4 py-2">Rp.250.000</td>
              <td className="border border-gray-300 px-4 py-2">2025-01-28</td>
              <td className="border border-gray-300 px-4 py-2">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
