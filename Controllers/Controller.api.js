const { User } = require('../Models/model.api');

exports.getData = async (req, res) => {

    const userData = await User.find({});
    res.status(200).send({ data: userData });
}
exports.createUser = async (req, res) => {
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hour = date.getHours().toString().padStart(2, '0');
    const minute = date.getMinutes().toString().padStart(2, '0');
    const second = date.getSeconds().toString().padStart(2, '0');
    const user = {
        ...req.body,
        _id: `${year}${month}${day}${hour}${minute}${second}`
    }
    const userData = await User.create(user);
    res.status(201).send({ data: userData });
}
exports.getPutDataApi = async (req, res) => {
    console.log(req.body);
    const userDataToUpdate = req.body

    try {   
        const userData = await User.updateMany({_id: req.params.id}, {$set: userDataToUpdate})
        res.status(200).send({ data: userData});
    } catch (error) {
        res.status(404).send({ errorMessage: error.message });
    }
}
exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const userData = await User.deleteMany({_id: id});
        res.status(200).send({ userData })
    } catch (error) {
        res.status(404).send({ errormsg: error.message });
    }
}

// Error handling
exports.authError = async (req, res) => {
    res.status(401).send({ errormsg: "You must be logged in"})
}
// Error handling
exports.logging = async (req, res) => {
    res.status(401).send({ errormsg: "You must be logged in"})
}