$(document).ready(function(){
    var input_text;

    $('#txt').keydown(function (e){
      if(e.keyCode == 13){
        $('#titles').empty();
          ajax_call();
      }
    })
    function ajax_call() {
      var x = document.getElementById("txt").value;
    $.ajax({
        type: "GET",
        url: "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + x + "&prop=info&inprop=url&utf8=&format=json",
        dataType: "jsonp",
		     success: function(response) {
			   console.log(response);
         for (i=0; i<5; i++) {
             console.log(response.query.search[i].title);
             $("#titles").append('<li><a text-decoration: underline;" href="https://en.wikipedia.org/wiki/' + response.query.search[i].title + '">' + response.query.search[i].title +'</a><br>'+ response.query.search[i].snippet + '</li> <br>');
             // $("#snippets").append(response.query.search[i].snippet);
            }
        },
        error: function (errorMessage) {
        }
    });
  }


});
