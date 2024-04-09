const db = require('../db')
const { User, Game, Pick } = require('../models')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const cody = await User.find({username: 'coderdecoder'})
const tim = await User.find({username: 'timmyDunkin'})
const gregg = await User.find({username: 'PoppaGregg'})
const vic = await User.find({username: 'victorFromFrance'})
const manu = await User.find({username: 'manuBatman'})

const main = async () => {
    const buckets = [
        {
            owner: cody._id,
            members: [
                tim._id,
                gregg._id,
                vic._id,
                manu._id
            ],
            games: [],
            picks: []
        }
    ]

    await Bucket.insertMany(buckets)
    console.log("Created some buckets!")
}
const run = async () => {
    await main()
    db.close()
}

run()