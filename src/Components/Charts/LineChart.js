import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const LineChart = ({ chartData, text }) => {
  return (
    <div>
      <Line aria-setsize={"20px"}
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: text,
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
