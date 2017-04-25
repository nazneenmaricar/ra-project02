var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
url += '?' + $.param({
  'api-key': "f5f0c6a8c360474eb8bc1d9d48ad5795"
});

function newsArticle (abstract, image, link) {

var clone=$("#clone").clone();

$(clone).children(".article").css("background", "url('"+image+"') no-repeat 50%");
$(clone).find("p").text(abstract);
$(clone).find("a").attr("href", link);

$("body").append($(clone).html());

//var articleClone = document.createElement("div");
      //$(articleClone).html("<img src="+image+">");
      //$(articleClone).html("<p>"+abstract+"</p>");
      //<a href="+link+">link</a>");
       //$("body").append(articleClone);

}


function article(results) {
  for (var i=0; i<results.length; i++){
    newsArticle (results[i].abstract, results[i].multimedia[4].url, results[i].url);
  };
}


$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  article (result.results);

;
}).fail(function(err) {
  throw err;
});








//PRINTS OUT THE RESULT

// var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
// url += '?' + $.param({
//   'api-key': "f5f0c6a8c360474eb8bc1d9d48ad5795"
// });
// $.ajax({
//   url: url,
//   method: 'GET',
// }).done(function(result) {
//   //loop_articles (resut.results);
// var abstract = (result.results[2].abstract);
// //var title= (result.results[i].title);
// //var image= (result.results[1].multimedia[4].url);
//
//
// console.log (result);
//
//   //console.log(result.results[7]);
// }).fail(function(err) {
//   throw err;
// });
