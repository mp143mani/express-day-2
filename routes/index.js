const express = require('express');
const router = express.Router();
const {getUser} = require('../controler/users/index');

router.get('/',getUser)
module.exports = router;
