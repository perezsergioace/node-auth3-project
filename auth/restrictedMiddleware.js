const jwt = require('jsonwebtoken');

const { jwtSecret } = require('../config/secrets');

module.exports = (req, res, next) => {
    const { authorization } = req.headers;

    if (authorization) {
        jwt.verify(authorization, jwtSecret, (error, token) => {
            if(error) {
                res.status(401).json({error: "invalid token"})
            } else {
                req.user = { username: token.username, department: token.department };

                next();
            }
        })
    } else {
        res.status(401).json({ error: "please login and try again"})
    }
}