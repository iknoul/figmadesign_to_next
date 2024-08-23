import Image from "next/image"

import { user } from "@/lib/data"
import notificationIcon from '@/../public/icons/bellIcon.svg'
import closeIcon from '@/../public/icons/crossIcon.svg'

import style from './styles/MenuBar.module.css'

const MenuBar = ()=>{
    return(
    <div className={style.menuBar}>
        <div className={style.closeIcon}>
            <Image 
                src={closeIcon}
                alt="close"
            />
        </div>
        <a href="#footer">About</a>
        <a href="#promotion">Offers</a>
        <a href="#popularCar">Corporate</a>
        <a href="#questions">Personal</a>
        <a href="#locations">Locations</a>
        <a href="#subscribe" className={style.noBorderBottom}>Contact Us</a>
        <a href="" className={style.notificationIcon}>
            <Image 
                src={notificationIcon}
                alt="notification"
            />
        </a>
        <div className={style.userlogo}>
            <div className={style.firstName}>
                {user.name[0]}
            </div>
            <p>{user.name}</p>
        </div>
        <div className={style.loginIcon}>
            <p>Log in/Sign up</p>
        </div>
    </div>)
}

export default MenuBar