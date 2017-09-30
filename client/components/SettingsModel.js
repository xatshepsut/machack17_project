function SettingsModel(settingsAPI) {
  this.settingsAPI = settingsAPI;
}

SettingsModel.prototype.get = function() {
  this.settingsAPI.get({}, (res) => {
    console.log(res);
  }, (err) => {
    console.log(err);
  });
};