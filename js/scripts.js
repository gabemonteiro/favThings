$(document).ready(function() {
  $("form").submit(function(event) {

  var arr = [];

  for (i = 1; i < 6; i++) {
    arr.push($("input#fav"+i).val());
  }

  arr.forEach(function(element) {
    
    console.log(element);

  });
    event.preventDefault();
  });
});
