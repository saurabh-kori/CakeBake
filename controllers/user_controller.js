module.exports.profile = function(req,res){
    return res.end('<h1>User Profile');
}

module.exports.logout = function(req,res){
    return res.end('<h1>User logged out successfully</h1>')
}

module.exports.signup = function(req,res){
    return res.render('signup',{
        title : 'Sign up Page'
    });
}