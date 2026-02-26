export type Expense = {
  expenseName: string;
  expenseValue: number;
};

export type Expenses = {
  expenses: Expense[];
};

export type ExpenseSummary = {
  foodExpense: number;
  transportationExpense: number;
  snackExpense: number;
  fixedExpense: number;
  dailyExpense: number;
};
