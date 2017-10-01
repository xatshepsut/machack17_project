import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let EmotionsSchema = new Schema({
  "faceRectangle": {type: Object},
  "scores": {type: Object},
  "timestamp": {type: Date, required: true}
});

let EmotionsModel = mongoose.model('emotions', EmotionsSchema);

function save(data) {
  data = JSON.parse(data);
  for (let i in data.scores) {
    data.scores[i] *= 100;
  }
  console.log(data)
  return new EmotionsModel(data).save();
}

function findAll() {
  return EmotionsModel.find()
}

function findOne() {
  return EmotionsModel.findOne().sort({ timestamp: -1 })
}

export default {
  save: save,
  findAll: findAll,
  findOne: findOne
};

