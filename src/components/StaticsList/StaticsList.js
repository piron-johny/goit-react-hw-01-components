import React from "react";
import PropTypes from 'prop-types';
import s from './StaticsList.module.css';

const StaticsList = ({ data }) => {
  return data.map(({ id, label, percentage }, ind) => (
    <li className={s.item} key={id} style={{ backgroundColor: `rgb(${ind * 30}, ${ind + 150}, ${ind * 100}, 80%)` }}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  ))
}

StaticsList.propTypes = {
  id: PropTypes.string,
  lable: PropTypes.string,
  percentage: PropTypes.number,
}

export default StaticsList


