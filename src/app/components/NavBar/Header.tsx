import SocialMediaIcons from "./SocialmediaIcons"
import MainHead from "./MainHead"
import SlidingText from "./SlidingText"
import style from './styles/Header.module.css'

const Header = ()=>{
    return(
    <div className={style.header}>
        <SocialMediaIcons />
        <MainHead />
        <SlidingText />


    </div>)
}
export default Header