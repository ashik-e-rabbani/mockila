const express = require('express')
const router = express.Router()
const {getAllStubs, getStubById, insertStub} = require('../controllers/stubsController')
const middlewares = require('../middlewares/authMiddleware');

router.get('/all',middlewares.authMiddleware, getAllStubs)
router.get('/stub/:id', middlewares.authMiddleware, getStubById)
router.post('/add',middlewares.authMiddleware, insertStub)

module.exports = router;