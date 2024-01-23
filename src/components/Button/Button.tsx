import styles from "./Button.module.scss";
import {cn} from "../../utils/cn.ts";

const Button = ({ message, onPress, className }: ButtonProps) => {
    return (
        <div onClick={onPress} className={cn( className, styles.button)}>{message}</div>
    )
}

type ButtonProps = {
    message: string,
    onPress: () => void,
    className?: string
};
export default Button
