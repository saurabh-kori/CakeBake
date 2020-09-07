module.exports.profile = function(req,res){
    return res.end('<h1>User Profile');
}

module.exports.logout = function(req,res){
    return res.end('<h1>User logged out successfully</h1>')
}