var express = require('express');
var router = express.Router();

const jobService = require('../services/jobs');

router.get('/', async function(req, res, next) {
    const jobs = await jobService.get();
    res.send({success: true, jobs});
});

module.exports = router;
