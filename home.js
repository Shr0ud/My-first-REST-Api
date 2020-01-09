const express = require('express');

const router = express.Router();

const models = require('./models/models');

//routings for the posts page

// gets back all the posts ("models" type data)
router.get('/', async (req, res) => {
    try{
        const allModels = await models.find(); //find() just gets all posts
        res.json(allModels);
    } catch (someError){
        res.json({message : someError});
    }
});

// gets back a specific post
router.get('/:postId', async (req, res) =>{
    try{
        const modelToGet = await models.findById(req.params.postId);
        res.json(modelToGet);
    }catch(someError){
        res.json({message : someError});
    }
    
});

// submits a post ("models" type data)
router.post('/', (req, res) => {
    //need to create new post
    const post = new models({
        title: req.body.title,
        description: req.body.description
    });

    post.save() //returns a promise
    .then(data => {
        res.json(data); //respond to screen in a json
    })
    .catch(someError => {
        console.log('An error has occured.');
        res.json({message: someError});
    });


});

// Updates a specific post
router.patch('/:postId', async (req, res) =>{
    try{
        //Needs to be _id (that's how it was stored)
        const updatedPost = await models.updateOne(
            {_id: req.params.postId},
            { $set: {title:req.body.title}},
            { $set: {description:req.body.description}}
        );

        res.json(updatedPost);
    }catch(someError){
        res.json({message : someError});
    }
    
});

// Deletes a specific post
router.delete('/:postId', async (req, res) =>{
    try{
        //Needs to be _id (that's how it was stored)
        const removedPost = await models.remove({_id: req.params.postId});
        res.json(removedPost);
    }catch(someError){
        res.json({message : someError});
    }
    
});


module.exports = router;