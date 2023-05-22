const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const catagories = require('././Data/catagories.json')

app.use(cors());

app.get('/', (req, res) => {
    res.send('dragon news..')
});

app.get('/catagories', (req, res) => {
    res.send(catagories)

})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})