var i = "num";
function printNums(){
  console.log(i);
  setTimeout(function() {console.log(2);}, 1000);
  setTimeout(function() {console.log(3);}, 0);
  console.log(4);

}
printNums();