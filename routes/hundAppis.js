var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var HundAppisModel = require('../models/HundAppisModel.js');
//req och res här är request- respektive response-objekten

/* GET users listing. READ */
router.get('/', function(req, res, next) {
  //find är Mongoose funktion. err innehåller eventuellt fel, annars kommer resultatet att finnas i hundAppis
  HundAppisModel.find( function (err, hundAppis) {
    if (err) return next(err);
    else {
    //Om det inte uppstår fel så skicka hundAppis i Jsonformat
        res.json(hundAppis);
    
    }
    });
    });

/* GET with ID users listing. READ */
router.get('/:id', function(req, res, next) {
  //find är Mongoose funktion. err innehåller eventuellt fel, annars kommer resultatet att finnas i hundAppis
  HundAppisModel.findById(req.params.id, function (err, hundAppis) {
    if (err) return next(err);
    else {
    //Om det inte uppstår fel så skicka hundAppis i Jsonformat
    res.json(hundAppis);
    
    }
    });
    });

    router.post('/' , function(req, res, next) {
      //req.body är innehållet i requestobjektet, dvs en json med en hundAppis
      HundAppisModel.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post); //Här skickar vi tillbaka datan vi skickad in i databasen om skrivningen gick bra
      });
      });

      router.delete('/:id', function(req, res, next) {
        HundAppisModel.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
        });
        });
        
        router.put('/:id', function(req, res, next) {
          // var id = mongoose.Types.ObjectId(req.query.hundAppisId);
          HundAppisModel.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, post) {
         if (err) return next(err);
          // res.send(err);
          res.json(post);
          });
          });


module.exports = router;
