'use client'
import { expense, Tags } from "@/models";
import React from "react";
import ReactApexChart from "react-apexcharts";

function PFChart({ data }: { data: expense[] }) {
  const tags: Tags[] = [
    "Fuel",
    "EMI",
    "Bills",
    "Family",
    "Personal",
    "Misc",
    "Others",
  ];
  let expenses = [0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < data.length; i++) {
    expenses[tags.indexOf(data[i].tag)] += data[i].amount;
  }
  const options = {
    labels: tags,
  };

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={expenses}
          type="pie"
          width={500}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}

export default PFChart;
