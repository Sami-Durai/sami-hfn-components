import React from "react";

import { Dropdown } from "primereact/dropdown";

import { classNames } from "primereact/utils";

const HFNDataTablePagination = (pagination) => {

  const { firstPageLink, prevPageLink, nextPageLink, pageLinks, rowsPerPageDropdown, currentPageReport, lastPageLink } = pagination;

  return {

    layout: "RowsPerPageDropdown FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport",

    "FirstPageLink": (options) => {
      if (!firstPageLink || !firstPageLink.isFirstPageLink)
        return <></>;
      else
        return (
          <div className="hfn-first-page-link">
            <button type="button"
              className={`${options.className} ${(firstPageLink.classNames) ? firstPageLink.classNames : ""}`}
              onClick={options.onClick}
              disabled={options.disabled}
            >
              <span className="p-paginator-icon pi pi-angle-double-left"></span>
            </button>
          </div>
        )
    },

    "PrevPageLink": (options) => {
      if (!prevPageLink.isPrevPageLink)
        return <></>;
      else
        return (
          <div className="hfn-prev-page-link">
            <button type="button"
              className={`${options.className} ${(prevPageLink.classNames) ? prevPageLink.classNames : ""}`}
              onClick={options.onClick}
              disabled={options.disabled}
            >
              <span className="pi pi-chevron-left"></span>
            </button>
          </div>
        )
    },

    "NextPageLink": (options) => {
      if (!nextPageLink.isNextPageLink)
        return <></>;
      else
        return (
          <div className="hfn-next-page-link">
            <button type="button"
              className={`${options.className} ${(nextPageLink.classNames) ? nextPageLink.classNames : ""}`}
              onClick={options.onClick}
              disabled={options.disabled}>
              <span className="pi pi-chevron-right"></span>
            </button>
          </div>
        )
    },

    "LastPageLink": (options) => {
      if (!lastPageLink || !lastPageLink.isLastPageLink)
        return <></>;
      else
        return (
          <div className="hfn-last-page-link">
            <button type="button"
              className={`${options.className} ${(lastPageLink.classNames) ? lastPageLink.classNames : ""}`}
              onClick={options.onClick}
              disabled={options.disabled}>
              <span className="p-paginator-icon pi pi-angle-double-right"></span>
            </button>
          </div>
        )
    },

    "PageLinks": (options) => {
      if (
        (options.view.startPage === options.page && options.view.startPage !== 0) ||
        (options.view.endPage === options.page && options.page + 1 !== options.totalPages)
      ) {
        const className = classNames(options.className, { "p-disabled": true }, (pageLinks.classNames) ? pageLinks.classNames : "");

        return <span className={className} style={{ userSelect: "none" }}>...</span>;
      }

      return (
        <button type="button" className={options.className} onClick={options.onClick}>
          {options.page + 1}
        </button>
      )
    },

    "RowsPerPageDropdown": (options) => {
      if (!rowsPerPageDropdown.isRowPerPage)
        return <></>;
      else
        return (
          <div className={classNames(`hfn-page-dropdown ${rowsPerPageDropdown.classNames}`)}>
            <span>Rows per page</span>
            <Dropdown
              value={options.value}
              options={rowsPerPageDropdown.dropdownOptions}
              onChange={options.onChange}
              appendTo={document.body}
            />
          </div>
        )
    },

    // eslint-disable-next-line react/display-name
    "CurrentPageReport": (options) => {
      return (
        <div className="hfn-page-result">
          <div className={currentPageReport.classNames}>
            {
              (currentPageReport.isPageResult) ?
                <span> Showing  {options.first} to {options.last} of {options.totalRecords} entries</span> :
                null
            }
            {
              (currentPageReport.shortResult) ?
                <span> {options.first}-{options.last}/{options.totalRecords} </span> :
                null
            }
          </div>
        </div>
      )
    }
  };
};

export default HFNDataTablePagination;
