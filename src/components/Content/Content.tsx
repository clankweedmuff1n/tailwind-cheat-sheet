import React from 'react';
import styles from './Content.module.scss';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import {EffectFade} from 'swiper/modules';
import {SearchIcon} from "./Icones/SearchIcon";

class Content extends React.Component {
    render() {
        const images = [
            {
                img: "https://media.placester.com/image/upload/c_fit,dpr_1.0,f_auto,fl_lossy,q_auto,w_2560/v1/inception-app-prod/YTVmMGM3NDAtNmZjMy00ZGUxLWFhNTQtY2ZhNzM0MGFkMjY2/content/2020/10/shutterstock637621636.jpg",
                title: "We'll make the impossible possible"
            },
            {
                img: "https://media.placester.com/image/upload/c_fit,dpr_1.0,f_auto,fl_lossy,q_auto,w_2560/v1/inception-app-prod/YTVmMGM3NDAtNmZjMy00ZGUxLWFhNTQtY2ZhNzM0MGFkMjY2/content/2020/10/bW9kZXJuLWxpdmluZy1yb29tLWludGVyaW9yLWZsb29yLWxh.jpg",
                title: "Discover outstanding properties"
            },
            {
                img: "https://media.placester.com/image/upload/c_fit,dpr_1.0,f_auto,fl_lossy,q_auto,w_2560/v1/inception-app-prod/YTVmMGM3NDAtNmZjMy00ZGUxLWFhNTQtY2ZhNzM0MGFkMjY2/content/2020/10/shutterstock713254015scalled.jpg",
                title: "We’re here to find you the place you’ll love"
            },
            {
                img: "https://media.placester.com/image/upload/c_fit,dpr_1.0,f_auto,fl_lossy,q_auto,w_2560/v1/inception-app-prod/YTVmMGM3NDAtNmZjMy00ZGUxLWFhNTQtY2ZhNzM0MGFkMjY2/content/2020/10/YmVhdXRpZnVsLXdoaXRlLWxpdmluZy1yb29tLW5ldy1sdXh1.jpg",
                title: "We’ll prepare you for the unexpected"
            },
        ];
        return (
            <section className="w-full flex-col relative h-[80vh]">
                <Swiper
                    className="w-full relative"
                    effect={"fade"}
                    modules={[EffectFade, Pagination, Autoplay]}
                    slidesPerView={1}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    loop={true}
                    pagination={{
                        clickable: false,
                    }}
                >
                    {images.map((item, index) => (
                        <SwiperSlide className="bg-dark-text" key={index}>
                            <img className="opacity-[.6]"
                                 src={item.img}/>
                            <p className="absolute bottom-0 left-0 text-white pl-8 pb-4">{item.title}</p>
                        </SwiperSlide>
                    ))}
                    <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full z-10 m-8">
                        <div className="w-[70%] h-full flex-col">
                            <h2 className="text-white text-5xl mb-10 mt-4">We’ll prepare you for the unexpected</h2>
                            <p className="text-white">Feel like a real estate pro and don’t let the surprises take
                                you off course.
                                <br/>
                                Our experts will guide you and help you fulfill your dreams.</p>
                            <div className="flex-col justify-center w-10/12 mt-20"> {/*search_container*/}
                                <div className="flex w-fit">
                                    <p className="pt-2 pr-1 pb-2 pl-1 border-b-2 border-accent">For Sale</p>
                                    <p className="pt-2 pr-1 pb-2 pl-1 border-b-2">For Rent</p>
                                </div>
                                <div className="w-full mt-4 flex">
                                    <input placeholder={"Enter city, zip, neighborhood, address…"}
                                           className="font-raleway font-bold w-full p-6 h-full border-none"/>
                                    <div className="flex items-center justify-center bg-accent cursor-pointer w-20">
                                        <SearchIcon className="w-8 h-8"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Swiper>
            </section>
        );
    }
}

export default Content;
