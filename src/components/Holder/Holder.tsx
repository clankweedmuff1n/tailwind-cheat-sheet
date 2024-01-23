import styles from "./Holder.module.scss";
import {Input} from "@nextui-org/react";
import Button from "../Button/Button.tsx";
import React from "react";

const Holder = ({reverse = false, title, subtitle}: HolderProps) => {
    const [value, setValue] = React.useState("");
    const validateEmail = (value: string) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

    const isInvalid: boolean = React.useMemo(() => {
        if (value === "") return false;

        return !validateEmail(value);
    }, [value]);

    const elements = [
        <div className="w-1/2 pr-4 pl-4">
            <h2 className={`${styles.text} pb-4`}>First name*</h2>
            <Input
                radius={"none"}
                variant="bordered"
                isRequired
            />
            <h2 className={`${styles.text} pb-4 mt-8`}>Last name*</h2>
            <Input
                variant="bordered"
                radius={"none"}
                isRequired
            />
            <h2 className={`${styles.text} pb-4 mt-8`}>Email*</h2>
            <Input
                radius={"none"}
                variant="bordered"
                isInvalid={isInvalid}
                onValueChange={setValue}
                isRequired
            />
            {isInvalid ? <p className="text-sm text-red-600 opacity-100">Please enter a valid email</p> : <p className="text-sm text-red-600 opacity-0">Please enter a valid email</p>}
            <h2 className={`${styles.text} pb-4 mt-6`}>Phone</h2>
            <Input
                variant="bordered"
                radius={"none"}
                isRequired
            />
            <h2 className={`${styles.text} pb-4 mt-8`}>Message</h2>
            <Input
                variant="bordered"
                radius={"none"}
                isRequired
            />
            <h2 className={`${styles.text} pb-4 mt-8`}>Security question</h2>
            <Input
                variant="bordered"
                radius={"none"}
                isRequired
                label="10 + 8 = ?"
            />
            <Button className="mt-8 mb-8 pl-20 pr-20 ml-auto" message={"Send"} onPress={console.log}/>
        </div>,
        <div className="w-1/2 pl-4 pr-4">
            <div className={`${styles.img} w-full h-full`}/>
        </div>
    ]
    return (
        <>
            <section className="w-full pb-12">
                <div className="w-3/5 flex-col m-auto mt-12">
                    <h2 className={`${styles.title} text-center`}>{title}</h2>
                    <p className={`${styles.subtitle} text-center`}>{subtitle}</p>
                </div>
                <div className="flex w-3/5 m-auto">
                    {reverse ? elements.reverse() : elements}
                </div>
            </section>
        </>
    )
}

type HolderProps = {
    reverse?: boolean,
    title: string,
    subtitle: string,
}

export default Holder;
