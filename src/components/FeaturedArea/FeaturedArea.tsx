import React from 'react';
import styles from './FeaturedArea.module.scss';
import Button from "../Button/Button.tsx";

class FeaturedArea extends React.Component {
    render() {
        return (
            <section className="w-full bg-light-bg">
                <div className="w-[60%] m-auto">
                    <div className="w-full flex justify-between pt-6 pb-8">
                        <div className="ml-1">
                            <h2>Featured Area</h2>
                            <p className="pt-4 font-raleway">Stunning views, outstanding properties, tight-knit
                                communities. We guarantee unforgettable experiences.</p>
                        </div>
                        <div className="mr-1">
                            <Button onPress={console.log} message={"View more"}/>
                        </div>
                    </div>
                    <div className="flex-col pb-12">
                        <div className="flex">
                            <div className="bg-dark-text w-full m-1">
                                <div className="group-hover:max-h-12 text-left text-white w-full flex-col justify-center relative py-12 px-8 min-h-56 bg-no-repeat bg-center transition-all bg-cover">
                                    <div className={styles.overlay}></div>
                                    <h2 className="group z-10">Farmersville, Tx Homes for Rent and Sale</h2>
                                    <p className="font-raleway z-10 text-sm max-h-0 overflow-hidden transition-all">What do we love about Collin County?</p>
                                    <div className={styles.block_button}>Read More</div>
                                </div>
                            </div>
                            <div className={styles.wrapper}>
                                <div className={styles.block}>
                                    <div className={styles.overlay}></div>
                                    <h2 className={styles.block_title}>Farmersville, Tx Homes for Rent and Sale</h2>
                                    <p className={styles.block_subtitle}>What do we love about Collin County?</p>
                                    <div className={styles.block_button}>Read More</div>
                                </div>
                            </div>
                            <div className={styles.wrapper}>
                                <div className={styles.block}
                                     style={{backgroundImage: `url("https://media.placester.com/image/upload/c_scale,dpr_1.0,f_auto,fl_lossy,q_auto,w_1280/c_scale,w_1280/v1/inception-app-prod/YTVmMGM3NDAtNmZjMy00ZGUxLWFhNTQtY2ZhNzM0MGFkMjY2/content/2023/09/45e08ef85e13071542024d66fcbd635deade83cb.jpg")`}}>
                                    <div className={styles.overlay}></div>
                                    <h2 className={styles.block_title}>Farmersville, Tx Homes For Sale/ Rent</h2>
                                    <p className={styles.block_subtitle}>What do we love about Collin County?</p>
                                    <div className={styles.block_button}>Read More</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.wrapper}>
                                <div className={styles.block}
                                     style={{backgroundImage: `url("https://media.placester.com/image/upload/c_scale,dpr_1.0,f_auto,fl_lossy,q_auto,w_1280/v1/inception-app-prod/YTVmMGM3NDAtNmZjMy00ZGUxLWFhNTQtY2ZhNzM0MGFkMjY2/content/2020/10/shutterstock1450827602.jpg")`}}>
                                    <div className={styles.overlay}></div>
                                    <h2 className={styles.block_title}>Collin County, TX</h2>
                                    <p className={styles.block_subtitle}>What do we love about Collin County?</p>
                                    <div className={styles.block_button}>Read More</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FeaturedArea;
