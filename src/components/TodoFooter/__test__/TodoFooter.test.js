import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter } from 'react-router-dom';
const MockTodoFooter=({numberOfIncompleteTasks})=>{
    return(
        <BrowserRouter>
            <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
        </BrowserRouter>
        )
}

test('should render Correct number of incomplete tasks', async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={5}/> );
  const paragraphElement = screen.getByText(/5 tasks left/i);
  expect(paragraphElement).toBeInTheDocument();
});

test('should render "task" when number of incomplete task is 1', async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1}/> );
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeInTheDocument();
});

test('should render "task" when number of incomplete task is 1', async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1}/> );
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeTruthy();
});

test('should render "task" when number of incomplete task is 1', async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1}/> );
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeVisible();
});

test('should render "task" when number of incomplete task is 1', async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1}/> );
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toContainHTML('p');
});

test('should render "task" when number of incomplete task is 1', async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1}/> );
    const paragraphElement = screen.getByTestId("para");
    expect(paragraphElement).toHaveTextContent('1 task left');
});

test('should render "task" when number of incomplete task is 1', async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1}/> );
    const paragraphElement = screen.getByTestId("para");
    expect(paragraphElement.textContent).toBe('1 task left');
});

describe('This is Describe block that groups similar kind of test',()=>{

    describe('It can have describe inside describe',()=>{

        test('should render "task" when number of incomplete task is 1', async () => {
            render(<MockTodoFooter numberOfIncompleteTasks={1}/> );
            const paragraphElement = screen.getByTestId("para");
            expect(paragraphElement).toHaveTextContent('1 task left');
        });
        
    })
    
    
    test('should render "task" when number of incomplete task is 1', async () => {
        render(<MockTodoFooter numberOfIncompleteTasks={1}/> );
        const paragraphElement = screen.getByTestId("para");
        expect(paragraphElement.textContent).toBe('1 task left');
    });
})