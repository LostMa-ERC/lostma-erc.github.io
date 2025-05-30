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
import { getLangData } from "./fetchData";


const color_options = ["#001f54", "#9fc490"]

const HorizontalBarChart: React.FC = () => {
  const data = getLangData()
  return (
    <ResponsiveContainer width="100%" height={600}>
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 20, right: 30, left: 30, bottom: 5}}
      >
        <CartesianGrid/>
        <XAxis
          type="number"
          scale="symlog"
        />
        <YAxis
          dataKey="lang"
          type="category"
          style={{
            fontSize: '0.65rem',
        }}
        />
        <Tooltip />
        <Legend verticalAlign="top" align="center" />
        <Bar
          name="texts"
          dataKey="texts"
          fill={color_options[0]}
        />
        <Bar
          name="witnesses"
          dataKey="witnesses"
          fill={color_options[1]}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}


export default HorizontalBarChart;