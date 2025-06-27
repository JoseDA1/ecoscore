import React, { useEffect, useState } from 'react'
import { HeaderPage } from './HeaderPage';
import { Answers } from './Answers';

export const Question = ({handlePag, data, handleIndex, index}) => {
    const [answers, setAnswers] = useState({});
    useEffect(() => {
        setAnswers(data.answers);
    }, [data]);
    
  return(
    <>
          <HeaderPage handlePag={handlePag}/>
          <main className='main-container w-100'>
              <div className="container-fluid d-flex flex-column justify-content-between align-items-center w-100">
                  <div className="pt-serif-regular mt-4  p-4 rounded text-center">
                      <p className="pt-serif-regular fs-4 bg-none"><span className="pt-serif-regular text-green bg-none">{data.id}. </span>{data.question}</p>
                  </div>
                  <div className="pt-serif-regular p-4 rounded d-flex flex-column align-items-center w-100">
                      <p className="pt-serif-regular fs-6 bg-none w-50 text-body-secondary">{data.context}</p>
                        <div className="answers my-4 d-flex flex-column align-items-center justify-content-center w-100">
                            {Object.entries(answers).map(([key, value]) => (
                                <Answers handlePag={handlePag} key={key} id={key} resp={value} />
                            ))}
                        </div>
                    
                      
                      <div className="btn-icon w-100 d-flex align-items-center justify-content-center gap-2 mt-4 ">
                          <i className="bg-green bi bi-arrow-left text-light" onClick={() => handleIndex(index-1)}></i>
                          <button className='btn w-25 d-flex align-items-center justify-content-center' onClick={() => handleIndex(index+1)}>Continuar <i className="bg-none bi bi-arrow-right"></i></button>
                      </div>
  
                  
                  </div>
                  
              </div>
              {/* <div className="footer"></div> */}
          </main>
      </>
    );
}
