
function randomizer(dataWeRetrievedFromYelpJSON){     
    var randomInt = Math.floor(Math.random() * dataWeRetrievedFromYelpJSON["businesses"].length)
    //console.log(dataWeRetrievedFromYelpJSON["businesses"][randomInt])
    return dataWeRetrievedFromYelpJSON["businesses"][randomInt]
}

//var data = grabYelpData();
var ids = ['#one > .thumbnail', '#two > .thumbnail','#three > .thumbnail', 
'#four > .thumbnail', '#five > .thumbnail', '#six > .thumbnail'];

function appendInfoToElement(data){
    //this function randomly choose one set of data, and converts data to DOM
    function createElement(data){
        var content = randomizer(data); 
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
    ids.forEach(function(val){
        $(val).append(createElement(data))
    })
}
