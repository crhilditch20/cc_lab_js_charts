var countries;

  var makeRequest = function(url, callback){
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = callback;
    request.send();
  };

  var requestComplete = function(){
    if(this.status !== 200) return;
    var jsonString = this.responseText; 
    countries = JSON.parse(jsonString); 
    var categoriesForChart = makeCountryCategories("Europe");
    var dataForChart = makeCountryData("Europe");
    console.log(dataForChart);
    new ColumnChart("Europe", dataForChart, categoriesForChart);
  };

  var makeCountryCategories = function(region){
    var countriesByRegion = countries.filter(function(country){
      return (country.region === region);
    });
    var categoryArray = [];
    for(country of countriesByRegion){
      categoryArray.push(country.name);
    }
    return categoryArray;
  }

  var makeCountryData = function(region){
    var countriesByRegion = countries.filter(function(country){
      return (country.region === region);
    });
    var dataArray = [];
    for(country of countriesByRegion){
      dataArray.push(country.population);
    }
    return dataArray;
  }

var app = function(){

  var url = 'https://restcountries.eu/rest/v1/all';
    makeRequest(url, requestComplete);
   

  // var data1 = {
  //   name: "Cohort 7",
  //   data: [8,12,3,1]
  // };

  // var data2 = {
  //   name: "Cohort 8",
  //   data: [9,10,1,0]
  // }

  // new PieChart();
  // new ColumnChart(data1, data2);


};

window.onload = app;