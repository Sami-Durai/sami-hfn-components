import React from "react";

const Documentation = () => {
  return (
    <div className="p-card">
      <div className="p-card-body p-pt-2">
        <div className="p-mb-2">Add <strong>Modal </strong>component to a component.</div>
        <div className="p-mb-2">
          <span style={{ color: "rgb(197, 134, 192)" }}>import</span>{" "}
          <span style={{ color: "rgb(73, 80, 87)" }}>HFNModal</span>{" "}
          <span style={{ color: "rgb(197, 134, 192)" }}>from</span>{" "}
          <span style={{ color: "rgb(206, 145, 120)" }}>&quot;sami-modal&quot;</span>
          <span style={{ color: "rgb(73, 80, 87)" }}>;</span>
        </div>
        <div className="p-mb-2">Use methods in <strong>modal </strong>object to show modal.</div>
        <div className="p-mb-4">
          <span style={{ color: "rgb(197, 134, 192)" }}>import</span> {" { "}
          <span style={{ color: "rgb(156, 220, 254)" }}>modal</span>{" } "}
          <span style={{ color: "rgb(197, 134, 192)" }}>from</span> {" "}
          <span style={{ color: "rgb(206, 145, 120)" }}>&quot;sami-modal&quot;</span>;
        </div>
        <div>
          <div className="p-text-bold">Methods:</div>
          <div className="p-ml-2">
            <div className="p-text-bold">toggle:</div>
            <div className="p-ml-5"> Opens / closes modal popup.</div>
            <div className="p-text-bold">onHide:</div>
            <div className="p-ml-5"> Accepts a callback function as an argument to be executed on hide event of modal.</div>
            <div className="p-text-bold">onShow:</div>
            <div className="p-ml-5"> Accepts a callback function as an argument to be executed on show event of modal.</div>
            <div className="p-text-bold">custom:</div>
            <div className="p-ml-5"> Accepts modal component props object as an argument. </div>
            <div className="p-mt-3">Refer <a className="p-text-bold" href="https://www.primefaces.org/primereact/dialog/" >Prime React Documentation</a> for valid modal component props.</div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Documentation;
