let statistics = {
  redCars: 21,
  blueCars: 45,
  greenCars: 12,
  raceCars: 5,
  blackCars: 40,
  rareCars: 2
}

for (property in statistics) {
  `${property}: ${statistics[property]}`
  var string = property;
  var num = statistics[property];

  if(string.charAt(0)== "r" || num/2 ==1){
    console.log(statistics[property]); 
  }

}
