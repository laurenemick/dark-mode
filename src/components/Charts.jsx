import React from "react";
import Chart from "./Chart";
import Navbar from "./Navbar"

const Charts = ({ coinData }) => {

  return (
    <div>
      <Navbar />
      <div className="charts">
        {coinData.map(coin => (
          <div className="chart-container" key={coin.name}>
            <div className="chart-header">
              <img src={coin.image} width="60" height="60" alt={coin.name} />
              <h1>{coin.name}</h1>
            </div>
            <Chart sparklineData={coin.sparkline_in_7d.price} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Charts;
