'use client'

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import menuBarIcon from '@/../public/icons/menuBarIcon.svg'


import { user } from "@/lib/data"
import notificationIcon from '@/../public/icons/bellIcon.svg'
import closeIcon from '@/../public/icons/crossIcon.svg'

import style from './styles/MenuBar.module.css'

interface myProps {
    menuBarVisible ? :boolean;
    setMenuBarVisible ? :Function;
}
const MenuBar = ()=>{

    const [menuBarVisible, setMenuBarVisible] = useState(false)
    const  menuRef = useRef<HTMLDivElement>(null)

    const handleClickOutSide = (event:MouseEvent)=>{
        if(menuRef.current && event.target instanceof Node && !menuRef.current.contains(event.target)){
            setMenuBarVisible(false)
        }
    }
    useEffect(()=>{
        document.addEventListener('mousedown', handleClickOutSide)

        return(()=>{
            document.removeEventListener('mousedown', handleClickOutSide)
        })
    }, [])

    return(<>
     <Image 
            src={menuBarIcon}
            alt='menuBarIcon'
            className={style.menuBarIcon}
            onClick={()=>{setMenuBarVisible(true)}}
        />
    <div ref={menuRef} className={`${style.menuBar} ${menuBarVisible ? style.menuBarVisible : ''}`}>
        <div className={style.closeIcon} onClick={()=>setMenuBarVisible(false)}>
            <Image 
                src={closeIcon}
                alt="close"
            />
        </div>
        <a onClick={()=>setMenuBarVisible(false)} href="#footer">About</a>
        <a onClick={()=>setMenuBarVisible(false)} href="#promotion">Offers</a>
        <a onClick={()=>setMenuBarVisible(false)} href="#popularCar">Corporate</a>
        <a onClick={()=>setMenuBarVisible(false)} href="#questions">Personal</a>
        <a onClick={()=>setMenuBarVisible(false)} href="#locations">Locations</a>
        <a onClick={()=>setMenuBarVisible(false)} href="#subscribe" className={style.noBorderBottom}>Contact Us</a>
        <a onClick={()=>setMenuBarVisible(false)} href="" className={style.notificationIcon}>
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
    </div>
    </>)
}

export default MenuBar