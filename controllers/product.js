const Product = require('../models/product');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
  res.send('Greetings from the Test controller!');
  console.log('Test controller');
}