import React from "react";
import "react-vis/dist/style.css";

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
} from "react-vis";

export default function BarGraph() {

  const size = 250;

  return (
    <div>
      <XYPlot
        width={size}
        height={size}
        stackBy="y"
        xType="ordinal"
      >

        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis/>
        <YAxis />
        <VerticalBarSeries color='#98c9a3'
          data={[
            { x: 0, y: 100 },
            { x: 1, y: 100 },
            { x: 2, y: 100 },
            { x: 3, y: 100 },
            { x: 4, y: 100 },
            { x: 5, y: 100 },
            { x: 6, y: 100 },
            { x: 7, y: 100 },
            { x: 8, y: 100 },
            { x: 9, y: 100 },
            { x: 10, y: 100 },
            { x: 11, y: 100 },
            { x: 12, y: 100 },
            { x: 13, y: 100 },
            { x: 14, y: 100 },
            { x: 15, y: 100 },
            { x: 16, y: 100 },
            { x: 17, y: 100 },
            { x: 18, y: 100 },
            { x: 19, y: 100 },
            { x: 20, y: 100 },
            { x: 21, y: 100 },
            { x: 22, y: 100 },
            { x: 23, y: 100 },
            { x: 24, y: 100 },
            { x: 25, y: 100 },
            { x: 26, y: 100 },
            { x: 27, y: 100 },
            { x: 28, y: 100 },
            { x: 29, y: 100 },
            { x: 30, y: 100 },
          ]}
        />
        <VerticalBarSeries color='#b9e5dd'
          data={[
            { x: 0, y: 120 },
            { x: 1, y: 120 },

          ]}
        />
      </XYPlot>
    </div>
  );
}
