import React, { Component } from "react";

// components
import Example from "./Example";

import Documentation from "./Documentation";

// prime components
import { TabView, TabPanel } from "primereact/tabview";

// utils
import { breadcrumb } from "sami-breadcrumb";

// constants
const breadcrumbs = [
  { label: "Home", url: "" },
  { label: "Confirm Popup", url: "confirm-popup" }
];

class ConfirmPopup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0
    };
  }

  componentDidMount() {
    breadcrumb(breadcrumbs);
  }

  render() {
    return (
      <div className="tab-section">

        <TabView activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({ activeIndex: e.index })}>
          <TabPanel key="Example" header="Example">
            <Example />
          </TabPanel>
          <TabPanel key="Documentation" header="Documentation">
            <Documentation />
          </TabPanel>
        </TabView>
      </div>
    )
  }
}

export default ConfirmPopup;
