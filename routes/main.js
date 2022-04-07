const express = require('express')
const router = express.Router()


router.get('/', (req, res, next) => {

    const data = req.context

    res.render('home', data)
})

router.get('/thing', (req, res, next) => {

    const data = req.context

    res.render('thing', data)
})
router.get('/model', (req, res, next) => {

    const data = req.context

    res.render('model', data)
})

module.exports = router