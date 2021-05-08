import { ApolloProvider } from "@apollo/client"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { createMemoryHistory } from 'history'
import { Router } from "react-router"
import { ThemeProvider } from "styled-components"
import { client } from "../../../ApolloClient"
import DefaultTheme from "../../../themes/defaultTheme"
import Header from "../Header"

const Component = (props) => {
    const history = createMemoryHistory()
    return (
        <ApolloProvider client={client}>
            <ThemeProvider theme={DefaultTheme}>
                <Router history={history}>
                    <Header {...props}/>
                </Router>
            </ThemeProvider>
        </ApolloProvider>
    )
}
describe('Header Component', () => {
    it('should call the toggleNavigation prop', () => {
        const toggleNavigationMock = jest.fn()
        render(<Component toggleNavigation={toggleNavigationMock} />)

        const [navTrigger] = screen.getAllByRole('button');

        userEvent.click(navTrigger)

        expect(toggleNavigationMock).toHaveBeenCalled()
    });

    it('should expand the search in mobile', async () => {
        global.innerWidth = 360;
        global.dispatchEvent(new Event('resize'));
        render(<Component />)


        const [navTrigger, loginTrigger, searchTrigger] = screen.getAllByRole('button');
        
        userEvent.click(searchTrigger)

        const searchBar = await screen.findByPlaceholderText(/buscar/i);

        expect(searchBar).toBeInTheDocument()
    });
})
