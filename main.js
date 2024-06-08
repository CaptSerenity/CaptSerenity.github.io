var typed = new Typed('.text', {
    strings: ["Software Engineer.", "Data Scientist.", "AI Enthusiast."],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = {
        name: formData.get('name'),
        // other form fields
    };

    fetch('https://formspree.io/YOUR_EMAIL_HERE', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            alert('Email sent successfully!');
            document.getElementById('contact-form').reset();
        } else {
            alert('Failed to send email. Please try again later.');
        }
    })
    .catch(error => {
        alert('An error occurred: ' + error.message);
    });
});


const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    const { name, email, subject, message } = req.body;

    // Configure your email transport
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password'
        }
    });

    const mailOptions = {
        from: email,
        to: 'your-email@gmail.com',
        subject: `New message from ${name}: ${subject}`,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error sending email: ' + error.message);
        }
        res.send('Email sent successfully');
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };

    fetch('your-backend-endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            alert('Email sent successfully!');
            document.getElementById('contact-form').reset();
        } else {
            alert('Failed to send email. Please try again later.');
        }
    })
    .catch(error => {
        alert('An error occurred: ' + error.message);
    });
});
