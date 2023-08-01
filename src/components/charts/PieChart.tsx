"use client";
import { Cell, Pie, PieChart } from "recharts";

const PieChartComponent = () => {
  const data = [
    { name: "Group A", value: 500 },
    { name: "Group B", value: 400 },
    { name: "Group C", value: 300 },
  ];
  const COLORS = ["#5570F1", "#97A5EB", "#FFCC91"];

  return (
    <PieChart width={200} height={200}>
      <Pie
        data={data}
        cx={"50%"}
        cy={"50%"}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={0}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default PieChartComponent;
