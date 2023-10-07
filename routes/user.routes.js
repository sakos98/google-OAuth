const express = require('express');
const router = express.Router();

const isLogged = (req, res, next) => {
  if (!req.user) {
    res.render('noPermission');
  } else {
    next()
  }
}

router.get('/logged', isLogged, (req, res) => {
  res.render('logged', {
    name: req.user.displayName,
    avatar: req.user.photos[0].value,
  });
});

router.get('/no-permission', isLogged, (req, res) => {
  res.render('noPermission');
});

router.get('/profile', isLogged, (req, res) => {
  res.render('profileUser');
});

router.get('/profile/settings', isLogged, (req, res) => {
  res.render('profileSetting');
});

module.exports = router;