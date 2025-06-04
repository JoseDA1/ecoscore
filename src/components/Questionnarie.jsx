import React, { useState } from 'react'
import { HeaderPage } from './HeaderPage';
import "../css/Style.css";
import UserContext from '../Context/UserContext';

export const Questionnarie = ({handlePag}) => {
    const [selected, setSelected] = useState(0);
    const handleSelected = (n) => {
        setSelected(n);
    }

    return(
    <>
          <HeaderPage handlePag={handlePag}/>
          <main className='main-container'>
              <div className="container-fluid d-flex flex-column justify-content-between align-items-center w-100">
                  <div className="pt-serif-regular mt-4  p-4 rounded text-center">
                      <p className="pt-serif-regular fs-4 bg-none"><span className="pt-serif-regular text-green bg-none">1- </span>Fuentes electricas en el hogar</p>
                  </div>
                  <div className="pt-serif-regular p-4 rounded d-flex flex-column align-items-center">
                      <p className="pt-serif-regular fs-6 bg-none w-75 text-body-secondary">Tu hogar cuenta con servicio de electricidad ecológica? Por ejemplo, sin combustible fósiles, solo de energía eólica, solar, hidráulica o nuclear?</p>
                      
                      <div className="answers my-4 d-flex flex-column align-items-center justify-content-center w-100">
                        <div className="m-2 w-75">
                            <button className={`btn w-50 border border-success  d-flex align-items-center ${selected == 1 ? "" : "text-secondary bg-success-subtle"}`} onClick={() => {handleSelected(1)}}><span className="answers-span border rounded-1 border-success">1</span>Sí</button>
                        </div>
                        <div className="m-2 w-75">
                            <button className={`btn w-50 border border-success  d-flex align-items-center ${selected == 2 ? "" : "text-secondary bg-success-subtle"}`} onClick={() => {handleSelected(2)}}><span className="answers-span border rounded-1 border-success">2</span>No</button>
                        </div>
                        
                      </div>
                      
                      <div className="btn-icon w-100 d-flex align-items-center justify-content-center gap-2 mt-4 ">
                          <i className="bg-green bi bi-arrow-left text-light" onClick={() => handlePag("welcome")}></i>
                          <button className='btn w-25 d-flex align-items-center justify-content-center' onClick={() => handlePag("results")}>Continuar <i className="bg-none bi bi-arrow-right"></i></button>
                      </div>
  
                  
                  </div>
                  
              </div>
          </main>
      </>
    );
    
}
