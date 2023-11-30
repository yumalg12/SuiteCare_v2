package com.suitecare.suitecare.api.repository;

import com.suitecare.suitecare.domain.CreateFamilyDTO;
import com.suitecare.suitecare.domain.FamilyDTO;
import com.suitecare.suitecare.domain.LoginDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface FamilyMapper {
    int createFamily(CreateFamilyDTO createFamilyDTO);
    FamilyDTO login(LoginDTO loginDTO);
    int checkDuplicateID(String id);
}
