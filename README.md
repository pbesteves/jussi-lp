# Jüssi Landing Page

- [Jüssi Landing Page](#jüssi-landing-page)
  - [Technologies](#technologies)
    - [API](#api)
  - [Running the project](#running-the-project)
  - [Running the tests](#running-the-tests)

## Technologies
For the development of this landing page the technologies used were 
<a href='https://reactjs.org/' target='_blank'>React</a>, 
<a href='https://styled-components.com/' target='_blank'>Styled-Components</a>, 
<a href='https://www.apollographql.com/docs/react/' target='_blank'>Apollo Client</a>, 
<a href='https://webpack.js.org/' target='_blank'>Webpack</a>, 
<a href='https://babeljs.io/' target='_blank'>Babel</a>, 
<a href='https://jestjs.io/pt-BR/' target='_blank'>Jest</a>, 
<a href='https://testing-library.com/docs/react-testing-library/intro/' target='_blank'>React Testing Library</a>, 
<a href='https://mswjs.io/' target='_blank'>MSWJS (Mock Service Worker)</a>, and
<a href='https://www.typescriptlang.org/' target='_blank'>Typescript</a>

### API

The project uses the SpaceX public GraphQL API in the search field. 
It is using the LaunchesPast query to fetch data about the previous launches.
Currently it is configured to limit the search to five results and find the launches
by the `mission_name` attribute.

Here are some of the names of the past missions

<ul>
    <li>Starlink</li> 
    <li>Sentinel</li> 
    <li>Crew</li> 
    <li>GPS</li> 
    <li>SAOCOM</li> 
    <li>Dragon</li> 
</ul>

## Running the project
In order to run the project follow the steps bellow

<ol>
    <li>
        Clone this repository
        <code>git clone git@github.com:pbesteves/jussi-lp.git</code>
    </li>
    <li>
        Change into the cloned directory and run
        <code>yarn install</code> or
        <code>npm install</code>
    </li>
    <li>
        After the installation is complete run the following commands to run the project in development mode:
        <code>yarn start</code> or
        <code>npm start</code>
    </li>
</ol>

## Running the tests

There are two scripts to run tests, <code>yarn test</code> and <code>yarn test:coverage</code>. Both will run in watch mode.
