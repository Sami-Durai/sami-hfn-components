import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";

// components
import Form from "components/table/Form";

import HFNDataTable from "sami-table";

import HFNModal, { modal } from "sami-modal";

import response from "utils/response";

import { confirmPopup } from "sami-confirm-popup";

import { amountBadge, createdDateBadge } from "utils/badgeTemplate";

import dropdown from "utils/dropdown";

// services 
import Service from "services/donationCollection/donationCollection.service";

const formInitValue = {};

const Example = () => {
  
  const [formState, setFormState] = useState({ isEditable: false, initValue: formInitValue });

  useEffect(() => {
    dropdown.organization();
  }, []);

  const tableRef = useRef(null);

  // add section start
  const setFormInitValue = useCallback(() => {
    setFormState({ initValue: formInitValue, isEditable: false });
    modal.custom({ header: "Add table record", className: "sdm-popup", visible: true });
  }, []);
  // add section end

  // update section start
  const editItem = useCallback((ev, rowData) => {
    setFormState({
      initValue: {
        id: rowData.id,
        name: rowData.name,
        email: rowData.email,
        date: rowData.date,
        initiative: rowData.initiative ? { label: rowData.initiative.name, value: rowData.initiative.id } : null,
        printReceipt: rowData.printReceipt,
        phoneNo: rowData.phoneNo,
        abhyasi_id: rowData.abhyasi_id,
        currency: rowData.currency,
        amount: rowData.amount,
        full_address: rowData.full_address,
        city_id: rowData.city_id,
        state_id: rowData.state_id,
        country_id: rowData.country_id,
        tax_id: rowData.tax_id,
        payment_type: rowData.payment_type,
        dcollector: rowData.dcollector,
        cash_given_to_am: rowData.cash_given_to_am,
        tax_id_type: rowData.tax_id_type,
        citizenship: rowData.citizenship,
        country_name: rowData.country_name,
        duser_id: rowData.duser_id,
        daccount_d: rowData.daccount_d,
        transaction_date: rowData.transaction_date,
        city: rowData.city
      },
      isEditable: true
    });
    modal.custom({ header: "Update table record", className: "sdm-popup", visible: true });
  }, []);
  // update section start

  // remove section start
  const removeItem = useCallback(async (id, name) => {
    await response.remove({
      service: service,
      method: "removeItem",
      data: { itemId: id },
      toasterMessage: {
        success: "Table record" + (name ? ` "${name}"` : "") + " has been removed successfully",
        error: "Unable to remove table record" + (name ? ` "${name}"` : "")
      },
      dataTable: tableRef
    });
  }, []);
  // remove section start

  const service = useMemo(() => new Service(), []);

  const options = useMemo(() => ({
    tablePrimeConfig: {
      autoLayout: true,
      lazy: true,
      size: "large",
      showGridlines: true
    },

    service: service,

    method: "getDonationCollectionList",

    enableCardsView: true,

    enableClearFilter: true,

    contextMenu: [
      { label: 'View', icon: 'pi pi-fw pi-search', command: (item) => console.log(item) },
      { label: 'Delete', icon: 'pi pi-fw pi-times', command: (item) => alert(item) }
    ],

    columns: [
      {
        header: "Iniiative",
        field: "initiative.name",
        sortable: true,
        filter: true,
        filterField: "initiative.id",
        filterType: "select",
        editable: true,
        editorType: "InputText",
        filterElementOptions: {
          type: "Dropdown",
          value: "organization"
        },
        headerStyle: {
          minWidth: "150px"
        }
      },
      {
        header: "Abhyasi ID",
        field: "abhyasi_id",
        sortable: true,
        filter: true,
        headerStyle: {
          minWidth: "150px"
        }
      },
      {
        header: "Name",
        field: "name",
        sortable: true,
        filter: true,
        headerStyle: {
          minWidth: "150px"
        }
      },
      {
        header: "Phone No",
        field: "phoneNo",
        sortable: true,
        filter: true,
        headerStyle: {
          minWidth: "150px"
        }
      },
      {
        header: "Email",
        field: "email",
        sortable: true,
        filter: true,
        headerStyle: {
          minWidth: "150px"
        },
        transformValue: false
      },
      {
        header: "Amount",
        field: "amount",
        sortable: true,
        filter: true,
        headerStyle: {
          minWidth: "100px"
        },
        body: amountBadge
      },
      {
        header: "City",
        field: "city",
        sortable: true,
        filter: true,
        headerStyle: {
          minWidth: "120px"
        }
      },
      {
        header: "Txtn Date",
        field: "transaction_date",
        sortable: true,
        filter: true,
        filterElementOptions: {
          type: "Calendar",
          primeFieldProps: {
            maxDate: new Date(),
            selectionMode: "range"
          }
        },
        headerStyle: {
          minWidth: "100px"
        },
        body: createdDateBadge
      }
    ],

    actionBtnOptions: [
      {
        title: "Update table record",
        onClick: editItem
      },
      {
        title: "Delete table record",
        onClick: (ev, rowData) => {
          confirmPopup.custom({
            message: "Are you sure you want to delete this table record? This may affect other screens",
            accept: () => { removeItem(rowData.id, rowData.name) },
            visible: true
          });
        }
      }
    ],

    toolBarBtnOptions: {
      title: "Table",
      rightBtnsOptions: [
        { onClick: setFormInitValue }
      ]
    },

    editable: false
  }), []);

  return (
    <div>
      <HFNDataTable ref={tableRef} options={options} />
      <HFNModal>
        <Form initialValue={formState} dataTableRef={tableRef} />
      </HFNModal>
    </div>
  );
};

export default Example;
