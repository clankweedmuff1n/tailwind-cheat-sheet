import styles from "./Blog.module.scss";
import Post from "../Post/Post.tsx";

const BlogSection = () => {
    const date = new Date();
    const formattedDate = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;

    const posts = [
        {
            img: "https://media.placester.com/image/upload/c_scale,dpr_1.0,f_auto,fl_lossy,q_auto,w_1024/v1/inception-app-prod/YTVmMGM3NDAtNmZjMy00ZGUxLWFhNTQtY2ZhNzM0MGFkMjY2/content/2023/10/152aa634a2c3b15c3441b11bd093b44de5aa88dd.png",
            topic: "BUYERS",
            title: "Understanding the Benefits of Owning Your First Home",
            content: "Understanding the Benefits of Owning Your First HomeAre you considering buying your first home? If so, it can be helpful to know what led other people to make that decision. According to a recent survey of first-time homebuyers by PulteGroup:“When…",
            name: "Core One Real Estate",
            date: formattedDate,
            avatar: "https://media.placester.com/image/upload/c_thumb,h_768,w_768/c_scale,dpr_1.0,f_auto,fl_lossy,h_50,q_auto,w_50/v1/inception-app-prod/YTVmMGM3NDAtNmZjMy00ZGUxLWFhNTQtY2ZhNzM0MGFkMjY2/content/2020/10/e3e66ad5e8ed-headshot.jpg",
        },
        {
            img: "https://media.placester.com/image/upload/c_scale,dpr_1.0,f_auto,fl_lossy,q_auto,w_1024/v1/inception-app-prod/YTVmMGM3NDAtNmZjMy00ZGUxLWFhNTQtY2ZhNzM0MGFkMjY2/content/2023/09/3c70d4b683bb20606add6a9eefc83acaa717e26e.jpg",
            topic: "BUYERS",
            title: "Explaining Today’s Low Housing Supply!",
            content: "Explaining Today’s Low Housing Supply [INFOGRAPHIC]Some HighlightsWondering why the supply of homes for sale is limited today? There are a few factors at play.Lack of building over time, the mortgage rate lock-in effect, and…",
            name: "Core One Real Estate 10/9/2020",
            date: formattedDate,
            avatar: "https://media.placester.com/image/upload/c_thumb,h_768,w_768/c_scale,dpr_1.0,f_auto,fl_lossy,h_50,q_auto,w_50/v1/inception-app-prod/YTVmMGM3NDAtNmZjMy00ZGUxLWFhNTQtY2ZhNzM0MGFkMjY2/content/2020/10/e3e66ad5e8ed-headshot.jpg",
        },
        {
            img: "https://media.placester.com/image/upload/c_scale,dpr_1.0,f_auto,fl_lossy,q_auto,w_1024/v1/inception-app-prod/YTVmMGM3NDAtNmZjMy00ZGUxLWFhNTQtY2ZhNzM0MGFkMjY2/content/2023/09/252c01cf14ab8ce505732b47091c0f9b72b0fdbf.jpg",
            topic: "BUYERS",
            title: "Get Ready for Smaller, More Affordable Homes",
            content: "Get Ready for Smaller, More Affordable HomesHave you been trying to buy a home, but higher mortgage rates and home prices are limiting your options? If so, here’s some good news – based on what Ali Wolf, Chief Economist at Zonda, has to say – smaller, more affordable…",
            name: "Core One Real Estate 10/9/2020",
            date: formattedDate,
            avatar: "https://media.placester.com/image/upload/c_thumb,h_768,w_768/c_scale,dpr_1.0,f_auto,fl_lossy,h_50,q_auto,w_50/v1/inception-app-prod/YTVmMGM3NDAtNmZjMy00ZGUxLWFhNTQtY2ZhNzM0MGFkMjY2/content/2020/10/e3e66ad5e8ed-headshot.jpg",
        },
        {
            img: "https://media.placester.com/image/upload/c_scale,dpr_1.0,f_auto,fl_lossy,q_auto,w_1024/v1/inception-app-prod/YTVmMGM3NDAtNmZjMy00ZGUxLWFhNTQtY2ZhNzM0MGFkMjY2/content/2023/09/78afb16f93b12db499d6769a8e607311c82da107.png",
            topic: "BUYERS",
            title: "The Many Non-Financial Benefits of Homeownership",
            content: "The Many Non-Financial Benefits of HomeownershipBuying and owning your own home can have a big impact on your life. While there are financial reasons to become a homeowner, it's essential to think about the non-financial benefits that make a home more than just a place to…",
            name: "Core One Real Estate 10/9/2020",
            date: formattedDate,
            avatar: "https://media.placester.com/image/upload/c_thumb,h_768,w_768/c_scale,dpr_1.0,f_auto,fl_lossy,h_50,q_auto,w_50/v1/inception-app-prod/YTVmMGM3NDAtNmZjMy00ZGUxLWFhNTQtY2ZhNzM0MGFkMjY2/content/2020/10/e3e66ad5e8ed-headshot.jpg",
        },
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
        },
        {
            img: "https://media.placester.com/image/upload/c_scale,dpr_1.0,f_auto,fl_lossy,q_auto,w_1024/v1/inception-app-prod/YTVmMGM3NDAtNmZjMy00ZGUxLWFhNTQtY2ZhNzM0MGFkMjY2/content/2023/09/b50612c34f61ae0bac03cc19affde48e30f0a793.jpg",
            topic: "BUYERS",
            title: "Owning Your Home Helps You Build Wealth",
            content: "You may have heard some people say it’s better to rent than buy a home right now. But, even today, there are lots of good reasons to become a homeowner. One of them is that owning a home is typically viewed as a good long-term investment that helps your net worth grow…",
            name: "Core One Real Estate 10/9/2020",
            date: formattedDate,
            avatar: "https://media.placester.com/image/upload/c_thumb,h_768,w_768/c_scale,dpr_1.0,f_auto,fl_lossy,h_50,q_auto,w_50/v1/inception-app-prod/YTVmMGM3NDAtNmZjMy00ZGUxLWFhNTQtY2ZhNzM0MGFkMjY2/content/2020/10/e3e66ad5e8ed-headshot.jpg",
        },
        {
            img: "https://media.placester.com/image/upload/c_scale,dpr_1.0,f_auto,fl_lossy,q_auto,w_1024/v1/inception-app-prod/ODEyNGZlMDMtNWI2YS00NDIzLTg3YWUtZWQxMDZjZmQ3OWUx/content/2019/12/featuredimage.png",
            topic: "BUYERS",
            title: "How To Maximize A Small Living Space?",
            content: "Between micro-apartments, tiny homes, and even #vanlife, the real estate industry is taking the saying “less is more” to previously unknown levels. And while we can all get behind the idea of streamlining your life and shedding possessions that no longer meet your needs",
            name: "Core One Real Estate 10/9/2020",
            date: formattedDate,
            avatar: "https://media.placester.com/image/upload/c_thumb,h_768,w_768/c_scale,dpr_1.0,f_auto,fl_lossy,h_50,q_auto,w_50/v1/inception-app-prod/YTVmMGM3NDAtNmZjMy00ZGUxLWFhNTQtY2ZhNzM0MGFkMjY2/content/2020/10/e3e66ad5e8ed-headshot.jpg",
        },
        {
            img: "https://media.placester.com/image/upload/c_scale,dpr_1.0,f_auto,fl_lossy,q_auto,w_1024/v1/inception-app-prod/ODEyNGZlMDMtNWI2YS00NDIzLTg3YWUtZWQxMDZjZmQ3OWUx/content/2019/12/featuredimage-2.png",
            topic: "BUYERS",
            title: "Deep-Cleaning Tips For Homeowners",
            content: "If you've never owned a house before, then it's entirely possible that you've never deep-cleaned a house. (Hey, no shame in that game.) But when the house is yours, the desire to see it as clean and sparkling as it can possibly be is strong -- and you might have no idea…",
            name: "Core One Real Estate 10/9/2020",
            date: formattedDate,
            avatar: "https://media.placester.com/image/upload/c_thumb,h_768,w_768/c_scale,dpr_1.0,f_auto,fl_lossy,h_50,q_auto,w_50/v1/inception-app-prod/YTVmMGM3NDAtNmZjMy00ZGUxLWFhNTQtY2ZhNzM0MGFkMjY2/content/2020/10/e3e66ad5e8ed-headshot.jpg",
        },
        {
            img: "https://media.placester.com/image/upload/c_scale,dpr_1.0,f_auto,fl_lossy,q_auto,w_1024/v1/inception-app-prod/ODEyNGZlMDMtNWI2YS00NDIzLTg3YWUtZWQxMDZjZmQ3OWUx/content/2019/12/featuredimage-19.png",
            topic: "BUYERS",
            title: "10 Things Everyone Should Know About Real Estate Investing",
            content: "Real estate investing is gaining popularity, and if you’ve been giving it some thought, this guide will give you an overview. The goal of any real estate investor is typically to make money. This means purchasing an investment property at a good price so you can rent it…",
            name: "Core One Real Estate 10/9/2020",
            date: formattedDate,
            avatar: "https://media.placester.com/image/upload/c_thumb,h_768,w_768/c_scale,dpr_1.0,f_auto,fl_lossy,h_50,q_auto,w_50/v1/inception-app-prod/YTVmMGM3NDAtNmZjMy00ZGUxLWFhNTQtY2ZhNzM0MGFkMjY2/content/2020/10/e3e66ad5e8ed-headshot.jpg",
        },
        {
            img: "https://media.placester.com/image/upload/c_scale,dpr_1.0,f_auto,fl_lossy,q_auto,w_1024/v1/inception-app-prod/ODEyNGZlMDMtNWI2YS00NDIzLTg3YWUtZWQxMDZjZmQ3OWUx/content/2019/12/featuredimage-18.png",
            topic: "BUYERS",
            title: "5 Essential Financial Steps To Take Before Investing In Real Estate",
            content: "If you’ve been thinking about investing in real estate, getting your finances in order before you start searching for properties and scheduling appointments will save you from money headaches in the long run. ",
            name: "Core One Real Estate 10/9/2020",
            date: formattedDate,
            avatar: "https://media.placester.com/image/upload/c_thumb,h_768,w_768/c_scale,dpr_1.0,f_auto,fl_lossy,h_50,q_auto,w_50/v1/inception-app-prod/YTVmMGM3NDAtNmZjMy00ZGUxLWFhNTQtY2ZhNzM0MGFkMjY2/content/2020/10/e3e66ad5e8ed-headshot.jpg",
        },
    ];
    return (
        <>
            <section className="w-full pb-12">
                <div className="">
                    <h2 className={`${styles.title}`}>
                        Blog
                    </h2>
                    <p className={`${styles.subtitle}`}>
                        Mastering the basis of real estate matters may be the best way to feel more confident during
                        your
                        journey. Explore our blog posts to discover some interesting news.
                    </p>
                    <div className="flex w-3/5 m-auto">
                        <div className="flex-col">
                            {posts.slice(0, posts.length / 2).map((item, index) => (
                                <Post className="w-full" index={index} img={item.img} topic={item.topic} title={item.title}
                                      content={item.content} avatar={item.avatar} name={item.name} date={item.date}/>
                            ))}
                        </div>
                        <div className="flex-col">
                            {posts.slice(posts.length / 2, posts.length -1).map((item, index) => (
                                <Post className="w-full" index={index} img={item.img} topic={item.topic} title={item.title}
                                      content={item.content} avatar={item.avatar} name={item.name} date={item.date}/>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogSection;
