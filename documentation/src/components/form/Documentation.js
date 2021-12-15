import React from "react";

const Documentation = () => {
  return (
    <div className="p-card">
      <div className="p-card-body p-pt-2">
        <div className="p-mb-2">Add <strong>Form </strong>component to a component.</div>
        <div className="p-mb-2">
          <span style={{ color: "rgb(197, 134, 192)" }}>import</span>{" "}
          <span style={{ color: "rgb(73, 80, 87)" }}>HFNForm</span>{" "}
          <span style={{ color: "rgb(197, 134, 192)" }}>from</span>{" "}
          <span style={{ color: "rgb(206, 145, 120)" }}>&quot;sami-form&quot;</span>
          <span style={{ color: "rgb(73, 80, 87)" }}>;</span>
        </div>
        <div>
          <div className="p-text-bold">Props:</div>
          <div className="p-ml-2">
            <div className="p-text-bold">initialValues:</div>
            <div className="p-ml-4"> Initial values of form fields.</div>
            <div className="p-text-bold">submitButtonGroup:</div>
            <div className="p-ml-4"> custom footer component for form component buttons.</div>
            <div className="p-text-bold">formConfig:</div>
            <div className="p-ml-4"> Form properties.</div>
            <div className="p-text-bold">onFormSubmit:</div>
            <div className="p-ml-4"> Accepts a callback function as an argument to be executed on submit event of form.</div>
            <div className="p-text-bold">fields:</div>
            <div className="p-ml-4 p-mb-2"> Array of form field objects.</div>
            <div className="p-ml-4 p-text-bold"> properties:</div>
            <div className="p-ml-4 p-text-bold"> 1.type:</div>
            <div className="p-ml-6"> Form field type. Available types are InputText, Password, InputTextarea, Select, 
            MultiSelect, AutoComplete, CityAutoComplete, StateAutoComplete, CountryAutoComplete, Checkbox, 
            InputSwitch, FileUpload, Slider, Calendar, Chips, PhoneInput and RichTextEditor.</div>
            <div className="p-ml-4 p-text-bold"> 2.primeFieldProps:</div>
            <div className="p-ml-6"> Form field component props.</div>
            <div className="p-ml-4 p-text-bold"> 3.validations:</div>
            <div className="p-ml-6"> React hook form validations for form fields.</div>
            <div className="p-ml-4 p-text-bold"> 4.visibility:</div>
            <div className="p-ml-6"> SHows / Hides form field.</div>
            <div className="p-ml-4 p-text-bold"> 5.fieldWrapperClassNames:</div>
            <div className="p-ml-6"> Form field container class name.</div>
            <div className="p-ml-4 p-text-bold"> 6.fieldLabelClassNames:</div>
            <div className="p-ml-6"> Form field label class name.</div>
            <div className="p-ml-4 p-text-bold"> 7.fieldSectionClassNames:</div>
            <div className="p-ml-6"> Form field class name.</div>
            <div className="p-ml-4 p-text-bold"> 8.tooltip:</div>
            <div className="p-ml-6"> tooltip text for form field.</div>
            <div className="p-ml-4 p-text-bold"> 9.label:</div>
            <div className="p-ml-6"> Label for the field.</div>
            <div className="p-ml-4 p-text-bold"> 10.dropdownOptions:</div>
            <div className="p-ml-6"> Array property name of dropdown options in dropdown reducer in redux store.</div>
            <div className="p-ml-4 p-text-bold"> 11.service:</div>
            <div className="p-ml-6"> Service object containing API request functions for autocomplete field.</div>
            <div className="p-ml-4 p-text-bold"> 12.method:</div>
            <div className="p-ml-6"> API request function name in service object for AutoComplete field.</div>
            <div className="p-ml-4 p-text-bold"> 13.maxFileSize:</div>
            <div className="p-ml-6"> maximum file upload size for FileUpload field.</div>
            <div className="p-ml-4 p-text-bold"> 14.fileSizeError:</div>
            <div className="p-ml-6"> Error to be shown for file size error of FileUpload field.</div>
            <div className="p-ml-4 p-text-bold"> 15.fieldErrorClassNames:</div>
            <div className="p-ml-6"> Field error message class name.</div>
            <div className="p-ml-4 p-text-bold"> 16.hint:</div>
            <div className="p-ml-6"> Field hint message.</div>
            <div className="p-ml-4 p-text-bold"> 17.fieldHintClassNames:</div>
            <div className="p-ml-6"> Field hint message class name.</div>
            <div className="p-mt-3">Refer <a className="p-text-bold" href="https://www.primefaces.org/primereact" >Prime React Documentation</a> for 
            InputText, Password, InputTextarea, Checkbox, InputSwitch, FileUpload, Slider, Calendar, Chips and RichTextEditor form field types.</div>
            <div className="p-mt-3">Refer <a className="p-text-bold" href="https://react-select.com/home" >React Select Documentation</a> for Select, 
            MultiSelect, AutoComplete, CityAutoComplete, StateAutoComplete and CountryAutoComplete form field types.</div>
            <div className="p-mt-3">Refer <a className="p-text-bold" href="https://www.npmjs.com/package/react-phone-input-2" >React Phone Input</a> for 
            PhoneInput form field type.</div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Documentation;
