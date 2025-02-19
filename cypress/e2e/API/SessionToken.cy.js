describe('Session token', function () {
    it("Login_API", function () {
        cy.Login_API().then(() => {
            cy.visit("https://rahulshettyacademy.com/client", {
                onBeforeLoad: (window) => {
                    window.localStorage.setItem('token', Cypress.env('token'));
                }
            });
        });
    });
});
