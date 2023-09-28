var express = require('express');
var router = express.Router();

const mysql = require ('./repository/billingdb')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('invoice', { title: 'Express' });
});

module.exports = router;

router.get('/load',(req,res,) => {
  let sql = 'select * from invoice';

  mysql.Select(sql,'invoice',(err,result)=>{
    if(err) console.error("Error:",err);

    res.json({
      msg:'success',
      data: result
    })
  })
});


router.post('/save', (req, res) => {
  try {

    let customerid = req.body.customerid;
    let invoicedate = req.body.invoicedate;
    let duedate = req.body.duedate;
    let totalamount = req.body.totalamount;
    let status = req.body.status;
    let paymentdate = req.body.paymentdate;
    let data = [];

    console.log(data);

    data.push([
      customerid, invoicedate, duedate, totalamount, status, paymentdate
    ])

    mysql.InsertTable('invoice', data, (err, result) => {
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