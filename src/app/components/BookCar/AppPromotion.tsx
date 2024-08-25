import Image from 'next/image'
import appstore from '@/../public/icons/downloadFromAppleStore.svg'
import playStore from '@/../public/icons/downloadFromPlayStore.svg'

import style from './styles/AppPromottion.module.css'

const AppPromotion:React.FC = ()=>{
    return(
    <div className={style.appPromotion}>
        <p>Download our App for easy accessibility anytime, anywhere!</p>
        <div className={style.icons}>
        <a href="https://play.google.com/store/apps/details?id=com.speedautosystems.vmi.dimondlease&pcampaignid=web_share">
            <Image 
                src={appstore}
                alt='download it from app store'
            />
        </a>
        <a href="https://apps.apple.com/in/app/kgk-diamond/id6479595403">
            <Image 
                src={playStore}
                alt='download it from play store'
            />
        </a>
        </div>
    </div>)
}

export default AppPromotion