var express = require("express");
var router = express.Router();

const helper = require('./repository/helper');
const mysql = require("./repository/billingdb");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("user", { title: "Express" });
});

module.exports = router;

router.get("/load", (req, res) => {
  let sql = "select * from users";

  mysql.Select(sql, "users", (err, result) => {
    if (err) console.error("Error:", err);

    res.json({
      msg: "success",
      data: result,
    });
  });
});

router.post("/save", (req, res) => {
  try {
    let username = req.body.username;
    let email = req.body.email;
    let passwordhash = req.body.passwordhash;
    let fullname = req.body.fullname;
    let registrationdate = helper.GetCurrentDate();
    let lastlogin = helper.GetCurrentDate();
    let isactive = req.body.isactive;
    let isadmin = req.body.isadmin;
    let data = [];

    console.log('hit');

    data.push([
      username,
      email,
      passwordhash,
      fullname,
      registrationdate,
      lastlogin,
      isactive,
      isadmin,
    ]);

    mysql.InsertTable("users", data, (err, result) => {
      if (err) console.error("Error: ", err);

      console.log(result);

      res.json({
        msg: "success",
      });
    });
  } catch (error) {
    res.json({
      msg: error,
    });
  }
});
