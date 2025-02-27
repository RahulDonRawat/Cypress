describe('Session token', function () {
    it("Login_API", function () {
        cy.Login_API().then(() => {
            cy.visit("https://rahulshettyacademy.com/client", {
                onBeforeLoad: (window) => {
                    window.localStorage.setItem('token', Cypress.env('token'));
                }
            });

            cy.get('.card').first().find('.btn.w-10').click();
            cy.contains("Cart").click();
            cy.contains("Checkout").click();

            // **Dynamic Dropdown Selection using Loop**
            cy.get('input[placeholder="Select Country"]').type('India');

            cy.get('.ta-results button', { timeout: 5000 }) // Wait for the dropdown to appear
                .should('be.visible')
                .each(($el) => {
                    if ($el.text().trim() === 'India') { // Check if the text matches "India"
                        cy.wrap($el).click(); // Click on the matched option
                    }
                });

            cy.wait(300);
            cy.get("a.btnn.action__submit").click({ force: true });
            //Dowload CSV
            cy.Login_API().then(() => {
                cy.visit("https://rahulshettyacademy.com/client", {
                    onBeforeLoad: (window) => {
                        window.localStorage.setItem('token', Cypress.env('token'));
                    }
                });

                cy.get('.card').first().find('.btn.w-10').click();
                cy.contains("Cart").click();
                cy.contains("Checkout").click();

                // **Dynamic Dropdown Selection using Loop**
                cy.get('input[placeholder="Select Country"]').type('India');

                cy.get('.ta-results button', { timeout: 5000 }) // Wait for the dropdown to appear
                    .should('be.visible')
                    .each(($el) => {
                        if ($el.text().trim() === 'India') { // Check if the text matches "India"
                            cy.wrap($el).click(); // Click on the matched option
                        }
                    });

                cy.wait(300);
                cy.get("a.btnn.action__submit").click({ force: true });
                //Download csv
                //  cy.contains("Click To Download Order Details in CSV").click()
               
                //Download Excel
                cy.contains("Click To Download Order Details in Excel").click()

            });


        });
    });
});
