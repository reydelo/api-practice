$(function(){
  var source = $("#api-template").html();
  var template = Handlebars.compile(source);


  $.ajax({
    url: "http://localhost:3000/api/products.json"
  }).done(function(data) {
    var theProducts = data;
    var html = template(theProducts);

    $('body').append(html);

  });


});
