
function timer(){
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}

var myVar = setInterval(timer,1000);

myVar;

//clearInterval(myVar);

  