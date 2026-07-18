import React from "react";
import BalanceCard from "../components/BalanceCard";
import TransactionForm from "../components/TransactionForm";
import CategoryFilter from "../components/CategoryFilter";
import TransactionList from "../components/TransactionList";

const Dashboard = () => {
  return (
    <div>
      {/* header */}
      <h1> Personal Budget Tracker</h1>
      <BalanceCard balance="100000" expense="62000" income="80000" />
      <TransactionForm />
      <CategoryFilter />
      <TransactionList />
    </div>
  );
};

export default Dashboard;
