'use client'
import SubscribtionForm from "./SubscribtionForm";
import GetTheLinkForm from "./GetTheLinkForm";
import GetTheLink from "./GetTheLink";

import Image from "next/image";
import mobileIcon from '@/../public/icons/mobileIcon.svg'

import styles from './styles/SubscribtionMain.module.css'
import { useEffect, useState } from "react";

const SubscribtionMain = ()=>{

    const [isMobileView, setIsMobileView] = useState(window.innerWidth >1180);

    useEffect(() => {
        // Function to update state based on window width
        const handleResize = () => {
          setIsMobileView(window.innerWidth < 1180);
        };
    
        // Add event listener for window resize
        window.addEventListener('resize', handleResize);
    
        // Clean up event listener on component unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

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
                    {!isMobileView &&
                        <>
                            <GetTheLinkForm />
                            <GetTheLink />
                        </>

                    }

                    {isMobileView &&

                        <GetTheLink />
                    }
                </div>

            </div>  
            {isMobileView && 
            
                <GetTheLinkForm />
            }
    </div>)
}

export default SubscribtionMain