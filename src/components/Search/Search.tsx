import React from 'react';
import styles from './Search.module.scss';
import {KeyIcon} from "./Icones/KeyIcon";

class Search extends React.Component {
    render() {
        return (
            <section className={styles.search}>
                <h2 className={styles.title}>Start your apartment search now!</h2>
                <p className={styles.subtitle}>Our team of professionals is eager to help you!</p>
                <KeyIcon className={styles.icon}/>
                <div className={styles.button}>
                    Lets Go!
                </div>
                <div className={styles.overlay}></div>
            </section>
        );
    }
}

export default Search;
