const mongoose = require('mongoose');
const Mongodb = require('./schemas/locations');
const Reviewdb = require('./schemas/reviews');
const Imgdb = require('./schemas/images');
const { Router } = require('express');


const router = Router();
//Remember to go back and handle all error codes 

 router.get('/', async (req, res, next) => {
    try {
        const points = await Mongodb.find();
        res.json(points);
    }
    catch (error) {
        next(error)
    }
});

router.post('/', async (req, res) => {
    const mongodb = new Mongodb(req.body);
    const createdLoc = await mongodb.save();
    res.json(createdLoc);
});

router.get('/:id', async (req, res, next) => {
    try {
        const oneLoc = await Mongodb.find({"_id": req.params.id});
        res.json(oneLoc);
    }
    catch(error) {
        next(error)
    }
})

router.get('/loc/:id', async (req, res, next) => {
    try {
        const oneLoc = await Mongodb.find({"category": req.params.id});
        res.json(oneLoc);
    }
    catch(error) {
        next(error)
    }
})

router.get('/:id/reviews', async(req, res, next) => {
    try {
        locId = req.params.id;
        const reviews = await Reviewdb.find({parent_id: locId})
        res.json(reviews);
    }
    catch(error) {
        next(error)
    }
})

router.post('/reviews', async(req, res) => {
    const review = new Reviewdb(req.body);
    const createdRev = await review.save();
    res.json(createdRev)
});

router.get('/:id/images', async(req, res, next) => {
    try {
        locId = req.params.id;
        const images = await Imgdb.find({parent_id: locId})
        res.json(images);
    }
    catch(error) {
        next(error)
    }
})

router.post('/images', async(req, res) => {
    const image = new Imgdb(req.body);
    const createdImg = await image.save();
    res.json(createdImg)
});


module.exports = router;