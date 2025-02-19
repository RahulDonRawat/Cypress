// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })



//Custom command for Login API
Cypress.Commands.add('Login_API', () => {
    cy.request({
        method: "POST",
        url: "https://rahulshettyacademy.com/api/ecom/auth/login",
        body: {
            userEmail: "rawat@gmail.com",
            userPassword: "Password@1234"
        }
    }).then((response) => {
        expect(response.status).to.eq(200);
        Cypress.env('token', response.body.token);
    });
});


Cypress.Commands.add('submitFormDetails',()=>
{
        cy.get("#country").type("India")
        cy.get(".suggestions ul li a").click()
        cy.get(".btn-success").click()
})

Cypress.Commands.add('addProductToCart', (productName) => {
    cy.get('.products').find('.product').each(($el) => {
        cy.wrap($el).find('h4.product-name').invoke('text').then((text) => {
            if (text.includes(productName)) {
                cy.wrap($el).find('button').click();
            }
        });
    });
});




