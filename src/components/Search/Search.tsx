import React from 'react';
import {GoKey} from "react-icons/go";

class Search extends React.Component {
    render() {
        return (
            <section className='
            bg-center bg-cover pt-8 pb-8 pr-5 pl-5 relative w-full
            bg-[url("https://media.placester.com/image/upload/c_scale,dpr_1.0,f_auto,fl_lossy,q_auto/c_scale,w_3320/v1/inception-app-prod/YTVmMGM3NDAtNmZjMy00ZGUxLWFhNTQtY2ZhNzM0MGFkMjY2/content/2020/10/shutterstock1585789627.jpg")]'>
                <div className="flex flex-col justify-between items-center">
                    <h2 className="text-white z-10 mb-4">Start your apartment search now!</h2>
                    <p className="text-white z-10 mb-4">Our team of professionals is eager to help you!</p>
                    <GoKey className="text-white z-10 pt-4 w-20 h-20 mb-8 mt-4"/>
                    <div className="transition-all hover:text-dark-text hover:bg-white z-10 text-white select-none cursor-pointer font-bold border-1 border-white px-8 py-3">
                        Lets Go!
                    </div>
                </div>
                <div className="content-none absolute top-0 left-0 bottom-0 right-0 pointer-events-none bg-custom-overlay"></div>
            </section>
        );
    }
}

export default Search;
