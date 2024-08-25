'use client'

import { questionData } from '@/lib/data'
import Image from 'next/image'
import styles from './Questions.module.css'
import { useState } from 'react'


const Questions = ()=>{

    const [activeIndex, setActiveIndex] = useState<number | null>(null)
 
    const toggleActive = (index : number) =>{
            setActiveIndex(index === activeIndex ? null : index)
    }

    return(
        <section className={styles.frequentQuestions} id="questions">
            <h1>Frequently asked questions</h1>
            <div className={styles.qestions}>
            {
                questionData.map((item, index)=>{
                    
                    return(
                        <div className={styles.questionItem} onClick={()=>toggleActive(index)}>
                            <div className={`${styles.question} ${activeIndex === index ? styles.active : ''}`}>
                                <h3>{item.question}</h3>
                                <Image 
                                    src={'/icons/plusMark.svg'}
                                    alt='expand icon'
                                    width={18}
                                    height={18}
                                />
                            </div>
                            <p className={styles.answer}>{item.answer}</p>
                        </div>)
                })
            }
            </div>
        </section>
    )
}

export default Questions