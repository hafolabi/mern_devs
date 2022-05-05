const router = require('express').Router();
const User = require('../models/User')
const bcrypt = require('bcrypt')
const Token = require('../models/Token');
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto')

// REGISTER

router.post("/register", async (req, res)=>{
    const user = await User.findOne({username:req.body.username})
    if(user?.username) {
        return res.status(400).json({msg: 'username already exist!'})
        }else if(user?.email){
            return res.status(400).send(error)
        }else {
    try{
        const salt = await bcrypt.genSalt(10)
        const hassedPass = await bcrypt.hash(req.body.password, salt)
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hassedPass,
        })
      
        const user = await newUser.save();
        // const {password, ...others} = user._doc

        const token = await new Token({
            userId: user._id,
            token: crypto.randomBytes(32).toString("hex"),
        }).save();
        const url = `${process.env.BASE_URL}users/${user._id}/verify/${token.token}`
        await sendEmail(user.email, "Verify Email", url)
        res.status(200).json({message: "An Email sent to your account please verify"})
    

    }catch(err){
        res.status(500).json(err)
    }
  }
})

// VERIFY USER EMAIL FROM EMAIL
router.put('/:id/verify/:token', async(req, res)=>{
    try{
        const user = await User.findOne({_id:req.params.id})
        if(!user)return res.status(400).json({message:'invalid link1'})

        const token = await Token.findOne({
            userId: user._id,
            token: req.params.token
        })
        if(!token)return res.status(400).json({message:'invalid link2'})

        await User.findOneAndUpdate({_id:user._id}, {verified:true})
        await token.remove();

        res.status(200).json({message:'Email Verified Successfully'})
    }catch(err){
        res.status(500).json(err)
    }
})

// LOGIN

router.post("/login", async (req, res)=>{
    try{
        const user = await User.findOne({email: req.body.email}).collation(
             { locale: "en", 
              strength: 2 })
        if(!user) return res.status(400).json("not found")

        const validatePass = await bcrypt.compare(req.body.password, user.password)
        if(!validatePass) return res.status(400).json("wrong credentials")

        if(user.verified){
            const{password, ...others} = user._doc
        res.status(200).json(others)
        } else {return res.status(400).json('user not verified')}
        
        
    }catch(err){
        res.status(500).json(err)
    }
})

// PASSWORD RESET TOKEN

router.post("/passreset", async (req, res)=>{
    const user = await User.findOne({email:req.body.email}).collation(
        { locale: "en", 
         strength: 2 })
    try{
        const token = await new Token({
            userId: user._id,
            token: crypto.randomBytes(32).toString("hex"),
        }).save();
        const url = `${process.env.BASE_URL}users/${user._id}/passreset/${token.token}`
        await sendEmail(user.email, "Reset Password", url)
        res.status(200).json({message: "An Email sent to your account please verify"})

    }catch(err){
        res.status(500).json(err)
    }
})

// VERIFY USER EMAIL FOR PASSWORD RESET
router.get('/:id/passreset/:token', async(req, res)=>{
    try{
        const user = await User.findOne({_id:req.params.id})
        if(!user)return res.status(400).json({message:'invalid link1'})

        const token = await Token.findOne({
            userId: user._id,
            token: req.params.token
        })
        if(!token)return res.status(400).json({message:'invalid link2'})

        await User.findOneAndUpdate({_id:user._id}, {verified:true})
        await token.remove();

        res.status(200).json({message:'Email Verified Successfully'})
    }catch(err){
        res.status(500).json(err)
    }
})


module.exports = router