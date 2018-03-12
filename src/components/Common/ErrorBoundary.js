import React, { Component } from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import { addError } from "./CommonActions";

class ErrorBoundary extends Component {
    
    componentDidCatch(error, info) {
        this.props.addError({
            error,
            errorInfo: info
          })
    }
  
    render() {
      if (this.props.error.errorInfo) {
        return (
            <div>
                <h2>Something went wrong.</h2>
                <details style={{ whiteSpace: 'pre-wrap' }}>
                    {this.props.error && this.props.error.toString()}
                    <br />
                    {this.props.error.errorInfo.componentStack}
                </details>
            </div>
        );
      }
      return this.props.children;
    }
  }
ErrorBoundary.propTypes={
    children: PropTypes.shape({}).isRequired,
    error: PropTypes.shape({errorInfo:PropTypes.string}).isRequired,
    addError: PropTypes.func.isRequired,

}  

export default connect( (state) => {
    return { error: state.common.error}
    }, {addError})(ErrorBoundary);