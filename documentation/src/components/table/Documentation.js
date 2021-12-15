import React from "react";

const Documentation = () => {
  return (
    <div className="p-card">
      <div className="p-card-body p-pt-2">
        <div className="p-mb-2">Add <strong>Table </strong>component to a component.</div>
        <div className="p-mb-2">
          <span style={{ color: "rgb(197, 134, 192)" }}>import</span>{" "}
          <span style={{ color: "rgb(73, 80, 87)" }}>HFNDataTable</span>{" "}
          <span style={{ color: "rgb(197, 134, 192)" }}>from</span>{" "}
          <span style={{ color: "rgb(206, 145, 120)" }}>&quot;sami-table&quot;</span>
          <span style={{ color: "rgb(73, 80, 87)" }}>;</span>
        </div>
        <div>
          <div className="p-text-bold">Props:</div>
          <div className="p-ml-2">
            <div className="p-text-bold">options:</div>
            <div className="p-ml-4 p-text-bold"> 1.tablePrimeConfig:</div>
            <div className="p-ml-6"> Props for table component.</div>
            <div className="p-ml-4 p-text-bold"> 2.service:</div>
            <div className="p-ml-6"> Service object containing API request functions.</div>
            <div className="p-ml-4 p-text-bold"> 3.method:</div>
            <div className="p-ml-6"> API request function name in service object</div>
            <div className="p-ml-4 p-text-bold"> 4.urlPath:</div>
            <div className="p-ml-6"> Suffix to be added to API request URL.</div>
            <div className="p-ml-4 p-text-bold"> 5.params:</div>
            <div className="p-ml-6"> URL Params to be given to API request.</div>
            <div className="p-ml-4 p-text-bold"> 6.lazyParams:</div>
            <div className="p-ml-6"> Pagination default values.</div>
            <div className="p-ml-4 p-text-bold"> 7.responsive:</div>
            <div className="p-ml-6"> Enable card view for devices below 768px width.</div>
            <div className="p-ml-4 p-text-bold"> 8.enableCardsView:</div>
            <div className="p-ml-6"> Enable cards view tool bar.</div>
            <div className="p-ml-4 p-text-bold"> 9.layout:</div>
            <div className="p-ml-6"> Default layout. Valid values are list and grid.</div>
            <div className="p-ml-4 p-text-bold"> 10.enableClearFilter:</div>
            <div className="p-ml-6"> Enable clear filters tool bar</div>
            <div className="p-ml-4 p-text-bold"> 11.contextMenu:</div>
            <div className="p-ml-6"> Context menu items.</div>
            <div className="p-ml-4 p-text-bold"> 12.columns:</div>
            <div className="p-ml-6 p-mb-2"> Array of table column objects.</div>
            <div className="p-ml-6">
              <div className="p-text-bold"> 12.1 body:</div>
              <div className="p-ml-2"> Custom template for table cell element.</div>
              <div className="p-text-bold"> 12.2 transformValue:</div>
              <div className="p-ml-2"> Transforms first letter of a string to upper case. Default value is true.</div>
              <div className="p-text-bold"> 12.3 showOriginalValue:</div>
              <div className="p-ml-2"> Disables default custom template for table cell element. Default value is false.</div>
              <div className="p-text-bold"> 12.4 filterElementOptions:</div>
              <div className="p-ml-2"> An object of custom filter element options.</div>
              <div className="p-ml-2 p-mt-2">
                <div className="p-text-bold"> 12.4.1 value:</div>
                <div className="p-ml-2"> Array property name of dropdown options in dropdown reducer in redux store.</div>
                <div className="p-text-bold"> 12.4.2 type:</div>
                <div className="p-ml-2"> Type of custom filter component. Available values are Dropdown, Calendar, AutoComplete, CityAutoComplete, StateAutoComplete and CountryAutoComplete.</div>
                <div className="p-text-bold"> 12.4.3 primeFieldProps:</div>
                <div className="p-ml-2"> Filter component props.</div>
                <div className="p-text-bold"> 12.4.4 service:</div>
                <div className="p-ml-2"> Service object containing API request functions for AutoComplete component.</div>
                <div className="p-text-bold"> 12.4.5 method:</div>
                <div className="p-ml-2"> API request function name in service object for AutoComplete component.</div>
              </div>
            </div>
            <div className="p-ml-4 p-text-bold"> 13.pagination:</div>
            <div className="p-ml-6"> Custom table pagination options.</div>
            <div className="p-ml-4 p-text-bold"> 14.enableActionColumn:</div>
            <div className="p-ml-6"> Enable action column.</div>
            <div className="p-ml-4 p-text-bold"> 15.actionBtnOptions:</div>
            <div className="p-ml-6"> Array of Action column button options.</div>
            <div className="p-ml-4 p-text-bold"> 16.toolBarBtnOptions:</div>
            <div className="p-ml-6"> Top right toolbar button options.</div>
            <div className="p-ml-4 p-text-bold"> 17.enableSelection:</div>
            <div className="p-ml-6"> Enable bulk selection.</div>
            <div className="p-mt-3">Refer <a className="p-text-bold" href="https://www.primefaces.org/primereact/dialog/" >Prime React Documentation</a> for more information.</div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Documentation;
