'use client'
import SubscribtionForm from "./SubscribtionForm";
import GetTheLinkForm from "./GetTheLinkForm";
import GetTheLink from "./GetTheLink";

import Image from "next/image";
import mobileIcon from '@/../public/icons/mobileIcon.svg'

import styles from './styles/SubscribtionMain.module.css'

const SubscribtionMain = ()=>{

    return(
    <div className={styles.SubscribtionMain}>
          <SubscribtionForm />
          <div className={styles.appLink}>
                <div className={styles.image}>
                    <Image 
                        src={mobileIcon}
                        alt="get mobile"
                    />
                </div>
                <div className={styles.links}>

                    <div className={styles.hideOnMobile}>
                        <GetTheLinkForm />
                        <GetTheLink />
                    </div>


                    <div className={styles.mobileViewForm}>
                        <GetTheLink />
                    </div>         
                </div>
            </div>  
 
            <div className={styles.mobileViewForm}>
                <GetTheLinkForm />
            </div>
                
    </div>)
}

export default SubscribtionMain