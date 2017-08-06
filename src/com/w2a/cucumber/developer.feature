Feature: Life of a Developer
	
In order to get a high paid job
As a Developer
I want to learn AdvanceJava

Scenario Outline: I am a Java Developer
Given I am a "<developerType>" Developer
| Contract  | Country |
| Temp      | USA     |
| Permanent | India   |
When I apply for a Developer Job
Then I got a "<jobType>" paid job in Development
And I am "<satisfactionType>" satisfied with my salary in Development
But my parents are "<parentsSatisfaction>" satisfied with the salary in Development

Examples:
 |  developerType  |  jobType |  satisfactionType  |  parentsSatisfaction |
 |  CoreJava       |  less    |  not               |  still               |
 |  AdvanceJava    |  high    |  very              |  highly              |
