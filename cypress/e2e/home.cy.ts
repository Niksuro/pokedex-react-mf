describe('Home page test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('the label forms exists', () => {
    cy.get('h1').contains('¡Bienvenido!')
    cy.get('h2').contains('Ingresa tus datos')
    cy.getByData('label-form').contains('Usuario')
    cy.getByData('label-form').contains('Contraseña')
    cy.getByData('button').contains('Iniciar sesión')
  })
})
