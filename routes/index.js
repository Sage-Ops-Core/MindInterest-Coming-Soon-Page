var express = require('express');
var router = express.Router();
var model = require('../models')

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.post('/', async function (req, res, next) {
    try {
        let email = req.body.email
        await model.WaitList.create({email: email})
        res.redirect('/?success=true');
    } catch (e) {
        res.send('Error: ' + e)
    }
});

module.exports = router;
