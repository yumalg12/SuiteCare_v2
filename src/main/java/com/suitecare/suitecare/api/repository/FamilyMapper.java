package com.suitecare.suitecare.api.repository;

import com.suitecare.suitecare.domain.FamilyDTO;
import com.suitecare.suitecare.domain.LoginDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface FamilyMapper {
    FamilyDTO createFamily(FamilyDTO familyDTO);
    FamilyDTO login(LoginDTO loginDTO);
}
