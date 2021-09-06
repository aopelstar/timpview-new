const express = require('express');
const {google} = require('googleapis');
const OAuth2= google.auth.OAuth2;
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(bodyParser.json() );
app.use(cors() );

const CLIENT_ID=process.env.CLIENT_ID;
const CLIENT_SECRET=process.env.CLIENT_SECRET;
const REDIRECT_URI=process.env.REDIRECT_URI;
const REFRESH_TOKEN=process.env.REFRESH_TOKEN;


const oAuth2Client = new OAuth2( CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
oAuth2Client.setCredentials({
    refresh_token: REFRESH_TOKEN
})




app.post('/api/sendEmails',  async (req, res)=> {
    
    const accessToken=   await oAuth2Client.getAccessToken()
    
    
    
        let transporter = nodemailer.createTransport({
            service:'gmail',
            auth: {
                type: 'OAuth2',
                user: 'tantoprecords@gmail.com',
                clientID: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken.token

            }
        });
        

        let mailOptions = {
            from: req.body.email, 
            to: process.env.EMAIL,
            subject: "website email", 
            html:`<div><p> 
            This is an automated Email from your website.  <b>Are you stoked or what, buddy???</b> <br/>
            <br/>Name: ${req.body.name}<br/>
            <br/>Date: ${req.body.date}<br/>
            <br/>Time: ${req.body.time}<br/>
            <br/>Telephone: ${req.body.phone}<br/>
            <br/>Message: ${req.body.details}</p></div>`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            res.send('done')
        });
    
})


const port = process.env.SERVER_PORT || 5433

app.listen(port, () => {
    console.log('listening on port '+port)
})
