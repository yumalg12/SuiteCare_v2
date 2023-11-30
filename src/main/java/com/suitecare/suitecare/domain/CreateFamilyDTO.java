package com.suitecare.suitecare.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.sql.Timestamp;

@Data
public class CreateFamilyDTO {
    private String id;
    private String password;
    private String name;
    private String tel;
    /*@JsonFormat(pattern = "yyyy.MM.dd'T'hh:mm", timezone = "Asia/Seoul")
    private Timestamp signup_date;*/
}
