const nodemailer = require('nodemailer')

module.exports = async (email, subject, text) =>{
    try{
        const transporter = nodemailer.createTransport({
            host:'smtp.gmail.com',
            service:'gmail',
            port:587,
            secure:false,
            auth:{
                user: 'theinsightsdev@gmail.com',
                pass: ''
            },
            tls:{
                rejectUnauthorized: false
            }
        })
        await transporter.sendMail({
            from:"'Email Confirmation' <theinsightsdev@gmail.com>", //sender
            to: email, 
            subject: subject,
            text:text
        })

        console.log('email sent sucessfully')
    }catch(err){
        console.log('email not sent')
        console.log(err)
    }
}