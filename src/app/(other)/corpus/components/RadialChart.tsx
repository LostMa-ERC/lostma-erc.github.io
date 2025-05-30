import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';


interface BarChartProps {
  data: object[]
}

const RadialChart: React.FC<BarChartProps> = ({data}) => {
    return (
        <ResponsiveContainer width="100%" height={600}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="lang" />
          <PolarRadiusAxis />
          <Tooltip/>
          <Radar name="Initial" dataKey="initial" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
        </RadarChart>
      </ResponsiveContainer>
    );
  }

export default RadialChart ;
