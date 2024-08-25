import styles from './styles/GetTheLink.module.css'
import Image from 'next/image'
import fromPlayStore from '@/../public/icons/downloadFromPlayStore.svg'
import fromAppleStore from '@/../public/icons/downloadFromAppleStore.svg'

const GetTheLink = ()=>{

    return(
    <div className={styles.getLinks}>
        <p>Get it on</p>
        <div className={styles.links}>
            <Image 
                src={fromAppleStore}
                alt='download it from app store'
            />
            <Image 
                src={fromPlayStore}
                alt='download it from play store'
            />
        </div>
    </div>)
}

export default GetTheLink