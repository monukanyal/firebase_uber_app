const express = require('express');
const router = express.Router();
const async=require('async');
const md5 = require('md5');
/*******-------Firebase -------*/


router.get('/', (req, res)=>{

          res.render('dashboard',{ page_title:'Dashboard'});
});


module.exports = router;