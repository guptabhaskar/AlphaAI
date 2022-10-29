import React, { useState, useEffect } from "react";
import ReactEcharts from "echarts-for-react";
import axios from "axios";

export function IAlphaaCharts({ year }) {
  const [options, setOptions] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      let option = {
        xAxis: {
          type: "category",
          data: [],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [],
            type: "bar",
          },
        ],
      };
      const url = `https://run.mocky.io/v3/e2ffac92-48e0-4826-a59f-bf76fc727383`;
      try {
        const response = await axios.get(url);
        const { data } = response.data;
        let xAxisData = [];
        let seriesData = []
        data.forEach(d => {
            xAxisData.push(d.subcategory);
            if(year==="2021"){
                seriesData.push(d.d__2021sale);
            } else {
                seriesData.push(d.d__2022sale);
            }
        });
        option.xAxis.data = xAxisData;
        option.series[0].data = seriesData
        console.log(option);
        setOptions(option);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchData();
  }, [year]);

  return <ReactEcharts option={options} />;
}
