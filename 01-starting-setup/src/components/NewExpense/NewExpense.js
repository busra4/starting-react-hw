import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isChanged, setIsChanged] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    
    setIsChanged(false);
  };

  
  const changedNewHandler = () => {
   setIsChanged(true);
  };

  const changedCancelHandler = () => {
    setIsChanged(false);
  };

  return (
    <div className='new-expense'>
      (if(isChanged===true)
      <button onClick={changedNewHandler}>Add New Expense</button>
  )
      {!isChanged && (
<button onClick={changedNewHandler}>Add New Expense</button>
      )}
      {isChanged && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          Canceled={changedCancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;


