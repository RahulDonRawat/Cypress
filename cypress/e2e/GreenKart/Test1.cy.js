//// <reference types="Cypress" />

describe('My First Test Suite', function() {

    it('My First Test Case', function() {

        // Visit the application URL
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

        // Search for products containing 'ca'
        cy.get('.search-keyword').type('ca')

        // Wait until products are visible instead of using a hardcoded wait
        cy.get('.product:visible').should('have.length', 4)

        // Use alias for product section
        cy.get('.products').as('productLocator')

        // Verify the number of visible products
        cy.get('@productLocator').find('.product').should('have.length', 4)

        // Click on the third product's 'ADD TO CART' button
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(() => {
            cy.log('Third product added to cart')
        })

        // Loop through each product and add 'Cashews' to the cart
        cy.get('@productLocator').find('.product').each(($el) => {
            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes('Cashews')) {
                cy.wrap($el).find('button').click()
            }
        })

        // Assert the logo text is correctly displayed
        cy.get('.brand').should('have.text', 'GREENKART')

        // Print the logo text in Cypress logs
        cy.get('.brand').then((logoElement) => {
            cy.log('Logo Text: ' + logoElement.text())
        })
    })

})
