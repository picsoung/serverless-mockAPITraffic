'use strict';
var request = require('request')

var endpointsArray = require('./endpoints.json')

module.exports.mockAPItraffic = (event, context, callback) => {

  var shouldCallAPI = Math.random() >= 0.5;

  var endpoint = endpointsArray[Math.floor(Math.random() * (endpointsArray.length))]
  var URL = process.env.API_URL + endpoint.path +"?user_key="+process.env.USER_KEY

  if(shouldCallAPI){ //dont call all the time
    console.log("endpoint called",URL);
    if(endpoint.method=="POST"){
      var options = {
        url: URL,
        method: "POST",
        json: true,
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(endpoint.payload)
      }
      request(options)
    }else{
      request.get(URL)
    }
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
