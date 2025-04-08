import { RefObject } from 'react';
import * as d3 from 'd3';

const margin = { top: 80, right: 60, bottom: 80, left: 80 }

const BarChartDimensions = {
  margin: margin,
  width : 800 - margin.left - margin.right,
  height : 600 - margin.top - margin.bottom
}

interface LangCategorisationData {
  n: number
  lang: string
  lang_label: string
}

export default function makeSVG({d3svg, data, title, barColor}:
  {
    d3svg: RefObject<null>,
    data: LangCategorisationData[],
    title: string,
    barColor:string}
) {

      let svg = d3.select(d3svg.current)

      // scales
      const xMax = d3.max(data, d => d.n)

      const xScale = d3.scaleLinear()
        .domain([0, xMax])
        .range([0, BarChartDimensions.width])

      const yScale = d3.scaleBand()
        .domain(data.map(d => d.lang))
        .rangeRound([0, BarChartDimensions.height])
        .paddingInner(0.25)

      // append group translated to chart area
      svg = svg.append('g').attr(
        'transform',
        `translate(${margin.left}, ${margin.top})`
      )

      // draw header
      svg
        .append('g')
        .attr('class', 'bar-header')
        .attr('transform', `translate(0, ${-margin.top / 2})`)
        .append('text')
        .append('tspan')
        .text(title)

      // draw bars
      svg
        .selectAll('.bar')
        .data(data)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('y', d => yScale(d.lang))
        .attr('width', d => xScale(d.n))
        .attr('height', yScale.bandwidth())
        .style('fill', barColor)
        // .style('fill', function(d, i) {
        //   return color[i % 2] // use colors in sequence
        // })

      // draw axes
      const xAxis = d3.axisBottom(xScale)
      svg
        .append('g')
        .attr('class', 'x axis')
        .attr('transform', `translate(0,${BarChartDimensions.height + BarChartDimensions.margin.bottom / 3})`)
        .call(xAxis)

      const yAxis = d3.axisLeft(yScale).tickSize(0)
      svg
        .append('g')
        .attr('class', 'y axis')
        .attr('transform', `translate(${-BarChartDimensions.margin.left / 3},0)`)
        .call(yAxis)

      return svg

  }


export type { LangCategorisationData };
export { BarChartDimensions };