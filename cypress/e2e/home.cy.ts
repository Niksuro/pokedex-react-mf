describe('Home page test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('the label forms exists', () => {
    cy.getByData('label-form').contains('Usuario')
  })
})
