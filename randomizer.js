/*
takes in a yelp JSON, returns one randomly selected restaurant
*/
function randomizer(yelpData){     
    var randomInt = Math.floor(Math.random() * yelpData["businesses"].length)

    return yelpData["businesses"][randomInt]
}
/*
call randomizers and appends the object to restaurants if unique
*/
function random6Restaurants(yelpData){
    var restaurants = [];

    while(restaurants.length < 6){
        var currentSeleciton = randomizer(yelpData)
        if(restaurants.indexOf(currentSeleciton) === -1  ){
            restaurants.push(currentSeleciton)
        }

    }

    return restaurants
}

/*
Array of Dom elements we want to append information
*/
var ids = ['#one > .thumbnail', '#two > .thumbnail','#three > .thumbnail', 
'#four > .thumbnail', '#five > .thumbnail', '#six > .thumbnail'];

/*
data is the yelp JSON 
restaurants is if you have an array of 6 restaurants already
appends 6 restaurant objects to the DOM
*/
function appendInfoToElement(data, restaurants){
    $('.thumbnail').empty();
    //this function randomly choose one set of data, and converts data to DOM
    restaurants = restaurants || random6Restaurants(data);


    //append to page
    ids.forEach(function(val, index){
        $(val).append(createElement(restaurants[index]))
    })
}

/*
pull the most viewed 6 restaurants from the zipcode 
*/
function mostReviewed(yelpData) {
  var mostReviewedSix = [];
  yelpData = yelpData["businesses"];
  //sort data based on review_count
  yelpData = yelpData.sort(function(a, b) {
    return b.review_count - a.review_count
  })
  
  for (var i = 0; i < 6; i++) {
    mostReviewedSix.push(yelpData[i]);
  }
  return mostReviewedSix;
}
/*
append most reviewed to page
*/
function appendMostReivewedToElement(data) {
  $('.thumbnail').empty();
  var reviewed = mostReviewed(data);

  appendInfoToElement(data, reviewed)
}

/*
take properties from restaurant object and format into a HTML line and returns it
*/
function createElement(data){

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