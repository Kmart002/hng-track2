const express = require('express')
const router = express.Router()
const Person = require('../models/person')


// Create Person
router.post('/', async (req, res)=> {
    const person = new Person({
        name: req.body.name
    })
    try {
        const newPerson  = await person.save()
        res.status(201).json(newPerson)
    } catch (err) {
        res.status(400)
    }
});


//Read
router.get('/:id', getPerson, (req, res)=>{
    res.send(res.person.name)
});

//Update
router.put('/:id',getPerson,async (req, res)=>{
    if (req.body.name != null) {
        res.person.name = req.body.name
    }
    try {
        const updatedPerson = await res.person.save()
        res.json(updatedPerson)
    } catch (err) {
        res.status(400).json({ message: err.message})
    }
});

//Delete
router.delete('/:id',getPerson, async (req, res)=>{
    try {
        await res.person.remove()
        res.json({ message: 'Deleted successfully'})
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
});

async function getPerson(req, res, next) {
    let person
    try {
        person = await Person.findById(req.params.id)
        if (person == null) {
            return res.status(404).json({ message: 'Person not found'})
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.person = person
    next()
}

module.exports = router