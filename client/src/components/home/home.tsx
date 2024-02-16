import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import styles from '../../styles/home/home.module.scss'
import { rentspace_cover } from "../../assets";


interface City {
    id: string;
    city: string;
    image: string;
}
const Home = () => {
    const [cities, setCities] = useState<City[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Inside useEffect, make the Axios GET request
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'https://65cf5115bdb50d5e5f5b00ca.mockapi.io/rentspace/city/city'
                );

                // Update the state with the fetched data
                setCities(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handlePhotoClick = (photoId: string) => {
        // Navigate to the dynamic route 'loft/:id'
        // navigate(`/loft/${photoId}`);
        navigate(`/loft`);
    };
    return (
        <div className={styles.home}>
            <div className={styles.home__cover}>
                <img className={styles.home__coverImage} src={rentspace_cover} alt="rentspace cover" />
            </div>
            <div className={styles.citySection}>
                <h1>Rent Around The World</h1>
                <div className={styles.citySection__grid}>
                    {cities.map((city) => (
                        <div className={styles.citySection__gridItem} key={city.id}>
                            <img
                                src={city.image}
                                alt={city.city}
                                onClick={() => handlePhotoClick(city.id)}
                            />
                            <h3>{city.city}</h3>
                            <h4>See all apartament for rent</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
