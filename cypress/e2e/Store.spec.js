/// <reference types="cypress" />

import { makeServer } from '../../miragejs/server'

context('Store', () => {
    let server

    beforeEach(() => {
        server = makeServer({ environment: 'test' })
    })

    afterEach(() => {
        server.shutdown()
    })

    it('should display the store', () => {
        cy.visit('http://localhost:3000')

        cy.get('body').contains('Brand')
        cy.get('body').contains('Wrist Watch')
    })

    context('Store > Search for Products', () => {
        it.only('should type in the search field', () => {
            cy.visit('http://localhost:3000')

            cy.get('input[type="search"]')
                .type('Some text here')
                .should('have.value', 'Some text here')
        })
    })
})
