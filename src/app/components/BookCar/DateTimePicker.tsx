import style from './styles/DateTimePicker.module.css'

import Image from 'next/image'
import calederIcon from '@/../public/icons/calenderIcon.svg'
import React from 'react';

interface myProps {
 
    selectedDate?: string;
    setSelectedDate?: Function;
}

const DateTimePicker: React.FC<myProps> = ({selectedDate, setSelectedDate=()=>{}})=>{

    return(
    <>
        <div className={style.dateTimePicker}>
            <Image 
                src={calederIcon}
                alt='calender icon'
            />
            <input 
                type="datetime-local" 
                id="datetime-input" 
                placeholder="mm/dd/yyyy __:__ __" 
                />
        </div>
    </>)
}

export default DateTimePicker