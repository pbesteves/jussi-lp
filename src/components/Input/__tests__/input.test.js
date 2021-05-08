import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import DefaultTheme from "../../../themes/defaultTheme";
import TextInput from "../TextInput";

const Component = (props) => {
  return (
      <ThemeProvider theme={DefaultTheme}>
          <TextInput {...props}/>
      </ThemeProvider>
  );
};
describe('Input component', () => {
    it('should set the input value', () => {
        render(<Component label='Test'/>)

        const input = screen.getByLabelText(/test/i);

        userEvent.type(input, 'Test string')

        expect(input).toHaveValue('Test string');
    });
    it('should be disabled', () => {
        render(<Component disabled={true} label="test"/>)

        const input = screen.getByLabelText(/test/i);

        expect(input).toBeDisabled();
    });
    it('should call the onChangeHandler', () => {
        const onChangeHandlerMock = jest.fn()
        render(<Component label="test" onChange={onChangeHandlerMock}/>)

        const input = screen.getByLabelText(/test/i);

        userEvent.type(input, 'Test string')

        expect(onChangeHandlerMock).toHaveBeenCalled();
    });
    it('should call the onFocusHandler', () => {
        const onFocusHandlerMock = jest.fn()
        render(<Component label="test" onFocus={onFocusHandlerMock}/>)

        const input = screen.getByLabelText(/test/i);

        userEvent.type(input, 'Test string')

        expect(onFocusHandlerMock).toHaveBeenCalled();
    });
})
