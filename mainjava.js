

var selectedSection;
var url="https://api.nytimes.com/svc/topstories/v2/";
$(document).ready(function(){

$("#category").on('change', function() {

    selectedSection = $(this).val();
    var selecturl = url + selectedSection + ".json" + '?' + $.param({'api-key': "f5f0c6a8c360474eb8bc1d9d48ad5795"});

  $.ajax({
      url: selecturl,
      method: 'GET',
  })
  .done(function(result) {
    $('.contentArea').empty()
    article (result.results);
  })
  .fail(function(err) {
    throw err;
  });
});
});

var remIndex=0;

function newsArticle (abstract, image, link) {

    var clone=$("#clone").clone();

        $(clone).children(".article").css("background", "url('"+image+"') no-repeat 50%");
        $(clone).find("p").text(abstract);
        $(clone).find("a").attr("href", link);
        $(".contentArea").append($(clone).html());
}


function article(results) {
  for (var i=0; i<results.length; i++){

    if (results[i].multimedia[4].url){

      newsArticle (results[i].abstract, results[i].multimedia[4].url, results[i].url);
      remIndex++;}

      if (remIndex==12){
      break;
    }
  }
}







// //PRINTS OUT THE RESULT
//
// var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
// url += '?' + $.param({
//   'api-key': "f5f0c6a8c360474eb8bc1d9d48ad5795"
// });
// $.ajax({
//   url: url,
//   method: 'GET',
// }).done(function(result) {
//   //loop_articles (resut.results);
// //var abstract = (result.results[2].abstract);
// //var title= (result.results[i].title);
// var image= (result.results[i].multimedia[1].url);
// console.log (result);
//
// //console.log(result.results[7]);
// }).fail(function(err) {
//   throw err;
// });
