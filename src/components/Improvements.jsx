import React, { useContext } from 'react'
import { HeaderPage } from './HeaderPage';
import "../css/Style.css";
import UserContext from '../Context/UserContext';
export const Improvements = ({handlePag}) => {
    const {user} = useContext(UserContext);
    
  return (
    <>
        <HeaderPage handlePag={handlePag}/>
        <main className='main-container'>
            <div className="container-fluid d-flex flex-column justify-content-between align-items-center w-100">
                <div className="pt-serif-regular mt-4  p-4 rounded text-center">
                    <div className="container-image mt-2">
                        <img src="../img/transporte-publico.jpg" alt="img-tp" />
                    </div>
                    <p className="pt-serif-regular fs-4 bg-none border-bottom border-success-subtle border-5 rounded-bottom p-1">Transporte público</p>
                </div>
                <div className="pt-serif-regular p-2 rounded d-flex flex-column align-items-center">
                    <p className="pt-serif-regular fs-6 bg-none w-75 text-body-secondary">Estás ahorrando un 12% de tu huella de carbono al usar el transporte público, sigue así {user}</p>
                    <div className="btn-icon w-100 d-flex align-items-center justify-content-center gap-2 mt-4">
                        <i className="bg-green bi bi-arrow-left text-light" onClick={() => handlePag("results")}></i>
                        <button className='btn w-25 d-flex align-items-center justify-content-center' onClick={() => handlePag("questions")}>Continuar <i className="bg-none bi bi-arrow-right"></i></button>
                    </div>

                
                </div>
                
            </div>
        </main>
    </>
  )
}
