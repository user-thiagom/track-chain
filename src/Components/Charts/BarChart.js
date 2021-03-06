import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const BarChart = ({ chartData, text, fontSize=15 }) => {
  return (
    <div>
      <Bar
        aria-setsize={"20px"}
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: text,
              fullSize: true,
              font:{
                size: fontSize
              }
            },
            legend: {
              display: false,
              position: "bottom",
            },
          },
        }}
      />
    </div>
  );
};
