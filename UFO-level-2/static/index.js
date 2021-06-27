console.log("Hi... the truth is out there, not in here")
var tbody = d3.select("tbody");

// For testing, app will actually take the user input
// dateFilter = "1/7/2010"

// Filling the table for the first time
data.forEach(function (tableFill) {
  // Appending results
  var row = tbody.append("tr");
  Object.entries(tableFill).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  })
})

// Function to run upon user input
function filterClick() {
  
  // Working with a copy of the data
  filteredData = data

  // Grabbing values from input
  var dateElement = d3.select("#dateFilter");
  var cityElement = d3.select('#cityFilter');
  var stateElement = d3.select('#stateFilter');
  var countryElement = d3.select('#countryFilter');
  var shapeElement = d3.select('#shapeFilter');

  var dateValue = dateElement.property("value");
  var cityValue = cityElement.property("value");
  var stateValue = stateElement.property("value");
  var countryValue = countryElement.property("value");
  var shapeValue = shapeElement.property("value");

  d3.event.preventDefault();
  tbody.html("");

  // Filtering function
  function filterData(data) {
    return data.datetime === dateValue;
  }
  var filteredData = data.filter(filterData);
  console.log(filteredData);

  // Appending results
  filteredData.forEach(function (tableFill) {
    // Appending results
    var row = tbody.append("tr");
    Object.entries(tableFill).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    })
  })
}

// Listeners for inputs
var dateInput = d3.select('#dateFilter');
var cityInput=d3.select('#cityFilter');
var stateInput=d3.select('#stateFilter');
var countryInput=d3.select('#countryFilter');
var shapeInput =d3.select('#shapeFilter');

// Events for inputs
dateInput.on("change", filterClick);
cityInput.on("change", filterClick);
stateInput.on("change", filterClick);
countryInput.on("change", filterClick);
shapeInput.on("change", filterClick);

// Listener for button
var buttonFilter = d3.select('#filterButton');