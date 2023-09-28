var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');
var invoiceRouter = require('./routes/invoice');
var customerRouter = require('./routes/customer');
var paymentRouter = require('./routes/payment');
var subscriptionRouter = require('./routes/subscription');
var productRouter = require('./routes/product');
var taxconfigurationRouter = require('./routes/taxconfiguration');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/invoice', invoiceRouter);
app.use('/user', userRouter);
app.use('/customer', customerRouter);
app.use('/payment', paymentRouter);
app.use('/subscription', subscriptionRouter);
app.use('/product', productRouter);
app.use('/taxconfiguration', taxconfigurationRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
