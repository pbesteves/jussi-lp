import { ApolloProvider } from "@apollo/client";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import { client } from "../../../ApolloClient";
import DefaultTheme from "../../../themes/defaultTheme";
import SearchBar from "../SearchBar";

const Component = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={DefaultTheme}>
        <SearchBar />
      </ThemeProvider>
    </ApolloProvider>
  );
};

describe("Search component", () => {
  it("should not display the results if the search string has fewer than 3 characters", async () => {
    render(<Component />);

    const searchInput = await screen.findByPlaceholderText(/buscar/i);

    userEvent.type(searchInput, "te");

    expect(
      screen.queryByText(/carregando resultados/i)
    ).not.toBeInTheDocument();
  });
  it("should display the loading UI", async () => {
    render(<Component />);

    const searchInput = await screen.findByPlaceholderText(/buscar/i);

    userEvent.type(searchInput, "tes");

    expect(screen.queryByText(/carregando resultados/i)).toBeInTheDocument();
  });

  it("should show the search results", async () => {
    render(<Component />);

    const searchInput = await screen.findByPlaceholderText(/buscar/i);

    userEvent.type(searchInput, "star");

    expect(await screen.findByText("Starlink-15 (v1.0)")).toBeInTheDocument();
    expect(await screen.findByText("Status: Fail")).toBeInTheDocument()
    expect(await screen.findByAltText("Starlink-14 (v1.0)")).toBeInTheDocument();
  });
  it("should hide the search results", async () => {
    render(<Component />);

    const searchInput = await screen.findByPlaceholderText(/buscar/i);

    userEvent.type(searchInput, "star");

    expect(await screen.findByText("Starlink-15 (v1.0)")).toBeInTheDocument();

    userEvent.tab()

    expect(screen.queryByText("Starlink-15 (v1.0)")).not.toBeInTheDocument();
  });
});
