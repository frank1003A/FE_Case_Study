"use client";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const BarChartComponent = () => {
  const data = [
    {
      name: "Sept 10",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Sept 11",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Sept 12",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Sept 13",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Sept 14",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Sept 15",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Sept 16",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <BarChart
      barGap={20}
      cx={"50%"}
      cy={"50%"}
      width={600}
      height={300}
      data={data}
      accessibilityLayer
    >
      <XAxis dataKey="name" axisLine={false} tickLine={false} />
      <YAxis axisLine={false} tickLine={false} />
      <Tooltip />
      <Bar
        dataKey="pv"
        fill="#5570F1"
        background={{ fill: "#eee", radius: 8 }}
        barSize={10}
        radius={8}
      />
    </BarChart>
  );
};

export default BarChartComponent;
