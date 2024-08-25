import ButtonOne from '../Button/ButtonOne'
import styles from './styles/SubscribtionForm.module.css'

const SubscribtionForm = ()=>{

    
    return(
    <div className={styles.subscribionForm}>
        <h3>Subscribe here for exclusive offers and updates!</h3>
        <div className={styles.inputs}>
            <input type="text" id="name" placeholder="name" />
            <input type="text" id="email" placeholder="email" />
        </div>
        <p>Don't miss out! enter your email and your name, then hit subscribe to unlock a world of special offers and details.</p>
        <ButtonOne width='100%' height='4.7rem'>Subscribe</ButtonOne>
    </div>)
}

export default SubscribtionForm