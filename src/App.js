import './App.css';
import ReactECharts from 'echarts-for-react';
import { lineHorizental, multipleLineChart, negativeValue, pieChart, tooManyLinesChart } from './data';

function App() {
  return (
    <div className="App">
      <h3>Chart with multiple lines</h3>
      <ReactECharts option={multipleLineChart} />
      <h3>Top 10</h3>
      <ReactECharts option={pieChart} />
      <h3>Line chart horizental</h3>
      <ReactECharts option={lineHorizental} />
      <h3>Negative value Chart</h3>
      <ReactECharts option={negativeValue} />
      <h3>Many lines on Line chart</h3>
      <ReactECharts option={tooManyLinesChart} />
    </div>
  );
}

export default App;
