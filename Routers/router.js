const { Auth } = require('../Controllers/Auth.api');
const { getData, createUser, getPutDataApi, deleteUser, authError, logging } = require('../Controllers/Controller.api');

const router = require('express').Router();

router.route('/user/:id?')
    .get(Auth, getData)
    .post(Auth, createUser)
    .put(Auth, getPutDataApi)
    .delete(Auth, deleteUser)

router.route('/auth')
    .get(authError)
    .post(logging)

module.exports = { router }