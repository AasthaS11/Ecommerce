import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'aastha.s@cisinlabs.com',
      pass: 'jdhu iacu oaxg goti',
    },
  });

  
  const mailOptions = {
    to: email,
    from: "aastha.s@cisinlabs.com",
    subject: 'Password Reset',
    text: `You requested a password reset. Click the following link to reset your password: ${resetUrl}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      ResponseService.error("Error sending email", 500, responseContext);
      return;
    }
    ResponseService.success("Password reset email sent", {}, 200, responseContext);
  });