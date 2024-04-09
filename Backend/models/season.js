const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const Season = new Schema(
    {
        year: {type: String, required: true},
        games: [{type: Schema.Types.ObjectId, ref: 'game_id'}]
    },
    {timestamps: true}
)

module.exports = mongoose.model('seasons', Season)
