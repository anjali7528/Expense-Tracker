import React,{useContext} from 'react';
import { GlobalContext } from './context/GlobalState';
import Transaction from './Transaction';

function TransactionList() {
    const {transctions} = useContext(GlobalContext);

  return (
    <div>
       <h3>History</h3>
       <div className="itemList">
       <div className='scroller'>
       <ul  className="list">
           {transctions.map(transction =>(<Transaction key={transction.id} transction={transction}/>))}
          
           </ul> 
       </div>
       </div>
       
       
    </div>
  )
}

export default TransactionList