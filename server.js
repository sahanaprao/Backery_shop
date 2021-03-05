const express  = require('express');
const db = require('./db.js')
var cors = require('cors')

const app = express();
app.use(cors())
app.options('*',cors());
app.use(express.json())

 const port = 4000;

 app.post('/api/orders', (req,res) => {
    db.run(`INSERT INTO backery_order(created_at) VALUES(?)`, `${req.body.timestamp}`, function(err) {
        if (err) {
        res.status(400).json({'error': err.message});
        return;
        }
      });
      res.send('order created succesfully')

 });

app.listen(port, () => {
    console.log('server listening on port',port);
})