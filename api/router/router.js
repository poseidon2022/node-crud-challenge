const express = require('express')
const {persons} = require("../../index")
const PersonUseCase = require('../../usecase/usecase')
const PersonRepository = require('../../repository/repository')
const PersonController = require('../controller/controller')

const router = express.Router()
const personRepository = new PersonRepository(persons)
const personUseCase = new PersonUseCase(personRepository)
const personController = new PersonController(personUseCase)

router.post('/person', (req, res) => personController.Register(req, res))
router.get('/person', (req, res) => personController.GetAllPersons(req, res))
router.get('/person/:person_id', (req, res) => personController.GetPersonByID(req, res))
router.delete('/person/:person_id', (req, res) => personController.DeletePerson(req, res))

module.exports = router