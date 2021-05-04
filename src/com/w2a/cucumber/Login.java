package com.w2a.cucumber;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Login {

	@Given ("^I am a user$")
	public void I_am_a_user () {
		System.out.println("#########################");
		System.out.println("@Given --> I am a User who wants to login");
		
	}
	
	@When("^enters a \"([a-zA-Z]{1,})\" in UserName field$")
	public void enters_a_username(String username)  {
	    // Express the Regexp above with the code you wish you had

		System.out.println("@When --> enters a "+username+" in UserName field");
	}

	@And("^enters a \"[a-zA-Z]{1,}\" in Password field$")
	public void enters_a_password(String password) throws Throwable {
	    // Express the Regexp above with the code you wish you had
		System.out.println("@And --> enters a "+password+" in Password field");
	}

	@And("^clicks on Login.$")
	public void clicks_on_Login() throws Throwable {
	    // Express the Regexp above with the code you wish you had
		System.out.println("@And --> clicks on Login.");
	}

	@Then("^I get login \"([a-zA-Z]{1,})\" message.$")
	public void I_get_logged_message(String msg) throws Throwable {
	    // Express the Regexp above with the code you wish you had
		System.out.println("@Then --> I get login "+msg+" message");
	}


}
