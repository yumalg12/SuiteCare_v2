package com.sc.suitecare.member;

import org.springframework.stereotype.Service;

@Service
public interface MemberService {
	public boolean join(MemberVO vo);
}
