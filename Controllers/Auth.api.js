exports.Auth = (req, res, next) => {
    if( req.headers.authorization == 'qwerty6284' ){
        next();
    }else{
        return res.status(401).json({ error: 'Unauthorized' });
    }
}