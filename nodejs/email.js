var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '1903069@ritindia.edu',
    pass: 'Bullet@0123'
  }
});

var mailOptions = {
  from: '1903069@ritindia.edu',
  to: 'tejaspattanshetti22@gmail.com',
  subject: 'Sending My First Email using Node.js',
  text: 'Hello I am Tejas which is using Nodejs for sending emails'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});