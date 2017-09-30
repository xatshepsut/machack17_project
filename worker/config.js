var configs = {
  development: {
    // Server settings
    server : {
      baseUrl : "http://172.24.20.163:8000/", // Put slash in the end
      settingsApi: "settings",
      emotionsApi: "emotions"
    },

    // Microsoft Emotions API
    emotionsApi : {
      endpoint: "https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize",
      apiKey: "42cb06b6e81a4d689c3739c1e0bbc026"
    },

    paths: {
      imageOutputFolder: "data/images/", // Put slash in the end
      imageExtension: ".png" // Put "." in the beginning, like ".jpg"
    },

    // Application runtime settings (initial). Will change over time on runtime, but no need to be saved back to file.
    sessionSettings: {
      settingsUpdateInterval:30000,
      captureInterval:5000,
      emotionGroupingInterval:5000,
      sendToServerInterval:5000,
      doNotDisturb:false
    }
  }
};

// Autodetect dev/production environment (based on NODE_ENV environment variable), and return appropriate configuration
// NOTE: Then use e.g. "NODE_ENV=production node server.js" to start production server
module.exports = configs[process.env.NODE_ENV || "development"]; // By default "development" configs will be used