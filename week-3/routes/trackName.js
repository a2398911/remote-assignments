const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const { name } = req.query;

  if(!name) {
    res.render('trackName')
  } else {
    res.cookie('myname', name, {
      httpOnly: true
    });
    res.redirect('/myName');
  }
  
});

router.post('/', (req, res) => {
  const { userName } = req.body;
  res.cookie('myname', userName, {
    httpOnly: true
  });
  res.redirect('/myName');
});

module.exports = router;