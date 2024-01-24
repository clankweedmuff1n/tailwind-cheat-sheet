import React from 'react';
import Button from "../Button/Button.tsx";
import Post from "../Post/Post.tsx";

class Blog extends React.Component {
    render() {
        const date = new Date();
        const formattedDate = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
        const posts = [
            {
                img: "https://media.placester.com/image/upload/c_scale,dpr_1.0,f_auto,fl_lossy,q_auto,w_1024/c_scale,w_1024/v1/inception-app-prod/ODEyNGZlMDMtNWI2YS00NDIzLTg3YWUtZWQxMDZjZmQ3OWUx/content/2019/12/featuredimage-25.png",
                topic: "BUYERS",
                title: "5 common mistakes first-time homebuyers make",
                content: "Buying a home is always an anxiety-ridden process, and that goes triple for anyone who’s embarking on homeownership for the very first time. There’s so much to do and so much you don’t know that “overwhelming” hardly seems like an appropriate description of how it…",
                name: "Core One Real Estate",
                date: formattedDate,
                avatar: "https://media.placester.com/image/upload/c_thumb,h_768,w_768/c_scale,dpr_1.0,f_auto,fl_lossy,h_50,q_auto,w_50/v1/inception-app-prod/YTVmMGM3NDAtNmZjMy00ZGUxLWFhNTQtY2ZhNzM0MGFkMjY2/content/2020/10/e3e66ad5e8ed-headshot.jpg",
            },
            {
                img: "https://media.placester.com/image/upload/c_scale,dpr_1.0,f_auto,fl_lossy,q_auto,w_1024/c_scale,w_1024/v1/inception-app-prod/ODEyNGZlMDMtNWI2YS00NDIzLTg3YWUtZWQxMDZjZmQ3OWUx/content/2019/12/featuredimage-23.png",
                topic: "BUYERS",
                title: "10 Ways To Make Your Home Energy-efficient",
                content: "Not too long ago in our country's history, talking about making your house \"greener\" might get you labeled a hippie tree-hugger. But times change, and as gas, electricity, and water prices creep up, more and more homeowners are seeing the (strong) advantages that come with…",
                name: "Core One Real Estate",
                date: formattedDate,
                avatar: "https://media.placester.com/image/upload/c_thumb,h_768,w_768/c_scale,dpr_1.0,f_auto,fl_lossy,h_50,q_auto,w_50/v1/inception-app-prod/YTVmMGM3NDAtNmZjMy00ZGUxLWFhNTQtY2ZhNzM0MGFkMjY2/content/2020/10/e3e66ad5e8ed-headshot.jpg",
            },
            {
                img: "https://media.placester.com/image/upload/c_scale,dpr_1.0,f_auto,fl_lossy,q_auto,w_1024/c_scale,w_1024/v1/inception-app-prod/ODEyNGZlMDMtNWI2YS00NDIzLTg3YWUtZWQxMDZjZmQ3OWUx/content/2019/12/featuredimage-3.png",
                topic: "BUYERS",
                title: "What Your Agent Should Do For You?",
                content: "One way to know whether you've got a good agent (or not) is to consider some of the tasks and activities that a really good agent will manage for a client, then apply what you've learned to your own agent. If you don't have time to track down all of the things that a good…",
                name: "Core One Real Estate",
                date: formattedDate,
                avatar: "https://media.placester.com/image/upload/c_thumb,h_768,w_768/c_scale,dpr_1.0,f_auto,fl_lossy,h_50,q_auto,w_50/v1/inception-app-prod/YTVmMGM3NDAtNmZjMy00ZGUxLWFhNTQtY2ZhNzM0MGFkMjY2/content/2020/10/e3e66ad5e8ed-headshot.jpg",
            }
        ];
        return (
            <section className="w-full flex flex-col justify-center items-center pb-16">
                <div className="w-[60%] mt-16 flex flex-col text-center pb-5 m-auto">
                    <h2 className="pb-8">Latest blog posts</h2>
                    <p className="w-[60%] self-center">Expand your real estate knowledge - here are some of our latest blog
                        posts to help you out. Selling your property or purchasing a new, dream house can become
                        stress-free and exciting when you know what to expect! </p>
                </div>
                <div className="w-[60%] flex m-auto mb-16 justify-between">
                    {posts.map((item, index) => (
                        <Post index={index} img={item.img} topic={item.topic} title={item.title} content={item.content} avatar={item.avatar} name={item.name} date={item.date}/>
                    ))}
                </div>
                <Button onPress={console.log} message={"View More"}/>
            </section>
        );
    }
}

export default Blog;
