import React, { useRef, useMemo, useCallback } from "react";

// components
import HFNForm from "sami-form";

// utils
import { isEmpty } from "lodash";

import validations from "utils/validations";

import response from "utils/response";

// services
import Service from "services/donationCollection/donationCollection.service";

// form component
const Form = ({ initialValue: { initValue: propInitValue, isEditable }, dataTableRef }) => {
  const initValue = useRef(propInitValue);

  const service = useRef(new Service());

  const formFields = useMemo(() => ({
    amount: {
      properties: {
        type: "InputText",
        label: "Amount",
        primeFieldProps: {
        },
        validations: {
          required: validations.required
        }
      }
    },
    initiative: {
      properties: {
        type: "Select",
        label: "Initiative",
        primeFieldProps: {
        },
        validations: {
          required: validations.required
        },
        dropdownOptions: "organization"
      }
    },
    identification_type: {
      properties: {
        type: "Select",
        label: "Indentification Type",
        primeFieldProps: {
          options: [
            {
              value: 1,
              label: "Abhyasi Id"
            },
            {
              value: 2,
              label: "PAN No"
            },
            {
              value: 3,
              label: "Aadhar"
            },
          ]
        },
        validations: {
          required: validations.required
        }
      }
    },
    identification_no: {
      properties: {
        type: "InputText",
        label: "Identification No",
        primeFieldProps: {
        },
        validations: {
          required: validations.required
        }
      }
    },
    name: {
      properties: {
        type: "InputText",
        label: "Name",
        primeFieldProps: {
        },
        validations: {
          required: validations.required
        }
      }
    },
    phoneNo: {
      properties: {
        type: "PhoneInput",
        label: "Phone No",
        primeFieldProps: {
        },
        validations: {
          required: validations.required
        }
      }
    },
    email: {
      properties: {
        type: "InputText",
        label: "Email",
        primeFieldProps: {
        },
        validations: {
          pattern: validations.email,
          required: validations.required
        }
      }
    },
    rText: {
      properties: {
        type: "RichTextEditor",
        label: "Rich Text",
        validations: {
          required: validations.required
        }
      }
    },
    address: {
      properties: {
        type: "InputText",
        label: "Address",
        primeFieldProps: {
        },
        validations: {
          required: validations.required
        }
      }
    },
    city: {
      properties: {
        type: "CityAutoComplete",
        label: "City",
        validations: {
          required: validations.required
        }
      }
    },
    pincode: {
      properties: {
        type: "InputText",
        label: "Pincode",
        primeFieldProps: {
        },
        validations: {
          required: validations.required
        }
      }
    },
    print_receipt: {
      properties: {
        type: "Checkbox",
        label: "Should Receipt Be Printed",
        primeFieldProps: {
        }
      }
    }
  }), []);

  // form submit section start
  const formOnsubmit = useCallback((data, error) => {
    if (isEmpty(error)) {
      let formData = { ...initValue, ...data };
      addUpdateItem(formData);
    }
  }, []);

  // add new and update section start
  const addUpdateItem = useCallback(async (data) => {
    if (!isEditable)
      await response.add({
        service: service.current,
        method: "addDonationCollection",
        data: { item: data },
        toasterMessage: {
          success: `Table record "${data.name}" has been created successfully`,
          error: `Unable to create table record ${data.name}`
        },
        dataTable: dataTableRef
      });
    else
      await response.update({
        service: service.current,
        method: "updateDonationCollection",
        data: { itemId: initValue.id, item: data },
        toasterMessage: {
          success: `Table record "${data.name}" has been updated successfully`,
          error: `Unable to update table record ${data.name}`
        },
        dataTable: dataTableRef
      });
  }, []);
  // add new and update section end
  // form submit section end

  return (
    <HFNForm initialValues={initValue.current} fields={formFields} onFormSubmit={formOnsubmit} />
  );
}

export default Form;
