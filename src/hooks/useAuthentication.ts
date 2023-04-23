import * as firebaseAuth from 'firebase/auth'

import { useState, useEffect } from 'react'


export const useAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState<boolean>(false)

    // cleanup
    // deal with memory leak
    const [cancelled, setCancelled] = useState(false)

    const auth = firebaseAuth.getAuth()

    function checkIfIsCancelled() {
        if (cancelled) {
            return
        }
    }

    interface Data {
        email: string,
        password: string,
        displayName: string
    }

    const createUser = async (data: Data) => {
        checkIfIsCancelled()

        setLoading(true)

        try {
            const { user } = await firebaseAuth.createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await firebaseAuth.updateProfile(user, {
                displayName: data.displayName
            })

            return user

        } catch (error: any) {
            console.error(error.message)
            console.error(typeof error.message)
        }

        setLoading(false)
    }

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return {
        auth,
        createUser,
        error,
        loading
    }
}