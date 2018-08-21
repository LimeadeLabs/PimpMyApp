const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const cors = require('cors')
// importing keys
const keys = require('./config/keys');
const app = express();

// Need devloper key with Stripe API
const stripe = require('stripe')(keys.stripeSecretKey);

// Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Body Parser Middlware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set Static Folder
// folder set as public will hold our images
app.use(express.static(`${__dirname}/public`));

app.use(cors())



// ======== ROUTES ==========

app.get('/', (req, res) => {
    res.render('index');
});


// route to set publishable key
app.get('/checkout', (req, res) => {
    // assigning variable to contain key
   const stripePublishableKey = keys.stripePublishableKey;
    // sending key
   res.json(stripePublishableKey);
})

// Charge route
app.post('/checkout', (req, res)=> {
    const amount = 500;
    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
    .then(customer => stripe.charges.create({
        // amount: amount --ES6 below,
        amount,
        description: 'PimpMyApp Ticket',
        currency: 'usd',
        customer: customer.id
    }))
    .then(charge => res.render('success'));

    console.log(customer);
    // res.send('TEST');
});

// in the works

// app.post('/charge', (req, res){
//     var token = req.body.stripeToken; // Using Express
//     // Create a charge: this will charge the user's card
// var charge = stripe.charges.create({
//     amount: 1999, // Amount in cents
//     currency: "usd",
//     source: token,
//     metadata: { 
//      user: req.user._id, 
//      email: req.user.local.email
//     },
//     description: "Example charge" //keep track by writing a description or you can use the metadata property Stripe has to offer in the charges object
//    },function(err, charge) {
//     if (err && err.type === 'StripeCardError') {
//     // The card has been declined
//     }else {
  
//      res.redirect('/thanks-for-your-order');
//      console.log('charge here ' + charge.id); //store the id 
//      console.log('charge here ' + charge.invoice); //store the invoice
//      console.log('charge here ' + charge.customer); //store the customer id
  
//     }
// })
// var token = req.body.stripeToken; // Using Express

// // Create a charge: this will charge the user's card
// var charge = stripe.charges.create({
//   amount: 1999, // Amount in cents
//   currency: "usd",
//   source: token,
//   metadata: { 
//    user: req.user._id, 
//    email: req.user.local.email
//   },
//   description: "Example charge" //keep track by writing a description or you can use the metadata property Stripe has to offer in the charges object
//  },function(err, charge) {
//   if (err && err.type === 'StripeCardError') {
//   // The card has been declined
//   }else {

//    res.redirect('/thanks-for-your-order');
//    console.log('charge here ' + charge.id); //store the id 
//    console.log('charge here ' + charge.invoice); //store the invoice
//    console.log('charge here ' + charge.customer); //store the customer id

//   }


app.post("/charge", (req, res) => {
    // setting amount to $5
    let amount = 500;
  
    stripe.customers.create({
        // retreives email address and card toekn from req.body
      email: req.body.email,
      card: req.body.id
    })
    .then(customer =>
      stripe.charges.create({
        amount,
        description: "Sample Charge",
        currency: "usd",
        customer: customer.id
      }))
    .then(charge => res.send(charge))
    .catch(err => {
      console.log("Error:", err);
      res.status(500).send({error: "Purchase Failed"});
    });
  });
  

// port on either Heroku or local 5000
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`server started on port ${port}`);
})