import React, { useContext, useState, useEffect } from 'react'
import { GlobalContext } from './context/GlobalState';

function AddTransaction() {
    const [text, setText] = useState(" ");
    const [amount, setAmount] = useState(0);

    //form  state
    //stateupdate =>expand and new value;
    //useffect 

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() *1000000000),
            text,
            amount: +amount
        }
        
        //localStorage.clear();
        // window.localStorage.setItem('newTransaction', newTransaction);
       
       addTransaction(newTransaction);
    }

    // useEffect(() => {
      
    //     localStorage.setItem('item',JSON.stringify(text));
    //     localStorage.setItem('amount', amount);
      
    // }, [amount, text]);

    

  return (
   <>
   <h3>Add new Transaction</h3>
   <form onSubmit={onSubmit} >
       <div className="form-control">
           <label htmlFor="text">Text</label>
           <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Text ... "/>
       </div>
       <div className="form-control">
           <label htmlFor="amount">Amount <br/>
           (negative - expense, positive - income)</label>       
        <input type="number"  value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount ... "/>
       </div>
      <button className='btn'>Add Transaction</button>
   </form>
   </>
  )
}

export default AddTransaction