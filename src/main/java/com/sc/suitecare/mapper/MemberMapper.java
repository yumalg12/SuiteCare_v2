package com.sc.suitecare.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.sc.suitecare.member.MemberVO;

@Mapper
public interface MemberMapper {
	
	@Insert("INSERT INTO member(id, name) VALUES(#{member.id}, #{member.name})")
	public boolean join(@Param("member") MemberVO vo);
}
