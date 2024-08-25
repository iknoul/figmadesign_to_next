import { rentSteps } from '@/lib/data'

import styles from './RentStep.module.css'

import Image from 'next/image'


const RentStep = ()=>{

    return(
    <div className={styles.rentSteps}>
        <h1>Rent/Lease In three easy steps</h1>
        <div className={styles.steps}>
            {
             rentSteps.map((item, index)=>{

                return(              
                    <div key={index} className={styles.stepItem}>

                        <Image 
                            src={item.src0}
                            alt={`step ${index} icon`}
                            width={100}
                            height={100}
                        />

                        <div className={styles.step}>
                            <Image 
                                src={item.src1}
                                alt={`step ${index} icon`}
                                width={100}
                                height={100}
                            />
                            <p>{item.description}</p>
                        </div>
                        
                    </div>
                )
            })   
            }
        </div>
    </div>)
}

export default RentStep