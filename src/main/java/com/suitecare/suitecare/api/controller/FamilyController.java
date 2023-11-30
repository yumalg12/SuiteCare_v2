package com.suitecare.suitecare.api.controller;

import com.suitecare.suitecare.api.service.FamilyService;
import com.suitecare.suitecare.domain.CreateFamilyDTO;
import com.suitecare.suitecare.domain.FamilyDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class FamilyController {
    @Autowired
    FamilyService familyService;

    @PostMapping("/family")
    public int createFamily(@RequestBody CreateFamilyDTO createFamilyDTO){
        return familyService.createFamily(createFamilyDTO);
    }
}
