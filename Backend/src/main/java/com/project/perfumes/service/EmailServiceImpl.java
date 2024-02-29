package com.project.perfumes.service;
//
//import jakarta.mail.internet.MimeMessage;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.core.io.ByteArrayResource;
//import org.springframework.mail.javamail.JavaMailSender;
//import org.springframework.mail.javamail.MimeMessageHelper;
//import org.springframework.stereotype.Component;
//import org.springframework.stereotype.Service;
//import org.springframework.web.multipart.MultipartFile;
//
//@Component
//public class EmailServiceImpl implements EmailService{
//    @Value("${spring.mail.username}")
//    private String fromEmail;
//     @Autowired
//     private JavaMailSender javaMailSender;
//
//    @Override
//    public String sendEmail(MultipartFile[] file, String to, String[] cc, String subject, String body) {
//         try{
//             MimeMessage mimeMessage = javaMailSender.createMimeMessage();
//             MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true);
//
//             mimeMessageHelper.setFrom(fromEmail);
//             mimeMessageHelper.setTo(to);
//             mimeMessageHelper.setCc(cc);
//             mimeMessageHelper.setSubject(subject);
//             mimeMessageHelper.setText(body);
//
//             for(int i=0; i<file.length;i++){
//                 mimeMessageHelper.addAttachment(
//                         file[i].getOriginalFilename(),
//                         new ByteArrayResource(file[i].getBytes())
//                 );
//             }
//             javaMailSender.send(mimeMessage);
//             return "mail send successfully";
//         }
//         catch(Exception e){
//             throw new RuntimeException(e);
//         }
//    }
//}


import com.project.perfumes.service.EmailService;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class EmailServiceImpl implements EmailService {

    @Autowired
    private JavaMailSender javaMailSender;

    @Override
    public void sendEmail(String to, String subject, String body) {
        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = null;
        try {
            helper = new MimeMessageHelper(message, true);
            helper.setTo(to);
            helper.setSubject(subject);
            helper.setText(body, true);
            javaMailSender.send(message);
        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }
}

