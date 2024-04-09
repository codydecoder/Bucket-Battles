const Bucket = require('../models/bucket')

const getAllBuckets = async (req, res) => {
    try {
        const buckets = await Bucket.find()
        res.json(buckets)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


const getBucketById = async (req, res) => {
    try {
        const {id} = req.params
        const bucket = await Bucket.findById(id)
        if(bucket) {
            return res.json(bucket)
        }
        return res.status(404).send('Bucket with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createBucket = async (req, res) => {
    try {
        const bucket = await new Bucket(req.body)
        await bucket.save()
        return res.status(201).json({
            bucket,
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const updateBucket = async (req, res) => {
    try {
        let {id} = req.params
        let bucket = await Bucket.findByIdAndUpdate(id, req.body, {new: true})
        if (bucket) {
            return res.status(200).json(bucket)
        }
        throw new Error("Bucket not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteBucket = async (req, res) => {
    try {
        const {id} = req.params
        const deleted = await Bucket.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Bucket Deleted")
        }
        throw new Error("Bucket not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllBuckets,
    getBucketById,
    createBucket,
    updateBucket,
    deleteBucket
}
