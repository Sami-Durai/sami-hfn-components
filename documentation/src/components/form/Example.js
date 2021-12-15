import React, { useMemo, useCallback } from "react";

// components
import HFNForm from "sami-form";

// utils
import { isEmpty } from "lodash";

import validations from "utils/validations";

import { toaster } from "sami-toast";

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
          options: [
            {
              value: 1,
              label: "SRCM 1"
            },
            {
              value: 2,
              label: "SRCM 2"
            },
            {
              value: 3,
              label: "SRCM 3"
            },
          ]
        },
        validations: {
          required: validations.required
        }
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
      addUpdateItem(data);
    }
  }, []);

  // add new and update section start
  const addUpdateItem = useCallback(async (data) => {
    console.log(data)
    toaster.success("Form has been submitted successfully.")
  }, []);
  // add new and update section end
  // form submit section end

  return (
    <HFNForm initialValues={{}} fields={formFields} onFormSubmit={formOnsubmit} />
  );
}

export default Form;
