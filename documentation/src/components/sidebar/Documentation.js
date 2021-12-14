import React from "react";

const Documentation = () => {
  return (
    <div className="p-card">
      <div className="p-card-body p-pt-2">
        <div className="p-mb-2">Add <strong>Side bar </strong>component with required props to a high level component.</div>
        <div className="p-mb-2">
          <span style={{ color: "rgb(197, 134, 192)" }}>import</span>{" "}
          <span style={{ color: "rgb(73, 80, 87)" }}>HFNSideBar</span>{" "}
          <span style={{ color: "rgb(197, 134, 192)" }}>from</span>{" "}
          <span style={{ color: "rgb(206, 145, 120)" }}>&quot;sami-sidebar&quot;</span>
          <span style={{ color: "rgb(73, 80, 87)" }}>;</span>
        </div>
        <div className="p-mb-2">Use toggle method in <strong>sidebar </strong>object to open / side bar menu.</div>
        <div className="p-mb-4">
          <span style={{ color: "rgb(197, 134, 192)" }}>import</span> {" { "}
          <span style={{ color: "rgb(156, 220, 254)" }}>sidebar</span>{" } "}
          <span style={{ color: "rgb(197, 134, 192)" }}>from</span> {" "}
          <span style={{ color: "rgb(206, 145, 120)" }}>&quot;sami-sidebar&quot;</span>;
        </div>
        <div>
          <div className="p-text-bold">Props:</div>
          <div className="p-ml-2">
            <div className="p-text-bold">position:</div>
            <div className="p-ml-5"> Sets position of side bar. Valid values are right and left.</div>
            <div className="p-text-bold">logo:</div>
            <div className="p-ml-5"> URL of logo.</div>
            <div className="p-text-bold">text:</div>
            <div className="p-ml-5"> Text to be displayed instead of logo.</div>
            <div className="p-text-bold">menu:</div>
            <div className="p-ml-5"> Array of objects having label, url, icon and items(optional) properties.</div>
            <div className="p-text-bold">closeOnSelect:</div>
            <div className="p-ml-5"> Side bar closes on select if value is true. Default value is true. </div>
          </div>
        </div>
        <div>
          <div className="p-text-bold p-mt-4">Methods:</div>
          <div className="p-ml-2">
            <div className="p-text-bold">toggle:</div>
            <div className="p-ml-5">opens / closes side bar.</div>
          </div>
        </div>
        <div className="p-mt-3">Refer <a className="p-text-bold" href="https://www.primefaces.org/primereact/panelmenu/" >Prime React Documentation</a> for more information.</div>
      </div>
    </div>
  )
};

export default Documentation;
