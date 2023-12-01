package com.suitecare.suitecare.api.controller;

import com.suitecare.suitecare.api.service.FamilyService;
import com.suitecare.suitecare.domain.CreateFamilyDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/api/v1")
@CrossOrigin()
public class FamilyController {
    @Autowired
    FamilyService familyService;

    @PostMapping("/family")
    public int createFamily(@RequestBody CreateFamilyDTO createFamilyDTO){
        return familyService.createFamily(createFamilyDTO);
    }

    @GetMapping("/family")
    public int checkDuplicateID(@RequestParam String id){
        return familyService.checkDuplicateID(id);
    }
}
