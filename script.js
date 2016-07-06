
// put the oauth code into a function that can be called
// #zipCode.val() will be saved when the page loads and we have entered something
// in the box
function loadPage(){
    function cb(data) {        
            console.log("cb: " + JSON.stringify(data));
    }
    var auth = {
        consumerKey : "Es9ht3VFfnFYk10QR2pzhg",
        consumerSecret : "bh2qaNhokenpiWUoAotx1KUXLJc",
        accessToken : "ySRsbEQ2mrSDz1kLqE6sUTwPD6tXlYQC",
        accessTokenSecret : "c54UCvjC_kllDzJzx0_u2rh68YE",
        serviceProvider : {
            signatureMethod : "HMAC-SHA1"
        }
    };

    var terms = 'food';
    var near = $('#zipCode').val() || 94605;

    var accessor = {
        consumerSecret : auth.consumerSecret,
        tokenSecret : auth.accessTokenSecret
    };

    var parameters = [];
    parameters.push(['terms',terms]);
    parameters.push(['location', near]);
    parameters.push(['callback', 'cb']);
    parameters.push(['oauth_consumer_key', auth.consumerKey]);
    parameters.push(['oauth_consumer_secret', auth.consumerSecret]);
    parameters.push(['oauth_token', auth.accessToken]);
    parameters.push(['oauth_signature_method', 'HMAC-SHA1']);

    var message = {
        'action' : 'https://api.yelp.com/v2/search',
        'method' : 'GET',
        'parameters' : parameters
    };

    OAuth.setTimestampAndNonce(message);
    OAuth.SignatureMethod.sign(message, accessor);

    var parameterMap = OAuth.getParameterMap(message.parameters);
    // TODO we are gonna want to use grabYelpDataV2 instead of this,
    // this is low priority though it works for now
    grabYelpData();

    // not working yet but it's supposed to randomize when you hit enter in the textbox
    function onEnterKeyRandomizer(content){
            $('#randomize').bind("enterKey", function(e){
               $('.thumbnail').empty();
                grabYelpDataV2(function(content){
                    var data = content
                    appendInfoToElement(data)
                })
            })
            $('#randomize').keyup(function(e){
                if(e.keyCode == 13){
                    $(this).trigger("enterKey");
                }
            })    
    }

    /*
    assign or randomize button to send a ajax call every time it is clicked
    */
    function onClickRandomize(){
        $('#randomize').click(function(){
            $('.thumbnail').empty();
            grabYelpDataV2(function(content){
                var data = content;
                appendInfoToElement(data);
            })
        })
    }

    // intial grab of data 
    //TODO: the intial load relies on this, refactor the code so we 
    // we only have to rely on grabYelpDataV2
    function grabYelpData(){
            $.ajax({
            'url' : message.action,
            'data' : parameterMap,
            'dataType' : 'jsonp',
            'jsonpCallback' : 'cb',
            'cache': true
        })
        .success(

            function(content){
                var data = content;
              appendInfoToElement(data);
              onEnterKeyRandomizer(data);
              onClickRandomize();
            }
        )
        .done(function(data, textStatus, jqXHR) {
                console.log('success[' + data + '], status[' + textStatus + '], jqXHR[' + JSON.stringify(jqXHR) + ']');
            }
        )
        .fail(function(jqXHR, textStatus, errorThrown) {
                            console.log('error[' + errorThrown + '], status[' + textStatus + '], jqXHR[' + JSON.stringify(jqXHR) + ']');
                }
        );


    }
    /*
    loads the page to grab the zip code value
    takes a callback that success invokes 

    */
    function grabYelpDataV2(successCB){
        loadPage();
            $.ajax({
            'url' : message.action,
            'data' : parameterMap,
            'dataType' : 'jsonp',
            'jsonpCallback' : 'cb',
            'cache': true
        })
        .success(
            function(content){
                successCB(content)
            }
            
        )
        .done(function(data, textStatus, jqXHR) {
                console.log('success[' + data + '], status[' + textStatus + '], jqXHR[' + JSON.stringify(jqXHR) + ']');
            }
        )
        .fail(function(jqXHR, textStatus, errorThrown) {
                            console.log('error[' + errorThrown + '], status[' + textStatus + '], jqXHR[' + JSON.stringify(jqXHR) + ']');
                }
        );


    }

}



// ini/tal start of the webpage
loadPage()