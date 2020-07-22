// from data.js
var tableData = data;

// YOUR CODE HERE!
var datetime = [];
var city = [];
var state = [];
var country= [];
var shape = [];
var durationMinutes = [];
var comments = [];

// Iterate through each recipe object
data.forEach((item) => {

  // Iterate through each key and value
  Object.entries(item).forEach(([key, value]) => {

    // Use the key to determine which array to push the value to
    if (key === "datetime") {
      datetime.push(value);
    }
    else if (key === "city") {
      city.push(value);
    }
    else if (key === "state") {
        state.push(value);
      }
    else if (key === "country") {
        country.push(value);
      }
     else if (key === "shape") {
        shape.push(value);
      }
     else if (key === "durationMinutes") {
        durationMinutes.push(value);
      }
    else if (key === "comments") {
        comments.push(value);
      }
    else{
        console.log("unassigned value")

    }
   });
});

var tbody= d3.select("tbody");
var collumn=tbody.append("tr");


// for(i=0;i<1;i++){
//     row.append("td").text(datetime[i]);
//     row.append("td").text(city[i]);
//     row.append("td").text(state[i]);
//     row.append("td").text(country[i]);
//     row.append("td").text(shape[i]);
//     row.append("td").text(durationMinutes[i]);
//     row.append("td").text(comments[i]);
//     collumn.append("tr")

// }

for(i=0;i<data.length;i++){
    var row = tbody.append("tr");
    row.append("td").text(datetime[i]);
    row.append("td").text(city[i]);
    row.append("td").text(state[i]);
    row.append("td").text(country[i]);
    row.append("td").text(shape[i]);
    row.append("td").text(durationMinutes[i]);
    row.append("td").text(comments[i]);

};