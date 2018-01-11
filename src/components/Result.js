import React from 'react';
import {Grid, ListGroup, ListGroupItem} from 'react-bootstrap';

const Result = () =>{
  return(
      <Grid>
          <h2>Rect Test</h2>
      <ListGroup>
          <ListGroupItem href="#" active>Link 1</ListGroupItem>
          <ListGroupItem href="#">Link 2</ListGroupItem>
          <ListGroupItem href="#" disabled>Link 3</ListGroupItem>
      </ListGroup>
      </Grid>
  );
};
export default Result;