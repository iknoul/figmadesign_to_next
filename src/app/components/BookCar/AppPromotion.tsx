import style from './styles/AppPromottion.module.css'

import Image from 'next/image'
import appstore from '@/../public/icons/downloadFromAppleStore.svg'
import playStore from '@/../public/icons/downloadFromPlayStore.svg'



const AppPromotion = ({ className }: { className?: string })=>{
    return(
    <div className={style.appPromotion}>
        <p>Download our App for easy accessibility anytime, anywhere!</p>
        <div className={style.icons}>
        <Image 
            src={appstore}
            alt='download it from app store'
        />
        <Image 
            src={playStore}
            alt='download it from play store'
        />
        </div>
    </div>)
}

export default AppPromotion