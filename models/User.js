const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    }
})
// haspassword before saving

userSchema.pre('save', function (next) {
    const user = this
    bcrypt.hash(user.password, 10, function (err, hash) {
        // Store hash in your password DB.
        user.password = hash
        next()
    });

})

module.exports = new mongoose.model('User', userSchema)