import React from 'react';
import dynamic from 'next/dynamic'

export const Plotly = dynamic(() => import('react-plotly.js'), { ssr: false });

// Replace with fetchData() function once backend is built
var lang = ['gmh (Middle High German)', 'dum (Middle Dutch)', 'fro (Old French)', 'fro_PRO (Franco-Occitan)', 'non (Old Norse)', 'pro (Occitan)', 'frm (Middle French)', 'fro_ENG (Anglo-Norman)', 'fro_ITA (Franco-Italian)']
var count = [1, 40, 38, 2, 2, 13, 8, 9, 16]
var langMissing = [':MISSING:']
var countMissing = [200]

var trace1 = {
  type: 'scatter',
  x: count,
  y: lang,
  mode: 'markers',
  name: 'Texts',
  marker: {
    color: 'blue',
    line: {
      color: 'rgba(156, 165, 196, 1.0)',
      width: 1,
    },
    symbol: 'circle',
    size: 16
  }
};

var trace2 = {
  type: 'scatter',
  x: countMissing,
  y: langMissing,
  mode: 'markers',
  name: 'Texts missing a language',
  marker: {
    color: 'red',
    line: {
      color: 'rgba(217, 217, 217, 1.0)',
      width: 1,
    },
    symbol: 'circle',
    size: 16
  }
};

var data = [trace2, trace1];

var layout = {
  xaxis: {
    showgrid: true,
    showline: true,
    linecolor: 'black',
    tickfont: {
      font: {
        color: 'black'
      }
    },
    tickmode: 'linear',
    dtick: 10,
    ticks: 'inside',
    tickcolor: 'black'
  },
  yaxis: {
    gridcolor: 'rgba(200,200,200, 1.0)',
  },
  margin: {
    l: 200,
    r: 40,
    b: 50,
    t: 10
  },
  legend: {
    font: {
      size: 10,
    },
    yanchor: 'middle',
    xanchor: 'right'
  },
  // width: 1200,
  // height: 500,
  hovermode: 'closest',
  paper_bgcolor: 'rgba(0,0,0,0)',
  plot_bgcolor: 'rgba(300,300,300,0.33)'
};

var config = { responsive: true }

export default class Dash extends React.Component {
  render() {

    return (

      <Plotly

        data={data}

        layout={layout}

        config={config}

      />

    );

  }

}