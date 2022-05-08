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
router.get('/about_us', (req, res, next) => {

    const data = req.context

    res.render('about_us', data)
})
router.get('/subscribe', (req, res, next) => {

    const data = req.context

    res.render('subscribe', data)
})

module.exports = router