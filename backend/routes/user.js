const router = require('express').Router();
const bcrypt = require('bcrypt');
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post(async (req, res) => {
        const salt = await bcrypt.genSalt()
        const password = await bcrypt.hash(req.body.password, salt);
        const username = req.body.username;

        const newUser = new User({
            username,
            password,
        })
        
        newUser.save()
            .then(() => res.json('User Added'))
            .catch(err => res.status(400).json('Error: ' + err))
}); 

router.route('/login').post(async (req, res) => {
    const user = User.find(User => User.username === req.body.username)
})


module.exports = router;