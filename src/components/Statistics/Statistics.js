import React from "react";

const Statistics = ({ children: { staticsList } }) => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      {staticsList}
    </section>
  );
};

export default Statistics;
