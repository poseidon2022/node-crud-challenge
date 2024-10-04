class PersonUseCase {
    constructor(personRepository) {
        this.personRepository = personRepository
    }

    async Register(name, age, hobbies) {
        try {
            const registeredPerson = await this.personRepository.Register(name, age, hobbies)
            return registeredPerson
        } catch(error) {
            throw new Error(error.message)
        }
    }

    async UpdatePerson(personID, name, age, hobbies) {
        try {
            const updatedPerson = await this.personRepository.UpdatePerson(personID, name, age, hobbies)
            return updatedPerson
        } catch(error) {
            throw new Error(error.message)
        }
    }

    async DeletePerson(personID) {
        try {
            const deletedPerson = await this.personRepository.DeletePerson(personID)
            return deletedPerson
        } catch(error) {
            throw new Error(error.message)
        }
    }

    async GetPersonByID(personID) {
        try {
            const foundPerson = await this.personRepository.GetPersonByID(personID)
            return foundPerson
        } catch(error) {
            throw new Error(error.message)
        }
    }

    async GetAllPersons() {
        try {
            const allPersons = await this.personRepository.GetAllPersons()
            return allPersons
        } catch(error) {
            throw new Error(error.message)
        }
    }
}

module.exports = PersonUseCase