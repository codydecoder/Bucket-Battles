const Season = require('../models/season')

const getAllSeasons = async (req, res) => {
    try {
        const seasons = await Season.find()
        res.json(seasons)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


const getSeasonById = async (req, res) => {
    try {
        const {id} = req.params
        const season = await Season.findById(id)
        if(season) {
            return res.json(season)
        }
        return res.status(404).send('Season with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createSeason = async (req, res) => {
    try {
        const season = await new Season(req.body)
        await season.save()
        return res.status(201).json({
            season,
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const updateSeason = async (req, res) => {
    try {
        let {id} = req.params
        let season = await Season.findByIdAndUpdate(id, req.body, {new: true})
        if (season) {
            return res.status(200).json(season)
        }
        throw new Error("Season not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteSeason = async (req, res) => {
    try {
        const {id} = req.params
        const deleted = await Season.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Season Deleted")
        }
        throw new Error("Season not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllSeasons,
    getSeasonById,
    createSeason,
    updateSeason,
    deleteSeason
}
