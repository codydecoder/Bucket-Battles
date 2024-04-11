const db = require('../db')
const Game = require('../models/game')
const Team = require('../models/team')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {

    const Celtics = await Team.find({name: 'Boston Celtics'})
    const Bucks = await Team.find({name: 'Milwaukee Bucks'})
    const Cavs = await Team.find({name: 'Cleveland Cavaliers'})
    const Magic = await Team.find({name: 'Orlando Magic'})
    const Knicks = await Team.find({name: 'New York Knicks'})
    const Heat = await Team.find({name: 'Miami Heat'})
    const Pacers = await Team.find({name: 'Indiana Pacers'})
    const Sixers = await Team.find({name: 'Philadelphia 76ers'})
    const Bulls = await Team.find({name: 'Chicago Bulls'})
    const Hawks = await Team.find({name: 'Atlanta Hawks'})
    const Nets = await Team.find({name: 'Brooklyn Nets'})
    const Raptors = await Team.find({name: 'Toronto Raptors'})
    const Hornets = await Team.find({name: 'Charlotte Hornets'})
    const Wizards = await Team.find({name: 'Washington Wizards'})
    const Pistons = await Team.find({name: 'Detroit Pistons'})
    const Timberwolves = await Team.find({name: 'Minnesota Timberwolves'})
    const Nuggets = await Team.find({name: 'Denver Nuggets'})
    const Thunder = await Team.find({name: 'Oklahoma City Thunder'})
    const Clippers = await Team.find({name: 'LA Clippers'})
    const Mavericks = await Team.find({name: 'Dallas Mavericks'})
    const Suns = await Team.find({name: 'Phoenix Suns'})
    const Pelicans = await Team.find({name: 'New Orleans Pelicans'})
    const Kings = await Team.find({name: 'Sacramento Kings'})
    const Lakers = await Team.find({name: 'Los Angeles Lakers'})
    const Warriors = await Team.find({name: 'Golden State Warriors'})
    const Rockets = await Team.find({name: 'Houston Rockets'})
    const Jazz = await Team.find({name: 'Utah Jazz'})
    const Grizzlies = await Team.find({name: 'Memphis Grizzlies'})
    const Blazers = await Team.find({name: 'Portland Trail Blazers'})
    const Spurs = await Team.find({name: 'San Antonio Spurs'})


    const games = [
        // 4/10/2024
        {
            homeTeam: Cavs._id,
            awayTeam: Grizzlies._id,
            winningTeam: Cavs._id
        },
        {
            homeTeam: Heat._id,
            awayTeam: Mavericks._id,
            winningTeam: Mavericks._id
        },
        {
            homeTeam: Thunder._id,
            awayTeam: Spurs._id,
            winningTeam: Thunder._id
        },
        // 4/11/2024
        {
            homeTeam: Pistons._id,
            awayTeam: Bulls._id,
            winningTeam: null
        },
        {
            homeTeam: Celtics._id,
            awayTeam: Knicks._id,
            winningTeam: null
        },
        {
            homeTeam: Jazz._id,
            awayTeam: Rockets._id,
            winningTeam: null
        },
        {
            homeTeam: Blazers._id,
            awayTeam: Warriors._id,
            winningTeam: null
        },
        {
            homeTeam: Kings._id,
            awayTeam: Pelicans._id,
            winningTeam: null
        },
        // 4/12/2024
        {
            homeTeam: Sixers._id,
            awayTeam: Magic._id,
            winningTeam: null
        },
        {
            homeTeam: Wizards._id,
            awayTeam: Bulls._id,
            winningTeam: null
        },
        {
            homeTeam: Spurs._id,
            awayTeam: Nuggets._id,
            winningTeam: null
        },
    ]

    await Game.insertMany(games)
    console.log("Created some games!")
}
const run = async () => {
    await main()
    db.close()
}

run()