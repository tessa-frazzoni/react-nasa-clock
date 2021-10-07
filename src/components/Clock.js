import React, { useEffect, useState } from "react"
import Greeting from "./Greeting"
import styles from './Clock.module.css'
import Explanation from "./Explanation"

const Clock = () => {
  const [clockState, setClockState] = useState()
  const [greeting, setGreeting] = useState()

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds())
        if (date.getHours() < 12) {
            setGreeting('Good morning')
        } else {
            setGreeting('Good afternoon')
        }
  
        })
    }, [])

  return (
    <div className={styles.clock}>
      <Greeting  greeting={greeting} />
      <div className={styles.time}>{clockState}</div>
      <Explanation />
      
    </div>)
}

export default Clock;