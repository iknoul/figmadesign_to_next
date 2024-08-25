import { useState } from 'react';
import ButtonOne from '../Button/ButtonOne'
import styles from './styles/SubscribtionForm.module.css'

interface FormState {
    [key: string]: string;
}

const SubscribtionForm = ()=>{

    const [formValues, setFormValues] = useState<FormState>({ name: '', email: '' });
    const [formErrors, setFormErrors] = useState<FormState>({ name: '', email: '' });

    const isValidEmail = (email:String) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    
    const isValidName = (name: string) => {
        const nameRegex = /^[a-zA-Z]{3,}$/;
        return nameRegex.test(name);
    };

    const validateField = (name: string, value: string) => {
        let error = '';
    
        switch (name) {
          case 'name':
            if (!value) {
              error = '*Name is required';
            }
            else if (!isValidName(value)) {
                error = '*Type a valid name';
            }
            break;
          case 'email':
            if (!value) {
              error = '*Email is required';
            } else if (!isValidEmail(value)) {
              error = '*Invalid email address';
            }
            break;
          default:
            break;
        }
    
        setFormErrors(prevErrors => ({
            ...prevErrors,
            [name]: error,
          }));
      
          return error;
        };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
    
        setFormValues({
          ...formValues,
          [id]: value,
        });
    
        validateField(id, value);
      };

    const handleButtonClick = () => {
        const nameError = validateField('name', formValues.name);
        const emailError = validateField('email', formValues.email);
    
        if (!nameError && !emailError) {
          // Handle the form submission (e.g., send data to the server)
          setFormValues({ name: '', email: '' })
          setFormErrors({ name: '', email: '' })
        } else {
          
        }
      };

    const getInputStyle = (field: string) => {
        return formErrors[field] ? styles.invalidInput : formValues[field] ? styles.validInput : '';
    };
    

    return(
    <div className={styles.subscribionForm}>
        <h3>Subscribe here for exclusive offers and updates!</h3>
        <div className={`${styles.inputs}`}>

            <input 
                type="text" 
                id="name" 
                placeholder="name" 
                value={formValues.name}
                onChange={handleChange}
                className={`${getInputStyle('name')}`}
            />
            {formErrors.name && <div className={styles.error}>{formErrors.name}</div>}

            <input
                type="text" 
                id="email" 
                placeholder="email" 
                value={formValues.email}
                onChange={handleChange}
                className={`${getInputStyle('email')}`}
            />
            {formErrors.email && <div className={styles.error}>{formErrors.email}</div>}
            <div className='error'></div>
        </div>
        <p>Don&apos;t miss out! enter your email and your name, then hit subscribe to unlock a world of special offers and details.</p>
        <ButtonOne width='100%' height='4.7rem' callBackFunction={handleButtonClick}>Subscribe</ButtonOne>
    </div>)
}

export default SubscribtionForm