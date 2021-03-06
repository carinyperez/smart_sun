const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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
    },
    password: {
        type: String,
        required: true,
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


module.exports = mongoose.model('User', userSchema)


