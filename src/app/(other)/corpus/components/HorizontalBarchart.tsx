import { useRef, useEffect } from "react";
import makeSVG, { LangCategorisationData, BarChartDimensions } from "./useBarChart";

const color_options = ["#001f54", "#9fc490"]

const HorizontalBarChart = ({ data, title, color_idx }: {data: LangCategorisationData[], title: string, color_idx: number}) => {
    const barColor = color_options[color_idx]
    const d3svg = useRef(null)
    useEffect(() => {
     if(data && d3svg.current) {
        let svg = makeSVG({
            d3svg:d3svg,
            data:data,
            title:title,
            barColor:barColor
        })
     }
    }, [data, title, barColor])

    return (
        <svg
          className="bar-chart-container"
          width={BarChartDimensions.width + BarChartDimensions.margin.left + BarChartDimensions.margin.right}
          height={BarChartDimensions.height + BarChartDimensions.margin.top + BarChartDimensions.margin.bottom}
          role="img"
          ref={d3svg}
        ></svg>
      )

}

;

export default HorizontalBarChart;