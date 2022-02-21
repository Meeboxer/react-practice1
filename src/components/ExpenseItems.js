import './ExpenseItems.css';

function ExpenseItem() {
    const ExpenseDate = new Date(2022,1,18);
    const ExpenseItem = "Dinner";
    const ExpensePrice = 200;
  return (
    <div className='expense-item'>
      <div>{ExpenseDate.toDateString()}</div>
      <div className='expense-item__description'>
        <h2>{ExpenseItem}</h2>  
        <div className='expense-item__price'>${ExpensePrice}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
