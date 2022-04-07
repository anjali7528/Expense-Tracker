import React, { useContext } from 'react'
import { GlobalContext } from './context/GlobalState';

function Transaction(props) {
    const {deleteTransaction } = useContext(GlobalContext);

    const sign =props.transction.amount <0 ? '-' : ' + ';
  return (
    <li className={props.transction.amount < 0 ? 'minus' : 'plus'}> 
    {props.transction.text}<span>{sign}${Math.abs(props.transction.amount)}</span>
   <button className="delete-btn" onClick={() => deleteTransaction(props.transction.id)}>X</button>
  </li>
  )
}

export default Transaction