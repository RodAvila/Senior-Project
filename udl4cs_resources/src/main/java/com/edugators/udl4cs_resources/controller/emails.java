import javax.mail.*;
import javax.mail.internet.*;
import javax.activation.*;
import java.util.*;
import java.io.*;

public class emails {
    //File -> Full file attached if reasonable size-wise, alt. first page/screenshot
    //Title -> title of proposed file
    public static void sendEmail(File attach, String title) {
        //static info, to update login info update these strings
        String username = "199cce88a02901";
        String password = "f95fd211967780";
        
        try {
            //API used to send email
            Properties prop = new Properties();
            prop.put("mail.smtp.auth", true);
            prop.put("mail.smtp.starttls.enable", "true");
            prop.put("mail.smtp.host", "sandbox.smtp.mailtrap.io");
            prop.put("mail.smtp.port", "25");
            prop.put("mail.smtp.ssl.trust", "sandbox.smtp.mailtrap.io");

            //Needs permanent address, static login information
            Session session = Session.getInstance(prop, new Authenticator(){
                @Override
                protected PasswordAuthentication
                getPasswordAuthentication() {
                    return new PasswordAuthentication(username, password);
                }
            });

            Message msg = new MimeMessage(session);
            //Needs permanent email address (do-no-reply)
            msg.setFrom(new InternetAddress("temp@gmail.com"));
            //check whether this needs to be dynamic or static
            //Also needs permanent address
            msg.setRecipients(Message.RecipientType.TO, InternetAddress.parse("tempTo@gmail.com"));
            msg.setSubject("A new file has been suggested");

            Multipart totBody = getMultipart(attach, title);

            msg.setContent(totBody);
            Transport.send(msg);
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }

    //Composes body of the email
    private static Multipart getMultipart(File attach, String title) throws MessagingException, IOException {
        String text = "A new file has been suggested: " + title + "<br><br>";

        MimeBodyPart textBodyPart = new MimeBodyPart();
        textBodyPart.setContent(text, "text/html; charset=utf-8");

        Multipart Body = new MimeMultipart();
        Body.addBodyPart(textBodyPart);

        MimeBodyPart attBodyPart = new MimeBodyPart();
        //May remove, depends on results of testing with videos
        attBodyPart.attachFile(attach);
        Body.addBodyPart(attBodyPart);

        text = "<br><br><a href='url'>Approve this document</a><br>";
        text += "<a href='url'>Deny this document</a><br>";

        textBodyPart.setContent(text, "text/html; charset=utf-8");
        Body.addBodyPart(textBodyPart);
        return Body;
    }
}
