var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

/* MÓDULO CORS */
var cors = require('cors')

/* MÓDULO dotenv */
const dotenv = require('dotenv');

/* CARGA DE DATOS DE CONFIGURACION EN MEMORIA */
dotenv.config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

/* REFERENCIA AL MANEJADOR DE RUTAS DE LOS MODELOS */
var LibroRouter = require('./routes/rest_libros');
var ClienteRouter = require('./routes/rest_clientes');
var AutorRouter = require('./routes/rest_autores');
var GeneroRouter = require('./routes/rest_generos');
var PrestamoRouter = require('./routes/rest_prestamos');

/* CARGA DEL MIDDLEWARE authenticateJWT */
var authenticateJWT = require('./middleware/auth');

/* REFERENCIA AL MÓDULO */
const swaggerUi = require('swagger-ui-express');

/* REFERENCIA AL ARCHIVO GENERADO */
const swaggerFile = require('./swagger_output.json');

var app = express();

app.use(cors({
  origin: 'http://localhost:4200', // Cambia esto al origen correcto
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Agrega los métodos que necesites
  credentials: true // Si estás utilizando cookies o autenticación con credenciales
}));

/* CONFIGURACIÓN DE LA RUTA A LA DOCUMENTACIÓN */
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

/* USE LA FUNCIÓN authenticateJWT */
//descomentar para seguridad
app.use('/rest/libros', authenticateJWT, LibroRouter);



/* AGREGUE EL MIDDLEWARE CORS */
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/rest/libros', LibroRouter);
app.use('/rest/autores', AutorRouter);
app.use('/rest/clientes', ClienteRouter);
app.use('/rest/generos', GeneroRouter);
app.use('/rest/prestamos', PrestamoRouter);

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