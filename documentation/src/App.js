import React from "react";

// components
import HFNToast from "sami-toast";

import HFNConfirmDialog from "sami-confirm-popup";

import HFNErrorBoundary from "components/errorBoundary";

import LayoutContainer from "components/layouts/Template";

// shared components
import HFNLoader from "sharedComponents/lazyLoading";

const App = () => {
  return (
    <HFNErrorBoundary>
      <HFNLoader>
        <div className="hfn">
          <LayoutContainer />
        </div>

        <HFNToast />
        
        <HFNConfirmDialog />
      </HFNLoader>
    </HFNErrorBoundary>
  );
};

export default App;
