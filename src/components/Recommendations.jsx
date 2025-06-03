import React, { useContext } from 'react'
import { HeaderPage } from './HeaderPage';
import "../css/Style.css";
import UserContext from '../Context/UserContext';
export const Recommendations = ({handlePag}) => {
    const {user} = useContext(UserContext);
    
  return (
    <>
        <HeaderPage handlePag={handlePag}/>
        <main className='main-container '>
            <div className="container-fluid d-flex flex-column justify-content-between align-items-center w-100">
                <div className="pt-serif-regular mt-4 p-4 rounded text-center">
                    <div className="container-image mb-2">
                        <img src="../img/plastico.png" alt="img-plastic" />
                    </div>
                    <p className="pt-serif-regular fs-4 bg-none border-bottom border-success-subtle border-5 rounded-bottom p-1">Reducir Plástico</p>
                </div>
                <div className="pt-serif-regular p-2 rounded d-flex flex-column align-items-center">
                    <p className="pt-serif-regular fs-6 bg-none w-50 text-body-secondary">Prioriza reducir el uso del plastico, ya que se fabrica principalmente de petróleo fósiles y cada kg de plástico genera entre 3kg y 6kg de emisiones de carbono</p>
                    <div className="btn-icon w-50 d-flex align-items-center justify-content-center gap-2 mt-4">
                        <i className="bg-green bi bi-arrow-left text-light" onClick={() => handlePag("results")}></i>
                        <button className='btn w-25 d-flex align-items-center justify-content-center' onClick={() => handlePag("questions")}>Continuar <i className="bg-none bi bi-arrow-right"></i></button>
                    </div>

                
                </div>
                
            </div>
        </main>
    </>
  )
}
