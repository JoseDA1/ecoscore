import React, { createContext, useState } from 'react'

const UserContext = createContext();
const UserProvider = ({children}) => {
    const [user, setUser] = useState();
    const handleUser = (uName) => {
        setUser(uName);
    }

    const data = {
        user,
        handleUser,
        setUser
    };
    return <UserContext value={data}>{children}</UserContext>;
}

export {UserProvider};
export default UserContext;

