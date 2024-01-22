describe('Login page test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Load successfully the page', () => {
    cy.get('h1').contains('¡Bienvenido!')
    cy.get('h2').contains('Ingresa tus datos')
    cy.getByData('label-form').contains('Correo electrónico')
    cy.getByData('label-form').contains('Contraseña')
  })

  it('Correct use of login', () => {
    cy.getById('email').type('admin@admin.co')
    cy.getById('password').type('admin')
    cy.contains('Iniciar sesión').click()
    cy.location('pathname').should('equal', '/dashboard')
  })

  it('Incorrect use of login by bad email', () => {
    cy.getById('email').type('user@admin.co')
    cy.getById('password').type('admin')
    cy.contains('Iniciar sesión').click()
    cy.contains('Correo o contraseña incorrectos').should('exist')
  })

  it('Incorrect use of login by bad password', () => {
    cy.getById('email').type('admin@admin.co')
    cy.getById('password').type('admin2')
    cy.contains('Iniciar sesión').click()
    cy.contains('Correo o contraseña incorrectos').should('exist')
  })

  it('Correct use of login by bad password but try again, with correct data', () => {
    cy.intercept('/api/auth/callback/credentials').as('getAuth')
    cy.getById('email').type('admin@admin.co')
    cy.getById('password').type('admin2')
    cy.contains('Iniciar sesión').click()
    cy.wait('@getAuth').then((interception) => {
      cy.contains('Inténtalo de nuevo').click()
      cy.getById('password').clear()
      cy.getById('password').type('admin')
      cy.getById('showPassword').click()
      cy.contains('Iniciar sesión').click()
      cy.location('pathname').should('equal', '/dashboard')
    })
  })
})
