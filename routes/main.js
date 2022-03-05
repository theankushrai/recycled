const express = require('express')
const router = express.Router()


router.get('/', (req, res, next) => {

    const data = req.context

    res.render('home', data)
})

router.get('/blog', (req, res, next) => {

    const data = req.context

    res.render('blog', data)
})
router.get('/model', (req, res, next) => {

    const data = req.context

    res.render('model', data)
})
module.exports = router