import { useState } from "react";
import { AgCharts } from 'ag-charts-react';

import jsonData from "@/public/data/lang_aggregates.json";

function getLangData() {

  const items = jsonData.items.filter((i) => i.code != undefined)
  const date = new Date(jsonData.lastModified)

  return {
    items: items,
    date: date.toDateString()
  }

}

const data = jsonData.items.filter((i) => i.code != undefined)
const lastModifiedDate = new Date(jsonData.lastModified)

const color_options = ["#001f54", "#9fc490"]

const HorizontalBarChart = () => {
  const data = getLangData()
  // Chart Options: Control & configure the chart
  const [chartOptions, setChartOptions] = useState({
    // Data: Data to be displayed in the chart
    data: data.items,
    // Title
    title: {
      text: "Text and witness records",
    },
    // Footnote
    footnote: {
      text: `Last updated ${data.date}.`
    },
    // Series: Defines which chart type and data to use
    series: [
      { type: 'bar',
        direction: "horizontal",
        xKey: 'code',
        yKey: 'texts',
        yName: 'Texts',
        angleKey: 'code',
        radiusKey: 'code',
      },
      { type: 'bar',
        direction: "horizontal",
        xKey: 'code',
        yKey: 'witnesses',
        yName: 'Witnesses',
        angleKey: 'code',
        radiusKey: 'code',
      }
    ],
    axes: [
      {
          type: 'bar',
          position: 'left',
          label: {
              minSpacing: 20,
              avoidCollisions: false, // enabled by default
              autoRotate: false, // enabled by default
          },
      },
  ]
});

  return (
    // AgCharts component with options passed as prop
    // Ignore type error in build
    <AgCharts options={chartOptions} />
  );
};


export default HorizontalBarChart;