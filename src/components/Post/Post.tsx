import {cn} from "../../utils/cn.ts";
import {BsFacebook, BsTwitter} from "react-icons/bs";
import Button from "../Button/Button.tsx";

const Post = ({index, img, topic, title, content, avatar, name, date, className }: PostProps) => {
    return (
        <div key={index} className={cn("w-4/12 relative p-3", className)}>
            <img className="h-fit max-w-full object-contain" src={img}/>
            <div className=""></div>
            <div className="relative">
                <div className="cursor-pointer select-none right-4 text-sm text-white bg-accent absolute ml-auto bottom-[calc(100%-1rem)] px-3 py-2 z-10 w-fit font-bold transition-all">{topic}</div>
                <h2 className="select-none cursor-pointer w-[80%] pt-5 pb-2 transition-all hover:text-accent text-xl">{title}</h2>
                <p className="pb-2 text-base font-raleway">{content}</p>
                <Button className="hover:bg-transparent hover:text-accent bg-transparent pr-0 pl-0 text-dark-text mb-4 font-bold mt-2 transition-all" message={"Read More"} onPress={console.log}/>
                <div className="flex items-center">
                    <img className="h-8 w-8 mr-2 rounded-full" src={avatar}/>
                    <p className="text-sm">{name} {date}</p>
                </div>
                <div className="flex mt-2">
                    <BsTwitter className="w-4 h-4 mr-1"/>
                    <BsFacebook className="w-4 h-4 mr-1"/>
                </div>
            </div>
        </div>
    );
}

type PostProps = {
    index: number,
    img: string,
    topic: string,
    title: string,
    content: string,
    avatar: string,
    name: string,
    date: string,
    className?: string
}

export default Post;
