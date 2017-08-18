function pingpongMaster(num) {
  var resultNumber = [];
  for( var i=1; i <= num; i++){
    if(i % 15 === 0)
    resultNumber.push("ping-pong")
  } else if (i % 5 === 0) {
      resultNumber.push("pong")

  } else if (i % 3 === 0) {
      resultNumber.push("ping")


  } else {
    resultNumber.push(i);
  };
};
return resultNumber;







$(document).ready(function(){
  $("form#project3").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("input#userInput").val());
    var resultNumber = pingpongMaster(num)

  });
});
