import React, { Component } from 'react';
import './App.css';
import UpdatingChart from './components/UpdatingChart';

class App extends Component {
  render() {
    return (
      <div className="App Charts">
        <UpdatingChart endpoint="/log/" />
        {/* <LineChart data={airTempData} width="1000" height="400"/>         */}        
      </div>
    );
  }
}

export default App;

// var moment = require('moment');

// function MomentTester(props) {
//   return (
//     <div>
//       <p>{moment().format()}</p>
//       <p>{moment().format("MM/DD/YYYY, h:mm:ss a")}</p>
//       <p>{moment().format("YYYY-MM-DDTHH:mm:ss")}</p>
//       <p>{moment().subtract(30, 'minutes').format()}</p>      
//     </div>
//   );
// }

// var LineChart = require("react-chartjs").Line;

// const logs = [
//   {"timestamp" : "2018-01-18T02:35:42.977753", "ec" : 0, "aTemp" : 21.55, "voltage" : 0.57, "wTemp" : 20.8, "pH" : 1.99, "rH" : -98.05},
//   {"timestamp" : "2018-01-18T02:35:42.174244", "ec" : 0, "aTemp" : 21.56, "voltage" : 0.5, "wTemp" : 20.8, "pH" : 1.77, "rH" : -98.12},
//   {"timestamp" : "2018-01-18T02:35:41.367202", "ec" : 0, "aTemp" : 21.55, "voltage" : 0.44, "wTemp" : 20.8, "pH" : 1.54, "rH" : -98.12},
//   {"timestamp" : "2018-01-18T02:35:40.556330", "ec" : 0, "aTemp" : 21.55, "voltage" : 0.38, "wTemp" : 20.8, "pH" : 1.32, "rH" : -98.05},
//   {"timestamp" : "2018-01-18T02:35:39.753897", "ec" : 0, "aTemp" : 21.56, "voltage" : 0.32, "wTemp" : 20.8, "pH" : 1.1, "rH" : -98.05}
// ];

// var airTempData = {
//   labels: logs.map((log) => log.timestamp),
//   datasets: [
//     {
//       label: "System 1",
//       fillColor: "rgba(220,220,220,0.2)",
//       strokeColor: "rgba(220,220,220,1)",
//       pointColor: "rgba(220,220,220,1)",
//       pointStrokeColor: "#fff",
//       pointHighlightFill: "#fff",
//       pointHighlightStroke: "rgba(220,220,220,1)",
//       data: logs.map((log) => log.aTemp) 
//     }
//   ]
// };