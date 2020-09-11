const User = require('../models/user');

module.exports.profile = function(req,res){
    return res.end('<h1>User Profile');
}

module.exports.logout = function(req,res){
    return res.end('<h1>User logged out successfully</h1>')
}

module.exports.signup = function(req,res){
    return res.render('signup',{
        title : 'Cake Bake| Sign Up'
    });
}
module.exports.signIn = function(req,res){
    return res.render('sign_in',{
        title : 'Cake Bake| Sign In'
    });
}

//get the sign up data
module.exports.create = function(req,res){
    //to do later
    // console.log(req.body);
    if(req.body.confirm_password != req.body.password){
        return res.redirect('back');
    }
    User.findOne({email : req.body.email},function(err,user){
        if(err){
            console.log("error in finding user in signing up page");
            return;
        }
        if(!user){
            User.create(req.body,function(err,user){
                if(err){
                    console.log("error in creatig uer while signing up page");
                    return;
                }
                return res.redirect('/user/signin');
            });
        }else{
            return res.redirect('back');
        }
    });
}

//get the sign in data
module.exports.createSession = function(res,res){
    //to do later
}