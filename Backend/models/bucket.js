const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const Bucket = new Schema(
    {
        owner: {type: Schema.Types.ObjectId, ref: 'user_id'},
        members: [{type: Schema.Types.ObjectId, ref: 'user_id'}],
        games: {type: Schema.Types.ObjectId, ref: 'game_id'},
        picks: [{type: Schema.Types.ObjectId, ref: 'pick_id'}]
    },
    {timestamps: true}
)

module.exports = mongoose.model('buckets', Bucket)
