import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import "../css/HomePages.css";
import "../css/Style.css";
export const HomePages = ({handlePag}) => {
  return (
    //Home
    <>
        <header>
            <div className="container-fluid d-flex justify-content-between align-items-center ">
                <div className="li-left d-flex align-items-center gap-2 mx-4 mt-3">
                <i className="bi bi-gear fs-4 rotate-center"></i>
                <div className="navbar-brand d-flex align-items-center fs-2 m-0">
                    <p className="mb-0 mystery-quest-regular fw-semibold">EcoScore</p>
                </div>
            </div>
                <div className=" li-right mx-5">
                <Dropdown className="">
                    <Dropdown.Toggle variant="success" className="btn dropdown-len" id="dropdown-basic">
                        <i className="bi bi-globe-americas r"></i> ES
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/1">EN</Dropdown.Item>
                        <Dropdown.Item href="#/2">EN</Dropdown.Item>
                        <Dropdown.Item href="#/3">EN</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </div>
            </div>
        </header>
        <main className='main-container'>
            <div className="container-fluid d-flex flex-column justify-content-between align-items-center">
                <div className="fi-text text-center ">
                <p className='pt-serif-regular'>Quieres conocer qué tanto carbono emite al año?</p>
                </div>
                <div className="s-text m-2 text-center d-flex align-items-center justify-content-center">
                    <h2 className='mystery-quest-regular'>Calculadora De Huella De Carbono</h2>
                </div>
                <div className="t-text mt-2 d-flex align-items-center justify-content-center text-center w-100">
                    <p>Realiza un cuestionario y descubre tus emisiones anuales de carbono</p>
                </div>
                <div className="fo-text mt-4 d-flex flex-column justify-content-between align-items-center">
                    <p className='fw-medium'>Selecciona tu pais</p>
                    <select defaultValue="colombia" name="country" id="country" className='form-select w-25 pt-serif-regular fw-medium'>
                        <option value="colombia">Colombia</option>
                    </select>
                    <button className='btn mt-4 bg-green text-light custom-btn' onClick={() => handlePag("user")}>Empezar</button>
                </div>
            </div>
        </main>
    </>
  )
}
