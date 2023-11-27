package com.suitecare.suitecare.api.controller;

import com.suitecare.suitecare.api.service.LoginService;
import com.suitecare.suitecare.domain.FamilyDTO;
import com.suitecare.suitecare.domain.LoginDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class LoginController {

    @Autowired
    LoginService loginService;

    @GetMapping("/login")
    public String login(){
        return "family/login";
    }

    @PostMapping("/login")
    public String login(LoginDTO loginDTO) {
        System.out.println(loginDTO);
        FamilyDTO loginUser = loginService.loginFamily(loginDTO);
        System.out.println(loginUser);
        return "index";
    }
}
