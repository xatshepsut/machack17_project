import EmotionsModel from '../models/Emotions';

class EmotionsAPI {
  constructor() {
  }

  get(req, res) {
    EmotionsModel.findAll()
      .then(data=> {
        res.json(data)
      }).catch(err=> {
      res.send({})
    });
  }

  create(req, res) {
    EmotionsModel.save(req.body.emotions).then((res)=> {

    }).catch(err=> {
    });
    res.json(req.body.emotions);
  }
}

export default  EmotionsAPI;
