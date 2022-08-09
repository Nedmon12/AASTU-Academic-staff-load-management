const { Sequelize, DataTypes } = require('sequelize')
const db = require('../config/database')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User = db.define('user', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    middle_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    authorization_level: {
        type: DataTypes.INTEGER,
        defaultValue: 2,
        allowNull: false
    },
    token: {
        type: DataTypes.STRING,
        defaultValue: "testingcreatefornow",
        allowNull: false
    },
    //can't add user first??? hmmmm
    staff_id: {
        type: DataTypes.INTEGER,
        defaultValue: 2,
        allowNull: false
    },
},
    {
        timestamps: false
    
})
User.beforeCreate(async (user, options) => {
    const salt = await bcrypt.genSalt(10) 
    user.password = await bcrypt.hash(user.password, salt)
   // user.token = user.getSignedToken()
})
// User.prototype.getSignedToken = function () {
//     const token = jwt.sign({email: this.email},process.env.ACCESS_TOKEN_SECRET, {
//         expiresIn: process.env.TOKEN_EXPIRE
//     })
//     //this.token = token
//     return token
// }
User.prototype.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword,this.password)
}
User.prototype.generateStaffId = function () {

}

module.exports = User

