import { locations } from '@/lib/data'
import style from './styles/LocationPickup.module.css'
import Image from 'next/image'
import locationIcon from '@/../public/icons/locationIcon.svg'
import arrowDownRed from '@/../public/icons/arrowDownRed.svg'
import { useState, useEffect, useRef } from 'react'


interface MyComponentProps {
    textContent? : string;
    location? : string;
    setLocation? : Function; 
};

const LocationPickup: React.FC<MyComponentProps>= ({textContent = "Pick Up location", location='', setLocation=()=>{}})=>{

    const [optionsVisible, setOptionsVisible] = useState(false)
    const  menuRef = useRef<HTMLDivElement>(null)

    // set selected option to useState
    const handleOnClick =(e:React.MouseEvent<HTMLParagraphElement>)=>{
        
        const target = e.target as HTMLButtonElement;
        setOptionsVisible(false)
        setLocation(target.textContent|| '');
    } 

    const handleClickOutSide = (event:MouseEvent)=>{
        if(menuRef.current && event.target instanceof Node && !menuRef.current.contains(event.target)){
            setOptionsVisible(false)
        }
    }
    useEffect(()=>{
        document.addEventListener('mousedown', handleClickOutSide)

        return(()=>{
            document.removeEventListener('mousedown', handleClickOutSide)
        })
    }, [])
    
    return (
    <div className={style.location}>
        <div className={style.dataItem} onClick={()=>{setOptionsVisible(optionsVisible=>!optionsVisible)}}>
            <Image 
                src={locationIcon}
                alt='location icon'
            />
            <p>{`${location ? location:textContent}`}</p>
            <Image
                src={arrowDownRed}
                alt='location icon'
                className={style.rightAlignedItem}
            />
        </div>
        <div ref={menuRef} className={style.options} style={optionsVisible ?{display:'flex'}:{}}>
            {
                locations.map((item, index)=>{
                    return(
                    <p key={index} className={style.optionItem} onClick={handleOnClick}>
                        {item.name}
                    </p>)
                })
            }
        </div> 
    </div>)
}

export default LocationPickup