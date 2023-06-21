const express = require('express');
const router = express.Router();

const newsControllder = require('../app/controllers/NewsController');

// newsControllder.index

router.get('/:slug', newsControllder.show);
router.get('/', newsControllder.index);

module.exports = router;
