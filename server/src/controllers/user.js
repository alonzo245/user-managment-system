const {hashPassword} = require('../utils/')
const User = require('../models/user')

// @desc Get users
// @route GET /api/v1/users
// @access Public
exports.getUsers = async (req, res) => {
    try {
        let users
        console.log("req.params.id",req.params.id);
        if(!req.params.id){
            users = await User.find()
        } else {
            users = await User.find({_id: req.params.id})
        }

        return res.status(200).json({
            success: true,
            data: users
        })

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false
        })
    }
}

// @desc Add all user 
// @route POST /api/v1/user
// @access Public
exports.addUser = async (req, res) => {
    try {
        let userData = { firstName, lastName, email, password, description } = req.body
        let hashedPassword = await hashPassword(password)
        const user = await User.create({...userData, password: hashedPassword})
        
        return res.status(201).json({
            success: true,
            data: user
        })

    } catch (err) {
        console.log(err);
        if (err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message)
            return res.status(400).json({
                success: false,
                error: messages
            })
        }
        return res.status(500).json({
            success: false,
            message: err.name
        })
    }
}

