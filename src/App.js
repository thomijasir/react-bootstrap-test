import React, { Component } from 'react';
import {Grid, Jumbotron} from 'react-bootstrap';
import SearchForm from './components/SearchForm';
import Result from './components/Result';
class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Grid>
            <h1>Search App</h1>
            <p>This is a simple search app</p>
              <SearchForm />
          </Grid>
        </Jumbotron>
          <Result/>
      </div>
    );
  }
}

export default App;
