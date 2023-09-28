// exports.MasterInvoice = (data) => {
//     let dataResult = [];
  
//     data.forEach((key, item) => {
//       dataResult.push({
//         i_invoice_id,
//         i_customer_id,
//         i_invoice_date,
//         i_due_date,
//         i_total_amount,
//         i_status,
//         i_payment_date,

//       });
//     });

//     return dataResult;
//   };    
exports.users = (data) => {
  let dataResult = [];

  data.forEach((key, item) => {
    dataResult.push({
     userid: key.u_user_id,
     username: key.u_username,
     email: key.u_email,
     passwordhash: key.u_password_hash,
     fullname: key.u_full_name,
     registrationdate: key.u_registration_date,
     lastlogin: key.u_last_login,
     isactive: key.u_is_active,
     isadmin: key.u_is_admin

    });
  });
  return dataResult;
};    

  exports.invoice = (data) => {
    let dataResult = [];
  
    data.forEach((key, item) => {
      dataResult.push({
        invoiceid: key.i_invoice_id,
        customerid: key.i_customer_id,
        invoicedate: key.i_invoice_date,
        duedate: key.i_duedate,
        totalamount: key.i_total_amount,
        status: key.i_status,
        paymentdate: key.i_payment_date,

      });
    });
  
    return dataResult;
  };    

  exports.customers = (data) => {
    let dataResult = [];
  
    data.forEach((key, item) => {
      dataResult.push({
        customerid: key.c_customer_id,
        firstname: key.c_first_name,
        lastname: key.c_last_name,
        email: key.c_email,
        phonenumber: key.c_phone_number,
        address: key.c_address,
        city: key.c_city,
        state: key.c_state,
        postalcode: key.c_postal_code,
        country: key.c_country,
      });
    });
  
    return dataResult;
  };    

  exports.payments = (data) => {
    let dataResult = [];
  
    data.forEach((key, item) => {
      dataResult.push({
        paymentid: key.p_payment_id,
        invoiceid: key.p_invoice_id,
        customerid: key.p_customer_id,
        paymentdate: key.p_payment_date,
        paymentamount: key.p_payment_amount,
        paymentmethod: key.p_payment_method,
        transactionid: key.p_transaction_id,
        
      });
    });
  
    return dataResult;
  };    

  exports.subscriptions = (data) => {
    let dataResult = [];
  
    data.forEach((key, item) => {
      dataResult.push({
        subscriptionid: key.s_subscription_id,
        customerid: key.s_customer_id,
        productid: key.s_product_id,
        startdate: key.s_start_date,
        enddate: key.s_end_date,
        status: key.s_status,
        recurringamount: key.s_recurring_amount,
        billinginterval: key.s_billing_interval,
        trialstartdate: key.s_trial_start_date,
        trialenddate: key.s_trial_end_date,
      });
    });
  
    return dataResult;
  };    

  exports.products = (data) => {
    let dataResult = [];
  
    data.forEach((key, item) => {
      dataResult.push({
        productid: key.p_product_id,
        productname: key.p_product_name,
        description: key.p_description,
        categoryid: key.p_category_id,
        price: key.p_price,
        instock: key.p_in_stock,
        isactive: key.p_is_active,
        creationdate: key.p_creation_date,

      });
    });
  
    return dataResult;
  };    

  exports.tax_configuration = (data) => {
    let dataResult = [];
  
    data.forEach((key, item) => {
      dataResult.push({
        taxid: key.tc_tax_id,
        countrycode: key.tc_country_code,
        statecode: key.tc_state_code,
        taxrate: key.tc_tax_rate,
        taxtype: key.tc_tax_type,
        startdate: key.tc_start_date,
        enddate: key.tc_end_date,
        isactive: key.tc_is_active,
        createdat: key.tc_created_at,
        updatedat: key.tc_updated_at,
      });
    });
  
    return dataResult;
  };      