import React, { useState } from 'react'
import toast from 'react-hot-toast'

const useSignup = () => {
    const [loding, setLoding] = useState(false)



    const signup = async ({ fullname, username, password, confirmPassword, gender }) => {

        const success = handleInputError({ fullname, username, password, confirmPassword, gender })

        if (!success) return;

        setLoding(true)

        try {
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ fullname, username, password, confirmPassword, gender })
            })

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }

            if (data) {
                localStorage.setItem("chatUser", data);
            }

            console.log(data);

        } catch (error) {
            console.log(error)
            toast.error(error.message);

        } finally {
            setLoding(false)

        }
    }

    return { loding, signup }
}

export default useSignup

function handleInputError({ fullname, username, password, confirmPassword, gender }) {
    if (!fullname && !username && !password && !confirmPassword && !gender) {
        toast.error("Please fill all fields !")
        return false
    }

    if (password !== confirmPassword) {
        toast.error("Password and ConfirmPassword is not same")
        return false
    }

    if (password.length < 6) {
        toast.error("Password lenght must be at least 8")
        return false
    }



    return true;
}