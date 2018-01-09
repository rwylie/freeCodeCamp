

$(document).ready(function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      $('#loading-image').show();
      $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + "&units=imperial" + '&APPID=19e7d5a5cc69d0dcb0892a99baf2a999',
        type: "GET",
        dataType: "jsonp",
        success: function(data){
          console.log(data);
          $("#today").html('Today:');
          $("#icon").html(data.weather[0].description + '<img style="width: 50px;" src="http://openweathermap.org/img/w/' + data.weather[0].icon + '.png">');
          $("#your-location").html("Your Location:");
          $("#current_location").html(data.name);
          $("#temperature").html("Current Temperature");
          $("#temp").html(data.main.temp + " F");
          // $("#tempc").html(data.main.);
          $("#buttons").html("<button type='button'>Fahrenheit</button>" + " <button id='cel' onclick='changeToCelsius();' type='button'>Celsius</button>");
        },
        complete: function(){
        $('#loading-image').hide();
      }
      });
    });
  }
  // function changeToCelsius() {
  //   alert("hey")
  // }
     });
function changeToCelsius() {
  alert("hey")
}
// $(document).ready(function() {
//   $('#submitWeather').click(function() {
//     var city = $(#city).val();
//
//     if(city != '') {
//       $.ajax({
//         url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=19e7d5a5cc69d0dcb0892a99baf2a999
// ",
// type= "GET",
// dataType: "jsonp",
// success: function(data){
//   console.log(data);
// }
//
//       });
//     } else {
//       $("#error").html('Field cannot be empty');
//     }
//
//
//   });
//
//
// });
