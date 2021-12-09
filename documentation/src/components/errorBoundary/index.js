import React from "react";

// config
import config from "assets/config";

class HFNErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    // state management start
    this.state = { 

      error: null, 

      errorInfo: null

     };
     // state management end
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error: error, errorInfo: errorInfo });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div className="error-boundary-section p-mt-4">
          <div className="p-p-4 p-p-4">
            <div className="p-mb-4 p-text-center">
              <img src="/assets/logo.png" alt="heartfulness" />
            </div>
            <div className="p-text-center p-text-normal"> Oops! Something went wrong </div>
            {
              (!config.NODE_ENV || config.NODE_ENV === "development") ? <details style={{ whiteSpace: "pre-wrap" }}>
                {this.state.error && this.state.error.toString()}
                <br />
                {this.state.errorInfo.componentStack}
              </details> : ""
            }
          </div>

        </div>
      );
    }
    return this.props.children;
  }
}

export default HFNErrorBoundary;
