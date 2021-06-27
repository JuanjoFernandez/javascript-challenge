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

  // Printing out the filters used
  console.log("The filters used are:");
  console.log(`date/time: ${dateValue}`);
  console.log(`city: ${cityValue}`);
  console.log(`state: ${stateValue}`);
  console.log(`country: ${countryValue}`);
  console.log(`shape: ${shapeValue}`);

  d3.event.preventDefault();
  tbody.html("");

  // Filtering functions
  function filterDate(filteredData) {
    return filteredData.datetime === dateValue;
  }
  function filterCity(filteredData) {
    return filteredData.city === cityValue;
  }
  function filterState(filteredData) {
    return filteredData.state === stateValue;
  }
  function filterCountry(filteredData) {
    return filteredData.country === countryValue;
  }
  function filterShape(filteredData) {
    return filteredData.shape === shapeValue;
  }

  // Conditionals to run each function
  if (dateValue !== '') {
    filteredData = filteredData.filter(filterDate);
  }
  if (cityValue !== '') {
    filteredData = filteredData.filter(filterCity);
  }
  if (stateValue !== '') {
    filteredData = filteredData.filter(filterState);
  }
  if (countryValue !== '') {
    filteredData = filteredData.filter(filterCountry);
  }
  if (shapeValue !== '') {
    filteredData = filteredData.filter(filterShape);
  }

  // Appending results
  filteredData.forEach(function (tableFill) {
    // Filling the table
    var row = tbody.append("tr");
    Object.entries(tableFill).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    })
  })
}

// Listeners for inputs
var dateInput = d3.select('#dateFilter');
var cityInput = d3.select('#cityFilter');
var stateInput = d3.select('#stateFilter');
var countryInput = d3.select('#countryFilter');
var shapeInput = d3.select('#shapeFilter');

// Events for inputs
dateInput.on("change", filterClick);
cityInput.on("change", filterClick);
stateInput.on("change", filterClick);
countryInput.on("change", filterClick);
shapeInput.on("change", filterClick);

// Listener for button
var buttonFilter = d3.select('#filterButton');