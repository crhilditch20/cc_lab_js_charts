var PieChart = function(){
  var container = document.querySelector('#pie-chart');

  var chart = new Highcharts.Chart({
    chart: {
      type: "pie",
      renderTo: container
    },
    title: {
      text: "Pokemon Types I've Caught"
    },
    series: [
      {
        name: "Type",
        data: [
          {
            name: "Fire",
            y: 45,
            color: "#ffac33"
          },
          {
            name: "Water",
            y: 25,
            color: "#73b7ff",
            sliced: true
          },
          {
            name: "Grass",
            y: 1,
            color: '#00ba2f'
          },
          {
            name: "Dragon",
            y: 9,
            color: '#ff0000'
          },
          {
            name: "Ice",
            y: 20,
            color: '#00ffff'
          }
        ]
      }
    ]
  });
};