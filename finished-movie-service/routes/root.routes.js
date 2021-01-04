const router = require('express').Router();

// Hello world!
router.get(`/`, (req, res) => {
  res.send('Hello, world!');
});

// Hello name!
router.get(`/:name`, (req, res) => {
  res.send(`Hello, ${req.params.name}!`);
});

router.post(`/`, (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  res.json({ message: `Hello, ${firstName} ${lastName}!` });
});

module.exports = router;
