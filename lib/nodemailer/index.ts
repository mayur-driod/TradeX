import nodemailer from "nodemailer";
import { WELCOME_EMAIL_TEMPLATE } from "./templates";

export const trasporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD,
    },
});

export const sendWelcomeEmail = async ({email,name,intro} : WelcomeEmailData) => {
    const htmlTemplate =  WELCOME_EMAIL_TEMPLATE
        .replace("{{name}}", name)
        .replace("{{intro}}", intro);

    const mailOptions = {
        from: `TradeX ${ process.env.NODEMAILER_EMAIL}`,
        to: email,
        subject: "Welcome to TradeX - Your Journey to Smart Investing Begins Here!",
        text: "Thanks for choosing TradeX! We're excited to have you on board. You now have all the tools needed for you to start your investment journey with confidence.",
        html: htmlTemplate,
    }

    await trasporter.sendMail(mailOptions);
}