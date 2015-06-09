# code-challenge

## Setup
This project requires the following to be installed on your machine:
* node.js
* npm
* grunt-cli
* bower

To set the project up, install the bower and npm dependencies and run 'grunt serve'. This
will start a server at 'localhost:9000' and launch the application in your default browser.

## Structure
This project is a simple angular application. It uses ui-router for routing and ng-mock-E2E for mock API data.
The routes can be found in app/scripts/app.js and the mock data for each endpoint can be found in app/scripts/mocks/mocks.js

## Grading

This is graded on a few different categories:

* Code quality (jshint issues, formatting, etc)
* Simplicity (as few lines of readable, sensible code as possible)
* Following best-practices and conventions

Pages should be built using bootstrap-friendly selectors.

## Problems
1. In our home controller, there is a list of planets being fetched from a mock API. Try to simplify the $scope.planets
property in the controller as much as possible.
    * **Bonus**: Move the API call into an angular factory and write a unit test for it.
    * **Bonus**: Make it so the data can be injected into the controller via dependency injection.
    * **Bonus**: Add an unordered list of planets to the page using the same data and make the planet names italic.
1. There is a page at '#/data' that is throwing an error. Fix the error so the page renders properly.
1. Add a main nav entry for the page at '#/data'
1. On the page at '#/data', add the user's image and friends list to each user.
1. On the page at '#/data', add a paragraph that contains a comma-separated list of tags for each user.
1. Using bootstrap's grid, make the page display 2 columns of data.
1. There is a page at '#/form', but it doesn't have an entry in the main nav. Add an entry for this page.
1. Finish form on the '#/form' page. This form should follow bootstrap's styles for a standard form (label above input,
1 column, primary color button). The form should have the following fields added to it:
    * Email
    * Password
    * **Bonus**: Add form validation to the form. The submit button should be disabled until the form is valid
        1. The name fields should validate against A-Z case insensitive.
        1. The email field should be a valid email address
        1. The password field should only take A-Z case insensitive and 0-9
        1. All fields should be required
    * **Bonus**: Add validation messaging to the form so a validation message shows below the input in red text when the field
    is invalid and blurred.
    * **Bonus**: The submit button should make a message appear below the button that gives one of two messages when clicked:
        1. If the form is valid, it should say "Thank you. Your form is being processed" in green text.
        1. If the form is not valid, it should say "Please correct errors and try again" in red text.

