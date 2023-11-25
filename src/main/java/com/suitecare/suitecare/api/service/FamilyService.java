package com.suitecare.suitecare.api.service;

import com.suitecare.suitecare.api.repository.FamilyMapper;
import com.suitecare.suitecare.domain.FamilyDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FamilyService {
    @Autowired
    FamilyMapper familyMapper;

    public FamilyDTO createFamily(FamilyDTO familyDTO){
        return familyMapper.createFamily(familyDTO);
    }
}
