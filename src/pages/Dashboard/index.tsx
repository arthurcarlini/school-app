import { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import { auth } from '../../firebase/config.js'
import { onAuthStateChanged } from 'firebase/auth'

const Dashboard = () => {

    const navigate = useNavigate()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate('/')
            }
        })
    })

    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}
export default Dashboard