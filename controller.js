const router = require('express').Router;
const sequelize = require('./db')
const User = sequelize.import('/model')

router.get('/changethis', (response) => {
    User.findAll().then(users => {
        response.status(200).json({users: users})
    })
})

router.post('/', (request, response) => {

    User.create({
        first_name: request.body.firstName,
        last_name: request.body.lastName,
        age: request.body.age
    }).then((userCreationSuccessObject) => {
        response.status(200).json({
            message: 'Well done',
            userCreated: userCreationSuccessObject
        })
    })
})

modules.export = router;

/**
 * There are 4 errors 
 */