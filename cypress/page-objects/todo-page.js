export class TodoPage{
    navigate(){
        cy.visit('https://todomvc-app-for-testing.surge.sh')
    }

    addTodo(todoText){
        cy.get('.new-todo').type(todoText + "{enter}")
    }

    toggleTodo(todoIndex){
        cy.get(`.todo-list li:nth-child(${todoIndex + 1}) .toggle`).click()
    }


    showOnlyActiveTodos(){
        cy.contains('Active').click()
    }

    showOnlyCompletedTodos(){
        cy.contains('Completed').click()
    }

    showAllTodos(){
        cy.contains('All').click()
    }

    clearCompleted(){
        cy.contains('Clear completed').click()
    }

    validateNumberOfTodosShown(expectedNumOfTodos){
        cy.get('.todo-list li').should('have.length', expectedNumOfTodos)
    }

    validateTodoCompletedState(todoIndex, shouldBeCompleted){
        const label = cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`)
        label.should(`${shouldBeCompleted ? '' : 'not.'}have.css`,'text-decoration-line','line-through')
    }

    validateTodoText(todoIndex, expectedText) {
        cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`).should('have.text', expectedText)
    }
    
    validateToggleState(todoIndex, shouldBeToggled) {
        const label = cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`)
        label.should(`${shouldBeToggled ? '' : 'not.'}be.checked`)
    }




}