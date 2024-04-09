const db = require('../db')
const Game = require('../models/game')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const games = [
        
    ]

    await Game.insertMany(games)
    console.log("Created some games!")
}
const run = async () => {
    await main()
    db.close()
}

run()