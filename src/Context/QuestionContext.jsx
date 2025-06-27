import React, { createContext, useEffect, useState } from 'react'
import { httpsHelper } from '../helpers/httpsHelper';


const QuestionContext = createContext();
const QuestionProvider = ({children}) => {
    const [db, setDB] = useState({});
    const [selected, setSelected] = useState(0);
    const [total, setTotal] = useState(0);
    const [accumulatedValue, setAccumulatedValue] = useState(0);
    const [index, setIndex] = useState(0);

    const url = "http://localhost:3000/data";
    const api = httpsHelper();

    useEffect(() => {
        api.getFetch(url).then(res => {
            setDB(res);
        });
    }, []);
    // useEffect(() => {
    //     console.log(relativeValue);
    // }, [relativeValue]);
    useEffect(() => {
        console.log(accumulatedValue);
    }, [accumulatedValue]);
    useEffect(() => {
        console.log(total);
    }, [total]);

    const handleSelected = (n) => {
        setSelected(n);
    }
    const handleCO2Accumulated = (questionId, answerdId, co2Value) => {
        setAccumulatedValue(prevSelected => ({
            ...prevSelected,
            [questionId]:{
                answerdId:answerdId,
                CO2: parseInt(co2Value)
            }    
        }));
    }
    const handleCO2Total = (totalCO2) => {
        for (const [key, nestedValue] of Object.entries(totalCO2)) {
            setTotal(prevTotal => prevTotal+nestedValue.CO2)
        }
    };
    const handleCO2 = () => {
            handleCO2Total(accumulatedValue);
    }
    
    const data = {
        db,
        index,
        selected,
        setIndex,
        handleCO2,
        handleSelected,
        handleCO2Accumulated
    };
  return <QuestionContext value={data}>{children}</QuestionContext>;
};
export {QuestionProvider};
export default QuestionContext;

