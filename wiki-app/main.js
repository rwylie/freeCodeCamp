$(document).ready(function(){
    var input_text;

    $('#txt').keydown(function (e){
      if(e.keyCode == 13){
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
         $("#titles").html('<a style="color: white; text-decoration: underline;" href="https://en.wikipedia.org/wiki/' + response.query.search[0].title + '">' + response.query.search[0].title + '</a>');
         $("#snippets").html(response.query.search[0].snippet);
        },
        error: function (errorMessage) {
        }
    });
  }
});
