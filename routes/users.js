const express = require('express');
const router = express.Router();

let users = [
    {
        name: 'arikran',
        email: 'arikran@gmail.com',
        password: 'ml12345',
        role: 'student'
    },
    {
        name: 'manikaan',
        email: 'manikaan@gmail.com',
        password: 'ml7845',
        role: 'student'
    },
    {
        name: 'abi',
        email: 'abi@gmail.com',
        password: 'ml555557',
        role: 'admin'
    },
    {
        name: 'arun',
        email: 'arun@gmail.com',
        password: 'ml99695',
        role: 'admin'
    },
    {
        name: 'sabari',
        email: 'sabari@gmail.com',
        password: 'ml554666',
        role: 'student'
    },
];

router.get('/all', (req, res) => {
    res.status(200).send({
        message: 'Data fetched successfully',
        data: users
    });
});

router.get('/:id', (req, res) => {
    const userId = Number(req.params.id);
    if (userId < users.length) {
        res.status(200).send({
            message: 'User data fetched successfully',
            data: users[userId]
        });
    } else {
        res.status(404).send({
            message: 'User data not found'
        });
    }
});

router.post('/', (req, res) => {
    users.push(req.body);
    res.status(200).send({
        message: 'User saved successfully'
    });
});

router.put('/:id', (req, res) => {
    const userId = Number(req.params.id);
    if (userId < users.length) {
        users.splice(userId, 1, req.body);
        res.status(200).send({
            message: 'User data updated successfully',
            data: users[userId]
        });
    } else {
        res.status(404).send({
            message: 'User data not found'
        });
    }
});

router.delete('/:id', (req, res) => {
    const userId = Number(req.params.id);
    if (userId < users.length) {
        const deletedUser = users.splice(userId, 1);
        res.status(200).send({
            message: 'User data deleted successfully',
            data: deletedUser[0]
        });
    } else {
        res.status(404).send({
            message: 'User data not found'
        });
    }
});

module.exports = router;
