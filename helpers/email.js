const nodemailer = require("nodemailer")
require('dotenv').config()

const sendEmail = async(options)=>{
    const transporter = nodemailer.createTransport({
        service: process.env.service,

        auth:{
            user:process.env.user,
            pass:process.env.mailPass,
            secure: false
        }
    })

    let mailOptions = {
        from: process.env.user,
        to:options.email,
        subject:options.subject,
        html:options.html
    }

    await transporter.sendMail(mailOptions)

}
module.exports = sendEmail