'use client'

import style from './styles/BookCarMobile.module.css'
import InputFields from './InputFields'
import TypeSelector from './TypeSelector'
import ButtonOne from '../Button/ButtonOne'
import { useState, useEffect, useRef } from 'react'

const BookCarMobile = ()=>{
    
    const[bookNowVisible, setBookNowVisible] = useState(false) 
    const[differentDropOff, setDifferentDropOff] = useState(false)

    const  menuRef = useRef<HTMLDivElement>(null)

    // for toggle the visibility of inputs fields
    const handleOnClick=()=>{
        if(bookNowVisible){
            setBookNowVisible(false)
        }
        else{
            setBookNowVisible(true)
        }
    }

    // hide the input fields if clicked outside
    const handleClickOutSide = (event:MouseEvent)=>{
        if(menuRef.current && event.target instanceof Node && !menuRef.current.contains(event.target)){
            setBookNowVisible(false)
        }
    }
    // add event listener on dom loaded
    useEffect(()=>{
        document.addEventListener('mousedown', handleClickOutSide)

        return(()=>{
            document.removeEventListener('mousedown', handleClickOutSide)
        })
    }, [])

    return(
    <div ref={menuRef} className={style.bookCarMobileWhole}>
        <div className={style.bookCarMobile}>
            <ButtonOne callBackFunction = {handleOnClick} width='calc(50% - 0.33rem)'>Book Now</ButtonOne>
            <ButtonOne bgColor='white' width='calc(50% - 0.33rem)'>Quick Book</ButtonOne>
        </div>
        {bookNowVisible &&<> 
        <TypeSelector differentDropOff = {differentDropOff} setDifferentDropOff = {setDifferentDropOff}/>
        <InputFields differentDropOff={differentDropOff} setBookNowVisible={setBookNowVisible}/>
        </>}
    </div>)
}

export default BookCarMobile