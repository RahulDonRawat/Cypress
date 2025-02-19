describe('First Test Suite', function () {
    it('First Test Case', function () {
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/");

        cy.intercept(
            {
                // Request
                method: 'GET',
                url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
            },
            {
                // Response
                statusCode: 200,
                body: [{
                    "book_name": "RestAssured with Java",
                    "isbn": "LSA",
                    "aisle": "2303"
                }]
            }
        ).as('bookRequest')
        cy.get("button[class='btn btn-primary']").click()

        // If there's a button or event that triggers the request, add it here.
        // For example:
        // cy.get('button[class="trigger-request"]').click();

        // Wait for the request to be intercepted
        cy.wait('@bookRequest');
        cy.get('p').should('have.text',"Oops only 1 Book available")
    });
});
