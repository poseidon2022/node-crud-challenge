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

    async GetPersonByID(personID) {
        try {
            const person = this.db.find((person) => person.id === personID);
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

    async DeletePerson(personID) {
        try {

            const deletedPerson = this.db.find((person) => person.id === personID);
            if (!deletedPerson) {
                throw new Error("person with the specified id not found");
            }
            this.db = this.db.filter((person) => {
                person.id !== personID
            })
        
            return deletedPerson
        } catch(error) {
            throw new Error(error.message)
        }
    }
    
    async UpdatePerson(personID, name, age, hobbies) {
        try {
            const personIndex = this.db.findIndex((person) => person.id === personID);
            if (personIndex === -1) {
                throw new Error("person with the specified id not found");
            }

            const updatedPerson = {
                ...this.db[personIndex],
                name: name || this.db[personIndex].name,
                age: age || this.db[personIndex].age, 
                hobbies: hobbies || this.db[personIndex].hobbies 
            };
    
            this.db[personIndex] = updatedPerson;
    
            return updatedPerson;
        } catch (error) {
            throw new Error(error.message);
        }
    }
    
}

module.exports = PersonRepository