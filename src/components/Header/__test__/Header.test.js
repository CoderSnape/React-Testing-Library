import { render, screen } from '@testing-library/react';
import Header from '../Header';

test('should render same text passed in title prop', () => {
  render(<Header title={"my test"} />);
  const headerElement = screen.getByText(/my test/i);
  expect(headerElement).toBeInTheDocument();
});

it('getByRole', () => {
    render(<Header title={"my test"} />);
    const headerElement = screen.getByRole("heading",{name:"my test"});
    expect(headerElement).toBeInTheDocument();
  });
  
  it('should render same text passed in title prop', () => {
    render(<Header title={"my test"} />);
    const headerElement = screen.getByTitle("headerTitle");
    expect(headerElement).toBeInTheDocument();
  });

  it('should render same text passed in title prop', () => {
    render(<Header title={"my test"} />);
    const headerElement = screen.getByTestId("header-1");
    expect(headerElement).toBeInTheDocument();
  });

  // findBy

  it('should render same text passed in title prop', async () => {
    render(<Header title={"My test"} />);
    const headerElement = await screen.findByText(/my test/i);  // Async Await => findBy
    expect(headerElement).toBeInTheDocument();
  });

    // queryBy

    it('should render same text passed in title prop',  () => {
      render(<Header title={"My test"} />);
      const headerElement =  screen.queryByTitle(/dogs/i);  // returns Null and error does not come here
      expect(headerElement).not.toBeInTheDocument();
    });


    it('should render same text passed in title prop',  () => {
      render(<Header title={"My test"} />);
      const headerElements =  screen.getAllByRole("heading");
      expect(headerElements.length).toBe(2);
    });