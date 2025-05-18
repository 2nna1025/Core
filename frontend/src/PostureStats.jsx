import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

const barData = {
  labels: ['월', '화', '수', '목', '금'],
  datasets: [
    {
      label: '자세 경고 횟수',
      data: [2, 4, 3, 5, 1],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderRadius: 5,
    },
  ],
};

const doughnutData = {
  labels: ['정상 자세', '거북목 자세'],
  datasets: [
    {
      data: [60, 40],
      backgroundColor: ['#36A2EB', '#FF6384'],
      borderWidth: 1,
    },
  ],
};

const PostureStats = () => {
  return (
    <div className="flex flex-col gap-10 p-8">
      <h1 className="text-2xl font-bold text-center">📊 이번 주 자세 통계</h1>

      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">일별 자세 경고 횟수</h2>
        <Bar data={barData} />
      </div>

      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">자세 비율</h2>
        <Doughnut data={doughnutData} />
      </div>
    </div>
  );
};

export default PostureStats;
