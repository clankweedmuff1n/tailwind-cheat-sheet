import React from 'react';
import styles from './FeaturedArea.module.scss';
import Button from "../Button/Button.tsx";

class FeaturedArea extends React.Component {
    render() {
        return (
            <section className={styles.area}>
                <div className={styles.container}>
                    <div className={styles.title_wrapper}>
                        <div className={styles.title_container}>
                            <h2 className={styles.title}>Featured Area</h2>
                            <p className={styles.subtitle}>Stunning views, outstanding properties, tight-knit
                                communities. We guarantee unforgettable experiences.</p>
                        </div>
                        <div className={styles.button_wrapper}>
                            <Button onPress={console.log} message={"View more"}/>
                        </div>
                    </div>
                    <div className={styles.block_wrapper}>
                        <div className={styles.row}>
                            <div className={styles.wrapper}>
                                <div className={styles.block}>
                                    <div className={styles.overlay}></div>
                                    <h2 className={styles.block_title}>Farmersville, Tx Homes for Rent and Sale</h2>
                                    <p className={styles.block_subtitle}>What do we love about Collin County?</p>
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
