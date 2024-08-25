import { Areas } from '@/lib/data'
import Image from 'next/image'
import styles from './Location.module.css'

const Locations = ()=>{


    return( 
    //dynamically adding items to locations 
    <section className={styles.location} id="locations">
        <h1>Locations</h1>

        <div className={styles.locations}>
            {
                Areas.map((item, index)=>{
                    return(
<<<<<<< HEAD
                    <div key={index} className={styles.locationItem}>
=======
                    <div className={styles.locationItem}>
>>>>>>> f8dc0b9dd11c46136d007793df00e10cb0f32ddd

                        <Image 
                            src={'/icons/locationRed.svg'}
                            alt='locations'
                            width={18}
                            height={18}
                        />

                        <p>{item}</p>
                    </div>)
                })
            }
        </div>
    </section>)
}

export default Locations