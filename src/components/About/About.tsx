import React from 'react';
import styles from './About.module.scss';

class About extends React.Component {
    render() {
        return (
            <section className={styles.about}>
                <div className={styles.container}>
                    <img src="https://media.placester.com/image/upload/c_fill,dpr_1.0,f_auto,fl_lossy,h_768,q_auto,w_768/v1/inception-app-prod/YTVmMGM3NDAtNmZjMy00ZGUxLWFhNTQtY2ZhNzM0MGFkMjY2/content/2020/10/e3e66ad5e8ed-headshot.jpg"
                         className={styles.image}/>
                    <div className={styles.text_wrapper}>
                        <h2 className={styles.title}>We're Core One Real Estate</h2>
                        <p className={styles.text}>Real Estate Experts</p>
                        <p className={styles.text}>Core One Real Estate Brokerage License #609538 O: (214) 726-6389 M: 546789321</p>
                        <p className={styles.text}>Need a home or an apartment? Finding the right place to call home can require hours of phone calling, web searching & driving to wrong properties; wasting your precious time and gas.</p>
                        <div className={styles.text}>Let me know if there is anything that we can do for you, your family and friends.</div>
                        <div className={styles.button_wrapper}>
                            <div className={styles.button}>Learn more</div>
                            <div className={styles.button_contact}>Contact us</div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
