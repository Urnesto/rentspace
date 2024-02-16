import React, { useEffect, useState } from "react";
import styles from '../../styles/components/header/header.module.scss';
import { close, burger } from '../../assets';
import { Link, } from "react-router-dom";

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setIsScrolled(scrollPosition > 0);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };
    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
            <div className={`${styles.header__content} ${isScrolled ? styles.scrolledContent : ""}`}>
                <Link to="/" className={`${styles.header__content__logo} ${isScrolled ? styles.scrolledLogo : ""}`}>
                    RENTSPACE
                </Link>
                <nav
                    className={`${styles.header__content__nav} ${menuOpen && size.width < 768 ? styles.isMenu : ""
                        }`}
                >
                    <ul>
                        <li>
                            <Link to="/page-one" onClick={menuToggleHandler}>
                                PageOne
                            </Link>
                        </li>
                        <li>
                            <Link to="/page-two" onClick={menuToggleHandler}>
                                PageTwo
                            </Link>
                        </li>
                        <li>
                            <Link to="/page-three" onClick={menuToggleHandler}>
                                PageThree
                            </Link>
                        </li>
                    </ul>
                    <div className={styles.header__content__auth}>
                        <button className={isScrolled ? styles.scrolledContentBtn : ""}>Log in</button>
                        <button className={isScrolled ? styles.scrolledContentBtn : ""}>Sign up</button>
                    </div>
                </nav>
                <div className={styles.header__content__toggle}>
                    {!menuOpen ? (
                        <img src={burger} width="20" alt="close" onClick={menuToggleHandler} />
                    ) : (
                        <img src={close} width="20" alt="close" onClick={menuToggleHandler} />
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
