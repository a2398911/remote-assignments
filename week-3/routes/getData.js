const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  const { number } = req.query;
  if(!number) res.send('missing Parameters');
  
  if( (/^\+?[1-9][0-9]*$/).test(number) ) {
    const result = ( +number + 1 ) * number / 2;
    res.send(`${result}`);
  } else {
    res.send('Error Parameter');
  }
});

module.exports = router;