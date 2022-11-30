'use client'

import Link from 'next/link'
import styles from '../Contact/contact.module.css'
import {MdEmail } from 'react-icons/fa'

const ContactCard = () => {
  return (
    <div className={styles.section}>
        <div className={styles.container}>
            <div className={styles.grid}>
                <div className= {styles.grid_card}>
                    <i><MdEmail/></i>
                    <h2>Email</h2>
                    <p>Monday to friday Expectd</p>
                    <p className={styles.last_para}>response time: 72 hours</p>
                    <Link href= '/'> Send Email <span>-&gt;</span></Link>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ContactCard;