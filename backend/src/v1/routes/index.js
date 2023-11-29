const express = require('express')
const mailRoutes = require('./mailRoutes')
const AuthRoutes = require('./authRoutes')
const UserRoutes = require('./userRoutes')
const CiudadRoutes = require('./ciuidadRoutes')
const DepartamentoRoutes= require('./departamentoRoutes')


function routerApi(app) {
    const router = express.Router()

    app.use('/api/v1/', router)

    router.use('/mail', mailRoutes)
    router.use('/users', UserRoutes)
    router.use('/auth', AuthRoutes)
    router.use('/departamentos',DepartamentoRoutes )
    router.use('/ciudades',CiudadRoutes )

}

module.exports = routerApi