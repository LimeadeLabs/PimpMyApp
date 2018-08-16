const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const app = express();

// Need devloper key with Stripe API
const stripe = require('stripe')('sk_test_r9vXV6r5uPUMolYeEFlKV7Vz');

// Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Body Parser Middlware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set Static Folder
// folder set as public will hold our images
app.use(express.static(`${__dirname}/public`));



// Strip Config
// stripe.customers.create(
//   { email: 'customer@example.com' },
//   function(err, customer) {
//     err; // null if no error occurred
//     customer; // the created customer object
//   }
// );

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

// app.get('/', (req, res) => {
//     res.render('success');
// });

// Charge route
app.post('/charge', (req, res)=> {
    const amount = 599;
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

// port on either Heroku or local 5000
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`server started on port ${port}`);
})