'use client'
import { useEffect, useState } from 'react'
import { promotionCarData } from '@/lib/data'
import Image from 'next/image'
import styles from './CorousalCars.module.css'

const CorousalCars = ()=>{

    const [slide, setSlide] = useState(0)
    const slideLength = promotionCarData.length
    
    // setting interval and change the image
    useEffect(() => {
        const autoSlide = () => {
          setSlide((prevIndex) => (prevIndex + 1) % slideLength);
        };
    
        const interval = setInterval(autoSlide, 3000);
    
        return () => clearInterval(interval);
    }, [slideLength]);


    return(
        <section className={styles.promotion} id="promotion">
            <div className={styles.getVoucher}>
                <h3>Recieve guarnteed <span>GIFT VOUCHER</span> on a monthly hire or lease</h3>
            </div>

            <div className={styles.carImages}>
            {
                promotionCarData.map((item, index)=>{
                    return(
                        <div key={index} className={slide === index ? styles.slide :styles.slideHide}>
                            <Image
                                src={item.src}
                                alt={item.alt}
                                width={100}
                                height={100}
                                quality={100}      
                            />
                        </div>)
                    })
            }

                <div className={styles.carouselIndicators}>
                {
                    promotionCarData.map((item, index)=>{
                        return(
                            <span key={index} className={slide === index ? `${styles.indicator} ${styles.active}` :styles.indicator}>

                            </span>
                        )
                    })
                }
                </div> 
            </div>
        </section>)
}

export default CorousalCars