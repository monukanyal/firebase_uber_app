const express = require('express');
const router = express.Router();
const async=require('async');
const md5 = require('md5');
/*******-------Firebase -------*/
var admin = require("firebase-admin");
var serviceAccount = require("../config/fir-project-fcc52-firebase-adminsdk-36e6y-60c5a832b9.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fir-project-fcc52.firebaseio.com"
});
/********---------Routes----------------*/
router.get('/', (req, res)=>{

          res.render('index',{ page_title:'Login',message:req.flash()});
});

router.get('/verify_user',(req,res)=>{
  admin.auth().getUser('szWnD3qOPaVp3KhgndFp9Kiup533')
      .then(function(userRecord) {
        // See the UserRecord reference doc for the contents of userRecord.
          console.log(typeof userRecord);
          var record=JSON.stringify(userRecord);
           console.log('length'+record.length);
          if(userRecord)
          {
            req.flash('info', 'Great!! Redirecting to dashboard');
            console.log("Successfully fetched user data:", userRecord.toJSON().uid);
             res.render('index',{ page_title:'Login',message:req.flash('info')});
          }
          
      }).catch(function(error) {
        //console.log("Error fetching user data:", error);
           req.flash('error', 'User does not exist');
          res.render('index',{ page_title:'Login',message:req.flash('error')});
      });

});

router.get('/signup',(req,res)=>{

   res.render('signup');
});




module.exports = router;
