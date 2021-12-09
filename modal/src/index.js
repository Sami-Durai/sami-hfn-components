import React from "react";

// state
import { connect } from "react-redux";

import { store, HFNContext, modal as modalActions } from "sami-redux";

// components
// prime components
import { Dialog } from "primereact/dialog";

// constants
const { TOGGLE, ONHIDE, ONSHOW, CUSTOM } = modalActions;

const mapStateToProps = state => ({
  modalProps: state.modal,
});

const options = {
  context: HFNContext,
  pure: true
};

// hfn component
const HFNModal = ({ children, modalProps }) => {
  return (
    <Dialog {...modalProps}>
      {children}
    </Dialog>
  );
};

// actions
export const modal = {
  toggle: (payload) => {
    store.dispatch({ type: TOGGLE, payload: payload });
  },

  onHide: (payload) => {
    store.dispatch({ type: ONHIDE, payload: payload });
  },

  onShow: (payload) => {
    store.dispatch({ type: ONSHOW, payload: payload });
  },

  custom: (payload) => {
    store.dispatch({ type: CUSTOM, payload: payload });
  }
};

export default connect(mapStateToProps, null, null, options)(HFNModal);
