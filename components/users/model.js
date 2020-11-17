const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const PROJECTION = ['name', 'email', 'profile_pic', 'createdAt', 'updatedAt']

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profile_pic: String
}, {
    timestamps: true
})

userSchema.plugin(uniqueValidator)

// In this step I save the user's model and create the name of the collection: User or user or users.
// This name will be converted to its lowercase plural version: users.
// I'll be using 'users' so in this case, the collection in MongoDB will have the same name: users.
const User = mongoose.model('users', userSchema)

module.exports = { User, PROJECTION }