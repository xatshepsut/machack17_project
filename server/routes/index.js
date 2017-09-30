import express from 'express';
import EmotionsAPI from './EmotionsAPI';
import SettingsAPI from './SettingsAPI';

const router = express.Router();
let emotionsApi = new EmotionsAPI();
let settingsApi = new SettingsAPI();

/* GET index page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Express'
  });
});


//////////// emotions api /////////////

router.get('/emotions', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  return emotionsApi.get(req, res);
});

router.get('/emotions/latest', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  return emotionsApi.getOne(req, res);
});

router.post('/emotions', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  return emotionsApi.create(req, res);
});

//////////// emotions api  end /////////////



//////////// settings api /////////////
router.get('/settings', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  return settingsApi.get(req, res);
});

router.put('/settings', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000/");
  res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  return settingsApi.update(req, res);
});

router.options('/settings', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.send(200);
});

//////////// settings api end /////////////

export default router;
