import React from "react";
import s from './Statistics.module.css'

const Statistics = ({ children: { staticsList } }) => {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>Upload stats</h2>
      <ul className={s.list} >
        {staticsList}
      </ul>
    </section>
  );
};

export default Statistics;
