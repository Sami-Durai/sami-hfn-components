import React from "react";

// state
import { connect } from "react-redux";

// components
import Async from "react-select/async";

// primereact components 
import { Button } from "primereact/button";

import { Dropdown } from "primereact/dropdown";

import { Calendar } from "primereact/calendar";

import { DataTable } from "primereact/datatable";

import { Column } from "primereact/column";

import { DataViewLayoutOptions } from "primereact/dataview";

import { ContextMenu } from 'primereact/contextmenu';

// shared-components
import HFNDatatableToolbar from "./HFNDatatableToolbar";

import HFNDataTablePagination from "./HFNDataTablePagination";

// utils 
import { merge, isEmpty, isString, upperFirst } from "lodash";

import { getCitySuggestions, getStateSuggestions, getCountrySuggestions, cityACTemplate } from "./utils";

// options
import { optionsDefaultValue } from "./options";

class HFNDataTable extends React.PureComponent {

  constructor(props) {

    super(props);

    const {
      privilege,
      tablePrimeConfig,
      url,
      method,
      urlPath,
      params,
      lazyParams,
      responsive,
      enableCardsView,
      layout,
      enableClearFilter,
      contextMenu,
      columns,
      pagination,
      enableActionColumn,
      actionBtnOptions,
      toolBarBtnOptions,
      enableSelection,
      editable
    } = merge({}, optionsDefaultValue, this.props.options);

    this.enableClearFilter = enableClearFilter;

    this.editable = editable;

    this.contextMenu = (Array.isArray(contextMenu) && contextMenu.length > 0) ? contextMenu.map(menu => ({
      ...menu,
      command: () => { menu.command(this.state.contextSelection); }
    })) : null;

    this.toolBarRef = React.createRef(null);

    this.contextMenuRef = React.createRef(null);

    this.state = {

      privilege: privilege,

      tablePrimeConfig: {
        ...tablePrimeConfig,
        className: responsive ? (tablePrimeConfig.className || "") + " responsive-datatable" : (tablePrimeConfig.className || "")
      },

      url: url,

      method: method,

      urlPath: urlPath,

      params: params,

      responsive: responsive,

      enableCardsView: enableCardsView,

      layout: enableCardsView ? layout : (this.props.options.layout || "list"),

      contextSelection: null,

      columns: columns,

      pagination: pagination,

      enableActionColumn: enableActionColumn,

      actionBtnOptions: actionBtnOptions,

      loading: false,

      lazyParams: lazyParams,

      first: lazyParams.first,

      rows: lazyParams.rows || 0,

      currentPage: lazyParams.page,

      pageInputTooltip: "Press \"Enter\" key to go to this page.",

      totalRecords: 0,

      data: [],

      globalFilter: null,

      toolBarBtnOptions: toolBarBtnOptions,

      selections: null,

      enableSelection: enableSelection,

      editingRows: null

    };

  }

  loadData = async () => {
    this.setState({ loading: true });

    try {
      if (this.state.url && this.state.method) {

        let tableResponse = await this.state.url[this.state.method]({ lazyEvent: this.state.lazyParams, ...this.state.params }, this.state.urlPath)

        if (tableResponse && tableResponse.data && !tableResponse.data.isError && Array.isArray(tableResponse.data.results)) {
          this.setState({
            totalRecords: parseInt(tableResponse.data.count),
            data: tableResponse.data.results,
            loading: false
          });
        }
        else {
          this.setState({
            totalRecords: 0,
            data: [],
            loading: false
          });
        }
      }
    }
    catch {
      this.setState({ loading: false });
    }
  }

  onPageChange = (event) => {
    if (this.state.tablePrimeConfig.lazy) {
      this.setState(
        {
          lazyParams: {
            ...this.state.lazyParams,
            first: event.first,
            rows: event.rows,
            page: event.page + 1
          }
        },
        () => { this.loadData() }
      );
    } else {
      this.setState({
        first: event.first,
        rows: event.rows,
        currentPage: event.page + 1
      });
    }
  }

  onPageInputKeyDown = (event, options) => {
    if (event.key === "Enter") {
      const page = parseInt(this.state.currentPage);
      if (page < 0 || page > options.totalPages) {
        this.setState({ pageInputTooltip: `Value must be between 1 and ${options.totalPages}.` })
      }
      else {
        const first = this.state.currentPage ? options.rows * (page - 1) : 0;
        this.setState({ first: first, pageInputTooltip: "Press \"Enter\" key to go to this page." });
      }
    }
  }

  onPageInputChange = (event) => {
    this.setState({ currentPage: event.target.value });
  }

  // template section 

  actionColumnTemplate = (rowData) => {

    let actionBtnCheck;

    return (
      <React.Fragment>
        <span className="p-column-title"> Action </span>
        <span className="actions">
          {this.state.actionBtnOptions.map((option, index) => {
            let buttonOption = { ...option };

            actionBtnCheck = option.visibility !== false;

            if ((actionBtnCheck === true) && (typeof option.visibilityCheck === "function")) {
              actionBtnCheck = option.visibilityCheck(rowData);
              delete buttonOption.visibilityCheck;
            }

            if (actionBtnCheck) {
              return <Button key={index} {...buttonOption} onClick={ev => {
                option.onClick(ev, rowData);
              }}></Button>
            }

          })}
        </span>
      </React.Fragment>
    );
  };


  // lazy section start 
  onSort = (event) => {
    if (event.sortField && (event.sortField !== "SortingDisabled")) {
      setTimeout(() => {
        let lazyParams = { ...this.state.lazyParams, ...event };
        this.setState({ lazyParams }, this.loadData);
      }, 1000);
    }
  }

  onFilter = (event) => {
    setTimeout(() => {
      let lazyParams = { ...this.state.lazyParams, ...event };
      lazyParams["first"] = 0;
      lazyParams["page"] = 1;
      this.setState({ lazyParams }, this.loadData);
    }, 1000);
  }
  // lazy section end

  onSelectionChange = (ev) => {
    if (ev.originalEvent.target.className.includes("p-checkbox-box") || ev.originalEvent.target.className.includes("p-checkbox-icon"))
      this.setState({ selections: ev.value })
  }

  removeSelection = () => {
    this.setState({ selections: null })
    if (this.toolBarRef && this.toolBarRef.current) {
      this.toolBarRef.current.resetStatus();
    }
  }

  // filter states 
  handleFilterElement = (e, colName, type, { filterField }) => {
    let value;

    if (type === "autoComplete")
      value = e;
    else
      value = e.value;

    this.dt.filter(value, filterField ? filterField : colName, "startsWith");
    this.setState({ [colName]: value });
  }

  lookup = (obj, key) => {
    return key.split(".").reduce((o, k) => o && o[k], obj);
  }

  transformBodyTemplate = (rowData, { field, header }) => {
    let data = this.lookup(rowData, field);
    if (data || (data === 0)) {
      return (<React.Fragment>
        <span className="p-column-title"> {header} </span>
        {(isString(data)) ?
          <span className="hfn-datatable-td" title={upperFirst(data)}>{upperFirst(data)}</span>
          :
          <span className="hfn-datatable-td" title={data}>{data}</span>}
      </React.Fragment>)
    }
    else {
      return (<React.Fragment>
        <span className="p-column-title"> {header} </span>
        <span className="hfn-datatable-td">-</span>
      </React.Fragment>)
    }
  }

  defaultBodyTemplate = (rowData, { field, header }) => {
    let data = this.lookup(rowData, field);
    return (<React.Fragment>
      <span className="p-column-title"> {header} </span>
      {(!isEmpty(data) || (data === 0)) ?
        <span className="hfn-datatable-td" title={data}>{data}</span>
        :
        <span className="hfn-datatable-td">-</span>}
    </React.Fragment>)
  }

  handleTableState = (stateName, layout) => {
    this.setState({ [stateName]: layout });
  }

  loadACOptions = (inputValue, callback, service, method, labelField, valueField) => {
    try {
      if (inputValue.length > 2) {
        service[method](inputValue)
          .then((res) => {
            let acOptions = [];
            let results = [];

            if (res && res.data) {
              if (Array.isArray(res.data))
                results = res.data;
              else if (Array.isArray(res.data.data))
                results = res.data.data;

              acOptions = results.map(acOption => ({
                ...acOption,
                label: acOption[labelField],
                value: acOption[valueField]
              }));
            }
            callback(acOptions);
          });
      }
    }
    catch {
      callback([]);
      console.log("Something went wrong.");
    }
  }

  onContextMenuSelectionChange = e => {
    this.setState({ contextSelection: e.value });
  }

  onContextMenu = e => {
    if (this.contextMenuRef.current)
      this.contextMenuRef.current.show(e.originalEvent);
  }

  clearFilters = () => {
    let filters = {};
    this.state.columns.forEach(({ field, filterElementOptions }) => {
      if (filterElementOptions && field) {
        filters[field] = null;
      }
    });
    this.setState({
      lazyParams: {
        ...this.state.lazyParams,
        filters: {}
      },
      ...filters
    }, this.loadData);
  }

  onRowEditChange = e => {
    this.setState({ editingRows: e.data });
  }

  onRowEditComplete = e => {
    if (Array.isArray(this.state.data)) {
      let tableData = this.state.data.slice();
      const { newData, index } = e;
      if (tableData[index]) {
        tableData[index] = newData;
        this.setState({ data: tableData });
      }
    }
  }

  editorTemplate = (options, column) => {
    switch (column.editorType) {
      case "InputText":
        return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
      default:
        return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
    };
  }

  componentDidMount() {
    this.loadData()
  }

  render() {

    let DatatableLazyConfig, dataTableConfigs;

    if (this.state.tablePrimeConfig.lazy) {
      DatatableLazyConfig = {
        first: this.state.lazyParams.first,
        rows: Number.isInteger(this.state.lazyParams.rows) ? this.state.lazyParams.rows : 0,
        totalRecords: this.state.totalRecords,
        loading: this.state.loading,
        filters: this.state.lazyParams.filters,
        sortField: this.state.lazyParams.sortField,
        sortOrder: this.state.lazyParams.sortOrder,
        onFilter: this.onFilter,
        onSort: this.onSort,
      }
    } else {
      DatatableLazyConfig = {
        first: this.state.first,
        rows: Number.isInteger(this.state.rows) ? this.state.rows : 0,
        globalFilter: this.state.globalFilter
      }
    }

    dataTableConfigs = {
      ...DatatableLazyConfig,
      ...this.state.tablePrimeConfig,
    }

    if (this.state.layout === "grid")
      dataTableConfigs.className = (dataTableConfigs.className || "") + " cards-datatable";

    if (this.contextMenu) {
      dataTableConfigs.contextMenuSelection = this.contextMenu;
      dataTableConfigs.onContextMenuSelectionChange = this.onContextMenuSelectionChange;
      dataTableConfigs.onContextMenu = this.onContextMenu;
    }

    if (this.editable) {
      dataTableConfigs.editMode = "row";
      dataTableConfigs.editingRows = this.state.editingRows;
      dataTableConfigs.onRowEditChange = this.onRowEditChange;
      dataTableConfigs.onRowEditComplete = this.onRowEditComplete;
    }

    return (
      <div className={`hfn-datatable ${this.state.tablePrimeConfig.lazy ? "hfn-datatable-lazy" : ""}`}>

        <HFNDatatableToolbar
          ref={this.toolBarRef}
          tableRef={this.dt}
          tableColumns={this.state.columns}
          enableSelection={this.state.enableSelection}
          selections={this.state.selections}
          tableItems={this.state.data}
          toolBarOptions={this.state.toolBarBtnOptions}
          access={this.state.privilege}
          enableCardsView={this.state.enableCardsView}
          layout={this.state.layout}
          handleTableState={this.handleTableState}
        >
        </HFNDatatableToolbar>

        {(this.state.enableSelection && this.state.enableCardsView) ?
          <DataViewLayoutOptions
            className="p-text-left layout-options-md p-pb-2"
            layout={this.state.layout}
            onChange={(e) => this.setState({ layout: e.value })}
          />
          : null
        }

        {this.enableClearFilter ?
          <Button type="button" icon="pi pi-filter-slash" label="Clear" className="p-button-outlined p-mb-2" onClick={this.clearFilters} />
          : null
        }

        {
          this.contextMenu ?
            <ContextMenu model={this.contextMenu} ref={this.contextMenuRef} onHide={() => this.setState({ contextSelection: null })} />
            : null
        }

        <DataTable
          ref={(el) => this.dt = el}
          value={this.state.data}
          paginator
          paginatorTemplate={HFNDataTablePagination(this.state.pagination)}
          onPage={this.onPageChange}
          selection={this.state.selections}
          onSelectionChange={this.onSelectionChange}
          {...dataTableConfigs}
        >

          {this.state.enableSelection && <Column selectionMode="multiple" headerStyle={{ width: "3rem" }}></Column>}

          {this.state.columns.map((item, index) => {

            if ((typeof item.body !== "function") && !item.showOriginalValue) {
              item.body = (item.transformValue !== false) ? this.transformBodyTemplate : this.defaultBodyTemplate;
            }

            if (this.editable && item.editable) {
              item.editor = (options) => this.editorTemplate(options, item);
            }

            if (item.filterElementOptions) {

              let defaultOption, filterOptions;

              defaultOption = [{ label: "All", value: "" }];

              (!isEmpty(this.props.dd[item.filterElementOptions.value])) ?
                filterOptions = this.props.dd[item.filterElementOptions.value] :
                filterOptions = [];

              switch (item.filterElementOptions.type) {
                case "Dropdown":
                  return <Column {...item} key={index}
                    filterElement={
                      <Dropdown
                        {...item.filterElementOptions.primeFieldProps}
                        className="p-column-filter"
                        options={[...defaultOption, ...filterOptions]}
                        optionLabel="label"
                        value={this.state[item.field]}
                        filter={false}
                        onChange={(ev) => { this.handleFilterElement(ev, item.field, "dropdown", item) }}
                      >
                      </Dropdown>
                    }
                  />

                case "Calendar":
                  return <Column {...item} key={index}
                    filterElement={
                      <Calendar
                        className="p-column-filter"
                        value={this.state[item.field]}
                        readOnlyInput
                        dateFormat={"M dd, yy"}
                        showButtonBar
                        todayButtonClassName="p-button-secondary p-ml-2"
                        clearButtonClassName="p-button-secondary p-mr-2"
                        {...item.filterElementOptions.primeFieldProps}
                        onChange={(ev) => { this.handleFilterElement(ev, item.field, "calendar", item) }}
                      />
                    }
                  />

                case "AutoComplete":
                  return <Column {...item} key={index}
                    filterElement={
                      <Async
                        className="p-column-filter p-component"
                        noOptionsMessage={() => "No data found"}
                        {...item.filterElementOptions.fieldProps}
                        value={this.state[item.field]}
                        autoComplete="off"
                        loadOptions={(inputValue, callback) => {
                          this.loadACOptions(
                            inputValue,
                            callback,
                            item.filterElementOptions.service,
                            item.filterElementOptions.method,
                            item.filterElementOptions.fieldProps.optionLabel || "name",
                            item.filterElementOptions.fieldProps.optionValue || "id"
                          );
                        }}
                        onChange={(ev) => { this.handleFilterElement(ev, item.field, "autoComplete", item) }}
                      />
                    }
                  />

                case "CityAutoComplete":
                  return <Column {...item} key={index}
                    filterElement={
                      <Async
                        className="p-column-filter p-component"
                        noOptionsMessage={() => "No data found"}
                        optionLabel="name"
                        optionValue="id"
                        formatOptionLabel={cityACTemplate}
                        {...item.filterElementOptions.fieldProps}
                        value={this.state[item.field]}
                        autoComplete="off"
                        loadOptions={getCitySuggestions}
                        onChange={(ev) => { this.handleFilterElement(ev, item.field, "autoComplete", item) }}
                      />
                    }
                  />

                case "StateAutoComplete":
                  return <Column {...item} key={index}
                    filterElement={
                      <Async
                        className="p-column-filter p-component"
                        noOptionsMessage={() => "No data found"}
                        optionLabel="name"
                        optionValue="id"
                        {...item.filterElementOptions.fieldProps}
                        value={this.state[item.field]}
                        autoComplete="off"
                        loadOptions={getStateSuggestions}
                        onChange={(ev) => { this.handleFilterElement(ev, item.field, "autoComplete", item) }}
                      />
                    }
                  />

                case "CountryAutoComplete":
                  return <Column {...item} key={index}
                    filterElement={
                      <Async
                        className="p-column-filter p-component"
                        noOptionsMessage={() => "No data found"}
                        optionLabel="name"
                        optionValue="id"
                        {...item.filterElementOptions.fieldProps}
                        value={this.state[item.field]}
                        autoComplete="off"
                        loadOptions={getCountrySuggestions}
                        onChange={(ev) => { this.handleFilterElement(ev, item.field, "autoComplete", item) }}
                      />
                    }
                  />

                default:
              }

            } else {
              return <Column {...item} key={index} />
            }

          })}

          {
            (this.state.enableActionColumn === true) ?
              <Column className="p-action-column" body={this.actionColumnTemplate} header="Actions" style={{ minWidth: "100px" }} />
              : null
          }

          {
            (this.editable && Array.isArray(this.state.data)) ?
              <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }} />
              : null
          }

        </DataTable>

      </div>
    );

  }
}

const mapStateToProps = (state) => ({
  dd: state.dropdown,
});

export default connect(mapStateToProps, null, null, { forwardRef: true, pure: true })(HFNDataTable);
