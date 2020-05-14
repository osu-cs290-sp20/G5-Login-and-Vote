// route for voting.
// not yet functional 
const router = require('express').Router();
const verify = require('../verifyToken');
const User = require('../model/User');

let crypto;
let hasC = false;

router.post('/', verify, async (req, res) => {
  res.send('voting')
});

module.exports = router;