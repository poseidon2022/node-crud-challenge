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
            const person = this.db.find((person) => person.id === person_id);
            if (!person) {
                throw new Error("person with the specified id not found");
            }
    
            return {
                name: person.name,
                age: person.age,
                hobbies: person.hobbies
            };
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async DeletePerson(person_id) {
        try {

            const deletedPerson = this.db.find((person) => person.id === person_id);
            if (!deletedPerson) {
                throw new Error("person with the specified id not found");
            }
            this.db = this.db.filter((person) => {
                person.id !== person_id
            })
        
            return deletedPerson
        } catch(error) {
            throw new Error(error.message)
        }
    }
    
}

module.exports = PersonRepository