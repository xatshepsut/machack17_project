import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let SettingsSchema = new Schema({
  "id": {type: Number, required: true },
  "settingsUpdateInterval": Number,
  "captureInterval": Number,
  "emotionGroupingInterval": Number,
  "sendToServerInterval": Number,
  "doNotDisturb": Boolean
});

let SettingsModel = mongoose.model('settings', SettingsSchema);

function save(data) {
  return SettingsModel.findOneAndUpdate({id: Number(data.id)}, data, {
    upsert: true
  });
}

function findAll() {
  return SettingsModel.find()
}

export default {
  save: save,
  findAll: findAll
};

