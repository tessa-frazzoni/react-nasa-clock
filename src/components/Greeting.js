import React from 'react'
import styles from './Greeting.module.css'

const Greeting = (props) => {
    return (
        <div>
            <p className={styles.greeting}>{props.greeting}, it is currently</p>
        </div>
    )
}

export default Greeting
