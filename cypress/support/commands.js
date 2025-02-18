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
//
Cypress.Commands.add('submitFormDetails',()=>
{
        cy.get("#country").type("India")
        cy.get(".suggestions ul li a").click()
        cy.get(".btn-success").click()
})
Cypress.Commands.add('addProductToCart', (productName) => {
        cy.get('.products').find('.product').each(($el) => {
            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes(productName)) {
                cy.wrap($el).find('button').click()
            }
        })
    })
    



