const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const isEmail = require('validator/lib/isEmail');
const User = require('../models/user');

const { NODE_ENV, JWT_SECERET } = process.env;

module.exports.getCurrentUser = (req, res) => {
    User.findById(req.user._id)
        .then((user) => {
            if (!user) {
                throw new Error("User not found")
            }
            res.send({
                name: user.name,
                avatar: user.avatar,
                email: user.email
            })
        })
        .catch((err) => {
            console.log(err)
        }
        )
}

module.exports.createUser = (req, res) => {
    const { email, name, password } = req.body;
    if (!isEmail(email)) {
        throw new Error("Not an email | invalid data passed to the methods for creating a user")
    }
    bcrypt.hash(password, 10)
        .then((hash) => {
            User.create({ email, password: hash, name, })
        })
        .then((user) => {
            console.log(user)
            if (!user) {
                console.log(user)
                throw new Error("invalid data passed to the methods for creating a user")
            } res.status(201).send({
                _id: user._id,
                email: user.email,
                name: user.name,
                avatar: user.avatar,
            })
                .catch((err) => {
                    console.log(err)
                })
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports.login = (req, res) => {
    const { email, password } = req.body;
    if (!isEmail(email)) {
        throw new Error('Incorrect Email or Password')
    }
    return User.findUserByCredentials(email, password)
        .then((user) => {
            if (!user) {
                throw new Error("Incorrect Email or Password");
            }
            const token = jwt.sign({ _id: user._id }, NODE_ENV === 'production' ? JWT_SECRET : 'super-strong-secret', { expiresIn: '7d' });
            res.cookie('jwt', token, {
                maxAge: 36000000 * 24 * 7,
                httpOnly: true,
            });
            res.send({ token });
        })
        .catch((err) => {
            console.log(err)
        })

}
module.exports.updateUserAvatar = (req, res) => {
    const { avatar } = req.body;
    User.findByIdAndUpdate(req.user._id, { 'avatar': avatar }, { new: true, runValidators: true })
        .then(user => {
            if (!user) {
                throw new Error("User not Found")
            }
            res.send({ data: user })
        })
        .catch(err => {
            console.log(err)
        })
}
