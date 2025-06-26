import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/AuthContext"

export const useLogin = () => {
    const [loading, setLoading] = useState(false)
    const { setAuthUser } = useAuthContext()

    const login = async ({ username, password }) => {

        const success = handleInputError({ username, password })

        if (!success) return

        setLoading(true)

        try {

            const response = await fetch("/api/auth/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            })

            const data = response.json()

            if (data.error) {
                throw new Error(data.error);
            }

            // setting data to local storage
            localStorage.setItem('chat-user-data', JSON.stringify(data))

            // setting data to Auth context
            setAuthUser(data)


        } catch (error) {
            console.log("Error : ", error)
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    return { loading, login }
}

const handleInputError = ({ username, password }) => {

    if (!username || !password) {
        toast.error("Fields are Empty !!")
        return false
    }

    return true;
}