describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080/sandbox.html')
    cy.contains('a button').click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`Works`)
    })
  })
})