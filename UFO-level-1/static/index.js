console.log("Hi... the truth is out there, not in here")
var tbody = d3.select("tbody");

// Obtaining dates range

// Obtaining dates array
dates = [];
for (var i = 0; i < data.length; i++) {
  var currentDate = data[i].datetime;
  dates.push(Date.parse(currentDate));
}

// Obtaining min and max date
minDate = Math.min(...dates);
maxDate = Math.max(...dates);

console.log(minDate, maxDate);

// For testing, app will actually take the user input
dateFilter = "1/7/2010"

// Function to run upon user input
function filterClick() {
  d3.event.preventDefault();
  console.log("Filter button clicked");
}

// Listener for button
var buttonFilter = d3.select("#filterButton");
buttonFilter.on("click", filterClick);



// Function that filters, decided to not make it in line to be ready for part 2
function filterData(event) {

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

data.forEach(filterData);
