

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

    $('#cel').click(function(){
       $.ajax({
           url: 'http://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + "&units=metric" + '&APPID=19e7d5a5cc69d0dcb0892a99baf2a999',
           // name of the callback parameter
           jsonp: "callback",
           // tell jQuery we're expecting JSONP
           dataType: "jsonp",
           //what we want
           data: {
               units:"metric",
               mode: "json"
           },
           // work with the response
           success: function(response) {
                 var tempC = response.list[0].main.temp;
              $('#tempc').html('<span>'+response.list[0].main.temp+'</span><span class="t">* C</span>');
           }
       });
      });



  }
     });
function changeToCelsius() {
  alert("hey")

}
