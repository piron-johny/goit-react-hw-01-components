import React from "react";
import PropTypes from "prop-types";
import s from './Transaction.module.css';
;


const Transaction = ({ transactions }) => {
  return transactions.map(({ id, type, amount, currency }) => (
    <tr className={s.line} key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  ));
};

Transaction.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
export default Transaction;
