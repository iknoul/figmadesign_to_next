'use client'

import style from './styles/TypeSelector.module.css'


interface myProps{
    differentDropOff : boolean;
    setDifferentDropOff : Function;
}

// filters for book now
const TypeSelector:React.FC<myProps> = ({differentDropOff, setDifferentDropOff=()=>{}})=>{
    return(
    <div className={style.types}>
        <p className={`${style.typeItem} ${differentDropOff ? {}:style.active}`} onClick={()=>setDifferentDropOff(false)} id="sameAsPickUp" >Same as Pick-Up</p>
        <p className={`${style.typeItem} ${differentDropOff ? style.active:{}}`}  onClick={()=>setDifferentDropOff(true)} id="differentDropOff" >Different Drop-off</p>
        
        <select id="vehicle" name="vehicle">
            <option value="" disabled selected>Select vehicle type</option>
            <option value="car">Car</option>
            <option value="bike">Bike</option>
            <option value="auto">Auto</option>
            <option value="van">Van</option>
        </select>                
 
    </div>)
}

export default TypeSelector