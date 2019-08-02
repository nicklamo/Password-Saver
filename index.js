//require packages
const express = require('express');
const app = express();
//require routes
const authRoutes = require('./routes/authRoutes');
const passRoutes = require('./routes/passRoutes');

//configure app and database
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}));



// ======
// Routes
// ======
app.get('/', (req,res) => {
    res.render('home');
});

app.use(authRoutes);
app.use(passRoutes);



app.listen(3000, () => {
    console.log('Started on port 3000...');
});