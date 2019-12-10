const express = require('express');
const router = express.Router();

const homeModel = require('../models/homeModel')

router.get('/:categoria', async(req,res,next) =>{
    try {
        let categoria = req.params.categoria;
        let mostran2 = await homeModel.mostrar(categoria);
        
        res.json({status:'ok', publicaciones : mostran2});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({status:"error"});
    }
})

module.exports  = router; 