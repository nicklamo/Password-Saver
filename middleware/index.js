var middlewareObj = {};

//============
// MiddleWares
//============
//middlewares
middlewareObj.checkAuthenticated = (req,res,next) => {
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect('/login');
}
middlewareObj.checkNotAutheniticated = (req,res,next) => {
    if(!req.isAuthenticated()){
        return next();
    }
    return res.redirect('/passwords')
}
module.exports = middlewareObj;