/// <reference types="cypress" />

it('should navigate to the News App', () => {
    cy.visit('https://newsapp-nextjs-kohl.vercel.app/')

    cy.get('body')
    cy.get('.Toolbar_main__1tofk > :nth-child(3)').click({force: true})
})

