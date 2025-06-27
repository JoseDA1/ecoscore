import React, { useContext, useEffect } from 'react'
import QuestionContext from '../Context/QuestionContext'


export const Answers = ({id, resp}) => {
    const {index, selected, handleSelected, handleCO2Accumulated} = useContext(QuestionContext);

    
  return (
    <>
        <div className="m-2 w-50">
        <button value={resp.CO2} className={`btn w-75 border border-success  d-flex align-items-center 
          ${selected == id ? "" : "text-secondary bg-success-subtle"}`} 
          onClick={() => {handleSelected(id); handleCO2Accumulated(index, id, resp.CO2)}}>
          <span className="answers-span border rounded-1 border-success">{id}</span>{resp.res}
        </button>
        </div>
    </>
  )
}
