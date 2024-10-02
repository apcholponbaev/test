import React, { useState } from 'react'
import text from'./ExpenseForm.module.css'
    import Input from '../UI/Input'
import Button from '../UI/Button'



const ExpenseForm = (props) => {

    const [title , setTitle] = useState('')
    const [price , setPrice] = useState('')
    const [date , setDate] = useState('')

    const onSubmitHandler = (e) => {
        e.preventDefault()
 
       
     }

    const titleChangeHandler = (e) => {
        setTitle(e.target.value)
        }
        
        const priceChangeHandler = (e) => {
            setPrice(e.target.value)
        }
        const dateChangeHandler = e => {
            setDate(e.target.value)
        }
        const onSaveExpenses = () => {
            const expenses = {
                title,
                price,
                date,
            id:Math.random().toString()

}
           props.data(expenses)
      setTitle('')
      setPrice('')
      setDate('')
      };


   
     
    


   
  return (
    <form className={text.formMain}   onSubmit={onSubmitHandler}>
     <Input onChange={titleChangeHandler}  value={title} type='text' placeholder='title' />
     <Input onChange={priceChangeHandler} value={price} type='number' placeholder='price' />
     <Input onChange={dateChangeHandler} value={date} type='date' />
     <div className={text.BtnContainer}>
        <button onClick={onSaveExpenses}>Add</button>
        <button onClick={props.close}>Cansel</button>
     </div>
     
    </form>
  )
} 

export default ExpenseForm

