const jwt = require('jsonwebtoken')
const ErrorHandler = require('../utils/errorresponse')
const {user} = require('../model')

exports.authenticateUsers = async (req, res, next) => {
    const {token} = req.cookies
    try {
    if (!token) {
    
       return next(new ErrorHandler(" 1 You must be authenticated to access this resource"),401)
    }   
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        req.user = await user.findByPk(decoded.id)
        next()  
    }
    catch(error) {
        return next(new ErrorHandler("2 You must be authenticated to access this resource",401))
    }
    
}

console.log("")

