import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/AuthContext"

export const useLogout = () => {

    const [loading, setLoading] = useState(false)
    const { setAuthUser } = useAuthContext()

    const logout = async () => {
        setLoading(true)

        try {

            const response = await fetch("/api/auth/logout", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const data = response.json()

            if (data.error) {
                throw new Error(data.error)
            }

            // removing user data from local storage
            localStorage.removeItem('chat-user-data')

            // removing user data from context 
            setAuthUser(null)

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    return {loading,logout}
}