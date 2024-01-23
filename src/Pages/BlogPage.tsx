import React from 'react';
import Header from "../components/Header/Header.tsx";
import Footer from "../components/Footer/Footer.tsx";
import Description from "../components/Description/Description.tsx";
import BlogSection from "../components/BlogSection/BlogSection.tsx";

class BlogPage extends React.Component {
    render() {
        return (
            <>
                <div className="app">
                    <Header/>
                    <BlogSection/>
                    <Description/>
                    <Footer/>
                </div>
            </>
        );
    }
}

export default BlogPage;
