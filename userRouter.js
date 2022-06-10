const router = require('express').Router();
const User = require('./userSchema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

/*router.get('/register',(req,res)=>
{
    res.send("i am prisa varsini");
});

*/
router.post('/register', (req, res) => {
    try {
        User.findOne({ email: req.body.email }).then(
            (emailExist) => {
                console.log({ emailExist })
                if (emailExist) {

                    return res.json("email already exist");
                }
                bcrypt.hash(req.body.password, 10).then((hash) => {
                    console.log(hash);

                    console.log(JSON.stringify(req.body))
                    const user = new User({
                        name: req.body.name,
                        email: req.body.email,
                        password: hash
                    });
                    user.save().then((data) => {
                        res.json(data);
                    });

                });

            }
        );

    } catch (error) {
        res.status(404).json(error)
    }

});
router.post('/login',async (req, res) => {
    try {
        console.log(req.body.email)
        var userData = await User.findOne({ email:req.body.email});
        console.log({userData})
        if (!userData) {
            return res.json("email not exist")
        }
        var validpassword =await bcrypt.compare(req.body.password,userData.password);
        if (!validpassword) {
            return res.status(404).json("password not valid")
        }
        var userToken = jwt.sign({ email: userData.email }, 'superman');

        res.header('auth', userToken).json(userToken)

    } catch (error) {
        res.status(404).json(error)
    }
});

module.exports = router;