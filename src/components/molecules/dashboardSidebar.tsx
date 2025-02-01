export const DashboardSidebar = () => {
    return (
        <div className="w-40 h-[630px] border-r-2  p-2 flex flex-col gap-3 bg-[#D9D9D9] sticky top-20">
            <a href="/dashboard/profile" className="border-b-2 border-black p-1">Profile</a>
            <a href="/dashboard/event" className="border-b-2 border-black p-1">Event</a>
            <a href="/dashboard/transaction" className="border-b-2 border-black p-1">Transaction</a>
            <a href="/dashboard/user" className="border-b-2 border-black p-1">Users</a>
        </div>
    )
}