package com.suitecare.suitecare.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class MainController {

    @RequestMapping(value="/test")
    @ResponseBody
    public String viewApp (Model model) {
        return "React와 Spring Boot 연동 성공";
    }
}
