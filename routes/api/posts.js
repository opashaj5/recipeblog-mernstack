const express = require('express')
const router = express.Router()
const Post = require('../../models/post')
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// Index
router.get("/", (req, res) => {
    Post.find({}, (err, foundPosts) => {
        if (!err) {
            res.status(200).json(foundPosts)
        } else {
            res.status(400).json(err)
        }
    })
})

// Create
router.post('/', (req, res) => {
    const { body } = req

    Post.create(body, (err, createdPost) => {
        if (!err) {
            res.status(200).json({ message: "All Good!", createdPost: createdPost })
        } else {
            res.status(400).json(err)
        }
    })
})

// Update
router.put('/:id', (req, res) => {
    const { body } = req

    Post.findByIdAndUpdate(req.params.id, body, { new: true }, (err, updatedPost) => {
        if (!err) {
            res.status(200).json(updatedPost)
        } else {
            res.status(400).json(err)
        }
    })

})

// Delete 
router.delete("/:id", (req, res) => {
    Post.findByIdAndDelete(req.params.id, (err) => {
        if (!err) {
            res.status(200).json({ message: "Deleted that post" })
        } else {
            res.status(400).json(err)
        }
    })
})

// Show
router.get('/:id', (req, res) => {
    Post.findById(req.params.id, (err, foundPost) => {
        if (!err) {
            res.status(200).json(foundPost)
        } else {
            res.status(400).json(err)
        }
    })
})

module.exports = router;