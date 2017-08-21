
function pingPong(number) {
  var resultNumber = "";
  for (var i = 1; i <= number; i++){
    if (i%15 === 0){
      resultNumber = resultNumber + "<li>" + "Ping Pong" + "</li>";
    }
    else if (i% 5 === 0) {
      resultNumber = resultNumber + "<li>" + "Pong" + "</li>";
    }
    else if (i% 3 === 0) {
      resultNumber = resultNumber + "<li>" + "Ping" + "</li>";

    } else {
      resultNumber = resultNumber + "<li>" + i + "</li>";
    };
    document.getElementById("item List").innerHTML = resultNumber;
  };
  return resultNumber;
};


$(document).ready(function(){
  $("form#project3").submit(function(event) {
    event.preventDefault();
    var userNumber = $("input#userInput").val();
    var resultNumber = pingPong(userNumber);
    $("#userResult").text(resultNumber);
  });
});
