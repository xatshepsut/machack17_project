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

router.post('/emotions', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  return emotionsApi.create(req, res);
});

//////////// emotions api  end /////////////



//////////// settings api /////////////
router.get('/settings', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  return settingsApi.get(req, res);
});

router.put('/settings', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  return settingsApi.update(req, res);
});

//////////// settings api end /////////////

export default router;
