import React from "react";
import Chart from "react-apexcharts";

function ApexCharts({xaxis, series}: {xaxis: string[], series: number[]}) {
    const data = {
        series: [
          {
            data: series,
          },
        ],
        options: {
          chart: {
            type: "line",
            zoom: {
              enabled: false,
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
          },
          grid: {
            row: {
              colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
              opacity: 0.5,
            },
          },
          xaxis: {
            categories: [],
          },
        },
      };
      console.log(xaxis, series)
  return (
    <>
      <Chart
        options={data.options}
        series={data.series}
        type="line"
        height={1000}
      />
    </>
  );
}
export default ApexCharts;