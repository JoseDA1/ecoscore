import React, { useEffect, useState } from 'react'
import { HomePages } from './HomePages';
import { UserPage } from './UserPage';
import { UserProvider } from '../Context/UserContext';
import { Welcome } from './Welcome';
import { Questionnarie } from './Questionnarie';
import { Results } from './Results';
import { Recommendations } from './Recommendations';
import { Improvements } from './Improvements';

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
        {pag == "questions" && <Questionnarie handlePag={handlePag}/>}
        {pag == "results" && <Results handlePag={handlePag}/>}
        {pag == "recommendation" && <Recommendations handlePag={handlePag}/>}
        {pag == "improvements" && <Improvements handlePag={handlePag}/>}
        </UserProvider>}
    </>
  )
}
