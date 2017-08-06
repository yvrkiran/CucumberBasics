$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/w2a/cucumber/developer.feature");
formatter.feature({
  "id": "life-of-a-developer",
  "description": "\r\nIn order to get a high paid job\r\nAs a Developer\r\nI want to learn AdvanceJava",
  "name": "Life of a Developer",
  "keyword": "Feature",
  "line": 1
});
formatter.scenarioOutline({
  "id": "life-of-a-developer;i-am-a-java-developer",
  "description": "",
  "name": "I am a Java Developer",
  "keyword": "Scenario Outline",
  "line": 7,
  "type": "scenario_outline"
});
formatter.step({
  "name": "I am a \"\u003cdeveloperType\u003e\" Developer",
  "keyword": "Given ",
  "line": 8,
  "rows": [
    {
      "cells": [
        "Contract",
        "Country"
      ],
      "line": 9
    },
    {
      "cells": [
        "Temp",
        "USA"
      ],
      "line": 10
    },
    {
      "cells": [
        "Permanent",
        "India"
      ],
      "line": 11
    }
  ]
});
formatter.step({
  "name": "I apply for a Developer Job",
  "keyword": "When ",
  "line": 12
});
formatter.step({
  "name": "I got a \"\u003cjobType\u003e\" paid job in Development",
  "keyword": "Then ",
  "line": 13
});
formatter.step({
  "name": "I am \"\u003csatisfactionType\u003e\" satisfied with my salary in Development",
  "keyword": "And ",
  "line": 14
});
formatter.step({
  "name": "my parents are \"\u003cparentsSatisfaction\u003e\" satisfied with the salary in Development",
  "keyword": "But ",
  "line": 15
});
formatter.examples({
  "id": "life-of-a-developer;i-am-a-java-developer;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 17,
  "rows": [
    {
      "id": "life-of-a-developer;i-am-a-java-developer;;1",
      "cells": [
        "developerType",
        "jobType",
        "satisfactionType",
        "parentsSatisfaction"
      ],
      "line": 18
    },
    {
      "id": "life-of-a-developer;i-am-a-java-developer;;2",
      "cells": [
        "CoreJava",
        "less",
        "not",
        "still"
      ],
      "line": 19
    },
    {
      "id": "life-of-a-developer;i-am-a-java-developer;;3",
      "cells": [
        "AdvanceJava",
        "high",
        "very",
        "highly"
      ],
      "line": 20
    }
  ]
});
formatter.scenario({
  "id": "life-of-a-developer;i-am-a-java-developer;;2",
  "description": "",
  "name": "I am a Java Developer",
  "keyword": "Scenario Outline",
  "line": 19,
  "type": "scenario"
});
formatter.step({
  "name": "I am a \"CoreJava\" Developer",
  "keyword": "Given ",
  "line": 8,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "Contract",
        "Country"
      ],
      "line": 9
    },
    {
      "cells": [
        "Temp",
        "USA"
      ],
      "line": 10
    },
    {
      "cells": [
        "Permanent",
        "India"
      ],
      "line": 11
    }
  ]
});
formatter.step({
  "name": "I apply for a Developer Job",
  "keyword": "When ",
  "line": 12
});
formatter.step({
  "name": "I got a \"less\" paid job in Development",
  "keyword": "Then ",
  "line": 13,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I am \"not\" satisfied with my salary in Development",
  "keyword": "And ",
  "line": 14,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "my parents are \"still\" satisfied with the salary in Development",
  "keyword": "But ",
  "line": 15,
  "matchedColumns": [
    3
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "CoreJava",
      "offset": 8
    }
  ],
  "location": "developerSteps.I_am_a_Java_Developer(String,DataTable)"
});
formatter.result({
  "duration": 135646000,
  "status": "passed"
});
formatter.match({
  "location": "developerSteps.I_apply_for_a_Developer_Job()"
});
formatter.result({
  "duration": 79000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "less",
      "offset": 9
    }
  ],
  "location": "developerSteps.I_got_a_less_paid_job(String)"
});
formatter.result({
  "duration": 149000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "not",
      "offset": 6
    }
  ],
  "location": "developerSteps.I_am_not_satisfied_with_my_salary_in_Development(String)"
});
formatter.result({
  "duration": 97000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "still",
      "offset": 16
    }
  ],
  "location": "developerSteps.my_parents_are_still_satisfied_with_the_salary_in_Development(String)"
});
formatter.result({
  "duration": 89000,
  "status": "passed"
});
formatter.scenario({
  "id": "life-of-a-developer;i-am-a-java-developer;;3",
  "description": "",
  "name": "I am a Java Developer",
  "keyword": "Scenario Outline",
  "line": 20,
  "type": "scenario"
});
formatter.step({
  "name": "I am a \"AdvanceJava\" Developer",
  "keyword": "Given ",
  "line": 8,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "Contract",
        "Country"
      ],
      "line": 9
    },
    {
      "cells": [
        "Temp",
        "USA"
      ],
      "line": 10
    },
    {
      "cells": [
        "Permanent",
        "India"
      ],
      "line": 11
    }
  ]
});
formatter.step({
  "name": "I apply for a Developer Job",
  "keyword": "When ",
  "line": 12
});
formatter.step({
  "name": "I got a \"high\" paid job in Development",
  "keyword": "Then ",
  "line": 13,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I am \"very\" satisfied with my salary in Development",
  "keyword": "And ",
  "line": 14,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "my parents are \"highly\" satisfied with the salary in Development",
  "keyword": "But ",
  "line": 15,
  "matchedColumns": [
    3
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "AdvanceJava",
      "offset": 8
    }
  ],
  "location": "developerSteps.I_am_a_Java_Developer(String,DataTable)"
});
formatter.result({
  "duration": 395000,
  "status": "passed"
});
formatter.match({
  "location": "developerSteps.I_apply_for_a_Developer_Job()"
});
formatter.result({
  "duration": 64000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "high",
      "offset": 9
    }
  ],
  "location": "developerSteps.I_got_a_less_paid_job(String)"
});
formatter.result({
  "duration": 77000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "very",
      "offset": 6
    }
  ],
  "location": "developerSteps.I_am_not_satisfied_with_my_salary_in_Development(String)"
});
formatter.result({
  "duration": 70000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "highly",
      "offset": 16
    }
  ],
  "location": "developerSteps.my_parents_are_still_satisfied_with_the_salary_in_Development(String)"
});
formatter.result({
  "duration": 126000,
  "status": "passed"
});
formatter.uri("com/w2a/cucumber/login.feature");
formatter.feature({
  "id": "i-need-to-be-able-to-login.",
  "description": "In order to login \nenter username and password\nand click on Login.",
  "name": "I need to be able to login.",
  "keyword": "Feature",
  "line": 1
});
formatter.scenarioOutline({
  "id": "i-need-to-be-able-to-login.;i-am-a-user-who-wants-to-login",
  "description": "",
  "name": "I am a user who wants to login",
  "keyword": "Scenario Outline",
  "line": 6,
  "type": "scenario_outline"
});
formatter.step({
  "name": "I am a user",
  "keyword": "Given ",
  "line": 7
});
formatter.step({
  "name": "enters a \"\u003cusername\u003e\" in UserName field",
  "keyword": "When ",
  "line": 8
});
formatter.step({
  "name": "enters a \"password\" in Password field",
  "keyword": "And ",
  "line": 9
});
formatter.step({
  "name": "clicks on Login.",
  "keyword": "And ",
  "line": 10
});
formatter.step({
  "name": "I get login \"\u003cmsg\u003e\" message.",
  "keyword": "Then ",
  "line": 11
});
formatter.examples({
  "id": "i-need-to-be-able-to-login.;i-am-a-user-who-wants-to-login;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 13,
  "rows": [
    {
      "id": "i-need-to-be-able-to-login.;i-am-a-user-who-wants-to-login;;1",
      "cells": [
        "username",
        "msg"
      ],
      "line": 14
    },
    {
      "id": "i-need-to-be-able-to-login.;i-am-a-user-who-wants-to-login;;2",
      "cells": [
        "Correctusername",
        "Success"
      ],
      "line": 15
    },
    {
      "id": "i-need-to-be-able-to-login.;i-am-a-user-who-wants-to-login;;3",
      "cells": [
        "InCorrectusername",
        "Failed"
      ],
      "line": 16
    }
  ]
});
formatter.scenario({
  "id": "i-need-to-be-able-to-login.;i-am-a-user-who-wants-to-login;;2",
  "description": "",
  "name": "I am a user who wants to login",
  "keyword": "Scenario Outline",
  "line": 15,
  "type": "scenario"
});
formatter.step({
  "name": "I am a user",
  "keyword": "Given ",
  "line": 7
});
formatter.step({
  "name": "enters a \"Correctusername\" in UserName field",
  "keyword": "When ",
  "line": 8,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "enters a \"password\" in Password field",
  "keyword": "And ",
  "line": 9
});
formatter.step({
  "name": "clicks on Login.",
  "keyword": "And ",
  "line": 10
});
formatter.step({
  "name": "I get login \"Success\" message.",
  "keyword": "Then ",
  "line": 11,
  "matchedColumns": [
    1
  ]
});
formatter.match({
  "location": "Login.I_am_a_user()"
});
formatter.result({
  "duration": 199000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Correctusername",
      "offset": 10
    }
  ],
  "location": "Login.enters_a_username(String)"
});
formatter.result({
  "duration": 168000,
  "status": "passed"
});
formatter.match({
  "location": "Login.enters_a_password()"
});
formatter.result({
  "duration": 69000,
  "status": "passed"
});
formatter.match({
  "location": "Login.clicks_on_Login()"
});
formatter.result({
  "duration": 57000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 13
    }
  ],
  "location": "Login.I_get_logged_message(String)"
});
formatter.result({
  "duration": 122000,
  "status": "passed"
});
formatter.scenario({
  "id": "i-need-to-be-able-to-login.;i-am-a-user-who-wants-to-login;;3",
  "description": "",
  "name": "I am a user who wants to login",
  "keyword": "Scenario Outline",
  "line": 16,
  "type": "scenario"
});
formatter.step({
  "name": "I am a user",
  "keyword": "Given ",
  "line": 7
});
formatter.step({
  "name": "enters a \"InCorrectusername\" in UserName field",
  "keyword": "When ",
  "line": 8,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "enters a \"password\" in Password field",
  "keyword": "And ",
  "line": 9
});
formatter.step({
  "name": "clicks on Login.",
  "keyword": "And ",
  "line": 10
});
formatter.step({
  "name": "I get login \"Failed\" message.",
  "keyword": "Then ",
  "line": 11,
  "matchedColumns": [
    1
  ]
});
formatter.match({
  "location": "Login.I_am_a_user()"
});
formatter.result({
  "duration": 175000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "InCorrectusername",
      "offset": 10
    }
  ],
  "location": "Login.enters_a_username(String)"
});
formatter.result({
  "duration": 82000,
  "status": "passed"
});
formatter.match({
  "location": "Login.enters_a_password()"
});
formatter.result({
  "duration": 39000,
  "status": "passed"
});
formatter.match({
  "location": "Login.clicks_on_Login()"
});
formatter.result({
  "duration": 40000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Failed",
      "offset": 13
    }
  ],
  "location": "Login.I_get_logged_message(String)"
});
formatter.result({
  "duration": 103000,
  "status": "passed"
});
formatter.uri("com/w2a/cucumber/tester.feature");
formatter.feature({
  "id": "life-of-a-tester",
  "description": "\r\nIn order to get a high paid job\r\nAs a tester\r\nI want to learn Automation testing",
  "name": "Life of a Tester",
  "keyword": "Feature",
  "line": 1
});
formatter.scenarioOutline({
  "id": "life-of-a-tester;i-am-a-tester",
  "description": "",
  "name": "I am a Tester",
  "keyword": "Scenario Outline",
  "line": 7,
  "type": "scenario_outline"
});
formatter.step({
  "name": "I am a \"\u003ctesterType\u003e\" Tester",
  "keyword": "Given ",
  "line": 8,
  "rows": [
    {
      "cells": [
        "Contract",
        "Country"
      ],
      "line": 9
    },
    {
      "cells": [
        "Temp",
        "USA"
      ],
      "line": 10
    },
    {
      "cells": [
        "Permanent",
        "India"
      ],
      "line": 11
    }
  ]
});
formatter.step({
  "name": "I apply for a Job",
  "keyword": "When ",
  "line": 12
});
formatter.step({
  "name": "I got a \"\u003cjobType\u003e\" paid job",
  "keyword": "Then ",
  "line": 13
});
formatter.step({
  "name": "I am \"\u003csatisfactionType\u003e\" satisfied with my salary",
  "keyword": "And ",
  "line": 14
});
formatter.step({
  "name": "my parents are \"\u003cparentsSatisfaction\u003e\" satisfied with the salary",
  "keyword": "But ",
  "line": 15
});
formatter.examples({
  "id": "life-of-a-tester;i-am-a-tester;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 17,
  "rows": [
    {
      "id": "life-of-a-tester;i-am-a-tester;;1",
      "cells": [
        "testerType",
        "jobType",
        "satisfactionType",
        "parentsSatisfaction"
      ],
      "line": 18
    },
    {
      "id": "life-of-a-tester;i-am-a-tester;;2",
      "cells": [
        "Manual",
        "less",
        "not",
        "still"
      ],
      "line": 19
    },
    {
      "id": "life-of-a-tester;i-am-a-tester;;3",
      "cells": [
        "Automation",
        "high",
        "very",
        "highly"
      ],
      "line": 20
    },
    {
      "id": "life-of-a-tester;i-am-a-tester;;4",
      "cells": [
        "Database",
        "avg",
        "average",
        "dangling"
      ],
      "line": 21
    }
  ]
});
formatter.scenario({
  "id": "life-of-a-tester;i-am-a-tester;;2",
  "description": "",
  "name": "I am a Tester",
  "keyword": "Scenario Outline",
  "line": 19,
  "type": "scenario"
});
formatter.step({
  "name": "I am a \"Manual\" Tester",
  "keyword": "Given ",
  "line": 8,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "Contract",
        "Country"
      ],
      "line": 9
    },
    {
      "cells": [
        "Temp",
        "USA"
      ],
      "line": 10
    },
    {
      "cells": [
        "Permanent",
        "India"
      ],
      "line": 11
    }
  ]
});
formatter.step({
  "name": "I apply for a Job",
  "keyword": "When ",
  "line": 12
});
formatter.step({
  "name": "I got a \"less\" paid job",
  "keyword": "Then ",
  "line": 13,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I am \"not\" satisfied with my salary",
  "keyword": "And ",
  "line": 14,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "my parents are \"still\" satisfied with the salary",
  "keyword": "But ",
  "line": 15,
  "matchedColumns": [
    3
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "Manual",
      "offset": 8
    }
  ],
  "location": "testerSteps.I_am_a_Manual_Tester(String,DataTable)"
});
formatter.result({
  "duration": 235000,
  "status": "passed"
});
formatter.match({
  "location": "testerSteps.I_apply_for_a_Job()"
});
formatter.result({
  "duration": 50000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "less",
      "offset": 9
    }
  ],
  "location": "testerSteps.I_got_a_less_paid_job(String)"
});
formatter.result({
  "duration": 111000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "not",
      "offset": 6
    }
  ],
  "location": "testerSteps.I_am_not_satisfied_with_my_salary(String)"
});
formatter.result({
  "duration": 132000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "still",
      "offset": 16
    }
  ],
  "location": "testerSteps.my_parents_are_still_satisfied_with_the_salary(String)"
});
formatter.result({
  "duration": 139000,
  "status": "passed"
});
formatter.scenario({
  "id": "life-of-a-tester;i-am-a-tester;;3",
  "description": "",
  "name": "I am a Tester",
  "keyword": "Scenario Outline",
  "line": 20,
  "type": "scenario"
});
formatter.step({
  "name": "I am a \"Automation\" Tester",
  "keyword": "Given ",
  "line": 8,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "Contract",
        "Country"
      ],
      "line": 9
    },
    {
      "cells": [
        "Temp",
        "USA"
      ],
      "line": 10
    },
    {
      "cells": [
        "Permanent",
        "India"
      ],
      "line": 11
    }
  ]
});
formatter.step({
  "name": "I apply for a Job",
  "keyword": "When ",
  "line": 12
});
formatter.step({
  "name": "I got a \"high\" paid job",
  "keyword": "Then ",
  "line": 13,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I am \"very\" satisfied with my salary",
  "keyword": "And ",
  "line": 14,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "my parents are \"highly\" satisfied with the salary",
  "keyword": "But ",
  "line": 15,
  "matchedColumns": [
    3
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "Automation",
      "offset": 8
    }
  ],
  "location": "testerSteps.I_am_a_Manual_Tester(String,DataTable)"
});
formatter.result({
  "duration": 214000,
  "status": "passed"
});
formatter.match({
  "location": "testerSteps.I_apply_for_a_Job()"
});
formatter.result({
  "duration": 42000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "high",
      "offset": 9
    }
  ],
  "location": "testerSteps.I_got_a_less_paid_job(String)"
});
formatter.result({
  "duration": 78000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "very",
      "offset": 6
    }
  ],
  "location": "testerSteps.I_am_not_satisfied_with_my_salary(String)"
});
formatter.result({
  "duration": 83000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "highly",
      "offset": 16
    }
  ],
  "location": "testerSteps.my_parents_are_still_satisfied_with_the_salary(String)"
});
formatter.result({
  "duration": 121000,
  "status": "passed"
});
formatter.scenario({
  "id": "life-of-a-tester;i-am-a-tester;;4",
  "description": "",
  "name": "I am a Tester",
  "keyword": "Scenario Outline",
  "line": 21,
  "type": "scenario"
});
formatter.step({
  "name": "I am a \"Database\" Tester",
  "keyword": "Given ",
  "line": 8,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "Contract",
        "Country"
      ],
      "line": 9
    },
    {
      "cells": [
        "Temp",
        "USA"
      ],
      "line": 10
    },
    {
      "cells": [
        "Permanent",
        "India"
      ],
      "line": 11
    }
  ]
});
formatter.step({
  "name": "I apply for a Job",
  "keyword": "When ",
  "line": 12
});
formatter.step({
  "name": "I got a \"avg\" paid job",
  "keyword": "Then ",
  "line": 13,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I am \"average\" satisfied with my salary",
  "keyword": "And ",
  "line": 14,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "my parents are \"dangling\" satisfied with the salary",
  "keyword": "But ",
  "line": 15,
  "matchedColumns": [
    3
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "Database",
      "offset": 8
    }
  ],
  "location": "testerSteps.I_am_a_Manual_Tester(String,DataTable)"
});
formatter.result({
  "duration": 381000,
  "status": "passed"
});
formatter.match({
  "location": "testerSteps.I_apply_for_a_Job()"
});
formatter.result({
  "duration": 71000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "avg",
      "offset": 9
    }
  ],
  "location": "testerSteps.I_got_a_less_paid_job(String)"
});
formatter.result({
  "duration": 121000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "average",
      "offset": 6
    }
  ],
  "location": "testerSteps.I_am_not_satisfied_with_my_salary(String)"
});
formatter.result({
  "duration": 151000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dangling",
      "offset": 16
    }
  ],
  "location": "testerSteps.my_parents_are_still_satisfied_with_the_salary(String)"
});
formatter.result({
  "duration": 154000,
  "status": "passed"
});
});