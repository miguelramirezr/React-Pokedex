import React, { useState, useEffect } from "react";
import CardContent from "@mui/material/CardContent";
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

const CustomStats = ({ dataStats }) => {
  const [stats, setStats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [dataStats]);

  useEffect(() => {
    if (!isLoading) {
      const stats = dataStats.map((stat) => {
        return { name: stat.stat.name, value: stat.base_stat };
      });
      setStats(stats);
    } 
  }, [dataStats, isLoading]);

  const data = {
    labels: stats.map((stat) => stat.name),
    datasets: [
      {
        label: "Stats",
        data: stats.map((stat) => stat.value),
        backgroundColor: "#0096FF",
      },
    ],
    
  };

  const options = {
    responsive: false,
    scales: {
      x: {
        grid: {
          display: true,
          drawBorder: false,
          borderDash: [3, 3],
          color: "blue",
        },
        ticks: {
          beginAtZero: true,
          color: 'white',
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
          color: "transparent",
        },
        ticks: {
          beginAtZero: true,
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'white' 
        }
      }
    }
  };

  return (
    <CardContent sx={{backgroundColor : "#4C4C4C", display: "flex", justifyContent: "center",marginTop: -1}}>
      {stats.length > 0? (
        <Bar width="245" height="250" data={data} options={options} />
      ) : (
        <p>Loading...</p>
      )}
    </CardContent>
  );
};

export default CustomStats;
