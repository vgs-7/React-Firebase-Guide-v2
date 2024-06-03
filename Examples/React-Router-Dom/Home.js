import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()

    const goToAbout = () => {
        navigate('/about')
    }

    return <>
        <div>Home</div>
        <button onClick={goToAbout}>Go to About</button>
    </>
}

export default Home
