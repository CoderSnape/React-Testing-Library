import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from '../AddInput';


const mockedSetTodo = jest.fn()


describe('AddInput',()=>{

    test('should render input element', async () => {
        render(<AddInput 
                todos={[]} 
                setTodos={mockedSetTodo}
                />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        expect(inputElement).toBeInTheDocument();
      });

      test('should be able to type in input', async () => {
        render(<AddInput 
                todos={[]} 
                setTodos={mockedSetTodo}
                />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        fireEvent.change(inputElement,{target:{value:"hi"}})
        expect(inputElement.value).toBe("hi");
      });


      test('should have empty input when add button is clicked', async () => {
        render(<AddInput 
                todos={[]} 
                setTodos={mockedSetTodo}
                />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        const buttonElement = screen.getByRole("button",{name: /Add/i});

        fireEvent.change(inputElement,{target:{value:"hi"}})
        fireEvent.click(buttonElement)

        expect(inputElement.value).toBe("");
      });

})
