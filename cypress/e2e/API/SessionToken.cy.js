describe('Session token', function () {
    it("Login_API", function () {
        cy.Login_API().then(() => {
            cy.visit("https://rahulshettyacademy.com/client", {
                onBeforeLoad: (window) => {
                    window.localStorage.setItem('token', Cypress.env('token'));
                }

            });
            cy.get('.card').first().find('.btn.w-10').click();
            cy.contains("Cart").click()
            cy.contains("Checkout").click()
            cy.get('input[placeholder="Select Country"]').type('India');
            cy.get('.ta-results button').each(($el) => {
                if ($el.text() === 'India') {  // Check if the text is "India"
                  cy.wrap($el).click();  // Click on the matching option
                }
              });
              cy.get(".action_submit").click();


        });
    });






});
