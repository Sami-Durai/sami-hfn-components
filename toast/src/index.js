import React, { useEffect, useRef } from "react";

import { connect } from "react-redux";

import { Toast } from "primereact/toast";

import { store, HFNContext, toast as toastActions } from "sami-redux";

const { PROP, MERGE, CLEAR, REF, SHOW, CLOSE } = toastActions;

const mapStateToProps = state => ({
  toastProps: state.toast.props,
});

const options = {
  context: HFNContext,
  pure: true
};

const HFNToast = connect(mapStateToProps, null, null, options)(({ toastProps }) => {
  const toast = useRef(null);

  useEffect(() => {
    store.dispatch({ type: REF, payload: toast });
  }, []);

  return (
    <Toast onHide={() => { }} {...toastProps} ref={toast} />
  );
});

const generateMessages = (payload, header, severity) => {
  return Array.isArray(payload)
    ?
    payload.map(msg => Object.assign({}, { summary: header }, (typeof msg === "string") ? { detail: msg } : msg, { severity: severity }))
    :
    Object.assign({}, { summary: header }, (typeof payload === "string") ? { detail: payload } : payload, { severity: severity });
};

export const toaster = {
  props: (payload) => {
    store.dispatch({ type: PROP, payload: payload });
  },

  merge: (payload) => {
    store.dispatch({ type: MERGE, payload: payload });
  },

  clear: () => {
    store.dispatch({ type: CLEAR });
  },

  success: (payload) => {
    const msgs = generateMessages(payload, "Success", "success");
    store.dispatch({ type: SHOW, payload: msgs });
  },

  info: (payload) => {
    const msgs = generateMessages(payload, "Information", "info");
    store.dispatch({ type: SHOW, payload: msgs });
  },

  warn: (payload) => {
    const msgs = generateMessages(payload, "Warning", "warn");
    store.dispatch({ type: SHOW, payload: msgs });
  },

  error: (payload) => {
    const msgs = generateMessages(payload, "Error", "error");
    store.dispatch({ type: SHOW, payload: msgs });
  },

  custom: (payload) => {
    store.dispatch({ type: SHOW, payload: payload });
  },

  close: () => {
    store.dispatch({ type: CLOSE });
  },
};

export default HFNToast;
