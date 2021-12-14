import React from "react";

const Documentation = () => {
  return (
    <div className="p-card">
      <div className="p-card-body p-pt-2">
        <div className="p-mb-2">Add <strong>Toast </strong>component to a high level component.</div>
        <div className="p-mb-2">
          <span style={{ color: "rgb(197, 134, 192)" }}>import</span>{" "}
          <span style={{ color: "rgb(73, 80, 87)" }}>HFNToast</span>{" "}
          <span style={{ color: "rgb(197, 134, 192)" }}>from</span>{" "}
          <span style={{ color: "rgb(206, 145, 120)" }}>&quot;sami-toast&quot;</span>
          <span style={{ color: "rgb(73, 80, 87)" }}>;</span>
        </div>
        <div className="p-mb-2">Use methods from <strong>toast </strong>object for toast messages</div>
        <div className="p-mb-4">
          <span style={{ color: "rgb(197, 134, 192)" }}>import</span> {" { "}
          <span style={{ color: "rgb(156, 220, 254)" }}>toaster</span>{" } "}
          <span style={{ color: "rgb(197, 134, 192)" }}>from</span> {" "}
          <span style={{ color: "rgb(206, 145, 120)" }}>&quot;sami-toast&quot;</span>;
        </div>
        <div className="p-mb-2 p-text-bold">Toaster Methods:</div>
        <div className="p-ml-2 p-text-bold">success:</div>
        <div className="p-ml-4 p-mb-2">This method shows success message.</div>
        <div className="p-ml-2 p-text-bold">info:</div>
        <div className="p-ml-4 p-mb-2">This method shows information message.</div>
        <div className="p-ml-2 p-text-bold">warn:</div>
        <div className="p-ml-4 p-mb-2">This method shows warning message.</div>
        <div className="p-ml-2 p-text-bold">error:</div>
        <div className="p-ml-4 p-mb-2">This method shows error message.</div>
        <div className="p-ml-2 p-text-bold">custom:</div>
        <div className="p-ml-4 p-mb-2">This method shows customized message.</div>
        <div className="p-ml-2 p-text-bold">close:</div>
        <div className="p-ml-4 p-mb-2">This method closes toast messages.</div>
        <div className="p-ml-2 p-text-bold">props:</div>
        <div className="p-ml-4 p-mb-2">This method adds props to Toast component.</div>
        <div className="p-ml-2 p-text-bold">merge:</div>
        <div className="p-ml-4 p-mb-2">This method merges props to Toast component.</div>
        <div className="p-ml-2 p-text-bold">clear:</div>
        <div className="p-ml-4 p-mb-2">This method clears props of Toast component.</div>
        <div className="p-text-bold p-mt-5">Note:</div>
        <div className="p-ml-3">Refer <a className="p-text-bold" href="https://www.primefaces.org/primereact/toast/" >Prime React Documentation</a> for valid props and toast message options.</div>
      </div>
    </div>
  )
};

export default Documentation;
