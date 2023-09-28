var express = require('express');
var router = express.Router();

const mysql = require ('./repository/billingdb')
const helper = require('./repository/helper');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('taxconfiguration', { title: 'Express' });
});

module.exports = router;

router.get('/load',(req,res,) => {
  let sql = 'select * from tax_configuration';

  mysql.Select(sql,'tax_configuration',(err,result)=>{
    if(err) console.error("Error:",err);

    res.json({
      msg:'success',
      data: result
    })
  })
});

router.post('/save', (req, res) => {
  try {
    let countrycode = req.body.countrycode;
    let statecode = req.body.statecode;
    let taxrate = req.body.taxrate;
    let taxtype = req.body.taxtype;
    let startdate = helper.GetCurrentDate();
    let enddate = req.body.enddate;
    let isactive = req.body.isactive;
    let createdat = helper.GetCurrentDate();
    let updatedat = helper.GetCurrentDate();
    let data = [];

    data.push([
      countrycode, statecode, taxrate, taxtype, startdate, enddate, isactive, createdat, updatedat
    ])

    mysql.InsertTable('tax_configuration', data, (err, result) => {
      if (err) console.error("Error: ", err);

      console.log(result);

      res.json({
        msg: 'success',
      });
    })

  } catch (error) {
    res.json({
      msg: 'error',
    });
  }

});