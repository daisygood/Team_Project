var grabYelpData = function(buttonClicked) {
  function cb(data) {
    console.log("cb: " + JSON.stringify(data));
  }
  var auth = {
    consumerKey: "Es9ht3VFfnFYk10QR2pzhg",
    consumerSecret: "bh2qaNhokenpiWUoAotx1KUXLJc",
    accessToken: "ySRsbEQ2mrSDz1kLqE6sUTwPD6tXlYQC",
    accessTokenSecret: "c54UCvjC_kllDzJzx0_u2rh68YE",
    serviceProvider: {
      signatureMethod: "HMAC-SHA1"
    }
  };

  var terms = 'food';
  var near = $('#zipCode').val() || 94605;

  var accessor = {
    consumerSecret: auth.consumerSecret,
    tokenSecret: auth.accessTokenSecret
  };

  var parameters = [];
  parameters.push(['terms', terms]);
  parameters.push(['location', near]);
  parameters.push(['callback', 'cb']);
  parameters.push(['oauth_consumer_key', auth.consumerKey]);
  parameters.push(['oauth_consumer_secret', auth.consumerSecret]);
  parameters.push(['oauth_token', auth.accessToken]);
  parameters.push(['oauth_signature_method', 'HMAC-SHA1']);

  var message = {
    'action': 'https://api.yelp.com/v2/search',
    'method': 'GET',
    'parameters': parameters
  };

  OAuth.setTimestampAndNonce(message);
  OAuth.SignatureMethod.sign(message, accessor);

  var parameterMap = OAuth.getParameterMap(message.parameters);
  // TODO we are gonna want to use grabYelpDataV2 instead of this,
  // this is low priority though it works for now

  $.ajax({
      'url': message.action,
      'data': parameterMap,
      'dataType': 'jsonp',
      'jsonpCallback': 'cb',
      'cache': true
    })
    .success(function(content) {
      var data = content;
      if(buttonClicked === 'reviewed'){
        appendMostReivewedToElement(data)
      }else{
        appendInfoToElement(data)
      }
    })
    // //.done(function(data, textStatus, jqXHR) {
    //     console.log('success[' + data + '], status[' + textStatus + '], jqXHR[' + JSON.stringify(jqXHR) + ']');
    // //})
    .fail(function(jqXHR, textStatus, errorThrown) {
      console.log('error[' + errorThrown + '], status[' + textStatus + '], jqXHR[' + JSON.stringify(jqXHR) + ']');
      error();
    }
    )
}

//Error function. When an invalid zipcode is entered, add an error message and show restaurants near '94605'
var error = function() {
  $('.alert').remove();
  $('.content .row:first').prepend('<div class="alert alert-warning" role="alert">' + "We could not find this area. Please check your spelling or enter a valid ZIP code." + '</div>')
  grabYelpData();
}

$(document).on('click', '#randomize', function(e) {
  $('.alert').remove();
  $('.thumbnail').empty();
  grabYelpData();
  $('#zipCode').val('');
  e.preventDefault();
});

$(document).on('click', '#mostReviewed', function(e) {
  $('.thumbnail').empty();
  grabYelpData('reviewed');
  $('#zipCode').val('');
  e.preventDefault();
});

grabYelpData();
