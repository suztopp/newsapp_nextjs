/// <reference types="cypress" />

it('should navigate to the News App Feed page', () => {
    cy.visit('https://newsapp-nextjs-kohl.vercel.app/feed/1')

    cy.get(':nth-child(1) > h1')

    cy.get(':nth-child(2) > h1')

    cy.get(':nth-child(3) > h1')

    cy.get(':nth-child(4) > h1')

    cy.get(':nth-child(5) > h1')
})