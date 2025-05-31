import React, { useEffect, useState } from 'react'
import { HomePages } from './HomePages';
import { UserPage } from './UserPage';
import { UserProvider } from '../Context/UserContext';
import { Welcome } from './Welcome';

export const HandlePages = () => {
    const [pag, setPag] = useState();
    useEffect(() => {
        setPag("home");
    }, []);
    const handlePag = (p) => {
        setPag(p);
    }
  return (
    <>
        {pag == "home" && <HomePages handlePag={handlePag}/>}
        {<UserProvider>
        {pag == "user" && <UserPage handlePag={handlePag}/>}
        {pag == "welcome" && <Welcome handlePag={handlePag}/>}
        </UserProvider>}
    </>
  )
}
