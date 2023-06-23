import { render, screen, fireEvent } from '@testing-library/react';
import Todo from '../Todo';
import { BrowserRouter } from 'react-router-dom';

const MockTodo=()=>{
    return(
            <BrowserRouter>
                <Todo/>
            </BrowserRouter>
            )
}

const addTask =(tasks)=>{
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button",{name: /Add/i});
    tasks.forEach(task => {
        fireEvent.change(inputElement,{target:{value: task}})
        fireEvent.click(buttonElement)
    });
}

describe('Todo',()=>{
    it('it should render todo',async ()=>{
        render ( <MockTodo />);
        addTask(["Go"])
        const divElement = screen.getByText(/Go/i)
        expect(divElement).toBeInTheDocument()
    });

    it('it should render multiple elements',async ()=>{
        render ( <MockTodo />);
        addTask(["Go", "Hey", "Where"])
        const divElement = screen.getAllByTestId("task-container")
        expect(divElement.length).toBe(3)
    });

    it('task should not have completed class when initially rendered',async ()=>{
        render ( <MockTodo />);
        addTask(["Go"])
        const divElement = screen.getByText(/Go/i)
        expect(divElement).not.toHaveClass("todo-item-active")
    });

    it('task should  have completed class when initially rendered',async ()=>{
        render ( <MockTodo />);
        addTask(["Go"])
        const divElement = screen.getByText(/Go/i)
        fireEvent.click(divElement)
        expect(divElement).toHaveClass("todo-item-active")
    });

})
