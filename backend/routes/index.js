const express = require('express'),
  router = express.Router(),
  loginRoutes = require('./login.routes.js'),
  userRoutes = require('./users.routes.js'),
  productRoutes = require('./product.routes.js'),
  todoRoutes = require('./todo.routes.js')

router.use('/login', loginRoutes);
router.use('/user', userRoutes);
router.use('/product', productRoutes);
router.use('/todo', todoRoutes);

module.exports = router;