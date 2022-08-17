


describe('Energy Australia Test', () => {
    beforeEach(function () {
        cy.visit(Cypress.env('baseUrl'))
    })


    it('Api is not returning empty values as part of list data', () => {
        cy.get('li').each(($btn, index, $list) => {
            cy.log($btn.text())
            cy.get('li').eq(index).should('not.be.empty')
        })
    })

    it('Band name returned by API should be displayed in sorted manner in UI', () => {
        let arr = [];
        cy.get('ol li').each(($btn, index, $list) => {
            arr.push($btn.text())
            if (index % 2 === 0) {
                cy.log($btn.text())
            }
            else {
                //do nothing
            }
        }).then(() => {
            cy.wrap(arr).should("equal", arr.sort());
            cy.log('Test Success')

        })
    })
})



