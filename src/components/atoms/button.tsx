import Link from "next/link";
import React from "react";

interface IButtonPropTypes {
    children: React.ReactNode;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    href?: string;
    className?: string;
}

export const Button: React.FC<IButtonPropTypes> = ({
    children,
    disabled = false,
    size = "medium",
    href,
    className,
}) => {
    const baseClasses = "inline-flex item-center justify-center rounded-full focus:outline-none transition duration-300 hover:scale-95 hover:opacity-80 text-black border-black";

    const sizes = {
        small: "px-3 py-1 text-sm",
        medium: "px-4 py-1",
        large: "px-12 py-2 text-2xl",
    }

    const classes = `${baseClasses} ${className} ${sizes[size]} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`;

    if (href) {
        return (
        <Link 
          href={disabled ? "#" : href}
          passHref
          onClick={(e) => disabled && e.preventDefault()}
        >
          <a className={classes} aria-disabled={disabled ? "true" : "false"}>
            {children}
          </a>
        </Link>
        );
      }
    
      return (
        <button className={classes} disabled={disabled}>
          {children}
        </button>
      );
};

export default Button;