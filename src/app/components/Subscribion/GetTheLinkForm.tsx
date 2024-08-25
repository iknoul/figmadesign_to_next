import ButtonOne from '../Button/ButtonOne'
import styles from './styles/GetTheLinkForm.module.css'


const GetTheLinkForm = ()=>{

    return(
    <div className={styles.inputs}>
        <div className={styles.label}>
            <p>Enter your number and receive a direct link to download the app</p>
        </div>
        <input type="text" id="phoneNumber" />
        <ButtonOne bgColor='black'>Get the link</ButtonOne>
    </div>)
}

export default GetTheLinkForm