import React, {  useContext } from 'react';
import { HomePages } from './HomePages';
import { HeaderPage } from './HeaderPage';
import "../css/Style.css";
import "../css/Welcome.css";
import UserContext from '../Context/UserContext';

export const Results = ({handlePag}) => {
    const {user} = useContext(UserContext);

  return (
    <>
        <HeaderPage handlePag={handlePag}/>
        <main className='main-container'>
            <div className="container-fluid d-flex flex-column justify-content-between align-items-center w-100">
                <div className="pt-serif-regular mt-4  p-4 rounded text-center">
                    <p className="pt-serif-regular fs-4 bg-none border-bottom border-success-subtle border-5 rounded-bottom p-1">Excelente <span className="pt-serif-regular text-green bg-none">{user}</span>!!</p>
                </div>
                <div className="pt-serif-regular p-4 rounded d-flex flex-column align-items-center">
                    <p className="pt-serif-regular fs-5 bg-none w-75">Generas 2.1t de CO2 al año</p>
                    <p className="pt-serif-regular fs-6 bg-none w-75 text-body-secondary">Eso significa que eres amigo del mundo. Quieres conocer qué estás haciendo bien?. O prefieres saber qué puedes mejorar?</p>
                    <div className="answers my-4 d-flex flex-column align-items-center justify-content-center w-100 ">
                        <div className="m-2 w-75">
                            <button onClick={() => {handlePag("improvements")}} className="btn w-50 border border-success bg-success-subtle d-flex align-items-center text-black"><span className="answers-span border rounded-1 border-success">1</span>Muestrame lo que hago bien</button>
                        </div>
                        <div className="m-2 w-75">
                            <button onClick={() => {handlePag("recommendation")}} className="btn w-50 border border-success bg-success-subtle d-flex align-items-center text-black"><span className="answers-span border rounded-1 border-success">2</span>Dime en lo que puedo mejorar</button>
                        </div>
                        
                      </div>

                
                </div>
                
            </div>
        </main>
    </>
  )
}
