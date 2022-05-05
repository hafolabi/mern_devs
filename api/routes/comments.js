const router = require('express').Router();
const Comment = require('../models/Comment')

//CREATE NEW COMMENT

router.post('/', async (req, res)=>{
    const newComment = new Comment(req.body)
    try{
        const savedComment = await newComment.save()
        res.status(200).json(savedComment)
    }catch(err){
        res.status(500).json(err)
    }
})

//UPDATE COMMENT

router.put('/:id', async (req, res)=>{
   try{
    const comment = await Comment.findByIdAndUpdate(req.params.id, {$set:req.body}, {new:true})
    res.status(200).json(comment)
   }catch(err){
       res.status(500).json(err)
   }
   
})

//DELETE COMMENT

router.delete('/:id', async (req, res)=>{
    try{
        const comment = await Comment.findById(req.params.id)
        if(comment.username === req.body.username){
            await comment.delete()
            res.status(200).json("post has been deleted...")
        }else{
            res.status(401).json("you can only delete your post")
        }
       }catch(err){
            res.status(500).json(err)
       }
})

// GET ALL COMMENT PER POST

router.get('/:id', async (req, res)=>{
    try{
        const comments = await Comment.find({postId: req.params.id})
        res.status(200).json(comments)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router