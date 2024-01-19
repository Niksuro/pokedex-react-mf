/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
      getByData(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>,
      setSliderValue(value: number): Chainable<void>
    }
  }
  
  Cypress.Commands.add('getByData', (selector) => {
    return cy.get(`[data-test=${selector}]`)
  })