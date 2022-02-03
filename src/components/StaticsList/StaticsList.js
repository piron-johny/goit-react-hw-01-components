import React from "react";
import PropTypes from 'prop-types';



const StaticsList = ({ data }) => {
  return data.map(dataItem => (
    <ul className="stat-list" key={dataItem.id}>
      <li className="item">
        <span className="label">{dataItem.label}</span>
        <span className="percentage">{dataItem.percentage}</span>
      </li>
    </ul>
  ))

}

StaticsList.propTypes = {
  id: PropTypes.string,
  lable: PropTypes.string,
  percentage: PropTypes.number,
}

export default StaticsList


