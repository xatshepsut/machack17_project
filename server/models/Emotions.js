import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let EmotionsSchema = new Schema({
  "faceRectangle": {type: Object},
  "scores": {type: Object},
  "timeStamp": {type: Date, required: true}
});

let EmotionsModel = mongoose.model('emotions', EmotionsSchema);

function save(data) {
  return new EmotionsModel(JSON.parse(data)).save();
}

function findAll() {
  return EmotionsModel.find()
}

export default {
  save: save,
  findAll: findAll
};

