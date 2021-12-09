import React, { useMemo, useCallback } from "react";

// components
import HFNForm from "sami-form";

// utils
import { isEmpty } from "lodash";

import validations from "utils/validations";

// form component
const Form = () => {
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
  
  const formOnsubmit = useCallback((data, error) => {
    if (isEmpty(error)) {
      console.log(data);
    }
  }, []);

  return (
    <HFNForm initialValues={{}} fields={formFields} onFormSubmit={formOnsubmit} submitButtonGroup={() => null}/>
  );
}

export default Form;
