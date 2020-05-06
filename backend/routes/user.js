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

        const user = await User.findOne({username: req.body.username})

        if(!user){
            newUser.save()
                .then((result) => {
                    const tokenData = { id: result._id}
                    const userN = result.username;
                    let generatedToken = jwt.sign(tokenData, 'somepass', {expiresIn: '30m'})
                    res.json({ token: generatedToken, username: userN })
                }
                )    
                .catch(err => res.status(400).json('Erro no cadastro, tente novamente'))
            
        } else {
            res.status(400).json("Usuário ja existe!!")
        }
});

router.route('/login').post(async (req, res) => {
    
    const user = await User.findOne({username: req.body.username})
    
    if(!user) {
        return res.status(400).send('User not found')
    }
    try{
        if(await bcrypt.compare(req.body.password, user.password)){
            const userN = user.username;
            const tokenData = { id: user._id}
            let generatedToken = jwt.sign(tokenData, 'somepass', {expiresIn: '30m'})
            res.json({ token: generatedToken, username: userN })
            
            
        } else {
            res.status(400).send("You shall not pass")
        }
    } catch {
        res.status(500).send()
    }

    
})

router.route('/auth').post(async (req, res) => {
    const newToken = req.body.token

    console.log('pelo menos veio parar aki')
    jwt.verify(newToken, 'somepass', (err) => {
        if (err) {
            res.send("Forbidden")
        } else res.send("Allowed")
    })
   
})


module.exports = router;