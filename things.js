var express = require('express');
var router = express.Router();

// Separate logic code from routes using modules and imports
router.get('/', function (req, res) {
    res.send('GET route on things.')
})

router.post('/', (req, res) => {
    res.send('POST route on things.')
})

module.exports = router;