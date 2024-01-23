import styles from "./AboutUs.module.scss";

const AboutUs = () => {
    return (
        <section>
            <h2 className={`${styles.title}`}>About us</h2>
            <div className="w-2/5 m-auto flex-col">
                <p className={`${styles.content} text-accent`}>At Core One Real Estate- Mission Focused</p>
                <p className={`${styles.content}`}>A message from the broker, " By implementing our faith daily and
                    serving with compassion, integrity, and leadership, we inspire clients to realize their dream of
                    home ownership</p>
                <p className={`${styles.content} font-black italic`}>Built on a Core of faith. We will find the One for you! </p>
                <p className={`${styles.content}`}>All referrals are treated equally and we thank you for being a
                    blessing to us by referring your family, friends, and social circle.</p>
            </div>
            <img className="m-auto w-2/5 mt-4 mb-12"
                 src={"https://media.placester.com/image/upload/c_scale,f_auto,q_auto/v1/inception-app-prod/YTVmMGM3NDAtNmZjMy00ZGUxLWFhNTQtY2ZhNzM0MGFkMjY2/content/2020/10/b25684ce11f8-9727849138.png"}/>
        </section>
    )
}

export default AboutUs;
