import React,{createContext, useReducer } from "react";
import AppReducer from'./AppReducer';

//Initial State
const initialState = {
    transctions: [
    {id:1, text:'Flower', amount: -20},
    {id:2, text:'Salary', amount: 300},
    {id:3, text:'Book', amount: -10},
    {id:4, text:'Camer', amount: 150}
    ]
}

// create context
export const GlobalContext = createContext(initialState);


//Prrovide component
export const GlobalProvider = ({children}) => {
    const[state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    function deleteTransaction(id) {
        dispatch({
            type:'DELETE_TRANSACTION',
            payload: id
        });
        console.log(state);
    }

    return (<GlobalContext. Provider value={{
        transctions: state.transctions,
        deleteTransaction
    }}>
        {children}
        </GlobalContext. Provider>)
}