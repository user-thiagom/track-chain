import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChart = ({ chartData, text, wid, hei, fontSize=15}) => {
  return (
    <div>
      <Pie
      height={hei || 0}
      width={wid || 240}
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: text,
              font:{
                size: fontSize
              }
            },
            legend: {
              display: true,
              position: "bottom"
           }
          }
        }}
      />
    </div>
  );
};

