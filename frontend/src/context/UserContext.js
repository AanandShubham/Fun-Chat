import { useState } from "react";

const UserContext = React.createContext();

export default UserContext;

export const UserContextProider = ({children})=>{
    const [userData,setUserData] = useState(JSON.parse(localStorage.getItem('chatUser'))|| null);
    return (
        <UserContext.Provider value={{userData,setUserData}}>
            {children}
        </UserContext.Provider>
    )
}

