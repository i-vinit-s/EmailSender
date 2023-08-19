const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  // connect with the smtp
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'mail',
        pass: 'pass'
    }
});


  let info = await transporter.sendMail({
    from: '"Vinit" <test@gmail.com>', // sender address
    to: "test@gmail.com", // list of receivers
    subject: "Test Email Sender Using Nodejs", // Subject line
    text: "Hello !!", // plain text body
    html: "<b>This is a test mail</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  res.json(info);
};

module.exports = sendMail;