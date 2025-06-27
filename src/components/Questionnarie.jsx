import React, { useContext, useEffect, useState } from 'react'
import "../css/Style.css";
import QuestionContext from '../Context/QuestionContext';
import { Question } from './Question';

export const Questionnarie = ({handlePag}) => {
    const {db, index, setIndex, handleCO2} = useContext(QuestionContext);
    const handleIndex = (i) => {
        if(i<0){
            setIndex(0);
        }else if(i > (db.length-1)){
            handleCO2();
            setIndex(i-1);
            handlePag("results");
        }else{
            setIndex(i);
        }
    }
    return(
    <>
        <Question key={db[index].id} data={db[index]} index={index} handlePag={handlePag} handleIndex={handleIndex}/>
    </>
    )

}
