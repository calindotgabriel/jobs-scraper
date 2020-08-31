var express = require('express');
var router = express.Router();
const slugify = require('slugify');

const jobService = require('../services/jobs');

router.get('/', async function(req, res, next) {
    const jobs = await jobService.get();
    res.send({success: true, jobs});
});

router.post('/', async function (req, res, next) {
    let town = req.body.town;
    town = slugify(town && town.toLowerCase());
    const jobs = await jobService.get({town});
    res.send({success: true, town, jobs});
});

module.exports = router;
