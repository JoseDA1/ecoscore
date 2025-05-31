import React from 'react'
import "../css/HomePages.css";
export const HeaderPage = ({handlePag}) => {
  return (
    <>
        <header>
            <div className="container-fluid d-flex justify-content-between align-items-center ">
                <div className="li-left d-flex align-items-center gap-2 mx-4 mt-3">
                    <div className="navbar-brand d-flex align-items-center fs-2 m-0">
                        <p className="mb-0 mystery-quest-regular fw-semibold">EcoScore</p>
                    </div>
                </div>
                <div className="back">
                    <button className='btn btn-green mx-3' onClick={() => handlePag("home")}>Ir al inicio</button>
                </div>
            </div>
        </header>
    </>
  )
}
