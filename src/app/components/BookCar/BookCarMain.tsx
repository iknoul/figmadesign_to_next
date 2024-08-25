'use client'
import { useState } from 'react'
import style from './styles/BookCarMain.module.css'
import AppPromotion from './AppPromotion'
import InputFields from './InputFields'
import TypeSelector from './TypeSelector'

const BookCarMain = ()=>{
    
    const[differentDropOff, setDifferentDropOff] = useState(false)


    return(
    <div className={style.bookCarMain}>
        <TypeSelector  differentDropOff = {differentDropOff} setDifferentDropOff = {setDifferentDropOff}/>
        <InputFields differentDropOff={differentDropOff}/>
        <AppPromotion />
    </div>)
}

export default BookCarMain