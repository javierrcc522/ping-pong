function pingpong() {
  var resultNumber = [];
  for( var i=0; i < arguments.length; i++){
    if(i % 3 === 0)
    resultNumber.push("ping")
  };
};







$(document).ready(function(){
  $("form#project3").submit(function(event) {
    event.preventDefault();
    var userNumber = $("input#userInput").val();

  });
});
