var createError = require('http-errors');
var express = require('express');
var path = require('path');
const fs = require("fs");
const jwt = require("jsonwebtoken");
const cors = require('cors');

var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();

const autenticacionRouter  = require('./controllers/autenticacion');
const registroRouter = require('./controllers/registro');
const usuariosRouter = require('./controllers/usuarios');
const publicacionRouter = require('./controllers/publicacion');
const homeRouter = require('./controllers/home');
const uploadRouter = require('./controllers/upload');




var app = express();
app.use(cors());
secured = (req,res,next) => {
  try {
  
    let token = req.headers.authorization; 
  
    token = token.replace('Bearer ','');
    const publicKey = fs.readFileSync('./claves/publica.pem');
    let decoded = jwt.verify(token, publicKey);
  
    req.id = decoded.id;
    req.role = decoded.role;
    next();
  } catch (error) {
    res.status(401).json({status : 'unauthorized'});
  }
  }

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/autenticacion',autenticacionRouter);
app.use('/registro',registroRouter);
app.use('/usuarios',secured, usuariosRouter);
app.use('/publicacion',publicacionRouter);
app.use('/home',homeRouter);
app.use('/upload',uploadRouter);



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
