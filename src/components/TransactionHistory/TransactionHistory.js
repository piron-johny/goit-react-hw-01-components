import React from "react";
import s from './TransactionHistory.module.css'

const TransactionHistory = ({ children: { transaction } }) => {
  return (
    <table className={s.table}>
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
