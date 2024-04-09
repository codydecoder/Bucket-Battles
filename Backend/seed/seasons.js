const db = require('../db')
const Season = require('../models/season')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const seasons = [
        {
            year: '2023-2024',
            games: []
        }
    ]

    await Season.insertMany(seasons)
    console.log("Created some seasons!")
}
const run = async () => {
    await main()
    db.close()
}

run()