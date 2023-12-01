package com.suitecare.suitecare.api.service;

import com.suitecare.suitecare.api.repository.FamilyMapper;
import com.suitecare.suitecare.domain.CreateFamilyDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class FamilyService {
    @Autowired
    FamilyMapper familyMapper;

    @Transactional
    public int createFamily(CreateFamilyDTO createFamilyDTO){
        return familyMapper.createFamily(createFamilyDTO);
    }

    public int checkDuplicateID(String id){
        return familyMapper.checkDuplicateID(id);
    }
}