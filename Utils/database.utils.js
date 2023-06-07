const mongoose = require('mongoose');

const dbPath = `mongodb://localhost:27017/nodePractices`

module.exports = ConnectDB = async () => {
    try {
        const con = await mongoose.connect(dbPath)
        .then(() => console.log('connection success'))
        .catch(err => console.error(`${err} error connecting`));
    } catch (error) {
        return Promise.reject(error);
    }
}