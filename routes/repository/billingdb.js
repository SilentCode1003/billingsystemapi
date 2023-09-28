const mysql = require("mysql");
require("dotenv").config();
const model = require('../model/billingmodel')

const connection = mysql.createConnection({
  host: process.env._HOST_ADMIN,
  user: process.env._USER_ADMIN,
  password: process.env._PASSWORD_ADMIN,
  database: process.env._DATABASE_ADMIN,
  port: 3307
});


exports.CheckConnection = () => {
  connection.connect((err) => {
    if (err) {
      console.error("Error connection to MYSQL databases: ", err);
      return;
    }
    console.log("MySQL database connection established successfully!");
  });
};

exports.Select = (sql, table, callback) => {
  try {
    connection.connect((err) => {
      return err;
    });
    connection.query(sql, (error, results, fields) => {
      // console.log(results);

      if (error) {
        callback(error, null);
      }

      if (table == "invoice") {
        callback(null, model.invoice(results));
      }
      
      if (table == "users") {
        callback(null, model.users(results));
      }

      if (table == "customers") {
        callback(null, model.customers(results));
      }
      if (table == "payments") {
        callback(null, model.payments(results));
      }
      if (table == "subscriptions") {
        callback(null, model.subscriptions(results));
      }
      if (table == "products") {
        callback(null, model.products(results));
      }
      if (table == "tax_configuration") {
        callback(null, model.tax_configuration(results));
      }
    });
  } catch (error) {
    console.log(error);
  }
};




exports.Insert = (stmt, todos, callback) => {
  try {
    connection.connect((err) => {
      return err;
    });
    // console.log(statement: ${stmt} data: ${todos});

    connection.query(stmt, [todos], (err, results, fields) => {
      if (err) {
        callback(err, null);
      }
      // callback(null, Row inserted: ${results});
      callback(null, `Row inserted: ${results.affectedRows}`);
      // console.log(Row inserted: ${results.affectedRows});
    });
  } catch (error) {
    callback(error, null);
  }
};


exports.InsertTable = (tablename, data, callback) => {
  if (tablename == "invoice") {
    let sql = `INSERT INTO invoice(
       
        i_customer_id,
        i_invoice_date,
        i_duedate,
        i_total_amount,
        i_status,
        i_payment_date) VALUES ?`;

    this.Insert(sql, data, (err, result) => {
      if (err) {
        callback(err, null);
      }
      callback(null, result);
    });
  }

  if (tablename == "users") {
    let sql = `INSERT INTO users(
        u_username,
        u_email,
        u_password_hash,
        u_full_name,
        u_registration_date,
        u_last_login,
        u_is_active,
        u_is_admin) VALUES ?`;

    this.Insert(sql, data, (err, result) => {
      if (err) {
        callback(err, null);
      }
      callback(null, result);
    });
  }

  if (tablename == "customers") {
    let sql = `INSERT INTO customers(
        c_first_name,
        c_last_name,
        c_email,
        c_phone_number,
        c_address,
        c_city,
        c_state,
        c_postal_code,
        c_country) VALUES ?`;

    this.Insert(sql, data, (err, result) => {
      if (err) {
        callback(err, null);
      }
      callback(null, result);
    });
  }

  if (tablename == "payments") {
    let sql = `INSERT INTO payments(
       
        p_invoice_id,
        p_customer_id,
        p_payment_date,
        p_payment_amount,
        p_payment_method,
        p_transaction_id) VALUES ?`;

    this.Insert(sql, data, (err, result) => {
      if (err) {
        callback(err, null);
      }
      callback(null, result);
    });
  }
  if (tablename == "products") {
    let sql = `INSERT INTO products(
   
      p_product_name,
      p_description,
      p_category_id,
      p_price,
      p_in_stock,
      p_is_active,
      p_creation_date) VALUES ?`;

    this.Insert(sql, data, (err, result) => {
      if (err) {
        callback(err, null);
      }
      callback(null, result);
    });
  }
  if (tablename == "subscriptions") {
    let sql = `INSERT INTO subscriptions(
       
        s_customer_id,
        s_product_id,
        s_start_date,
        s_end_date,
        s_status,
        s_recurring_amount,
        s_billing_interval,
        s_trial_start_date,
        s_trial_end_date) VALUES ?`;

    this.Insert(sql, data, (err, result) => {
      if (err) {
        callback(err, null);
      }
      callback(null, result);
    });
  }
  if (tablename == "tax_configuration") {
    let sql = `INSERT INTO tax_configuration(
        
        tc_country_code,
        tc_state_code,
        tc_tax_rate,
        tc_tax_type,
        tc_start_date,
        tc_end_date,
        tc_is_active,
        tc_created_at,
        tc_updated_at) VALUES ?`;

    this.Insert(sql, data, (err, result) => {
      if (err) {
        callback(err, null);
      }
      callback(null, result);
    });
  }
};


exports.Update = async (sql, callback) => {
  try {
    connection.query(sql, (error, results, fields) => {
      if (error) {
        callback(error, null);
      }
      // console.log('Rows affected:', results.affectedRows);

      callback(null, `Rows affected: ${results.affectedRows}`);
    });
  } catch (error) {
    callback(error, null);
  }
};

exports.UpdateMultiple = async (sql, data, callback) => {
  try {
    connection.query(sql, data, (error, results, fields) => {
      if (error) {
        callback(error, null);
      }
      // console.log('Rows affected:', results.affectedRows);

      callback(null, `Rows affected: ${results.affectedRows}`);
    });
  } catch (error) {
    console.log(error);
  }
};