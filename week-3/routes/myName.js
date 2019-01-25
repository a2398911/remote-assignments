const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const { myname } = req.cookies;

  if(!myname) {
    res.redirect('/trackName');
  } else {
    res.render('myname', {
      myname
    });
  }
});

module.exports = router;