import React, {  useContext } from 'react';
import { HeaderPage } from './HeaderPage';
import "../css/Style.css";
import "../css/Welcome.css";
import UserContext from '../Context/UserContext';


export const Welcome = ({handlePag}) => {
    const {user} = useContext(UserContext);


  return (
    <>
        <HeaderPage handlePag={handlePag}/>
        <main className='main-container'>
            <div className="container-fluid d-flex flex-column justify-content-between align-items-center w-100">
                <div className="pt-serif-regular mt-4  p-4 rounded text-center">
                    <p className="pt-serif-regular fs-4 bg-none">Bienvenido <span className="pt-serif-regular text-green bg-none">{user}</span>!!</p>
                    <p className="pt-serif-regular fs-4 bg-none">El primer paso para ayudar a el <span className="pt-serif-regular text-green bg-none">mundo</span> es interesarte</p>
                    <p className="pt-serif-regular fs-4 bg-none border-bottom border-success-subtle border-5 rounded-bottom p-1">Por conocer tu impacto en el <span className="pt-serif-regular text-green bg-none">ambiente</span></p>
                </div>
                <div className="pt-serif-regular mt-4 p-4 rounded d-flex flex-column align-items-center">
                    <p className="pt-serif-regular fs-6 bg-none w-75 text-body-secondary">Primero tendrás que realizar un cuestionario para conocer tu huella de carbono Vayamos a eso</p>
                    <div className="btn-icon w-100 d-flex align-items-center justify-content-center gap-2 mt-4">
                        <i className="bg-green bi bi-arrow-left text-light"></i>
                        <button className='btn w-25 d-flex align-items-center justify-content-center' onClick={() => handlePag("questions")}>Continuar <i className="bg-none bi bi-arrow-right"></i></button>
                    </div>

                
                </div>
                
            </div>
        </main>
    </>
  )
}
