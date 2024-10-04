const {v4 : uuidv4} = require("uuid")
class PersonRepository {

    constructor(db) {
        this.db = db
    }

    async Register(name, age, hobbies) {
        try {
            const personID = uuidv4()
            this.db.push({
                name : name,
                age : age,
                id : personID,
                hobbies : hobbies
            })
        } catch(error) {
            throw new Error(error.message)
        }
    }

    async GetAllPersons() {
        try {
            let allPersons = [];
            this.db.map((person) => {
                allPersons.push({
                    name : person.name,
                    age : person.age,
                    hobbies : person.hobbies
                })
            })

            return allPersons
        } catch(err) { 
            throw new Error(err.message)
        }
    }

    async GetPersonByID(person_id) {
        try {

        } catch(error) {
            throw new Error(error.message)
        }
    }
}

module.exports = PersonRepository