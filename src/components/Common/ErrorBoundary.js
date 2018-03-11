import React, { Component } from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends Component {
    
    constructor(props) {
      super(props);
      //todo - move state to redux store
      this.state = { error: null, errorInfo: null };
    }
  
    componentDidCatch(error, info) {
        this.setState({
            error,
            errorInfo: info
          })
    }
  
    render() {
      if (this.state.errorInfo) {
        // You can render any custom fallback UI
        return (
            <div>
                <h2>Something went wrong.</h2>
                <details style={{ whiteSpace: 'pre-wrap' }}>
                    {this.state.error && this.state.error.toString()}
                    <br />
                    {this.state.errorInfo.componentStack}
                </details>
            </div>
        );
      }
      return this.props.children;
    }
  }
ErrorBoundary.propTypes={
    children: PropTypes.shape({}).isRequired
}  
export default ErrorBoundary;