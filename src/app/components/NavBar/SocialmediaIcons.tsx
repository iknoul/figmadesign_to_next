import style from './styles/SocialMediaIcons.module.css'

import Image from 'next/image'
import instagram from '@/../public/icons/instagramIconNotFill.svg'
import facebook from '@/../public/icons/facebookIconNotFill.svg'
import linkdin from '@/../public/icons/linkdinIconNotFill.svg'
import x from '@/../public/icons/xIconNotFill.svg'


const SocialMediaIcons = ()=>{

    return(
    <div className={style.socialMediaIcons}>
        <Image 
            src={instagram}
            alt='instagram'
        />
        <Image 
            src={facebook}
            alt='facebook'
        />
        <Image 
            src={linkdin}
            alt='linkdin'
        />
        <Image 
            src={x}
            alt='x'
        />
    </div>)
}

export default SocialMediaIcons