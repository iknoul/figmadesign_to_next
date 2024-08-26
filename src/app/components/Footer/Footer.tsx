
import { footerNavigationData } from '@/lib/data'
import { footerNavigationDataB } from '@/lib/data'

import Image from 'next/image'
import facebook from '@/../public/icons/facebookFill.svg'
import instagram from '@/../public/icons/instagramFill.svg'
import x from '@/../public/icons/xFill.svg'
import linkdin from '@/../public/icons/linkdinFill.svg'
import youtube from '@/../public/icons/youtubeIcon.svg'
import secureCard1 from '@/../public/icons/secureCard1.svg'
import secureCard2 from '@/../public/icons/secureCard2.svg'
import orgLogo from '@/../public/icons/logo.svg'
import orgTitle from '@/../public/icons/orgTitle.svg'
import orgCompaniesMobileImage from '@/../public/icons/secureCard2.svg'


import styles from './styles/Footer.module.css'

const Footer = ()=>{

    return(
    <div className={styles.footer}>
        <div className={styles.top} id="footer">
            {/* this logo for mobile view */}
            <div className={styles.logo}>
                <Image 
                    src={orgLogo}
                    alt='org logo'
                />
                <p>Member of the Al_Habtoor Group</p>
            </div>

            <div className={styles.orgLogo}>
                <Image 
                    src={orgTitle}
                    alt='org title'
                />
            </div>

            <div className={styles.navs}>
               <div className={styles.topNavs}>
                    {
                        footerNavigationData.map((item, index)=>{

                            return(
                            <a key={index} className={styles.navItem} href={item.href}>
                                {item.text}
                            </a>)
                        })
                    }
               </div>

               <p><strong>Al Habtoor Companies</strong></p>

                <div className={styles.bottomNavs}>
                {
                    footerNavigationDataB.map((item, index)=>{

                        return(
                        <a key={index} className={styles.navItem} href={item.href}>
                            {item.text}
                        </a>)
                    })
                }
                </div>
            </div>

            <div className={styles.followUs}>
                <h3>FOLLOW US ON</h3>

                <div className={styles.socialLinks}>
                    <Image 
                        src={facebook}
                        alt='facebook icon'
                    />
                    <Image 
                        src={instagram}
                        alt='instagram icon'
                    />
                    <Image 
                        src={x}
                        alt='x icon'
                    />
                    <Image 
                        src={linkdin}
                        alt='linkdin icon'
                    />
                    <Image 
                        src={youtube}
                        alt='yourube icon'
                    />
                </div>

                <div className={styles.cards}>
                    <Image 
                        src={secureCard1}
                        alt='secureCard1 icon'
                    />
                    <Image 
                        src={secureCard2}
                        alt='secureCard2 icon'
                    />
                </div>

            </div>
        </div>

        <div className={styles.orgCompaniesMobile}>

            <p><strong>Al Habtoor Companies</strong></p>

            {
                footerNavigationDataB.map((item, index)=>{

                    return(
                    <a key={index} className={styles.navItem} href={item.href}>
                        {item.text}
                    </a>)
                })
            }
            
            <div className={styles.orgCompaniesMobileCardContainer}>
                <div className={styles.orgCompaniesMobileCard}>
                    <Image 
                        src={orgCompaniesMobileImage}
                        alt='secure card 2'
                    />
                </div>
            </div>
        </div>
        <p className={styles.bottom}>
            © 2018 Diamondlease LLC - All Rights Reserved. 
        </p>
    </div>)
}

export default Footer