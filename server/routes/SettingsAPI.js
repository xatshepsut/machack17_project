import SettingsModel from '../models/Settings';

class SettingsAPI {
  constructor() {}

  get(req, res) {
    SettingsModel.findAll().then(data=> {
      res.json(data[0])
    }).catch(err=> {
      res.send({})
    });
  }

  update(req, res) {
    SettingsModel.save(JSON.parse(req.body.settings)).then((data)=> {
      res.json(data);
    }).catch(err=> {
      console.log('err', err);
    });
  }
}

export default  SettingsAPI;
