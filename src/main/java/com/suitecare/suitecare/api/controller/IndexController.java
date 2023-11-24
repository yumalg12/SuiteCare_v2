package com.suitecare.suitecare.api.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class IndexController {

    @GetMapping("/")
    public String home() {
        return "index";
    }

    @GetMapping("/create")
    public String create() {
        return "family/create";
    }

    @RequestMapping(value="/test")
    @ResponseBody
    public String viewApp (Model model) {
        return "React와 Spring Boot 연동 성공";
    }
}
