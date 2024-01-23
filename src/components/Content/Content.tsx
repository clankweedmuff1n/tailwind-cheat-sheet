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
            <section className={styles.content}>
                <Swiper
                    className={styles.swiper}
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
                        <SwiperSlide className={styles.slide} key={index}>
                            <img className={styles.image}
                                 src={item.img}/>
                            <p className={styles.description}>{item.title}</p>
                        </SwiperSlide>
                    ))}
                    <div className={styles.container}>
                        <div className={styles.wrapper}>
                            <h2 className="text-white text-5xl mb-10 mt-4">We’ll prepare you for the unexpected</h2>
                            <p className="text-white">Feel like a real estate pro and don’t let the surprises take
                                you off course.
                                <br/>
                                Our experts will guide you and help you fulfill your dreams.</p>
                            <div className={styles.search_container}>
                                <div className={styles.switch_wrapper}>
                                    <p className={`${styles.switch} ${styles.switch_active}`}>For Sale</p>
                                    <p className={styles.switch}>For Rent</p>
                                </div>
                                <div className={styles.search}>
                                    <input placeholder={"Enter city, zip, neighborhood, address…"}
                                           className={styles.search_input}/>
                                    <div className={styles.search_icon_wrapper}>
                                        <SearchIcon className={styles.search_icon}/>
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
