<script src="https://www.gstatic.com/firebasejs/4.11.0/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD6gxqgtY2hjfqO7HyJgwkXWTlr7z1qGyQ",
    authDomain: "fir-project-fcc52.firebaseapp.com",
    databaseURL: "https://fir-project-fcc52.firebaseio.com",
    projectId: "fir-project-fcc52",
    storageBucket: "fir-project-fcc52.appspot.com",
    messagingSenderId: "40405322341"
  };
  firebase.initializeApp(config);
</script>

/*router.get('/:continent',function(req,res){
 //res.send(req.params);
    var configs =[];
    async.forEachOf(countries, function (value, key, callback) {
        //console.log((value.target).indexOf(continent));
        if(parseInt((value.target).indexOf(continent))!= -1)
        {
             configs[key]=value;
        }
        configs = configs.filter(function(e){return e }); 
        callback(null);

    }, function (err) {
        if (err){
          console.error(err);
        }
        else
        {
            var sourceroutes={};
           sourceroutes.orgurl=req.originalUrl;
           sourceroutes.orgname='/'+req.params.continent;
            //res.send({ page_title:req.params,countries:configs});
            res.render('countries',{ page_title:'Continent', sub_title:req.params.contenent,countries:configs,sourceroutes:sourceroutes});
        }
        // configs is now a map of JSON data
    });
});

router.get('/:continent/:country',function(req,res){
   //res.send(req.params.continent);
   //res.send(req.params.country);
   var configs=[];
   var country=req.params.country;

   async.forEachOf(countries, function (value, key, callback) {
      console.log((value.id).indexOf(country));
      if(parseInt((value.id).indexOf(country))!= -1)
      {
            configs[key]=value;
      
      }
      configs = configs.filter(function(e){return e }); 
      callback(null);

  }, function (err) {
      if (err){
        console.error(err);
      }
      else
      {   
         var sourceroutes={};
         sourceroutes.orgurl=req.originalUrl;
         sourceroutes.orgname='/'+req.params.country;
         sourceroutes.prevurl='/'+req.params.continent;
        res.render('country',{ page_title:'Country', sub_title:req.params.country,country:configs, sourceroutes:sourceroutes});
          //res.send({ page_title:'Country', sub_title:req.params.country,country:configs,routes:router.stack});
      }
      // configs is now a map of JSON data
  });

}); */