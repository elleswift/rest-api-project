const express = require('express') 
const cors = require('cors')  
const resInfo = require('./restaurants.json') 

const fs = require('fs')
const app = express() 

app.use(express.json()) 
app.use(cors())

app.listen(4004, () => {
    console.log('You there?')
})
const handleWriteFile = () => {
    const jsonResInfo = JSON.stringify(resInfo)
    fs.writeFile('restaurants.json', jsonResInfo, error => console.error(error))
}
app.get('/', (request, response) => {
    response.send(resInfo)
})