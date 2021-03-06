'use strict';

var express = require('express');
var router = express.Router();

router.route('')
    .get(function (req, res) {
        res.render('test', { title: 'Test' });
    });

router.route('/:id')
    .get(function (req, res) {
        res.send(req.params.id);
    });

router.route('/sub')
    .get(function (req, res) {
        res.send('sub test');
    });

module.exports = router;
