var express = require('express');
var router = express.Router();

const mysql = require ('./repository/billingdb')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('subscription', { title: 'Express' });
});

module.exports = router;

router.get('/load',(req,res,) => {
  let sql = 'select * from subscriptions';

  mysql.Select(sql,'subscriptions',(err,result)=>{
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
    let productid = req.body.productid;
    let startdate = req.body.startdate;
    let enddate = req.body.enddate;
    let status = req.body.status;
    let recurringamount = req.body.recurringamount;
    let billinginterval = req.body.billinginterval;
    let trialstartdate = req.body.trialstartdate;
    let trialenddate = req.body.trialenddate;
    let data = [];

    data.push([
       customerid, productid, startdate, enddate, status, recurringamount, billinginterval, trialstartdate, trialenddate
    ])

    mysql.InsertTable('subscriptions', data, (err, result) => {
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