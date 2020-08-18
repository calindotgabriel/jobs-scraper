var express = require('express');
var router = express.Router();

const jobService = require('../services/jobs');

router.get('/', function(req, res, next) {
    const jobs = jobService.get();
    res.send({success: true, jobs});
});

module.exports = router;
