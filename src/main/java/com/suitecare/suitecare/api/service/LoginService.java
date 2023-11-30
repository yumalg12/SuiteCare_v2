package com.suitecare.suitecare.api.service;

import com.suitecare.suitecare.api.repository.FamilyMapper;
import com.suitecare.suitecare.domain.LoginDTO;
import com.suitecare.suitecare.domain.FamilyDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    @Autowired
    FamilyMapper familyMapper;

    public FamilyDTO loginFamily(LoginDTO login){
        System.out.println("in login Service : " + login);
        return familyMapper.login(login);
    }
}
