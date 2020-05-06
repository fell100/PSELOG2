const router = require('express').Router();
const bcrypt = require('bcrypt');
let User = require('../models/user.model');
const jwt = require('jsonwebtoken');

router.route('/add').post(async (req, res) => {
        const salt = await bcrypt.genSalt()
        const password = await bcrypt.hash(req.body.password, salt);
        const username = req.body.username;
        const email = req.body.email;

        const newUser = new User({
            username,
            password,
            email,
        })
        
        newUser.save()
            .then(() => res.json('User Added'))
            .catch(err => res.status(400).json('Error: ' + err))
}); 

router.route('/login').post(async (req, res) => {
    //const user = User.find(user => user.username === req.body.username)
    const user = await User.findOne({username: req.body.username})
    console.log(user);
    if(!user) {
        return res.status(400).send('User not found')
    }
    try{
        if(await bcrypt.compare(req.body.password, user.password)){

            let tokenData = { id: 101}
            let generatedToken = jwt.sign(tokenData, 'somepass', {expiresIn: '30m'})
            res.json({ token: generatedToken })
            

        } else {
            res.status(400).send("You shall not pass")
        }
    } catch {
        res.status(500).send()
    }

    
})


module.exports = router;