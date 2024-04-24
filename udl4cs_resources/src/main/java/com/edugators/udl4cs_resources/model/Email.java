package com.edugators.udl4cs_resources.model;

import javax.mail.*;
import javax.mail.internet.*;
import javax.activation.*;
import java.util.*;
import java.io.*;

public class Email {

    //bot account = udl4cs.no.reply@gmail.com
    //bot password = RumpledTurtle49

    //All variabbles are static and defined here. Update these variables
    //to update email sender or destination
    static String  d_email = "udl4cs.no.reply@gmail.com",
            d_password = "mjyw whii oece unwt",
            d_port = "465",
            d_host = "smtp.gmail.com",
            m_to = "udl4cs.no.reply@gmail.com",
            m_subject = "A New Resource has been Suggested";
    public void sendEmail(String title, int ID) {
        //API used to send email
        Properties prop = new Properties();

        String  from = d_email,
                host = d_host,
                port = d_port,
                to = m_to,
                subject = m_subject;

        prop.put("mail.smtp.user", from);
        prop.put("mail.smtp.host", host);
        prop.put("mail.smtp.port", port);
        prop.put("mail.smtp.starttls.enable", "true");
        prop.put("mail.smtp.auth", "true");
        prop.put("mail.smtp.socketFactory.port", port);
        prop.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
        prop.put("mail.smtp.socketFactory.fallback", "false");

        SecurityManager security = System.getSecurityManager();

        try {
            Authenticator auth = new SMTPAuthenticator();
            Session session = Session.getInstance(prop, auth);
            Message msg = new MimeMessage(session);

            msg.setFrom(new InternetAddress(from));
            msg.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
            msg.setSubject(subject);

            Multipart totBody = getMultipart(ID, title);

            msg.setContent(totBody);
            Transport.send(msg);
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static class SMTPAuthenticator extends javax.mail.Authenticator {
        public PasswordAuthentication getPasswordAuthentication() {
            return new PasswordAuthentication(d_email, d_password);
        }
    }

    //Composes body of the email
    private static Multipart getMultipart(int ID, String title, String description) throws MessagingException, IOException {
        String text = "A new file has been suggested: " + title + "<br><br>";

        //MimeBodyPart makes up each section of the email
        MimeBodyPart textBodyPart = new MimeBodyPart();
        textBodyPart.setContent(text, "text/html; charset=utf-8");

        //Multipart holds all MimeBodyParts
        Multipart Body = new MimeMultipart();
        Body.addBodyPart(textBodyPart);

        String s = "http://localhost:3000/resources/user1/";
        s += String.valueOf(ID);

        text = description + "<br><br>";
        MimeBodyPart textBodyPart2 = new MimeBodyPart();
        textBodyPart2.setContent(text, "text/html; charset=utf-8");
        Body.addBodyPart(textBodyPart2);
        
        text = "<a href='" + s + "'>Approve this document</a><br>";;

        MimeBodyPart textBodyPart3 = new MimeBodyPart();
        textBodyPart3.setContent(text, "text/html; charset=utf-8");
        Body.addBodyPart(textBodyPart3);
        return Body;
    }
}
