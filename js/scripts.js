


function pingpongMaster(numeros) {
  var resultNumber = [];
  for( var i = 1; i <= numeros; i++){
    if(i%15 === 0){
    resultNumber.push("ping-pong")
    alert("ping-pong works")
  } else if(i%5 === 0) {
      resultNumber.push("pong")
      alert("ping-pong works1")
  } else if (i%3 === 0) {
      resultNumber.push("ping")
      alert("ping-pong works2")

  } else {
    resultNumber.push(i);
  };
};
return resultNumber;
};







$(document).ready(function(){
  $("form#project3").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("input#userInput").val());
    var resultNumber = pingpongMaster()
    $("#userResult").text()
  });
});
