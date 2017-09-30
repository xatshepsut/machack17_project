var NodeWebcam = require("node-webcam");
var request = require("request");
var fs = require('fs');
var config = require('./config.js');

function updateSettings(onSuccess, onFailure){
  request (
    {
      url:config.server.baseUrl + config.server.settingsApi,  //"http://172.24.20.163:8000/settings", //https://07729b15.ngrok.io/settings",
      method: "GET",
      json: true
    }, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        if (!body) {
          onFailure();
          return;
        }

        config.sessionSettings = body;
        onSuccess();
      } else {
        onFailure(error);
      }
    }
  );
}

function recognizeEmotionsFromFile(filePath, onSuccess, onFailure) {
  var payload = binaryRead(filePath);

  request(
    {
      url: config.emotionsApi.endpoint,
      method: "POST",
      headers: {
          'Content-Type': 'application/octet-stream',
          'Ocp-Apim-Subscription-Key': config.emotionsApi.apiKey,
      },
      body: payload

    }, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        // Proceed only if there were faces & emotions. Otherwise body is an empty array.
        var parsedBody = JSON.parse(body);
        if (!parsedBody.length) {
          console.log("No face/emotion found. Probably nobody is watching on camera.");
          return;
        }
        var emotion = parsedBody[0];

        // Set timestamp
        emotion.timestamp = new Date();

        // Send to server
        var emotionData = {"emotions":JSON.stringify(emotion)};
        console.log(emotionData);
        onSuccess(emotionData); // sendEmotionToServer(emotionData);
      } else {
        console.log("Error:" + JSON.stringify(error) + "\nBody: " + JSON.stringify(body));
        onFailure();
      }
    }
  );
}

function sendEmotionToServer (emotionData) {
    request(
      {
        url:config.server.baseUrl + config.server.emotionsApi,
        method: "POST",
        json: true,
        body: emotionData
      },
      function (error, response, body) {
        if (!error && response.statusCode == 200) {
          console.log("success");
        } else {
          console.log("failure");
      }
    }
  );
}

function binaryRead(file) {
    var bitmap = fs.readFileSync(file);
    return new Buffer(bitmap.toString('binary'),'binary');
}

function mainLoop() {
  var timestamp = new Date();
  var imagePath = config.paths.imageOutputFolder + timestamp.getTime() + config.paths.imageExtension;

  NodeWebcam.capture(imagePath, {}, function (err, data) {
    if (err) {
      console.error("Error: Couldn't capture from camera. Probably camera failure!");
      return;
    }

    console.log("Image created!");
    recognizeEmotionsFromFile(
      imagePath,
      // Success handler
      function(emotionData){
        sendEmotionToServer(emotionData);
      },
      // Failure handler
      function(){
        console.error("Error: Couldn't recognize emotions.");
      }
    )
  });
}

updateSettings(
  // Success handler
  function (){
    console.log("New session settings received:\n" + JSON.stringify(config.sessionSettings));
    setInterval(mainLoop, config.sessionSettings.captureInterval);
  },
  // Failure handler
  function (){
    console.log("Error: Failed to update settings");
  }
);