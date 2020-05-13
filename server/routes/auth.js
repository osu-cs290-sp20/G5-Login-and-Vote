const router = require('express').Router();
const User = require('../model/User');
let crypto;
let hasC = false;

try {
  crypto = require('crypto');
  hasC = true;
  console.log('crypto supported:', hasC);
} catch (err) {
  console.log(`crypto not supported: ${err}`);
}

router.post('/register', async (req, res) => {

  if (hasC) {
    const user = new User({
      name: crypto
        .createHash('sha256')
        .update(req.body.name)
        .digest('hex'),
      email: crypto
        .createHash('sha256')
        .update(req.body.email)
        .digest('hex'),
      password: crypto
        .createHash('sha256')
        .update(req.body.password)
        .digest('hex')
    });
    console.log(user);
    try {
      const newUser = await user.save();
      res.send(newUser);
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
      res.send(newUser);
    } catch (err) {
      res.status(400).send(err);
    }
  }
});

router.post('/login', (req, res) => {
  res.send('login');
});


module.exports = router;