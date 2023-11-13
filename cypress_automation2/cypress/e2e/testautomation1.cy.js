/// <reference types="cypress" />

describe('Automation Demo Site', () => {

  beforeEach('Test Precondition', () => {
    cy.visit('http://demo.automationtesting.in/Windows.html')
    cy.get('.navbar-collapse > .nav > .active > a').click()
   // cy.title().should('eq','Automation Demo Site' )
  })
  it('Register new user', () => {
    cy.get(':nth-child(1) > :nth-child(2) > .form-control').type("automate")
    cy.get("input.ng-touched").type("testing")
    cy.get('.ng-valid').type('1 faker street')
    cy.get('input[type=email]').type('testing001@gmail.com')
    cy.get('input[type=tel]').type('01234567890')
    cy.get('input[value=Male]').should('be.visible').should('not.be.checked')
    cy.get('input[value=FeMale]').should('be.visible').should('be.checked')
    cy.get('input#checkbox1').check().should('be.checked').and('have.value','Cricket')
    cy.get('input#checkbox2').check().should('be.checked').and('have.value','Movies')
    cy.get('input#checkbox3').check().should('be.checked').and('have.value','Hockey')
    cy.get('#Skills').select('C')
    cy.get('#countries')
    cy.get('span.select2-selection--single').select('India')
    cy.get('select[placeholder=Year').select('1922')
    cy.get('select[placeholder=Month').select('May')
    cy.get('select[placeholder=Day').select('15')
    cy.get('input#firstpassword').should('be.visible').should('be.enabled').type('testing')
    cy.get('#secondpassword').should('be.visible').should('be.enabled').type('testing')
    cy.get('#submitbtn').click



  })
})