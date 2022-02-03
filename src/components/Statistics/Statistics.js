import React from "react";


const Statistics = ({ children: { staticsList } }) => {
  return (
    <section className="statistics">
      <h2 class="title">Upload stats</h2>
      {staticsList}
    </section>
  )
}

export default Statistics

