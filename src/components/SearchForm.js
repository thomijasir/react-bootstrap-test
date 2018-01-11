import React from 'react';
import {Form, FormControl, FormGroup, Button} from 'react-bootstrap';
const  SearchForm = () => {
    return (
        <Form inline>
            <FormGroup controlId="formInlineEmail">
                <FormControl type="search" placeholder="enter something..." />
            </FormGroup>
            {' '}
            <Button type="submit">
                search
            </Button>
        </Form>
        );
};

export default SearchForm;