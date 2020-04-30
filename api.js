const express = require('express')
const app = express()

app.set('view engine', 'hbs')

app.get('', (req, res) => {
    res.render('index', {
        title : 'Weather App',
        creator: 'Mohini Yadav'
    })
});

const multer = require('multer');
const upload = multer({
    dest: 'images'
})

app.post('/upload', upload.single('upload'), (req, res) => {
    res.send('Uploaded')
})

app.listen(3000, () => {
    console.log('Server listening on 3000');
});
