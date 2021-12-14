import React from "react";

// components
// prime components
import { Button } from "primereact/button";

// utils
import { sidebar } from "sami-sidebar";

const Example = () => {
  return (
    <div className="p-card">
      <div className="p-card-body">
        <div className="p-d-flex p-flex-column p-jc-center p-text-center">
          <div className="p-text-center p-mx-1 p-my-3">
            <Button label="Open" className="p-button-primary" onClick={() => sidebar.toggle(true)} />
          </div>
          <div className="p-text-center p-mx-1 p-mb-3">
            <Button label="Close" className="p-button-secondary" onClick={() => sidebar.toggle(false)} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Example;
