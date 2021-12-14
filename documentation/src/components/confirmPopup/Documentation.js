import React from "react";

const Documentation = () => {
  return (
    <div className="p-card">
      <div className="p-card-body p-pt-2">
        <div className="p-mb-2">Add <strong>Confirm Popup </strong>component to a high level component.</div>
        <div className="p-mb-2">
          <span style={{ color: "rgb(197, 134, 192)" }}>import</span>{" "}
          <span style={{ color: "rgb(73, 80, 87)" }}>HFNConfirmPopup</span>{" "}
          <span style={{ color: "rgb(197, 134, 192)" }}>from</span>{" "}
          <span style={{ color: "rgb(206, 145, 120)" }}>&quot;sami-confirm-popup&quot;</span>
          <span style={{ color: "rgb(73, 80, 87)" }}>;</span>
        </div>
        <div className="p-mb-2">Use methods in <strong>confirmPopup </strong>object to show confirm popup</div>
        <div className="p-mb-4">
          <span style={{ color: "rgb(197, 134, 192)" }}>import</span> {" { "}
          <span style={{ color: "rgb(156, 220, 254)" }}>confirmPopup</span>{" } "}
          <span style={{ color: "rgb(197, 134, 192)" }}>from</span> {" "}
          <span style={{ color: "rgb(206, 145, 120)" }}>&quot;sami-confirm-popup&quot;</span>;
        </div>
        <div>
          <div className="p-text-bold">Methods:</div>
          <div className="p-ml-2">
            <div className="p-text-bold">toggle:</div>
            <div className="p-ml-5"> Opens / closes confirm popup.</div>
            <div className="p-text-bold">accept:</div>
            <div className="p-ml-5"> Accepts a callback as an argument to be executed on confirmation.</div>
            <div className="p-text-bold">reject:</div>
            <div className="p-ml-5"> Accepts a callback as an argument to be executed on rejection.</div>
            <div className="p-text-bold">onHide:</div>
            <div className="p-ml-5"> Accepts a callback as an argument to be executed on hide event of confirm popup.</div>
            <div className="p-text-bold">custom:</div>
            <div className="p-ml-5"> Accepts a confirm popup options object as an argument. </div>
        <div className="p-mt-3">Refer <a className="p-text-bold" href="https://www.primefaces.org/primereact/confirmdialog/" >Prime React Documentation</a> for confirm popup options.</div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Documentation;
