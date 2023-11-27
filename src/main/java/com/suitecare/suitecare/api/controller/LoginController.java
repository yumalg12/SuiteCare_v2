package com.suitecare.suitecare.api.controller;

import com.suitecare.suitecare.api.service.LoginService;
import com.suitecare.suitecare.domain.FamilyDTO;
import com.suitecare.suitecare.domain.LoginDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
public class LoginController {

    @Autowired
    LoginService loginService;

    @GetMapping("/login")
    public String login(){
        return "family/login";
    }

    @PostMapping("/login")
    public FamilyDTO login(@RequestBody LoginDTO loginDTO) {
        System.out.println(loginDTO);
        FamilyDTO loginUser = loginService.loginFamily(loginDTO);
        System.out.println(loginUser);
        return loginUser;
    }
}
