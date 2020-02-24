// <reference types="cypress"/>

import { TodoPage } from "../page-objects/todo-page"

/*This shows how the same actions could be used with Page Object Class*/

describe('todo actions',()=>{
    //Creating a Const variable because do not need to change the value of this
    const todoPage = new TodoPage()

    beforeEach(()=>{
        todoPage.navigate()
        todoPage.addTodo('Clean room')
    })

    it('should add a new todo list', ()=> {      
        todoPage.validateTodoText(0, 'Clean room')
        todoPage.validateToggleState(0, false)
        
    })
    
    it('should mark a todo as completed',()=>{
        todoPage.toggleTodo(0)
        todoPage.validateToggleState(0, true)
        todoPage.validateTodoCompletedState(0, true)
    })
    
    it('should clear completed todos',()=>{
        todoPage.toggleTodo(0)
        todoPage.clearCompleted()
        todoPage.validateNumberOfTodosShown(0)    
    })
})
