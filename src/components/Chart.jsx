import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import "../styles/Chart.css";

const data = [
  { name: "Jan", installs: 400 },
  { name: "Feb", installs: 800 },
  { name: "Mar", installs: 1500 },
  { name: "Apr", installs: 2000 },
  { name: "May", installs: 2500 },
  { name: "Jun", installs: 3000 },
];

const Chart = () => {
  return (
    <div className="chart-container">
      <h3>User Growth (Last 6 Months)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Line type="monotone" dataKey="installs" stroke="#007bff" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
