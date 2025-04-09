import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const color_options = ["#001f54", "#9fc490"]

interface BarChartProps {
  data: object[]
}

const HorizontalBarChart: React.FC<BarChartProps> = ({data}) => {
  return (
    <ResponsiveContainer width="100%" height={600}>
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 20, right: 30, left: 30, bottom: 5}}
      >
        <CartesianGrid/>
        <XAxis type="number"/>
        <YAxis
          dataKey="lang"
          type="category"
          style={{
            fontSize: '0.65rem',
        }}
        />
        <Tooltip />
        <Legend />
        <Bar
          name="Texts"
          dataKey="texts"
          fill={color_options[0]}
        />
        <Bar
          name="Witnesses"
          dataKey="witnesses"
          fill={color_options[1]}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}


export default HorizontalBarChart;