//クレジット利用履歴のCSVを仕分けるアプリ
import { useState } from "react";
import type { Expenses, Expense, ExpenseSummary } from "../type/expense";
import { filterCSV } from "../utils/importCSV";
export default function Home() {
  const [expenseSummary, setExpenseSummary] = useState<ExpenseSummary>();
  const [expenses, setExpenses] = useState<Expenses>();
  const [expenseIndex, setExpenseIndex] = useState<number>(0);

  return (
    <div className="App">
      <div className="App-header">
        <div>浪費発見アプリ</div>
      </div>
      <div className="App-body">
        <input type="file" accept=".csv" onChange={handleFileChange}></input>

        {expenses && (
          <div>
            <div>
              <div>店舗名:{expenses.expenses[expenseIndex].expenseName}</div>
              <div>支払額:{expenses.expenses[expenseIndex].expenseValue}円</div>
            </div>
            <div className="App-sort">
              <button className="btn btn-primary">必要経費</button>
              <button className="btn btn-danger">浪 　　費</button>
            </div>
          </div>
        )}
      </div>
      <div className="App-footer"></div>
    </div>
  );
}
