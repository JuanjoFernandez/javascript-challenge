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

// Listener for button
var dateFilter = d3.select('#filterDate').value;
var buttonFilter = d3.select('#filterButton');
buttonFilter.on("click", filterClick);

// Function to run upon user input
function filterClick() {
  console.log("Filter button clicked");
  
  var dateElement = d3.select("#dateFilter");
  var dateFilter = dateElement.property("value");
  console.log(`Date filter: ${dateFilter}`);
  
  // data.forEach(filterData(dateFilter));
}

// // Function that filters, decided to not make it in line to be ready for part 2
// function filterData(event) {
//   d3.event.preventDefault();
//   tbody.html("");

//   // Filtering by Date
//   if (dateFilter === event.datetime) {

//     // Appending results
//     var row = tbody.append("tr");
//     Object.entries(event).forEach(([key, value]) => {
//       var cell = row.append("td");
//       cell.text(value);
//     })
//   }
// }


