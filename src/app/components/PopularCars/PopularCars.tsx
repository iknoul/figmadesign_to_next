import { carData } from '@/lib/data'

import ButtonOne from '../Button/ButtonOne'
import Image from 'next/image'
import styles from './PopularCars.module.css'


const PopularCars = ()=>{

    return(
    <div className={styles.popularCar}>
        <h1>Most popular cars</h1>
        <div className={styles.carContainer}>
        {
            carData.map((item, index)=>{

                return(
<<<<<<< HEAD
                <div key={index} className={styles.carItem}>
=======
                <div className={styles.carItem}>
>>>>>>> f8dc0b9dd11c46136d007793df00e10cb0f32ddd
                    <div className={styles.carImage}>
                        <Image 
                            src={item.src}
                            alt='car image'
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className={styles.carDetails}>
                        <h3 className={styles.carName}>{item.name}</h3>
                        <p className={styles.carDescription}>{item.description}</p>
                        <div className={styles.carFeatures}>
                            <div className={`${styles.feature} ${styles.people}`}>
                                <Image 
                                    src='/icons/peopleIcon.svg'
                                    alt='people icon'
                                    width={12}
                                    height={12}
                                    
                                />
                                <p>{item.features.people}</p>
                            </div>
                            <div className={`${styles.feature} ${styles.transmission}`}>
                                <Image 
                                    src='/icons/gearIcon.svg'
                                    alt='gear Icon'
                                    width={12}
                                    height={12}
                                />
                                <p>{item.features.transmission}</p>
                            </div>
                            <div className={`${styles.feature} ${styles.doors}`}>
                                <Image 
                                    src='/icons/game-icons_car-door.svg'
                                    alt='doors icon'
                                    width={12}
                                    height={12}
                                />
                                <p>{item.features.doors}</p>
                            </div>
                            <div className={`${styles.feature} ${styles.ac}`}>
                                <Image 
                                    src='/icons/streamline_hotel-air-conditioner.svg'
                                    alt='ac icon'
                                    width={12}
                                    height={12}
                                />
                                <p>{item.features.doors}</p>
                            </div>
                        </div>
                        
                        <div className={styles.bookNow}>
                            <p className={styles.carPrice}>{item.price}</p>
                            <ButtonOne width='8.167rem'>Book Now</ButtonOne>
                        </div>
                    </div>

                </div>)
            })
        }
        </div>

    </div>)
}

export default PopularCars