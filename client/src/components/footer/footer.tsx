

import React from 'react';

import { linkedin, git } from '../../assets';
import styles from '../../styles/components/footer/footer.module.scss';


const Footer: React.FC = () => {

    return (
        <footer className={styles.footer}>
            <h4 className={styles.footer__name}>
                &copy;2024 This page is created by Ernest and Dmitriy
            </h4>
            <div className={styles.footer__social}>
                <div>
                    <a href="https://github.com/Urnesto" target="blank">
                        <img src={git} width={30} height={30} alt="git" />
                    </a>
                </div>
                <div>
                    <a
                        href="https://www.linkedin.com/in/ernest-rimkievicius-0785a521a/"
                        target="blank"
                    >
                        <img src={linkedin} width={30} height={30} alt="LinkedIn" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
