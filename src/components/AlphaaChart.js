import React, { useState } from "react";
import { IAlphaaCharts } from "./IAlphaaCharts";
import { Select } from "@mantine/core";

export function AlphaaChart(props) {
  const [year, setYear] = useState("2021");
  return (
    <>
      <Select
        value={year}
        onChange={setYear}
        data={[
          { value: "2021", label: "2021" },
          { value: "2022", label: "2022" },
        ]}
      />
      <IAlphaaCharts year={year} />;
    </>
  );
}
