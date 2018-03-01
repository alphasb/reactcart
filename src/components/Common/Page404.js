import React from "react";
import { Container, Button } from "semantic-ui-react";
import PropTypes from 'prop-types';

const Page404 = (props) => 
    <Container text textAlign="center">
    <h1>Page Not Found</h1>
    <div>&nbsp;</div>
    <Button onClick={() => props.history.push("/")}>
    Back to Home Page
    </Button>
    </Container>;
    
Page404.propTypes = {
    history: PropTypes.shape({
        push:PropTypes.func.isRequired
    }).isRequired
  } 
export default Page404;