describe('empty spec', () => {
  
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.visit('http://localhost:3000/gallery')
    cy.get("a").each($el => {
      if ($el.prop('href').length > 0) {
            cy.visit("http://localhost:3000"+$el.attr('href'))         
            cy.go("back")
      }
    })
  })

})