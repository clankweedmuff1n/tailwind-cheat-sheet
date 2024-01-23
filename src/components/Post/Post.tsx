import styles from '../Blog/Blog.module.scss';
import {TwitterIcon} from "../Blog/Icones/TwitterIcon.tsx";
import {FacebookIcon} from "../Blog/Icones/FacebookIcon.tsx";
import {cn} from "../../utils/cn.ts";

const Post = ({index, img, topic, title, content, avatar, name, date, className }: PostProps) => {
    return (
        <div key={index} className={cn(className, styles.post)}>
            <img className={styles.image} src={img}/>
            <div className={styles.overlay}></div>
            <div className={styles.section_text}>
                <div className={styles.topic}>{topic}</div>
                <h2 className={styles.post_title}>{title}</h2>
                <p className={styles.post_content}>{content}</p>
                <div className={styles.button_read}>Read More</div>
                <div className={styles.about_wrapper}>
                    <img className={styles.avatar} src={avatar}/>
                    <p className={styles.name}>{name} {date}</p>
                </div>
                <div className={styles.social_wrapper}>
                    <TwitterIcon className={styles.icon}/>
                    <FacebookIcon className={styles.icon}/>
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
