package com.suitecare.suitecare.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.NonNull;

import java.sql.Date;
import java.sql.Timestamp;

@Data
public class FamilyDTO {
    @NonNull
    private String suite_family_id;
    private String password;
    private String family_name;
    private String family_gender;
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "Asia/Seoul")
    private Date family_birthday;
    private String email;
    private String tel;
    private String address;
    private String address_detail;
    private String sms_opt_in;
    private String email_opt_in;
    @JsonFormat(pattern = "yyyy.MM.dd'T'hh:mm", timezone = "Asia/Seoul")
    private Timestamp signup_date;
    private String role;

}
