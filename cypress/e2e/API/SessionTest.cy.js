/// <reference types="cypress" />

import neatCSV from 'neat-csv';

let productName;

describe('JWT Session', () => {
  it('is logged in through local storage', () => {
    cy.LoginAPI().then(() => {
      cy.visit("https://rahulshettyacademy.com/client", {
        onBeforeLoad: function (window) {
          window.localStorage.setItem('token', Cypress.env('token'));
        }
      });
    });

    // Capture product name
    cy.get(".card-body b").eq(1).then((ele) => {
      productName = ele.text().trim(); // Ensure trimmed text
    });

    // Add product to cart and checkout
    cy.get(".card-body button:last-of-type").eq(1).click();
    cy.get("[routerlink*='cart']").click();
    cy.contains("Checkout").click();

    // Select country
    cy.get("[placeholder*='Country']").type("ind");
    cy.get('.ta-results button').each(($e1) => {
      if ($e1.text().trim() === "India") {
        cy.wrap($e1).click();
      }
    });

    // Place order
    cy.get(".action__submit").click();
    cy.wait(2000);
    cy.get(".order-summary button").click();

    // Verify product name in downloaded CSV
    const filePath = Cypress.config("fileServerFolder") + "/cypress/downloads/order-invoice_rahul.csv";
    cy.readFile(filePath).then((text) => {
      return neatCSV(text);
    }).then((csv) => {
      const actualProductCSV = csv[0]["Product Name"].trim(); // Ensure trimmed text
      expect(productName).to.equal(actualProductCSV);
    });
  });
});
