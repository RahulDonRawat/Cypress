describe('Fisrt test suite', function () {

    it('Fisrst test case', function () {
        cy.intercept
            (
                'GET',
                'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
                (req) => {
                    req.url = "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=Rawat"
                    req.continue((res) => {

                        expect(res.statusCode).to.equal(403)
                    })
                }
            ).as("dummyURL")
        cy.get("button[class='btn btn-primary']").click()
        cy.wait('@dummyURL')
    })




})