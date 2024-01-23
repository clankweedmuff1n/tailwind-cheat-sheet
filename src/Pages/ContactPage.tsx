import React from 'react';
import Header from "../components/Header/Header.tsx";
import Footer from "../components/Footer/Footer.tsx";
import About from "../components/About/About.tsx";
import Holder from "../components/Holder/Holder.tsx";

class BlogPage extends React.Component {
    render() {
        return (
            <>
                <div className="app">
                    <Header/>
                    <Holder reverse={true} title={"Contact"} subtitle={"Tell us what’s on your mind! Take your first steps in the world of real estate with the expert you can put your faith in."}/>
                    <About/>
                    <Footer/>
                </div>
            </>
        );
    }
}

export default BlogPage;
