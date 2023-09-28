var express = require('express');
var router = express.Router();

const mysql = require ('./repository/billingdb')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('customer', { title: 'Express' });
});

module.exports = router;

router.get('/load',(req,res,) => {
  let sql = 'select * from customers';

  mysql.Select(sql,'customers',(err,result)=>{
    if(err) console.error("Error:",err);

    res.json({
      msg:'success',
      data: result
    })
  })
});

router.post('/save', (req, res) => {
  try {

    
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let email = req.body.email;
    let phonenumber = req.body.phonenumber;
    let address = req.body.address;
    let city = req.body.city;
    let state = req.body.state;
    let postalcode = req.body.postalcode;
    let country = req.body.country;
    let data = [];

    data.push([
      firstname, lastname, email, phonenumber, address, city, state, postalcode, country,
    ])

    mysql.InsertTable('customers', data, (err, result) => {
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