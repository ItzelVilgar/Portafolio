const VistaPrincipal =(req, res) =>{
    res.render('home')
}
const VistaTables =(req, res) =>{
    res.render('tables')
}
const VistaNotifications =(req, res) =>{
    res.render('notifications')
}
const VistaIcons =(req, res) =>{
    res.render('icons')
}
const VistaMap =(req, res) =>{
    res.render('map')
}
const VistaRtl =(req, res) =>{
    res.render('rtl')
}
const VistaTypography =(req, res) =>{
    res.render('typography')
}
const VistaUpgrade =(req, res) =>{
    res.render('upgrade')
}
const VistaUser =(req, res) =>{
    res.render('user')
}
module.exports = {
    VistaPrincipal,
    VistaNotifications,
    VistaTables,
    VistaIcons,
    VistaMap,
    VistaRtl,
    VistaTypography,
    VistaUpgrade,
    VistaUser,
}