//クレジット利用履歴のCSVを仕分けるアプリ
import type { Expenses, Expense } from "../type/expense";
import { filterCSV } from "../utils/importCSV";
export default function Home() {
  return (
    <div>
      <div>hello</div>
      <input type="file" accept=".csv"></input>
    </div>
  );
}
