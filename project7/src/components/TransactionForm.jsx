import React, { useState } from "react";

const TransactionForm = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");
  const [category, setCategory] = useState("Food");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim() || !amount) return;

    const newTransaction = {
      id: Date.now(),
      text,
      amount: Math.abs(Number(amount)),
      type,
      category,
      date: new Date().toLocaleDateString,
    };
    onAdd(newTransaction);
    setText("");
    setAmount("");
  };

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 shadow-sm">
      <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">
        Add New Transaction
      </h3>
      <form onSubmit={handleSubmit} action="" className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">
            Description
          </label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="e.g., Grocery , Rent , Salary"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">
            Amount{" "}
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => setType("expense")}
            className={`py-2 rounded-lg font-bold transition-all text-sm border ${
              type === "expense"
                ? "bg-rose-500 text-white border-rose-500 shadow-sm"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
            }`}
          >
            Expense
          </button>
          <button
            type="button"
            onClick={() => setType("income")}
            className={`py-2 rounded-lg font-bold transition-all text-sm border ${
              type === "income"
                ? "bg-emerald-500 text-white border-emerald-500 shadow-sm"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
            }`}
          >
            Income
          </button>
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white"
          >
            <option value="Food">Food</option>
            <option value="Salary">Salary</option>
            <option value="Rent">Rent</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Utilities">Utilities</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition-all shadow-md"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;

// -567898
// output 567898
