import * as Plot from "@observablehq/plot";
import { useRef, useEffect, useState } from "react";

function BarChart({ data }) {
  const ref = useRef();
  const [sort, setSort] = useState("Alphabetical");

  useEffect(() => {
    const barChart = Plot.plot({
      marks: [
        Plot.barX(data, {
          x: "n",
          y: "lang",
          fill: "lang_label",
          symbol: "lang_label",
          sort:
            sort === "Alphabetical"
              ? null
              : { y: "x", reverse: sort.startsWith("Desc") }
        }),
        Plot.ruleY([0])
      ],
      y: {
        grid: true
      },
      y: {label: "Text Language"},
      x: {label: "Count of Records"},
      color: {legend: true},
      marginLeft: 100,
      marginTop: 50,
      marginBottom: 50,
    });
    ref.current.append(barChart);
    return () => barChart.remove();
  }, [data, sort]);

  return (
    <div className="w-fit">
      <div ref={ref}></div>
    </div>
  );
}

export { BarChart }