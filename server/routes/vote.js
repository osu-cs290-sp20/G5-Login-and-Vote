// route for voting.
// not yet functional 
const router = require('express').Router();
const verify = require('../verifyToken');
const User = require('../model/User');
// send the measures

router.post('/', verify, async (req, res) => {
  const user = await User.findById({ _id: req.user._id });
  console.log(req.user._id);
  res.send(`${user} is logged in to vote`);
});

module.exports = router;