import React from 'react';
import Header from "../components/Header/Header.tsx";
import Footer from "../components/Footer/Footer.tsx";
import Holder from "../components/Holder/Holder.tsx";
import AboutUs from "../components/AboutUs/AboutUs.tsx";

class AboutUsPage extends React.Component {
    render() {
        return (
            <>
                <div className="app">
                    <Header/>
                    <AboutUs/>
                    <Holder title={"Tell us what’s on your mind"}
                            subtitle={"Take your first steps in the world of real estate with the expert you can put your faith in."}/>
                    <Footer/>
                </div>
            </>
        );
    }
}

export default AboutUsPage;
