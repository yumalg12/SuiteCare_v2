package com.suitecare.suitecare.api.controller;

import com.suitecare.suitecare.api.service.FamilyService;
import com.suitecare.suitecare.domain.FamilyDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FamilyController {
    @Autowired
    FamilyService familyService;

    @PostMapping("/family")
    public FamilyDTO createFamily(FamilyDTO familyDTO){
        return familyService.createFamily(familyDTO);
    }
}
