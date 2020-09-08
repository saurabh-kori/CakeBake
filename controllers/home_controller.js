module.exports.home = function(req,res){
    // return res.end('<h1>Express is working fine!</h>');
    return res.render('home',{
        title : "home"
    });
}