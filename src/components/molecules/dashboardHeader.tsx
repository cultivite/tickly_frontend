import Button from "../atoms/button"

export const DashboardHeader = () => {
    return (
        <header className="flex justify-between p-4 top-0 sticky z-10 bg-[#D9D9D9] h-20 items-center">
            <a href="/dashboard" className="font-bold text-3xl text-white">TICKLY</a>
            <div className="flex gap-2 items-center">
                <a href="/dashboard/event/create-event"><Button className="bg-[#5A80A0] text-white w-48 h-8 font-bold">create event</Button></a>
                <Button className="bg-transparent">🔔</Button>
                <Button className="p-1 rounded-full w-8 h-8 bg-white">👤</Button>
            </div>
        </header>
    )
}