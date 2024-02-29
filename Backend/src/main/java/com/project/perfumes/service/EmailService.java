//package com.project.perfumes.service;
//
//import org.springframework.stereotype.Service;
//import org.springframework.web.multipart.MultipartFile;
//
//public interface EmailService {
//    String sendEmail(MultipartFile[] file, String to, String[] cc, String subject, String body);
//}

package com.project.perfumes.service;

public interface EmailService {
    void sendEmail(String to, String subject, String body);
}
