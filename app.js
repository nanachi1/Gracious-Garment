const PORT = process.env.PORT || 5000;
const app = express();

//* Routes
app.use('/', require('./routes/index.js'));

//* Start server
server.listen(PORT, console.log(`Server started on port ${PORT}`));