const express = require('express')
const cors = require('cors')
const app = express()


app.use(cors())
app.use(express.json())

let persons = [{
    id: '1',
    name: 'Sam',
    age: '26',
    hobbies: []    
}] //This is your in memory database

app.set('db', persons)
//TODO: Implement crud of person

if (require.main === module) {
    app.listen(3000)
}
module.exports = app;