
import { useState } from 'react';
import './App.css';
import ExpenseForm from './components/expense-form/ExpenseForm';
import Button from './components/UI/Button';
import Header from './layout/Header';
import ExpenseItems from './components/expense-items/ExpenseItems';

function App() {

const [visibleForm , setVisibleForm] = useState(false)
const [myExpenses , setMyExpenses] = useState([])

const openFormHandler = () => {
  setVisibleForm((prevState) => !prevState )
}

const save = (a) => {
  setMyExpenses((prevState) => {
    return [...prevState , a]
  })
  console.log(myExpenses);
  
}



  return (
    <div className="App">

 <Header openForm={openFormHandler} />
 {visibleForm ? <ExpenseForm data={save} close={openFormHandler}/> : null}
 <ExpenseItems expenses={myExpenses}/>
   {myExpenses.map((item) => {
    // return(
    //   <div key={item.id}>
    //     <h1>{item.title}</h1>
    //     <h1>{item.price}$</h1>
    //     <h1>{item.date}</h1>
    //   </div>
    // )
   })}

    </div>
  );
}

export default App;
