const express = require('express'),
    passport = require('passport'),
    LocalStrategy = require('passport-local');
const router = express.Router();
var path = require('path');
const User = require('../models/users');


router.get('/', async(req, res) => {
    res.sendFile(path.join(__dirname, '../views','auth.html'));
})

// router.get('/login', async(req, res) => {
//     res.redirect('/');
// })
// router.get('/register', async(req, res) => {
//     res.redirect('/');
// })
router.get("/logout",(req,res)=>{
    req.logout();
    res.redirect("/");
});

router.post("/login",passport.authenticate("local",{
    successRedirect:"/index",
    failureRedirect:"/"
}),function (req, res){
});

router.post("/register",(req,res)=>{
    User.register(new User({username: req.body.username,phone:req.body.phone,email: req.body.email,guest_type: req.body.relation}),req.body.password,function(err,user){
        if(err){
            console.log(err);
            res.redirect("/");
        }
    passport.authenticate("local")(req,res,function(){
        res.redirect("/");
    })    
    })
})

// function isLoggedIn(req,res,next) {
//     if(req.isAuthenticated()){
//         return next();
//     }
//     res.redirect("/");
// }

module.exports = router