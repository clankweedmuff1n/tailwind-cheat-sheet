import styles from "./Footer.module.scss";
import Logo from "../../assets/img/Logo.png";
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <>
            <section className="border-t-2 border-light-border-tone w-full pt-12">
                <div className="w-3/5 flex-col m-auto">
                    <div className="flex justify-between pb-6">
                        <div className="w-1/4">
                            <div className={styles.title_wrapper}>
                                <NavLink to={"/contact"}>
                                    <h2 className={`${styles.title} mb-7`}>Contact</h2>
                                </NavLink>
                            </div>
                            <p className={styles.subtitle}>Core One Real Estate, L.L.C</p>
                            <p className={styles.subtitle}>131 McKinney St. Suite 207</p>
                            <p className={styles.subtitle}>Farmersville</p>
                            <p className={styles.subtitle}>Texas 75442</p>
                            <p className={styles.subtitle}>2147266389</p>
                            <p className={styles.subtitle}>amber@coreonerealestate.com</p>
                        </div>
                        <div className="w-1/4">
                            <div className={styles.title_wrapper}>
                                <NavLink to={"/about"}>
                                    <h2 className={`${styles.title} mb-7`}>About us</h2>
                                </NavLink>
                            </div>
                            <p className={styles.subtitle}>Our company</p>
                            <p className={styles.subtitle}>Success stories</p>
                        </div>
                        <div className="w-1/4">
                            <div className={styles.title_wrapper}>
                                <h2 className={`${styles.title} mb-7`}>Explore</h2>
                            </div>
                            <p className={styles.subtitle}>Collin County, TX</p>
                            <p className={styles.subtitle}>Contact</p>
                        </div>
                        <div className={`w-1/4`}>
                            <div className={styles.title_wrapper}>
                                <h2 className={`${styles.title} mb-7`}>Consumer Protection & Privacy</h2>
                            </div>
                            <p className={styles.subtitle}>DMCA Compliance</p>
                            <p className={styles.subtitle}>Accessibility</p>
                            <p className={styles.subtitle}>Texas Real Estate Commission Consumer Protection Notice</p>
                            <p className={styles.subtitle}>Texas Real Estate Commission Information about Brokerage
                                Services</p>
                            <p className={styles.subtitle}>For ADA assistance, please email</p>
                            <p className={styles.subtitle}>compliance@placester.com. If you experience difficulty in
                                accessing
                                any part of this website, email us, and we will work with you to provide the information
                                you
                                seek through an alternate communication method.</p>
                        </div>
                    </div>
                </div>
                <div className="w-3/5 m-auto pt-2 pb-6">
                    <img className="m-auto object-center object-contain" src={Logo}/>
                </div>
            </section>
            <div className="w-full bg-accent">
                <div className="w-3/5 m-auto flex justify-between pt-2 pb-2 text-white">
                    <p className={`${styles.text} text-sm`}>© 2024 All rights reserved</p>
                    <p className={`${styles.text} text-sm `}>Created with Placester</p>
                </div>
            </div>
        </>
    )
}

export default Footer;
