var ColumnChart = function(region, dataArray, categories){
  var container = document.querySelector('#column-chart');

  this.chart = new Highcharts.Chart({
    chart: {
      type: "column",
      renderTo: container
    },
    title: {
      text: "Countries By Population in " + region
    },
    series: [{
      name: region,
      data: dataArray
    }],
    xAxis: {
      categories: categories
    }

  });
};

// ColumnChart.prototype = {
// addToChart: function(data){
//   this.chart.series.push(data);
//   }
// }