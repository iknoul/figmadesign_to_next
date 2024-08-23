import MenuBar from './MenuBar'

import style from './styles/MainHead.module.css'

import Image from 'next/image'
import orgName from '@/../public/icons/nameLogo.svg'
import orgLogo from '@/../public/icons/logo.svg'

const MainHead = ()=>{
    return(
    <div className={style.mainHead}> 
        <div className={style.logo}>
            <Image 
                src={orgName}
                alt='organisation name'
                className={style.organisationTitle}
            />
            <Image 
                src={orgLogo}
                alt='organization logo'
                className={style.logo}
            />
        </div>
        <MenuBar />

    </div>)
}

export default MainHead