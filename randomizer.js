
function randomizer(dataWeRetrievedFromYelpJSON){
        
    var randomInt = Math.floor(Math.random() * dataWeRetrievedFromYelpJSON["businesses"].length)


    console.log(dataWeRetrievedFromYelpJSON["businesses"][randomInt])
    return dataWeRetrievedFromYelpJSON["businesses"][randomInt]


}

var data = {
        "region": {
            "span": {
                "latitude_delta": 0.011952160000006984, 
                "longitude_delta": 0.006454469999994217
            }, 
            "center": {
                "latitude": 37.7733972, 
                "longitude": -122.18048235
            }
        }, 
        "total": 6, 
        "businesses": [
            {
                "is_claimed": false, 
                "rating": 4.0, 
                "mobile_url": "http://m.yelp.com/biz/charlies-las-palmas-restaurant-oakland?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=Es9ht3VFfnFYk10QR2pzhg", 
                "rating_img_url": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png", 
                "review_count": 29, 
                "name": "Charlie's Las Palmas Restaurant", 
                "snippet_image_url": "http://s3-media2.fl.yelpcdn.com/photo/dJKrIbkazYnf1TmeD_S2HA/ms.jpg", 
                "rating_img_url_small": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png", 
                "url": "http://www.yelp.com/biz/charlies-las-palmas-restaurant-oakland?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=Es9ht3VFfnFYk10QR2pzhg", 
                "location": {
                    "cross_streets": "Seminary Ave & 60th Ave", 
                    "city": "Oakland", 
                    "display_address": [
                        "5941 MacArthur Blvd", 
                        "East Oakland", 
                        "Oakland, CA 94605"
                    ], 
                    "geo_accuracy": 8.0, 
                    "neighborhoods": [
                        "East Oakland"
                    ], 
                    "postal_code": "94605", 
                    "country_code": "US", 
                    "address": [
                        "5941 MacArthur Blvd"
                    ], 
                    "coordinate": {
                        "latitude": 37.77591, 
                        "longitude": -122.18344
                    }, 
                    "state_code": "CA"
                }, 
                "phone": "5106397220", 
                "snippet_text": "Good fish, reasonable price love to eat here when I come home. I wish they had one up in SAC near  where I live, but they don't so I have to settle for JJ's...", 
                "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/kiNuNk3ekBtWyUVbYoJUFA/ms.jpg", 
                "categories": [
                    [
                        "Seafood", 
                        "seafood"
                    ], 
                    [
                        "Mexican", 
                        "mexican"
                    ]
                ], 
                "display_phone": "+1-510-639-7220", 
                "rating_img_url_large": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png", 
                "id": "charlies-las-palmas-restaurant-oakland", 
                "is_closed": false, 
                "distance": 417.831244596027
            }, 
            {
                "is_claimed": true, 
                "rating": 2.5, 
                "mobile_url": "http://m.yelp.com/biz/taco-bell-oakland-18?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=Es9ht3VFfnFYk10QR2pzhg", 
                "rating_img_url": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/c7fb9aff59f9/ico/stars/v1/stars_2_half.png", 
                "review_count": 15, 
                "name": "Taco Bell", 
                "snippet_image_url": "http://s3-media4.fl.yelpcdn.com/photo/HtH4GUHclz89Ucw4F47Qig/ms.jpg", 
                "rating_img_url_small": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/8e8633e5f8f0/ico/stars/v1/stars_small_2_half.png", 
                "url": "http://www.yelp.com/biz/taco-bell-oakland-18?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=Es9ht3VFfnFYk10QR2pzhg", 
                "location": {
                    "cross_streets": "73rd Ave & Church St", 
                    "city": "Oakland", 
                    "display_address": [
                        "6900 Bancroft Ave", 
                        "East Oakland", 
                        "Oakland, CA 94605"
                    ], 
                    "geo_accuracy": 9.5, 
                    "neighborhoods": [
                        "East Oakland"
                    ], 
                    "postal_code": "94605", 
                    "country_code": "US", 
                    "address": [
                        "6900 Bancroft Ave"
                    ], 
                    "coordinate": {
                        "latitude": 37.7680228176914, 
                        "longitude": -122.179036690093
                    }, 
                    "state_code": "CA"
                }, 
                "phone": "5105685231", 
                "snippet_text": "THIS PLACE is on point! Carnetta is the definition of customer service! She was so hopeful and her energy was beyond amazing and absolutely professional!...", 
                "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/XAxtvw750sAPCBesrf_o8Q/ms.jpg", 
                "categories": [
                    [
                        "Tex-Mex", 
                        "tex-mex"
                    ], 
                    [
                        "Fast Food", 
                        "hotdogs"
                    ], 
                    [
                        "Mexican", 
                        "mexican"
                    ]
                ], 
                "display_phone": "+1-510-568-5231", 
                "rating_img_url_large": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/d63e3add9901/ico/stars/v1/stars_large_2_half.png", 
                "id": "taco-bell-oakland-18", 
                "is_closed": false, 
                "distance": 1207.2770942400768
            }, 
            {
                "is_claimed": false, 
                "rating": 1.0, 
                "mobile_url": "http://m.yelp.com/biz/tacos-la-gloria-2-oakland?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=Es9ht3VFfnFYk10QR2pzhg", 
                "rating_img_url": "https://s3-media1.fl.yelpcdn.com/assets/2/www/img/f64056afac01/ico/stars/v1/stars_1.png", 
                "review_count": 1, 
                "name": "Tacos La Gloria #2", 
                "snippet_image_url": "http://s3-media2.fl.yelpcdn.com/photo/Tx8oXPMPyGdIqq20HRbKxA/ms.jpg", 
                "rating_img_url_small": "https://s3-media1.fl.yelpcdn.com/assets/2/www/img/74cb12ae7253/ico/stars/v1/stars_small_1.png", 
                "url": "http://www.yelp.com/biz/tacos-la-gloria-2-oakland?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=Es9ht3VFfnFYk10QR2pzhg", 
                "location": {
                    "city": "Oakland", 
                    "display_address": [
                        "67th & Foothill Blvd", 
                        "East Oakland", 
                        "Oakland, CA 94605"
                    ], 
                    "geo_accuracy": 7.0, 
                    "neighborhoods": [
                        "East Oakland"
                    ], 
                    "postal_code": "94605", 
                    "country_code": "US", 
                    "address": [
                        "67th & Foothill Blvd"
                    ], 
                    "coordinate": {
                        "latitude": 37.7701187, 
                        "longitude": -122.1796036
                    }, 
                    "state_code": "CA"
                }, 
                "phone": "5105335129", 
                "snippet_text": "Tacos la Gloria is on 67th ave near Foothill\n\nmenu: tacos (1.25), burritos (5.50) tortas(5.50)\n\nsampling: asada burritos(5.50)\n-supposed to have sour cream...", 
                "categories": [
                    [
                        "Mexican", 
                        "mexican"
                    ], 
                    [
                        "Food Stands", 
                        "foodstands"
                    ]
                ], 
                "display_phone": "+1-510-533-5129", 
                "rating_img_url_large": "https://s3-media3.fl.yelpcdn.com/assets/2/www/img/cc5d90a21966/ico/stars/v1/stars_large_1.png", 
                "id": "tacos-la-gloria-2-oakland", 
                "is_closed": false, 
                "distance": 968.7816639439374
            }, 
            {
                "is_claimed": true, 
                "rating": 3.0, 
                "mobile_url": "http://m.yelp.com/biz/gazzalis-supermarket-oakland?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=Es9ht3VFfnFYk10QR2pzhg", 
                "rating_img_url": "https://s3-media3.fl.yelpcdn.com/assets/2/www/img/34bc8086841c/ico/stars/v1/stars_3.png", 
                "review_count": 26, 
                "name": "Gazzali's Supermarket", 
                "snippet_image_url": "http://s3-media3.fl.yelpcdn.com/photo/ck5NfGZYoP9HWpeuH0VzOQ/ms.jpg", 
                "rating_img_url_small": "https://s3-media3.fl.yelpcdn.com/assets/2/www/img/902abeed0983/ico/stars/v1/stars_small_3.png", 
                "url": "http://www.yelp.com/biz/gazzalis-supermarket-oakland?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=Es9ht3VFfnFYk10QR2pzhg", 
                "location": {
                    "cross_streets": "73rd Ave & Church St", 
                    "city": "Oakland", 
                    "display_address": [
                        "7000 Bancroft Ave", 
                        "East Oakland", 
                        "Oakland, CA 94605"
                    ], 
                    "geo_accuracy": 8.0, 
                    "neighborhoods": [
                        "East Oakland"
                    ], 
                    "postal_code": "94605", 
                    "country_code": "US", 
                    "address": [
                        "7000 Bancroft Ave"
                    ], 
                    "coordinate": {
                        "latitude": 37.7673759460449, 
                        "longitude": -122.17781829834
                    }, 
                    "state_code": "CA"
                }, 
                "phone": "5105698159", 
                "snippet_text": "I love this store. One of my local favorites. I've been shopping there since 2008. Their produce is fresh and very reasonable. They have a rather large...", 
                "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/mzuWIWWiWo9s9GgI4nModA/ms.jpg", 
                "categories": [
                    [
                        "Grocery", 
                        "grocery"
                    ]
                ], 
                "display_phone": "+1-510-569-8159", 
                "rating_img_url_large": "https://s3-media1.fl.yelpcdn.com/assets/2/www/img/e8b5b79d37ed/ico/stars/v1/stars_large_3.png", 
                "id": "gazzalis-supermarket-oakland", 
                "is_closed": false, 
                "distance": 1233.1232705432376
            }, 
            {
                "is_claimed": false, 
                "rating": 4.0, 
                "mobile_url": "http://m.yelp.com/biz/egg-roll-kitchen-oakland?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=Es9ht3VFfnFYk10QR2pzhg", 
                "rating_img_url": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png", 
                "review_count": 21, 
                "name": "Egg Roll Kitchen", 
                "snippet_image_url": "http://s3-media3.fl.yelpcdn.com/photo/o5NDL6EEB5PGM9MoWnI5jg/ms.jpg", 
                "rating_img_url_small": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png", 
                "url": "http://www.yelp.com/biz/egg-roll-kitchen-oakland?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=Es9ht3VFfnFYk10QR2pzhg", 
                "location": {
                    "cross_streets": "67th Ave & Havenscourt Blvd", 
                    "city": "Oakland", 
                    "display_address": [
                        "6650 Bancroft Ave", 
                        "East Oakland", 
                        "Oakland, CA 94605"
                    ], 
                    "geo_accuracy": 8.0, 
                    "neighborhoods": [
                        "East Oakland"
                    ], 
                    "postal_code": "94605", 
                    "country_code": "US", 
                    "address": [
                        "6650 Bancroft Ave"
                    ], 
                    "coordinate": {
                        "latitude": 37.76976, 
                        "longitude": -122.18165
                    }, 
                    "state_code": "CA"
                }, 
                "phone": "5106382108", 
                "snippet_text": "Love the food...I drive from South Bay just to have the best of the best. The 45 mins drive is so worth the drive....I go some much and come back with a...", 
                "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/v2iF3-bc3B8m7KZiGe5V2A/ms.jpg", 
                "categories": [
                    [
                        "Chinese", 
                        "chinese"
                    ], 
                    [
                        "Ethnic Food", 
                        "ethnicmarkets"
                    ]
                ], 
                "display_phone": "+1-510-638-2108", 
                "rating_img_url_large": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png", 
                "id": "egg-roll-kitchen-oakland", 
                "is_closed": false, 
                "distance": 1017.4528375834209
            }, 
            {
                "is_claimed": false, 
                "rating": 5.0, 
                "mobile_url": "http://m.yelp.com/biz/lees-donuts-12-oakland?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=Es9ht3VFfnFYk10QR2pzhg", 
                "rating_img_url": "https://s3-media1.fl.yelpcdn.com/assets/2/www/img/f1def11e4e79/ico/stars/v1/stars_5.png", 
                "review_count": 1, 
                "name": "Lee's Donuts 12", 
                "snippet_image_url": "http://s3-media4.fl.yelpcdn.com/photo/9-5YQ0qkdYTWjCOBUPo4Uw/ms.jpg", 
                "rating_img_url_small": "https://s3-media1.fl.yelpcdn.com/assets/2/www/img/c7623205d5cd/ico/stars/v1/stars_small_5.png", 
                "url": "http://www.yelp.com/biz/lees-donuts-12-oakland?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=Es9ht3VFfnFYk10QR2pzhg", 
                "location": {
                    "city": "Oakland", 
                    "display_address": [
                        "7000 Bancroft Ave", 
                        "East Oakland", 
                        "Oakland, CA 94605"
                    ], 
                    "geo_accuracy": 8.0, 
                    "neighborhoods": [
                        "East Oakland"
                    ], 
                    "postal_code": "94605", 
                    "country_code": "US", 
                    "address": [
                        "7000 Bancroft Ave"
                    ], 
                    "coordinate": {
                        "latitude": 37.7673759460449, 
                        "longitude": -122.17781829834
                    }, 
                    "state_code": "CA"
                }, 
                "phone": "5107296165", 
                "snippet_text": "I Love The Coffee Here. It's always freshley brewed and the lotto tickets here are always winners!\n\nThis place is the bomb.\n\nThe donuts here are fresh, I...", 
                "categories": [
                    [
                        "Donuts", 
                        "donuts"
                    ]
                ], 
                "display_phone": "+1-510-729-6165", 
                "rating_img_url_large": "https://s3-media3.fl.yelpcdn.com/assets/2/www/img/22affc4e6c38/ico/stars/v1/stars_large_5.png", 
                "id": "lees-donuts-12-oakland", 
                "is_closed": false, 
                "distance": 1233.1232705432376
            }
        ]
    }


//randomizer(data)



function appendInfoToElement(data, id){
  var el = '#'+ id + '> .thumbnail';
  var content = randomizer(data);
  var name = '<h2>'+content.name+'</h2>';
  var address = '',contentHTMl=';';
  var link = '<p><button class="btn btn-default">'+'<a target="_blank" href="'+ content.url + '">Learn More</a>'+"</button></p>";
  var review = '<img src="' + content.rating_img_url_large + '">'
  content.location.display_address.forEach(function(add){
    address += '<p>' + add + '</p>'
  });
  contentHTML = name + address + review + link;
  $(el).append(contentHTML);
}

$(document).ready(function(){
  appendInfoToElement(data, 'one');
  appendInfoToElement(data, 'two');
  appendInfoToElement(data, 'three');
  appendInfoToElement(data, 'four');
  appendInfoToElement(data, 'five');
  appendInfoToElement(data, 'six');
  $('#randomize').click(function(){
    $('.thumbnail').empty();
    appendInfoToElement(data, 'one');
    appendInfoToElement(data, 'two');
    appendInfoToElement(data, 'three');
    appendInfoToElement(data, 'four');
    appendInfoToElement(data, 'five');
    appendInfoToElement(data, 'six');
      return false;
  })
})
