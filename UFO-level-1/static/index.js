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
  d3.event.preventDefault();
  console.log("Filter button clicked");
  var dateFilter = d3.select("#dateFilter").value
  data.forEach(filterData(dateFilter));
}

// Function that filters, decided to not make it in line to be ready for part 2
function filterData(event) {
tbody.html("");

  // Filtering by Date
  if (dateFilter === event.datetime) {

    // Appending results
    var row = tbody.append("tr");
    Object.entries(event).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    })
  }
}

// Listener for button
var buttonFilter = d3.select("#filterButton");
buttonFilter.on("click", filterClick);
