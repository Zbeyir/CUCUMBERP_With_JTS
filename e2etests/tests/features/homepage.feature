Feature: to test home page fuctionality1

  Scenario: to test home page uctionality1
    Given User is on home page
    When User enter login details
    And Home page should be displayed
    When Upon logout
    Then Logout should be successfull

