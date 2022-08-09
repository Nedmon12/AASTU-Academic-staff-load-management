const User = require('../model/User')
const {sendToken} = require ('../util')
exports.registerUser = async (req, res, next) => {
const { email, first_name, middle_name, last_name, password,} = req.body
//writing new user to database
try {
    const newUser = await User.create({
        email,
        first_name,
        middle_name,
        last_name,
        password
    })
    
    //sendToken()
    sendToken(newUser,200,res)
}
catch (err) {
    //change to errorresponse format later
    console.log(err)
    res.status(500).json({err})
}

}

exports.login = async (req,res, next) => {
    const {email, password} = req.body
    if(!email||!password) {
        return next(new ErrorHandler('Please enter email or password'),400)
    }
    //findOne??
    const newUser = await User.findOne({email})

    if(!player) {
        return next(new ErrorHandler('Invalid usernam or password'),401)
    }
    const passwordMatch = await User.comparePassword(password)
    if (!passwordMatch) {
        return next(new ErrorHandler("Mismatching email and password"),401)
    }
    sendToken(newUser,200,res)
}

exports.logout = async (req, res, next) => {
    res.cookie('token',null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success:true,
        message: 'Logged out'
    })
}