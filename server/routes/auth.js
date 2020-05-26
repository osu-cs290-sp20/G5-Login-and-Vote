const router = require('express').Router();
const User = require('../model/User');
const jwt = require('jsonwebtoken');

let crypto;
let hasC = false;

try {
  crypto = require('crypto');
  //hasC = true;
  console.log('crypto supported:', hasC);
} catch (err) {
  console.log(`crypto not supported: ${err}`);
}

///*
router.post('/register', async (req, res) => {

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

      res.send({ user: newUser.name });
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
      const sendUser = await User.findOne({
        name: newUser.name
      });
      res.status(200).send(sendUser.name);
    } catch (err) {
      res.status(400).send(err);
    }
  }
});
//*/

router.post('/login', async (req, res) => {

  console.log(req.body.password.length);
  // Validation w/o library
  let emailLen = req.body.email.length > 6;
  let passLen = req.body.password.length > 6;

  if (!emailLen) {
    return res.status(400).send('email must be greater then 6 characters');
  }
  if (!passLen) {
    return res.status(400).send('password must be greater then 6 characters');
  }

  const user = await User.findOne({
    email: req.body.email
  });

  if (!user) {
    return res.status(400).send('Invalid Credentials');
  }

  const validPass = await User.findOne({
    password: crypto
      .createHash('sha256')
      .update(req.body.password)
      .digest('hex')
  });

  // for testing  - remove in prod
  const validPassNonCrypto = await User.findOne({
    password: req.body.password
  });

  if (!validPass && !validPassNonCrypto) {
    console.log(req.body.password)
    return res.status(400).send('Invalid Credentials');
  }
  // end validation

  // create jwt
  // https://www.npmjs.com/package/jsonwebtoken
  const token = jwt.sign({
    _id: user._id
  },
    process.env.TOKEN_SECRET, {
    expiresIn: '1h'
  });
  res.header('auth-token', token);
  res.status(200).send(user.name);
  console.log(user)
});

module.exports = router;