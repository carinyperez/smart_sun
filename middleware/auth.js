const jwt = require('jsonwebtoken');
const { NODE_ENV, JWT_SECRET } = process.env;

const extractBearerToken = (header) => {
    return header.replace('Bearer ', '');
};

module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    
    if (!authorization || !authorization.startsWith('Bearer ')) {
        throw new Error("Authorization Error")
    }
    const token = extractBearerToken(authorization);
    let payload;
    console.log(token)
    try {
        payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'super-strong-secret');
    }
    catch (err) {
        console.log(err)
        throw new Error("Authorization Error")
    }
    console.log(payload)
    req.user = payload
    next()
}

