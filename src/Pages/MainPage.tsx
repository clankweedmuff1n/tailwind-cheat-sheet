import React from 'react';
import Header from "../components/Header/Header.tsx";
import Content from "../components/Content/Content.tsx";
import Description from "../components/Description/Description.tsx";
import Search from "../components/Search/Search.tsx";
import Blog from "../components/Blog/Blog.tsx";
import FeaturedArea from "../components/FeaturedArea/FeaturedArea.tsx";
import About from "../components/About/About.tsx";
import Footer from "../components/Footer/Footer.tsx";
import Holder from "../components/Holder/Holder.tsx";

class Test extends React.Component {
    render() {
        return (
            <>
                <div className="app">
                    <Header/>
                    <Content/>
                    <Description/>
                    <Search/>
                    <Blog/>
                    <FeaturedArea/>
                    <About/>
                    <Holder title={"In case of any questions…"}
                            subtitle={"Reach out to us! We aim to provide an exceptional experience in Real Estate and want to be sure you’re well informed, every step of the way."}/>
                    <Footer/>
                </div>
            </>
        );
    }
}

export default Test;
