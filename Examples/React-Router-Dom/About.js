import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate()

    const goToHome = () => {
        navigate('/')
    }

    return <>
        <div>About</div>
        <button onClick={goToHome}>Go to Home</button>
    </>
}

export default About
