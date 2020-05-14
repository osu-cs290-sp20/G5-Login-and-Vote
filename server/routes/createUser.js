// Private route that still needs some research.
// Goal: create admin access to disable users from 
//       creating their own accounts. 
const router = require('express').Router();
const verify = require('../verifyToken');
const User = require('../model/User');

let crypto;
let hasC = false;

router.post('/', verify, async (req, res) => {
  // validation 
  let nameLen = req.body.name.length > 5;
  let emailLen = req.body.email.length > 6;
  let passLen = req.body.password.length > 6;

  if (!nameLen) {
    return res.status(400).send('name must be greater then 5 characters');
  }
  if (!emailLen) {
    return res.status(400).send('email must be greater then 6 characters');
  }
  if (!passLen) {
    return res.status(400).send('password must be greater then 6 characters');
  }

  const emailExist = await User.findOne({
    email: req.body.email
  });

  if (emailExist) {
    return res.status(400).send('Email already exists');
  }
  // end validation

  if (hasC) {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: crypto
        .createHash('sha256')
        .update(req.body.password)
        .digest('hex')
    });
    console.log(user);
    try {
      const newUser = await user.save();

      res.send({ user: newUser._id });
    } catch (err) {
      res.status(400).send(err);
    }
  } else {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
    try {
      const newUser = await user.save();
      res.send({ user: newUser._id });
    } catch (err) {
      res.status(400).send(err);
    }
  }
});

module.exports = router;