const express = require('express')
const adminRouter = express.Router()
const {adminLogin, adminRegister, subadminRegister, updateProfileByAdmin} = require('../Controllers/adminController')
const subadminLogin = require('../Controllers/subadminController')
const adminController = require('../Controllers/adminController')
const verifyAdmin = require('../Middlewares/verifyAdmin')

adminRouter.post('/admin-register', adminRegister)
adminRouter.post('/subadmin-register', subadminRegister)
adminRouter.post('/admin-login', adminLogin)
adminRouter.post('/subadmin-login', subadminLogin)
adminRouter.put('/admin/update-user/:userId', verifyAdmin, updateProfileByAdmin);


module.exports = adminRouter