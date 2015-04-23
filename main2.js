// var myFunction = function() {
//   console.log('hello');
// }
//
// var myVar = console.log('goodbye');

var products = {
  // properties of var product: source, template, request
  source: function() {
    return $("#api-template").html()
  },
  template: function() {
    return Handlebars.compile(products.source());
  },
  request: function() {
    /*  optional way to call the url:
      $.getJSON("http://localhost:3000/api/products.json");*/
    var getProducts = $.ajax({
      url: "http://localhost:3000/api/products"
    });
    getProducts.done(this.buildTemplate);
  },
  buildTemplate: function(data) {
    var html = products.template()(data);
    $('body').append(html);
  },
  init: function() {
    this.request();
  }
}

$(function() {
  products.init();
});
