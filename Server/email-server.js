// email-server.js
const cors = require('cors');
const http = require('http');
const nodemailer = require('nodemailer');

const server = http.createServer((req, res) => {
  debugger;
  cors()(req, res, () => {});
  if (req.method === 'POST' && req.url === '/send-email') {
    let data = '';

    req.on('data', chunk => {
      data += chunk;
    });

    req.on('end', () => {
      const emailData = JSON.parse(data);

      const transporter = nodemailer.createTransport({
        host: 'localhost', //'your-smtp-server.com',
        port: 587,
        secure: false,
        auth: {
          user: 'sharingresume@gmail.com',
          pass: 'Welcome@123'
        }
      });

      const mailOptions = {
        from: 'sharingresume@gmail.com',
        to: 'akhilesh04upadhyay@gmail.com',
        subject: 'Testing',
        text: 'Test body'
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal Server Error');
        } else {
          console.log('Email sent:', info.response);
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end('Email sent successfully');
        }
      });
    });
  } else {
    debugger;
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const port = 4000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
