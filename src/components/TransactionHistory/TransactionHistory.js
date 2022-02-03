import React from "react";

const TransactionHistory = ({ children: { transaction } }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>{transaction}</tbody>
    </table>
  );
};

export default TransactionHistory;
