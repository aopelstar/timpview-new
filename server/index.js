const express = require('express');
const {google} = require('googleapis');
const OAuth2= google.auth.OAuth2;
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(express.json() );

app.use( express.static( `${__dirname}/../build` ) );

const path = require('path')


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'))
})
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
            Hey guy, looks like we've got some stuff.  <b>Are you stoked or what?</b> <br/>
            <br/>Name: ${req.body.name}<br/>
            <br/>Email: ${req.body.email}<br/>
            <br/>Date: ${req.body.date}<br/>
            <br/>Time: ${req.body.time}<br/>
            <br/>Telephone: ${req.body.phone}<br/>
            <br/>Message: ${req.body.details}</p></div>
            <br/> I just want you to know you're doing a great job.  Keep going man. Hope this updates the server.`
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
