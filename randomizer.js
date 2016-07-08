
function randomizer(dataWeRetrievedFromYelpJSON){     
    var randomInt = Math.floor(Math.random() * dataWeRetrievedFromYelpJSON["businesses"].length)
    //console.log(dataWeRetrievedFromYelpJSON["businesses"][randomInt])
    return dataWeRetrievedFromYelpJSON["businesses"][randomInt]
}

function grab6Restaurants(dataWeRetrievedFromYelpJSON){
    var restaurants = [];

    while(restaurants.length < 6){
        var currentSeleciton = randomizer(dataWeRetrievedFromYelpJSON)
        if(restaurants.indexOf(currentSeleciton) === -1  ){
            restaurants.push(currentSeleciton)
        }

    }

    return restaurants
}

//var data = grabYelpData();
var ids = ['#one > .thumbnail', '#two > .thumbnail','#three > .thumbnail', 
'#four > .thumbnail', '#five > .thumbnail', '#six > .thumbnail'];

function appendInfoToElement(data){
    $('.thumbnail').empty();
    //this function randomly choose one set of data, and converts data to DOM
    sixRandomlySelectedRestaurantsArr = grab6Restaurants(data);

    function createElement(data){
        // var content = randomizer(data); 
        var content = data; 
        var name = '<h2>'+content.name+'</h2>';
        var address = '',contentHTMl=';';
        var link = '<p><button class="btn btn-default">'+'<a target="_blank" href="'+ content.url + '">Learn More</a>'+"</button></p>";
        var review = '<img src="' + content.rating_img_url_large + '">'
            content.location.display_address.forEach(function(add){
                    address += '<p>' + add + '</p>'
            });
        var contentHTML = name + address + review + link;
        return contentHTML  
    }
    //append to page
    ids.forEach(function(val, index){
        $(val).append(createElement(sixRandomlySelectedRestaurantsArr[index]))
    })
}

//pull the most viewed 6 restaurants from the zipcode 
function mostReviewed(dataWeRetrievedFromYelpJSON) {
  var mostReviewedSix = [];
  dataWeRetrievedFromYelpJSON = dataWeRetrievedFromYelpJSON["businesses"];
  //sort data based on review_count
  dataWeRetrievedFromYelpJSON = dataWeRetrievedFromYelpJSON.sort(function(a, b) {
    return b.review_count - a.review_count
  })
  
  for (var i = 0; i < 6; i++) {
    mostReviewedSix.push(dataWeRetrievedFromYelpJSON[i]);
  }
  return mostReviewedSix;
}
//append most reviewed to page
function appendMostReivewedToElement(data) {
  $('.thumbnail').empty();
  var reviewed = mostReviewed(data);
  function createElement(data) {
    var content = data;
    var name = '<h2>' + content.name + '</h2>';
    var address = '',
      contentHTMl = ';';
    var link = '<p><button class="btn btn-default">' + '<a target="_blank" href="' + content.url + '">Learn More</a>' + "</button></p>";
    var review = '<img src="' + content.rating_img_url_large + '">'
    content.location.display_address.forEach(function(add) {
      address += '<p>' + add + '</p>'
    });
    var contentHTML = name + address + review + link;
    return contentHTML
  }
  //append to page
  ids.forEach(function(val, index) {
    $(val).append(createElement(reviewed[index]))
  })
}
