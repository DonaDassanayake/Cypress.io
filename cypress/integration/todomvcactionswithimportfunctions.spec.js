/// <reference types="cypress" />

import {
    navigate,
    addTodo,
    validateTodoText,
    toggleTodo,
    clearCompleted,
    validateTodoCompletedState,
    validateToggleState,
    validateNumberOfTodosShown,
  } from '../page-objects/todo-page-withexportfunctions'


describe('todo actions',()=>{
    
    beforeEach(()=>{
        navigate()
        addTodo('Clean room')
    })

    it('should add a new todo list', ()=> {      
        validateTodoText(0, 'Clean room')
        validateToggleState(0, false)
        
    })
    
    it('should mark a todo as completed',()=>{
        toggleTodo(0)
        validateToggleState(0, true)
        validateTodoCompletedState(0, true)
    })
    
    it('should clear completed todos',()=>{
        toggleTodo(0)
        clearCompleted()
        validateNumberOfTodosShown(0)    
    })
})