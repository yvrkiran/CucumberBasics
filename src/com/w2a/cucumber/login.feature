Feature: I need to be able to login.
In order to login 
enter username and password
and click on Login.

Scenario Outline: I am a user who wants to login
Given I am a user
When enters a "<username>" in UserName field
And enters a "password" in Password field
And clicks on Login.
Then I get login "<msg>" message.

Examples:
|username			|msg	|
|Correctusername  	|Success|
|InCorrectusername	|Failed	|