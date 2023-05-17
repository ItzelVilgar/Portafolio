const express = require ('express')
const {VistaPrincipal, VistaNotifications, VistaTables, VistaIcons,
VistaMap,VistaRtl,VistaTypography,VistaUpgrade,VistaUser} =require ('../controllers/PageController')
const router = express.Router()

router.get('/', VistaPrincipal)
router.get('/tables', VistaTables)
router.get('/notifications', VistaNotifications)
router.get('/icons', VistaIcons)
router.get('/map', VistaMap)
router.get('/rtl', VistaRtl)
router.get('/typography', VistaTypography)
router.get('/upgrade', VistaUpgrade)
router.get('/user', VistaUser)
module.exports = {routes:router}