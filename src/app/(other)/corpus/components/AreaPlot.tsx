import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getDistData } from "./fetchData";

const color_options = ["#ae1a18", "#018ad3"]

const AreaPlot: React.FC = () => {
  const data = getDistData()
  return (
    <ResponsiveContainer width="100%" height={600}>
        <AreaChart
          width={300}
          height={500}
          data={data}
          margin={{ top: 20, right: 10, left: 10, bottom: 30}}
        >
          <XAxis label="Witnesses" dy={25} dataKey="wit_count" type='number' scale="symlog" tickLine={false}/>
          <YAxis label="Texts" scale="symlog"/>
          <Tooltip/>
          <Legend verticalAlign='top' align='center' />
          <Area type="monotone" stackId="1" dataKey="prose_texts" stroke={color_options[0]} fill={color_options[0]} />
          <Area type="monotone" stackId="1" dataKey="verse_texts" stroke={color_options[1]} fill={color_options[1]} />
        </AreaChart>
      </ResponsiveContainer>
    );
  }

export default AreaPlot;
