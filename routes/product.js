var express = require('express');
var router = express.Router();

const mysql = require ('./repository/billingdb')
const helper = require('./repository/helper');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('product', { title: 'Express' });
});

module.exports = router;

router.get('/load',(req,res,) => {
  let sql = 'select * from products';

  mysql.Select(sql,'products',(err,result)=>{
    if(err) console.error("Error:",err);

    res.json({
      msg:'success',
      data: result
    })
  })
});

router.post('/save', (req, res) => {
  try {

   
        
        let productname = req.body.productname;
        let description = req.body.description;
        let categoryid = req.body.categoryid;
        let price = req.body.price;
        let instock = req.body.instock;
        let isactive = req.body.isactive;
        let creationdate = helper.GetCurrentDate();
        let data = [];

    data.push([
      productname, description, categoryid, price, instock, isactive, creationdate,
    ])

    mysql.InsertTable('products', data, (err, result) => {
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