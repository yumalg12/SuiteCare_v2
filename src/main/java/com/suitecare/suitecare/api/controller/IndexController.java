package com.suitecare.suitecare.api.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

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
}
