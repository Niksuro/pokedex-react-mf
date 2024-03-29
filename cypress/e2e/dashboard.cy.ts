describe('Dashboard page test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.getById('email').type('admin@admin.co')
    cy.getById('password').type('admin')
    cy.contains('Iniciar sesión').click()
    cy.intercept('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10').as(
      'getPokeList'
    )
  })

  it('Select the "Charmander" card and open it', () => {
    cy.wait('@getPokeList').then((interception) => {
      cy.getByData('short-card-title').contains('charmander').click()
      cy.getByData('moves').contains('scratch')
      cy.wait(1000)
      cy.getByData('bg-detail').click()
    })
  })

  it('Change to page "4" and select the "Vulpix" card to open it', () => {
    cy.wait('@getPokeList').then((interception) => {
      cy.getByData('paginator-page').eq(3).click()
      cy.getByData('short-card-title').contains('vulpix').click()
      cy.getByData('moves').contains('headbutt')
      cy.wait(1000)
      cy.getByData('bg-detail').click()
    })
  })

  it('Should Logout from page and block go IN without login', () => {
    cy.getByData('profile-image').click()
    cy.getByData('icon-option').contains('Cerrar sesión').click()
    cy.location('pathname').should('equal', '/')
    cy.visit('http://localhost:3000')
    cy.wait(500)
    cy.location('pathname').should('equal', '/')
  })

  it('Should open profile detail from menu', () => {
    cy.getByData('profile-image').click()
    cy.getByData('icon-option').contains('Perfil').click()
    cy.contains('Nombre de usuario')
    cy.contains('Administrador')
    cy.contains('Correo electrónico')
    cy.contains('admin@admin.co')
  })
})
