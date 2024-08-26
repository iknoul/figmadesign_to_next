'use client'
import { useState } from 'react'

import AppPromotion from './AppPromotion'
import InputFields from './InputFields'
import TypeSelector from './TypeSelector'

import Image from 'next/image'
import chatIcon from '@/../public/icons/chatIcon.svg'
import callIcon from '@/../public/icons/callIcon.svg'
import style from './styles/BookCarMain.module.css'


const BookCarMain:React.FC = ()=>{

    //for conditionally rendering the different drop off selector in childrens 
    const[differentDropOff, setDifferentDropOff] = useState(false)

    return(
    <div className={style.bookCarMain}>

        <button className={`${style.chat} ${style.call}`}>
            <Image 
                src={callIcon}
                alt='call icon'
            />
        </button>

        <button className={`${style.chat} ${style.bot}`}>
            <Image 
                    src={chatIcon}
                    alt='chat icon'
            />
        </button>

        <TypeSelector  differentDropOff = {differentDropOff} setDifferentDropOff = {setDifferentDropOff}/>
        <InputFields differentDropOff={differentDropOff}/>
        <AppPromotion />
    </div>)
}

export default BookCarMain