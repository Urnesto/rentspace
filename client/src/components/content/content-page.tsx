

import React, { useState } from 'react';
import styles from '../../styles/components/content/content-page.module.scss';
import { sqaure, people, euro, leftArrow, rightArrow } from '../../assets';
import { contentData } from '../../constants';

const ContentPage: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % contentData[0].images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + contentData[0].images.length) % contentData[0].images.length);
    };

    return (
        <div className={styles.content}>
            <div className={styles.content__gridContainer}>
                {contentData.map((item, index) => (
                    <div className={styles.content__gridItem} key={index}>
                        <div className={styles.card}>
                            <div className={styles.card__slider}>
                                <button onClick={prevSlide} className={styles.card__prevButton}>
                                    <img src={leftArrow} width={25} height={25} alt="left arrow" />
                                </button>
                                <img src={item.images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className={styles.card__slide} />
                                <button onClick={nextSlide} className={styles.card__nextButton}>
                                    <img src={rightArrow} width={25} height={25} alt="right arrow" />
                                </button>
                            </div>
                            <div className={styles.card__container}>
                                <h2 className={styles.card__text}>{item.title}</h2>
                                <div className={styles.card__data}>
                                    <div className={styles.card__dataItem}>
                                        <img src={sqaure} alt="Square" />
                                        - {item.square}
                                    </div>
                                    <div className={styles.card__dataItem}>
                                        <img src={people} alt="People" />
                                        - {item.people}
                                    </div>
                                </div>
                                <div className={styles.card__price}>
                                    <span>{item.price}</span>
                                    <img src={euro} alt="euro" />
                                    <span>for an hour</span>
                                </div>
                                <button className={styles.card__button}>Proceed</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContentPage;
