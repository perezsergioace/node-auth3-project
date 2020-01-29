const router = require('express').Router();

const Users = require('./usersModel');
const restricted = require('../auth/restrictedMiddleware');

router.get('/', restricted, (req, res) => {
    Users.find(req.user.department)
        .then(users => {
            res.status(200).json({ User: req.user.username, users})
        })
        .catch(error => {
            res.send(error)
        })
})

module.exports = router;