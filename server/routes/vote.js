// route for voting.
// not yet functional 
const router = require('express').Router();
const verify = require('../verifyToken');
const User = require('../model/User');
// send the measures

router.post('/test', verify, async (req, res) => {
  //const user = await User.findById({ _id: req.user._id });
  console.log(`voting accesssed ${req.user._id}`);
  res.status(200).send(`${user} is logged in to vote`);
});

module.exports = router;