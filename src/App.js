import Header from "./Header";
import Balance from "./Balance";
import IncomeExpenses from "./IncomeExpenses";
import TransactionList from "./TransactionList";
import AddTransaction from "./AddTransaction";


function App() {
  return (
  <div className="App">
       <Header />
    <div className="container">
       <Balance />
      <IncomeExpenses/>
      <TransactionList/>
      <AddTransaction/>
    </div>
  </div>
  );
}

export default App;
