const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

// var db = mongoose.createConnection('localhost', 'test');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (v) => validator.isEmail(v),
            message: 'Wrong email format',
        },
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        select: false,
    },
    avatar: {
        type: String,
        default: 'https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg',
        validate: {
            validator: (v) => validator.isURL(v, [{ allow_underscores: true }]),
            message: 'Wrong image format',
        },
    }
});

userSchema.statics.findUserByCredentials = function (email, password) {
    return this.findOne({ email }).select('+password')
        .then((user) => {
            if (!user) {
                throw new Error("Incorrect Email or Password")
            }
            return bcrypt.compare(password, user.password)
                .then((matched) => {
                    if (!matched) {
                        throw new Error("Incorrect Email or Password")
                    }
                    return user;
                })
        })
};

// module.exports = db.model('User', userSchema)