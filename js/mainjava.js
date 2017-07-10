var selectedSection;
var url = "https://api.nytimes.com/svc/topstories/v2/";

$(window).on("load", function() {
  //$(document).ready(function() {

  $("#category").heapbox({
    "onChange": function(selectedSection) {
      $(".load").show()
      //fadeIn(1000);  /* either show or fadeIn */

      /*reszing the header height */

      // $('#header-height').animate({
      //   height: $('#header-height').get(0).scrollHeight
      // }, 1000, function() {
      //   $(this).height('auto');
      // });

      $(".contentArea").fadeOut(1000).empty();
      $("header").switchClass("big-header", "small-header", 1000, "linear");

      var selecturl = url + selectedSection + ".json" + '?' + $.param({
        'api-key': "f5f0c6a8c360474eb8bc1d9d48ad5795"
      });

      $.ajax({
          url: selecturl,
          method: 'GET',
        })
        .done(function(result) {
          //$(".contentArea").empty();
          article(result.results);
          //$(".load").hide();
        })
        .fail(function(err) {
          throw err;
        });
    }
  });
});

function newsArticle(abstract, image, link) {
  var clone = $("#clone").clone();
  $(clone).children(".article").css({
    "background": "url('" + image + "')", "background-position": "center", "background-size": "cover"});
  $(clone).find("p").text(abstract);
  $(clone).find("a").attr("href", link);
  $(".contentArea").append($(clone).html()).fadeIn(1000, function() {
    $(".load").fadeOut(1000)
  });
  /*works with and without fadeIn/fadeOut */
}

/*creating the 12 articles */

function article(results) {
  /* throwing an error msg when arlicles are not populated */
  if (results.length == 0) {
    $(".contentArea").html("Unfortunately this section does not contain any article");
  }

  /* populating articles that contains multimedia */
  var remIndex = 0;
  for (var i = 0; i < results.length; i++) {
    var media = results[i].multimedia[4];
    /*  the value is where the media url is assigned in the API */

    /* step by step checking is done for the media field before populating the article so that the console doesnt throw an error when there is less that 12 articles with image. */

    if (media != undefined && media.hasOwnProperty("url") && media.url != undefined) {
      newsArticle(results[i].abstract, results[i].multimedia[4].url, results[i].url);
      remIndex++;
    }
    console.log(remIndex);
    if (remIndex == 12) {
      break;
    }
  }
}

/*Additional Goal */
//INSERT A IMAGE NOT FOUND URL (GOAL)

/* FOLLOWING ARE FOR MY PERSONAL REFERENCE */

/*PRINTS OUT THE RESULTS*/

/*
var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
url += '?' + $.param({
  'api-key': "f5f0c6a8c360474eb8bc1d9d48ad5795"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  //loop_articles (resut.results);
  //var abstract = (result.results[2].abstract);
  //var title= (result.results[i].title);
var image= (result.results[i].multimedia[1].url);
console.log (result);
//console.log(result.results[7]);
}).fail(function(err) {
  throw err;
});
*/

/* there is a bugger, on the 3rd count the height goes back to default*/

//document.getElementById("header-height").addEventListener("change", function() {
// 	this.classList.toggle("active");})


/* ANIMATED AUTO HEIGHT (HEADER)*/

// var el = $('#header-height'),
//     curHeight = el.height(),
//     autoHeight = el.css('height', 'auto').height();
// el.height(curHeight).animate({height: autoHeight}, 1000);
