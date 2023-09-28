var express = require('express');
var router = express.Router();

const mysql = require ('./repository/billingdb')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('payment', { title: 'Express' });
});

module.exports = router;

router.get('/load',(req,res,) => {
  let sql = 'select * from payments';

  mysql.Select(sql,'payments',(err,result)=>{
    if(err) console.error("Error:",err);

    res.json({
      msg:'success',
      data: result
    })
  })
});

router.post('/save', (req, res) => {
  try {

   
    let invoiceid = req.body.invoiceid;
    let customerid = req.body.customerid;
    let paymentdate = req.body.paymentdate;
    let paymentamount = req.body.paymentamount;
    let paymentmethod = req.body.paymentmethod;
    let transactionid = req.body.transactionid;
    let data = [];

    data.push([
      invoiceid, customerid, paymentdate, paymentamount, paymentmethod, transactionid,
    ])

    mysql.InsertTable('payments', data, (err, result) => {
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