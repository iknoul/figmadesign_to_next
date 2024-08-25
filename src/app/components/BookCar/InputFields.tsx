'use client'

import { useState, useEffect } from "react";
import LocationPickup from "./LocationPickup";
import DateTimePicker from "./DateTimePicker";
import ButtonOne from "../Button/ButtonOne";
import React from "react";
import Image from "next/image";
import searchIcon from '@/../public/icons/clarity_search-line.svg'
import style from './styles/InputField.module.css'


interface MyComponentProps {
    differentDropOff?: boolean;
    setBookNowVisible?: Function;
};


const InputFields: React.FC<MyComponentProps>= ({differentDropOff, setBookNowVisible = ()=>{}})=>{

    const [selectedDate, setSelectedDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [pickUpLocation, setPickUpLocation] = useState('');
    const [dropDownLocation, setDropDownLocation] = useState('');

    useEffect(() => {
        if (setBookNowVisible) {
          // Reset the state when component becomes visible
          setSelectedDate('');
          setReturnDate('');
          setPickUpLocation('');
          setDropDownLocation('');
        }
      }, [setBookNowVisible]);

    return(
    <div className={style.inputField}>
        <LocationPickup    
            location = {pickUpLocation}
            setLocation = {setPickUpLocation}
        />  
        {
            differentDropOff && 
            <LocationPickup 
                textContent='Drop off location' 
                location = {dropDownLocation}
                setLocation = {setDropDownLocation}
            />
        }
        <DateTimePicker 
             selectedDate={selectedDate}
             setSelectedDate={setSelectedDate}
        />
        <DateTimePicker
             selectedDate={returnDate}
             setSelectedDate={setReturnDate}
        />

        <div className={style.search}>
            <Image 
                src={searchIcon}
                alt="search Icon"
                className={style.searchButton}
            />
        </div>
        <div className={style.quickSearch}>
            Quick Book
        </div>
        <ButtonOne onlyMobile={true} callBackFunction={()=>{setBookNowVisible(false)}} width="50%">Search</ButtonOne>

    </div>)
}

export default InputFields