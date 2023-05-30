
const theHashi = require('./../bbdd')

const getAll = (req, res) => {
    res.status(200).json(theHashi)
}

module.exports = {
    getAll
}