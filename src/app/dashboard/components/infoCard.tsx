interface IInfoCardProps {
    title: string;
    number: number;
    variant: "grey" | "gold" | "blue";
    href?: string;
}

export const InfoCard: React.FC<IInfoCardProps> = ({
    title,
    number,
    variant,
    href,
}) => {
    const baseClasses = "rounded-xl px-4 py-2 cursor-pointer w-64 h-36 flex flex-col text-black gap-2";

    const variants = {
        blue: "bg-[#86A4BD]",
        grey: "bg-[#D9D9D9]",
        gold: "bg-[#BDBD86]",
    }

    const classes = `${baseClasses} ${variants[variant]}`;

    return (
        <div className={classes}>
            <div className="text-xl">
                {title}
            </div>
            <div className="w-full text-center text-7xl">
                {number}
            </div>
        </div>
    );
};

export default InfoCard;