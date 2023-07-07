const Model = require('../models/showsModel');
const router = require('express').Router();

router.post('/add',(req,res) => {
    console.log(req.body)
    new Model(req.body).save()
    .then((result) => {
        console.log(result)
        console.log('data saved')
        res.json(result)
        
    }).catch((err) => {
        console.error(err)
        res.json(err)
    });

})

router.get('/getall', (req, res) => {
    Model.find({})
    .then((result) => {
        console.log(result);
        res.json(result);        
    }).catch((err) => {
        console.error(err);
        res.json(err);
    });
    //res.send('get all from user router')
})

router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        console.log(result);
        res.json(result);        
    }).catch((err) => {
        console.error(err);
        res.json(err);
    });
})
module.exports=router;