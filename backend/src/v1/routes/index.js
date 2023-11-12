const express = require('express')
const mailRoutes = require('./mailRoutes')
const AuthRoutes = require('./authRoutes')
const UserRoutes = require('./userRoutes')

function routerApi(app) {
    const router = express.Router()

    app.use('/api/v1/', router)

    router.use('/mail', mailRoutes)
    router.use('/users', UserRoutes)
    router.use('/auth', AuthRoutes)
}

module.exports = routerApi