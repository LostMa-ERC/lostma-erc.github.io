import React from 'react';
import { CategoryScale, Chart, BarElement, Legend, Tooltip } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import textData from "@/public/data/text_per_lang.json";
import witData from "@/public/data/wits_per_lang.json";


const textsModifiedDate = new Date(textData.lastModified)

Chart.register(CategoryScale, BarElement, Tooltip, Legend)

// Return a subset that ignores records without a language
const TextData = textData.items.filter((i) => i.lang_label != undefined)
const WitData = witData.items.filter((i) => i.lang_label != undefined)

export const options = {
  indexAxis: 'y' as const,
  elements: {
    bar: {
      borderWidth: 0.25,
      borderColor: "black"
    },
  },
  maintainAspectRation: false,
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
    title: {
      display: true,
      text: textsModifiedDate.toDateString(),
    },
  },
};

const labels = TextData.map((data) => data.lang_label)

export const data = {
  labels,
  datasets: [
    {
      label: 'Text records',
      data: TextData.map((i) => i.n),
      backgroundColor: "#912200",
    },
    {
      label: 'Witness records',
      data: WitData.map((i) => i.n),
      backgroundColor: "#e1d67d",
    }
  ]

}

export default class LanguageDistributionBarChart extends React.Component {
  render() {
  return <Bar
        data-testid="langDashboard"
        options={options}
        data={data}
        // width={1000}
        // height={600}
      />
}
};
