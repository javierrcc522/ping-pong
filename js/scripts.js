
var resultNumber = [];

var pingpongMaster = function(numeros) {
  for( var i = 1; i <= numeros; i++){
    if(i%15 === 0)
    resultNumber.push("ping-pong")
    alert("ping-pong works")
  } if (i%5 === 0) {
      resultNumber.push("pong")
      alert("ping-pong works1")
  } if (i%3 === 0) {
      resultNumber.push("ping")
      alert("ping-pong works2")

  } else {
    resultNumber.push(i);
    return resultNumber;
  };
};








$(document).ready(function(){
  $("form#project3").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("input#userInput").val());
    var resultNumber = pingpongMaster()
    $("#userResult").append()
  });
});
