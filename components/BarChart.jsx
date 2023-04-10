import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [chardtData, setChardtData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});
  useEffect(() => {
    setChardtData({
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Sales $",
          data: [18425, 25417, 24440, 29412, 27654, 32102, 30120],
          borderColor: "rgb(53,162,235)",
          backgroundColor: "#845EC2",
        },
      ],
    });
    setChartOptions({
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Daily Revenue",
        },
      },
      maintainAspectRation: false,
      responsive: true,
    });
  }, []);
  return (
    <>
      <div className=" w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] p-4 border m-auto rounded-lg bg-white ">
        <Bar data={chardtData} options={chartOptions} />
      </div>
    </>
  );
};

export default BarChart;
