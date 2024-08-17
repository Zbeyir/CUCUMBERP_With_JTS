Feature: to test home page fuctionality2
   
   Scenario: to test home page uctionality2
    Given User is on home page
    When User enter login details
    And Home page should be displayed
    When Upon logout
    Then Logout should be successfull
    And This is a dummy step to fail