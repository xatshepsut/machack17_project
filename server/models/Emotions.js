import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let EmotionsSchema = new Schema({});

let EmotionsModel = mongoose.model('emotions', EmotionsSchema);

function save(data) {
  return EmotionsModel.save(data)
}

function findAll() {
  return EmotionsModel.find()
}

export default {
  save: save,
  findAll: findAll
};

