import React, { useEffect, useState } from "react";
import BalanceCard from "../components/BalanceCard";
import TransactionForm from "../components/TransactionForm";
import CategoryFilter from "../components/CategoryFilter";
import TransactionList from "../components/TransactionList";

const Dashboard = () => {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  const [filterCategory, setFilterCategory] = useState("All");

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (newTx) => setTransactions([newTx, ...transactions]);
  const deleteTransaction = (id) =>
    setTransactions(transactions.filter((t) => t.id !== id));

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, c) => acc + Number(c.amount), 0);
  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, c) => acc + Number(c.amount), 0);

  const balance = income - expense;

  const filteredTransactions = transactions.filter((t) =>
    filterCategory === "All" ? true : t.category === filterCategory,
  );

  const clearAllData = () => {
    localStorage.removeItem("transactions");
    setTransactions([]);
  };

  return (
    <div>
      {/* header */}
      <h1> Personal Budget Tracker</h1>
      <button
        onClick={clearAllData}
        className="bg-emerald-500 text-white border-emerald-500 shadow-sm"
      >
        Clear All Records
      </button>
      <BalanceCard income={income} expense={expense} balance={balance} />
      <TransactionForm onAdd={addTransaction} />
      <CategoryFilter
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
      />
      <TransactionList
        transactions={filteredTransactions}
        onDelete={deleteTransaction}
      />
    </div>
  );
};

export default Dashboard;
