import React, { Component } from 'react';
var LineChart = require("react-chartjs").Line;
var moment = require('moment');

var isEmptyObject = (obj) => Object.keys(obj).length === 0 && obj.constructor === Object;

var airTempData = {
  labels: [],
  datasets: [
    {
      label: "System 1",
      fillColor: "rgba(220,220,220,0.2)",
      strokeColor: "rgba(220,220,220,1)",
      pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: [] 
    }
  ]
};

let timestampFormat = "YYYY-MM-DDTHH:mm:ss"

class UpdatingChart extends Component {
    constructor(props) {
    super(props);
    this.state = {
                  chartData: airTempData,
                  lastTimestamp: moment().format(timestampFormat) 
                 };
    this.updateChart = this.updateChart.bind(this);
  }  

  updateChart() {
    fetch(this.props.endpoint + this.state.lastTimestamp)
      .then((response) => {                
        response.json().then((json) => {
            if (isEmptyObject(json) || !Array.isArray(json)) return;
            console.log(JSON.stringify(json));            
            this.setState((prevState, props) => ({
                chartData: prevState.chartData.labels.concat(json.map((log) => log.timestamp)),  
                chartData: prevState.chartData.datasets[1].data.concat(json.map((log) => log.aTemp)),
                lastTimestamp: moment().format(timestampFormat)
            }));
        });                
      });
  }

  componentDidMount() {    
    const startTimestamp = moment().subtract(30, 'minutes');
    // fetch(this.props.endpoint + startTimestamp.format(timestampFormat))
    //     .then((response) => {            
    //         console.log(JSON.stringify(response));                        
    //         response.json().then((json) => {
    //             if (isEmptyObject(json) || !Array.isArray(json)) return;
    //             console.log(JSON.stringify(json));            
    //             var newChartData = this.state.chartData;
    //             newChartData.datasets[1].data = json.map((log) => log.aTemp);
    //             this.setState({
    //                 labels: json.map((log) => log.timestamp),
    //                 chartData: newChartData
    //             });
    //         })            
    //     });    
    this.interval = setInterval(this.updateChart, 10000);
  }
      
  render() {
    return (
      <LineChart data={this.state.chartData} width="1000" height="400"/>
    );
  }
}

export default UpdatingChart;