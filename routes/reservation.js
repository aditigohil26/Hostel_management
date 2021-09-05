const express = require('express');
const router = express.Router();
var path = require('path');

router.get('/', async(req, res) => {
    res.sendFile(path.join(__dirname, '../views','reservations.html'));
})
// function isLoggedIn(req,res,next) {
//     if(req.isAuthenticated()){
//         return next();
//     }
//     res.redirect("/");
// }

module.exports = router