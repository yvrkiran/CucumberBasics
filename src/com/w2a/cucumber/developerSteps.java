package com.w2a.cucumber;

import java.util.List;
import java.util.Map;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class developerSteps {
	
	
	
	@Given("^I am a \"([a-zA-Z]{1,})\" Developer$")
	public void I_am_a_Java_Developer(String developerType,DataTable table){
		
		//List<Map<String, String>> data = table.asMaps(String.class, String.class);
		List<Map<String, String>> data = table.asMaps(String.class,String.class);
		
		
		System.out.println("########################");
		System.out.println("@Given -- I am a "+developerType+" Developer "+" Contract Type "+data.get(0).get("Contract")+" Country "+data.get(0).get("Country"));
		System.out.println("@Given -- I am a "+developerType+" Developer "+" Contract Type "+data.get(1).get("Contract")+" Country "+data.get(1).get("Country"));
		
	}
	
	
	@When("^I apply for a Developer Job$")
	public void I_apply_for_a_Developer_Job(){
		
		System.out.println("@When -- I apply for a Developer Job");
		
	}
	
	@Then("^I got a \"([a-zA-Z]{1,})\" paid job in Development$")
	public void I_got_a_less_paid_job(String jobType){
		
		System.out.println("@Then -- I got a "+jobType+" paid job in Development");
		
	}
	
	@And("^I am \"([a-zA-Z]{1,})\" satisfied with my salary in Development$")
	public void I_am_not_satisfied_with_my_salary_in_Development(String satisfactionType){
		
		
		System.out.println("@And -- I am "+satisfactionType+" satisfied with my salary in Development");
	}
	
	@But("^my parents are \"([^\"]*)\" satisfied with the salary in Development$")
	public void my_parents_are_still_satisfied_with_the_salary_in_Development(String parentsSatisfaction){
		
		System.out.println("@But -- my parents are "+parentsSatisfaction+" satisfied with the salary in Development");
		
	}

}
