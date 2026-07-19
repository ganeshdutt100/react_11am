import React from "react";

const TransactionList = ({ transactions, onDelete }) => {
  if (transactions.length === 0) {
    return <div>NO transactions found</div>;
  }
  return (
    <div>
      <div>
        {transactions.map((t) => {
          const isExpense = t.type === "expense";
          return (
            <div key={t.id}>
              <p>{t.text} </p>
              <p>
                <span>{t.category}</span>
                <span>{t.date}</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TransactionList;
