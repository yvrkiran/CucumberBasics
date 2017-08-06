Feature: Life of a Tester
	
In order to get a high paid job
As a tester
I want to learn Automation testing

Scenario Outline: I am a Tester
Given I am a "<testerType>" Tester
| Contract  | Country |
| Temp      | USA     |
| Permanent | India   |
When I apply for a Job
Then I got a "<jobType>" paid job
And I am "<satisfactionType>" satisfied with my salary
But my parents are "<parentsSatisfaction>" satisfied with the salary

Examples:
 |  testerType  |  jobType |  satisfactionType  |  parentsSatisfaction |
 |  Manual      |  less    |  not               |  still               |
 |  Automation  |  high    |  very              |  highly              |
 |  Database    |  avg     |  average           |  dangling            |