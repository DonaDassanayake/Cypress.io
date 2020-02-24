/// <reference types="cypress"/>

it('should be able to add a new todo to the list', ()=> {
    cy.visit('https://todomvc-app-for-testing.surge.sh')

    //{enter} : this is used to type enter
    cy.get('.new-todo', {timeout:6000}).type("Clean room{enter}")
    cy.get('label').should('have.text','Clean room')
    cy.get('.toggle').should('not.be.checked')
    
    cy.get('.toggle').click()
    cy.get('.toggle').should('be.checked')
    cy.get('label').should('have.css','text-decoration-line','line-through')


    //Contains : When we use this keyword we do not need to write the whole word
    cy.contains('Clear').click()

    cy.get('.todo-list').should('not.have.descendants', 'li')

    //Delay
    //cy.visit('https://todomvc-app-for-testing.surge.sh/?delay-new-todo=5000')
    //cy.get('.new-todo', {timeout:6000}).type("Clean room{enter}")

 
})