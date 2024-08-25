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
                    <div key={index} className={styles.locationItem}>

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