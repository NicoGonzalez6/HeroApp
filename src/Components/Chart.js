// STEP 1 - Include Dependencies
// Include react
import React from "react";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

// STEP 2 - Chart Data

// STEP 3 - Creating the JSON object to store the chart configurations

const Chart = ({ data }) => {
    const chartConfigs = {
        type: "bar2d", // The chart type
        width: "100%", // Width of the chart
        height: "300", // Height of the chart
        dataFormat: "json", // Data type
        dataSource: {
            // Chart Configuration
            chart: {
                baseFontColor: "#d0192d",
                borderRadius: "20",
                bgColor: "#e8f3f1",
                //Set the chart caption
                caption: "",
                //Set the chart subcaption
                subCaption: "",
                //Set the x-axis name
                xAxisName: "",
                //Set the y-axis name
                yAxisName: "",
                numberSuffix: "",
                //Set the theme for your chart
                theme: "fusion",
                borderColor: "#d0192d",
            },
            // Chart Data
            data,
        },
    };
    return <ReactFC {...chartConfigs} />;
};
// STEP 4 - Creating the DOM element to pass the react-fusioncharts component

export default Chart;
