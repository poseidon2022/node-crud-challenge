class PersonController {
    constructor(personUseCase) {
        this.personUseCase = personUseCase
    }

    async Register(req, res) {
        try {
            const {name, age, hobbies} = req.body
            if (typeof name !== 'string' || name.trim() === '' ||
                typeof age !== 'number' || age < 0 ||
                !Array.isArray(hobbies)) {
                    res.status(400).json({
                        success : false,
                        message : "invalid request format"
                    })

                    return
            }

            const registeredPerson = await this.personUseCase.Register(name, age, hobbies)
            res.status(200).json({
                success : true, 
                message : "person registered successfully",
                person : registeredPerson
            })
        } catch(err) {
            res.status(500).json({
                success : false, 
                message : "internal server error"
            })
        }
    }

    async UpdatePerson(req, res) {
        const personID = req.params("person_id")
        try {
            const {name, age, hobbies} = req.body
            if (name && (typeof name != 'string' ||
                name.trim() === '') || (age && typeof age != 'number'
                || age < 0) || (hobbies && !Array.isArray(hobbies))) {
                    res.status(400).json({
                        success : false,
                        message : "invalid request format"
                    })
            }

            const updatedPerson = await this.personUseCase.UpdatePerson(personID, name, age, hobbies)
            res.status(200).json({
                success : true,
                message : "person info updated successfully",
                updated_person : updatedPerson
            })
        } catch(err) {
            res.status(500).json({
                success : false,
                message : "internal server error"
            })
        }
    }

    async DeletePerson(req, res ){
        const personiD = req.params("person_id")
        try {
            const deletedPerson = await this.personUseCase.DeletePerson(personiD)
            res.status(200).json({
                success : false, 
                message : "person deleted successfully",
                deleted_person : deletedPerson
            })
        } catch(err) {
            if (err.message == "person with the specified id not found") {
                res.status(404).json({
                    success : false, 
                    message : "person with the specified id not found"
                })
                return
            }
            res.status(500).json({
                success : false,
                message : "internal server error"
            })
        } 
    }

    async GetPersonByID(req, res ){
        const personiD = req.params("person_id")
        try {
            const foundPerson = await this.personUseCase.GetPersonByID(personiD)
            res.status(200).json({
                success : false, 
                message : "person fetched successfully",
                deleted_person : foundPerson
            })
        } catch(err) {
            if (err.message == "person with the specified id not found") {
                res.status(404).json({
                    success : false, 
                    message : "person with the specified id not found"
                })
                return
            }
            res.status(500).json({
                success : false,
                message : "internal server error"
            })
        } 
    }

    async GetAllPersons(req, res) {
        try {
            const allPersons = await this.personUseCase.GetAllPersons()
            res.status(200).json({
                success : true,
                message : "persons fetched successfully",
                persons : allPersons
            })
        } catch(err) {
            res.status(500).json({
                success : false,
                message : "internal server error"
            })
        }
    }
}

module.exports = PersonController