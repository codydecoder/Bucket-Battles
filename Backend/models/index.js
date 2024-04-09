const mongoose = require('mongoose')
const UserSchema = require('./user')
const TeamSchema = require('./team')
const SeasonSchema = require('./season')
const GameSchema = require('./game')
const BucketSchema = require('./bucket')
const PickSchema = require('./pick')

const User = mongoose.model('User', UserSchema)
const Team = mongoose.model('Team', TeamSchema)
const Season = mongoose.model('Season', SeasonSchema)
const Game = mongoose.model('Game', GameSchema)
const Bucket = mongoose.model('Bucket', BucketSchema)
const Pick = mongoose.model('Pick', PickSchema)

module.exports = {
    User,
    Team,
    Season,
    Game,
    Bucket,
    Pick
}