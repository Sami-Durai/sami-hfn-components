import React from "react";

import { connect } from "react-redux";

import { store, HFNContext, confirmPopup as confirmPopupActions } from "sami-redux";

import { ConfirmDialog } from "primereact/confirmdialog";

const { TOGGLE, ACCEPT, REJECT, ONHIDE, CUSTOM } = confirmPopupActions;

const mapStateToProps = state => ({
  popupProps: state.confirmPopup
});

const options = {
  context: HFNContext,
  pure: true
};

const HFNConfirmPopup = ({ popupProps }) => {
  return (
    <ConfirmDialog {...popupProps} />
  );
};

export const confirmPopup = {
  toggle: (payload) => {
    store.dispatch({ type: TOGGLE, payload: payload });
  },

  accept: (payload) => {
    store.dispatch({ type: ACCEPT, payload: payload });
  },

  reject: (payload) => {
    store.dispatch({ type: REJECT, payload: payload });
  },

  onHide: (payload) => {
    store.dispatch({ type: ONHIDE, payload: payload });
  },

  custom: (payload) => {
    store.dispatch({ type: CUSTOM, payload: payload });
  }
};

export default connect(mapStateToProps, null, null, options)(HFNConfirmPopup);
