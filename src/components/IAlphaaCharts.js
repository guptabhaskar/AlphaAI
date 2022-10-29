import React, { useState, useEffect } from "react";
import ReactEcharts from "echarts-for-react";
import axios from "axios";

export function IAlphaaCharts({ year }) {
    const [options, setOptions] = useState({});
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const url = `https://run.mocky.io/v3/e2ffac92-48e0-4826-a59f-bf76fc727383`;
            try {
                const response = await axios.get(url);
                const { data } = response.data;
                setData(data);
            } catch (error) {
                console.log("Error", error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (data) {
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
            let xAxisData = [];
            let seriesData = [];
            data.forEach((d) => {
                xAxisData.push(d.subcategory);
                if (year === "2021") {
                    seriesData.push(d.d__2021sale);
                } else {
                    seriesData.push(d.d__2022sale);
                }
            });
            option.xAxis.data = xAxisData;
            option.series[0].data = seriesData;
            setOptions(option);
        }
    }, [data, year]);

    return <ReactEcharts option={options} />;
}
