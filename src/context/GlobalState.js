import React,{createContext, useReducer, useEffect } from "react";
import AppReducer from'./AppReducer';

//Initial State
const initialState = {
    transctions: [
    ]
}

// create context
export const GlobalContext = createContext(initialState);


//Prrovide component
export const GlobalProvider = ({children}) => {
    const[state, dispatch] = useReducer(AppReducer, initialState, () => {
        const localData = localStorage.getItem('items');
       return localData ? JSON.parse(localData) :  [];
    });

    useEffect(() =>{
      localStorage.setItem('items', JSON.stringify(state))
    },[state]);

    //Actions
    function deleteTransaction(id) {
        dispatch({
            type:'DELETE_TRANSACTION',
            payload: id
        });
        console.log(state);
    }

    function addTransaction(transction) {
        dispatch({
            type:'ADD_TRANSACTION',
            payload: transction
        });
        //localStorage.clear();
       
        console.log(state);
       
    }

    return (<GlobalContext. Provider value={{
        transctions: state.transctions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
        </GlobalContext. Provider>)
}