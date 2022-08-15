const User = require('../model/User')
const Staff = require('../models/Staff')
const Status = require('../models/Status')
const Rank = require('../models/Rank')
const Position = require('../models/Position')
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
    const newUser = await User.findOne({where: {email}})

    if(!player) {
        return next(new ErrorHandler('Invalid username or password'),401)
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
exports.getStaff = async (req,res, next) => {
    try {
        const staff = await Staff.findAll()
    }
    catch (err) {
        res.status(500).json({err})
    }
    
    res.status(500).json({staff})
}


exports.getStatus = async (req,res, next) => {
    try {
        const stat = await Status.findAll()
    }
    catch (err) {
        res.status(500).json({err})
    }
    
    res.status(500).json({stat})
}

exports.getRank = async (req,res, next) => {
    try {
        const rank = await Rank.findAll()
    }
    catch (err) {
        res.status(500).json({err})
    }
    
    res.status(500).json({rank})
}
exports.getPosition = async (req,res, next) => {
    try {
        const position = await Position.findAll()
    }
    catch (err) {
        res.status(500).json({err})
    }
    
    res.status(500).json({position})
}
//don't know what to do yet
// exports.deleteUser = async (req, res, next)=>{
//     try {
//         User.findOne
//     }
//     catch(error) {
//         res.status(500).json({error})
//     }
// }

exports.updatePosition = async (req,res,next) => {
    //this is enforcing all the previous data be sent to the backend when
    //the request is made
    const positionId = req.params.positionId
    const {title, positionLoad} = req.body
    try {
        const position = await Position.findOne({where : {id: positionId}})
        if (position) {
            await position.update({title:title, position_load:positionLoad})
        }
        else {
            return next(new ErrorHandler("Unable to find resource"),401)
        }
    }
    catch (error) {
        res.status(500).json({error})
    }
}
exports.updateRank = async (req,res,next) => {
    const rankId = req.params.rankId
    const {academic_type, payment_rate} = req.body
    try {
        const rank = await rank.findOne({where : {id: rankId}})
        if (rank) {
            await rank.update({academic_type:academic_type, payment_rate:payment_rate})
        }
        else {
            return next(new ErrorHandler("Unable to find resource"),401)
        }
    }
    catch (error) {
        res.status(500).json({error})
    }
}

exports.updateStaff = async (req,res, next) => {
    const staffId = req.params.staffId
    const {department, status_id, rank_id, position_id, 
        qualifications, username, start_date, end_date} = req.body
    try {
        const staff = await Staff.findOne({where: {id: staffId}})
        if (staff) {
            await staff.update({department:department, status_id:status_id,rank_id:rank_id,
            position_id:position_id,qualifications:qualifications, username:username,start_date:start_date,end_date:end_date})
        }
        else {
            return next(new ErrorHandler("Unable to find resource"),401)
        }
    }
    catch (err) {
        res.status(500).json({err})
    }
    
    res.status(500).json({staff})
}
exports.updateUser = async (req,res, next) => {
    const userId = req.params.userId
    const {email, first_name,middle_name,last_name, 
        password, authorization_level, token, staff_id} = req.body
    try {
        const user = User.findOne({where: {id: userId}})
        if (user) {
            await user.update({email:email,first_name:first_name,middle_name:middle_name,last_name:last_name,
                password:password,authorization_level:authorization_level,token:token, staff_id:staff_id})
        }
        else {
            return next(new ErrorHandler("Unable to find resource"),401)
        }
        
    }
    catch (err) {
        res.status(500).json({err})
    }
    
    res.status(500).json({staff})
}
// exports.get = async (req,res, next) => {
//     try {
        
//     }
//     catch (err) {
//         res.status(500).json({err})
//     }
    
//     res.status(500).json({staff})
// }