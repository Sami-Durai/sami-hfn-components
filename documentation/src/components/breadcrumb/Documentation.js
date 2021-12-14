import React from "react";

const Documentation = () => {
  return (
    <div className="p-card">
      <div className="p-card-body p-pt-2">
        <div className="p-mb-2">Add <strong>Breadcrumb </strong>component to a component.</div>
        <div className="p-mb-2">
          <span style={{ color: "rgb(197, 134, 192)" }}>import</span>{" "}
          <span style={{ color: "rgb(73, 80, 87)" }}>HFNBreadcrumb</span>{" "}
          <span style={{ color: "rgb(197, 134, 192)" }}>from</span>{" "}
          <span style={{ color: "rgb(206, 145, 120)" }}>&quot;sami-breadcrumb&quot;</span>
          <span style={{ color: "rgb(73, 80, 87)" }}>;</span>
        </div>
        <div className="p-mb-2">Use <strong>breadcrumb </strong>method to set breadcrumbs</div>
        <div className="p-mb-4">
          <span style={{ color: "rgb(197, 134, 192)" }}>import</span> {" { "}
          <span style={{ color: "rgb(156, 220, 254)" }}>breadcrumb</span>{" } "}
          <span style={{ color: "rgb(197, 134, 192)" }}>from</span> {" "}
          <span style={{ color: "rgb(206, 145, 120)" }}>&quot;sami-breadcrumb&quot;</span>;
        </div>
        <div className="p-mb-2">Send breadcrumbs as an array of objects with <strong>label </strong>and <strong>url </strong>properties to <strong>breadcrumb </strong>method.</div>
      </div>
    </div>
  )
};

export default Documentation;
