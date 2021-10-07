import React, {useEffect, useState} from 'react'
import Clock from './Clock'
import Explanation from './Explanation'
import styles from './NasaPhoto.module.css'

const apiKey = process.env.REACT_APP_NASA_KEY

const NasaPhoto = () => {
const [photoData, setPhotoData] = useState(null)
const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        const fetchApod = async () => {
            const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
            const data = await response.json()
            setPhotoData(data)
        }
        fetchApod()
    }, [])

    if (!photoData) return <p>Something is wrong</p>

    return (
        <div style={{backgroundImage: `url('${photoData.url}')`, backgroundSize: 'cover', width: '100%',
        height: '100%', backgroundPosition: 'center'}}>
            <div className={styles.clockContent}>
                <Clock />
                <button className="btn btn btn-outline-light" onClick={() => setModalShow(true)}>
                    Learn more about today's picture of the day
                </button> 
                <Explanation 
                    title={photoData.title} 
                    explanation={photoData.explanation}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                /> 
            </div>
        </div>
    )
}


export default NasaPhoto
    