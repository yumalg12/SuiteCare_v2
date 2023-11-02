package com.sc.suitecare.member;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class TestController {
	
	@Autowired
	MemberService service;
	
	@RequestMapping(value = "/join", method = RequestMethod.GET)
	public String join() {
		return "join";
	}
	
	@RequestMapping(value = "/connect", method = RequestMethod.POST)
	public ModelAndView join(@RequestParam Map<String, String> mem, HttpServletRequest request, HttpServletResponse response) throws Exception {
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html; charset=utf-8");
		
		MemberVO vo = new MemberVO(mem.get("id"), mem.get("name"));
		service.join(vo);
		
		ModelAndView mav = new ModelAndView();
		mav.setViewName("home");
		
		return mav;
	}
}
