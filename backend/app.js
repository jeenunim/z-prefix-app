const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001
const knex = require('knex')(require('./knexfile.js')['development'])

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    res.send('Welcome inventory manager')
})

app.get('/items', (req, res) => {
    knex('item_table')
    .select('*')
    .then(data => {res.json(data)})
})

app.post('/items', async (req, res) => {
    const body = req.body;
    try {
        const weapon = await knex('item_table').insert(body)
        res.status(201).send(weapon);
    } catch (error) {
        res.status(500).json({error});
    }
})

app.patch('/items/:id', (req, res) => {
    let itemId = req.params.id;
    knex('item_table').where({id: itemId}).update(req.body).returning('*')
        .then(function(data) {res.send(data)})
})

app.get('/users', (req, res) => {
    knex('user_table')
    .select('*')
    .then(data => {res.json(data)})
})

app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})