import React, {  useContext } from 'react';
import { HomePages } from './HomePages';
import { HeaderPage } from './HeaderPage';
import "../css/Style.css";
import "../css/UserPage.css";
import UserContext from '../Context/UserContext';

export const UserPage = ({handlePag}) => {
    const {handleUser} = useContext(UserContext);
    const handleChange = (e) => {
        handleUser(e.target.value);
    }
  return (
    <>
        <HeaderPage handlePag={handlePag}/>
        <main className='main-container'>
            <div className="container-fluid d-flex flex-column justify-content-between align-items-center w-100">
                <div className="pt-serif-regular mt-4  p-4 rounded text-center">
                    <p className="pt-serif-regular fs-4 bg-none">Me alegra que quieras conocer tu impacto en el medio ambiente</p>
                    <p className="pt-serif-regular fs-4 bg-none border-bottom border-success-subtle border-5 rounded-bottom p-1">Bueno, primero lo primero, <span className="pt-serif-regular text-green bg-none">¿Cómo te llamas?</span></p>
                </div>
                <div className="input-name mt-5 w-50">
                    <div className="mt-3 w-100">
                        <label className="form-label text-black fw-semibold mx-2">Inserta tu nombre</label>
                        <input type="text" placeholder='Nombre...' className="form-control" onChange={handleChange}/>
                    </div>
                    <button className='btn btn-green mt-5 w-25' onClick={() => handlePag("welcome")}>Continuar</button>
                </div>
            </div>
        </main>
    </>
  )
}
