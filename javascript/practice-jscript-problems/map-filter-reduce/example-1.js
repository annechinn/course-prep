// https://medium.com/infancyit/a-better-javascript-with-map-filter-reduce-b554f5bc3be3

let distances = [
    { from: 'New York', to: 'Atlanta', distance: 880},
    { from: 'Austin', to: 'Seattle', distance: 1200},
    { from: 'Kansas', to: 'Portland', distance: 1340}
   ] 

// Here, distances are in kilometers and we need to convert them 
// into miles keeping the rest of the array objects same.

let result = [];
for (let i=0; i<distances.length;++i) {
   result.push(
       {
       ...distances[i],
       distance: distances[i]* 0.621371
       })
}

result = distances.map((x)=> { return { ...x, distance: x* 0.621371 }});


// get records that have a distance less than 1000 km.

let filterDistances = []
for (let i = 0; i < distances.length; i ++) {
    if (distances[i].distance < 1000) {
        filterDistances.push(distances[i])
    }
}
console.log(filterDistances);

filteredDistances = distances.filter(item => item.distance < 1000)
console.log(filteredDistances);

// calculate the total distance of all the items in our distances array.

let reducedDistance = 0
for (let i = 0; i < distances.length; i++) {
   reducedDistances += distances[i].distance;
}
console.log(reducedDistance)

reducedDistance = distances.reduce((prevVal, item) => prevVal + item.distance, 0)
console.log(reducedDistance);

// find the total distance in miles of all items in our 
// distances array where distance is less than 1000 km.

let total = 0
for(let i = 0; i < distances.length; i++){
  if(distances[i].distance < 1000){
    total += distances[i].distance * 0.621371;
  }
}
console.log(total);

// performance: iterating three times
total = distances
        .filter(item => item.distance < 1000)
        .map(item => item.distance * 0.621371)
        .reduce((prev, distance) => prev + distance, 0);
console.log(total);


