import React from 'react';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Button from "../Button/Button.tsx";
import {BiStar} from "react-icons/bi";

class Description extends React.Component {
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
            <section className="max-w-full pb-[60px]">
                <div className="pt-16 flex justify-center m-auto max-w-[60%]">
                    <div className="max-w-[40%]">
                        <h2 className="mb-8">Featured properties</h2>
                        <p className="pr-20 pb-8 font-raleway">It can be easy to get lost in the sea of real
                            estate possibilities. Modern condos, spacious single-family houses, victorian mansions,
                            cutting-edge sustainable intelligent homes… It’s a difficult decision and it’s yours to make
                            -
                            we’ll do everything to help you with that. Here are some of our favorites properties.</p>
                        <Button onPress={console.log} message={"View More"}/>
                    </div>
                    <Swiper
                        className="w-[60%] pb-2"
                        modules={[Autoplay]}
                        slidesPerView={2}
                        autoHeight={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false
                        }}
                        loop={true}
                    >
                        {images.map((item, index) => (
                            <>
                                <SwiperSlide className="w-auto flex-col pr-3 pl-3" key={index}>
                                    <div className="flex justify-between">
                                        <div className="absolute left-0 top-0 flex pl-3 text-white">
                                            <div className="z-10 text-sm bg-accent font-source p-2 font-bold">FEATURED
                                            </div>
                                            <div
                                                className="z-10 text-sm bg-accent-dark font-source p-2 font-bold">VIRTUAL
                                                TOUR
                                            </div>
                                        </div>
                                        <div className="absolute h-auto mr-3 right-0 top-0 z-10 bg-accent-dark">
                                            <BiStar className="m-2 w-4 h-4 text-white"/>
                                        </div>
                                    </div>
                                    <img className="relative"
                                         src={item.img}/>
                                    <div className="w-full flex-col h-fit shadow-md">
                                        <h2 className="pt-3 pr-3 pb-2 pl-3 text-left font-normal text-base">15888 State
                                            Highway 11
                                            Highway, Cumby, TX, 75433</h2>
                                        <div className="flex mb-2">
                                            <p className="pr-3 pl-3 text-sm uppercase font-bold">4 BEDS</p>
                                            <p className="pr-3 pl-3 text-sm uppercase font-bold">2 BATH</p>
                                            <p className="pr-3 pl-3 text-sm uppercase font-bold">2,244 SQ FT</p>
                                            <p className="pr-3 pl-3 text-sm uppercase font-bold">$425,000</p>
                                        </div>
                                        <div className="flex pr-3 pl-3">
                                            <p className="pr-3 uppercase">MLS# 20511804</p>
                                            <p className="pr-3 uppercase font-bold">ACTIVE</p>
                                        </div>
                                        <div className="p-3 text-left">
                                            <p className="text-sm uppercase">Listing Agent:
                                                Jamie NeSmith
                                                <br/>
                                                Listing Office: Core One Real Estate, L.L.C</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </>
                        ))}
                    </Swiper>
                </div>
                <div className="pt-16 m-auto">
                    <p className="pt-2 m-auto max-w-[60%] text-sm">All information is subject to change and should
                        be
                        independently verified. Copyright© 2022, HOUSTON REALTORS® INFORMATION SERVICE, INC. All Rights
                        Reserved by Core One Real Estate Updated: 6th January, 2024 11:45 AM (UTC)
                        <br/>Listing information provided courtesy of the San
                        Antonio Board of Realtors. IDX information is provided exclusively for consumers' personal,
                        non-commercial use, and it may not be used for any purpose other than to identify prospective
                        properties consumers may be interested in purchasing. The data is deemed reliable, but is not
                        guaranteed accurate by the MLS. Updated: 6th January, 2024 11:50 AM (UTC)</p>
                </div>
            </section>
        );
    }
}

export default Description;
