import React from "react";
import {cn} from "../../utils/cn.ts";

const Link = ({ onPress, children, className }: ButtonProps) => {
    return (
        <p onClick={onPress} className={cn( className, "hover:text-dark-text text-accent transition-colors cursor-pointer text-sm underline")}>{children}</p>
    )
}

type ButtonProps = {
    onPress: () => void,
    children: React.ReactNode,
    className?: string,
};
export default Link
