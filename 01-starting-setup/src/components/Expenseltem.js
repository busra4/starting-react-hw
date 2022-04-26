import "./ExpenseItem.css";

function ExpenseItem() {
    const expenseDate =Date(2022,3,8);
    const expenseTitle='Car Insurance';
    const expenseAmount =294.67;
  return (
    <div className="expense-item">
      <div>{expenseDate.toLocaleDateString('tr')}</div>
      <div className="expense-item_description">
        <h2>{expenseTitle}</h2>
        <div className="expensesitem_price">${expenseAmount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
