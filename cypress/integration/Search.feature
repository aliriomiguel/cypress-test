Feature: Search for Apple in Google.es

    Im searching for Apple in Google.es
    Scenario: Search Apple and check results higher than 100000
        Given I visit Google.es
        When I search for Apple
        And I check if I got More than 100000 results
    
    Scenario: Search Apple and check results less than 10000
        Given I visit Google.es
        When I search for Apple
        And I check if I got Less than 10000 results