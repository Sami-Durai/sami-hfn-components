import React, { useEffect } from "react";

// state
import { useSelector } from "react-redux";

// form
import { useForm, Controller } from "react-hook-form";

// components
import Select from "react-select";

import Async from "react-select/async";

import PhoneInput from "react-phone-input-2";

//prime components
import { InputText } from "primereact/inputtext";

import { Password } from "primereact/password";

import { InputTextarea } from "primereact/inputtextarea";

import { Checkbox } from "primereact/checkbox";

import { InputSwitch } from "primereact/inputswitch";

import { Slider } from "primereact/slider";

import { Calendar } from "primereact/calendar";

import { Chips } from "primereact/chips";

import { Button } from "primereact/button";

import { Editor } from "primereact/editor";

// utils
import { classNames } from "primereact/utils";

import { modal } from "sami-modal";

import { getCitySuggestions, getStateSuggestions, getCountrySuggestions, cityACTemplate } from "./utils";

const HFNDynamicForm = ({ initialValues, fields, onFormSubmit, submitButtonGroup, formConfig }) => {

  const closeModel = (
    <div className="form-button-group">
      <Button type="button" className="p-button p-button-secondary p-mr-2" label="Cancel" onClick={() => { modal.toggle(false) }} > </Button>
      <Button type="submit" label="Submit" className="p-button p-button-primary" />
    </div>
  )

  const { register, handleSubmit, formState: { errors, isSubmitted }, control, setValue, getValues } = useForm();

  useEffect(() => {
    Object.keys(initialValues).forEach(key => {
      setValue(key, initialValues[key], { shouldValidate: true, shouldDirty: true });
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dd = useSelector(state => state.dropdown);

  const onSubmitForm = (data) => {
    onFormSubmit(data, errors);
  };

  const loadACOptions = (inputValue, callback, service, method, labelField, valueField) => {
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

  return (

    <form onSubmit={handleSubmit(onSubmitForm)}
      className={`form-wrapper ${formConfig ? formConfig.formClassName : ""}`}
      autoComplete={`${formConfig ? formConfig.autoComplete : "on"}`}
    >

      <div className={`p-fluid form-section p-d-flex p-flex-wrap ${formConfig ? formConfig.formSectionClassName : ""}`}>
        {
          Object.keys(fields).map((key, index) => {

            const { properties } = fields[key];

            let primeFieldProps, validations;

            if (properties.primeFieldProps) {
              primeFieldProps = properties.primeFieldProps;
            } else {
              primeFieldProps = {}
            }

            if (properties.validations) {
              if (typeof properties.validations.validate === "function") {
                const validate = (value) => properties.validations.validate(value, getValues);
                validations = { ...properties.validations, validate };
              }
              else
                validations = properties.validations;
            }
            else {
              validations = {}
            }

            return (

              (properties.visibility === false) ? <React.Fragment key={key}></React.Fragment> : <React.Fragment key={key}>

                <div className={`p-field-wrapper p-col-12 ${properties.fieldWrapperClassNames ? properties.fieldWrapperClassNames : ""}`} key={key + index}>

                  {
                    (["Checkbox"].indexOf(properties.type) === -1)
                      ?
                      <label htmlFor="lastname1" className={`p-field-label ${properties.fieldLabelClassNames ? properties.fieldLabelClassNames : ""}`}>
                        {
                          (validations && validations.required && validations.required.value) ? <em>*&nbsp;</em> : <></>
                        }
                        {properties.label}
                        {properties.tooltip ? <span className="tooltip-icon" title={properties.tooltip} > <i className="uil uil-info-circle"></i> </span> : <></>}
                      </label>
                      :
                      null
                  }

                  <div className={`p-field-section ${properties.fieldSectionClassNames ? properties.fieldSectionClassNames : ""}`}>
                    {(() => {

                      switch (properties.type) {

                        case "InputText":
                          return <InputText {...primeFieldProps} className={classNames({ "p-invalid": errors[key] })} name={key} {...register(key, validations)} />

                        case "Password":
                          return <Password {...primeFieldProps} className={classNames({ "p-invalid": errors[key] })} name={key} {...register(key, validations)} />

                        case "InputTextarea":
                          return <InputTextarea {...primeFieldProps} className={classNames({ "p-invalid": errors[key] })} name={key} {...register(key, validations)} />


                        case "Select":
                          return (<Controller control={control} rules={validations} name={key} defaultValue={null}
                            render={({ field: { onChange, value, name, ref } }) => {
                              return <Select
                                className={classNames({ "p-invalid": errors[key] })}
                                noOptionsMessage={() => "No data found"}
                                {...primeFieldProps}
                                name={name}
                                value={value}
                                onChange={(value) => {
                                  onChange(value);
                                  if (primeFieldProps && primeFieldProps.onChange && typeof primeFieldProps.onChange === "function") {
                                    primeFieldProps.onChange(value, setValue, isSubmitted);
                                  }
                                }}
                                options={properties.dropdownOptions && Array.isArray(dd[properties.dropdownOptions]) ? dd[properties.dropdownOptions] : (primeFieldProps.options || [])}
                                inputRef={ref}
                              />
                            }} />)

                        case "MultiSelect":
                          return (<Controller control={control} rules={validations} name={key} defaultValue={null}
                            render={({ field: { onChange, value, name, ref } }) => {
                              return <Select
                                className={classNames({ "p-invalid": errors[key] })}
                                closeMenuOnSelect={false}
                                noOptionsMessage={() => "No data found"}
                                {...primeFieldProps}
                                name={name}
                                value={value}
                                isMulti={true}
                                onChange={(value) => {
                                  onChange(value);
                                  if (primeFieldProps && primeFieldProps.onChange && typeof primeFieldProps.onChange === "function") {
                                    primeFieldProps.onChange(value, setValue, isSubmitted);
                                  }
                                }}
                                options={properties.dropdownOptions && Array.isArray(dd[properties.dropdownOptions]) ? dd[properties.dropdownOptions] : (primeFieldProps.options || [])}
                                inputRef={ref}
                              />
                            }} />)

                        case "AutoComplete":
                          return (<Controller control={control} rules={validations} name={key} defaultValue={null}
                            render={({ field: { onChange, value, name, ref } }) => {
                              return <Async
                                className={classNames({ "p-invalid": errors[key] })}
                                noOptionsMessage={() => "No data found"}
                                {...primeFieldProps}
                                name={name}
                                value={value}
                                autoComplete="off"
                                loadOptions={(inputValue, callback) => {
                                  loadACOptions(inputValue, callback, properties.service, properties.method, primeFieldProps.optionLabel || "name", primeFieldProps.optionValue || "id")
                                }}
                                onChange={(value) => {
                                  onChange(value);
                                  if (primeFieldProps && primeFieldProps.onChange && typeof primeFieldProps.onChange === "function") {
                                    primeFieldProps.onChange(value, setValue, isSubmitted);
                                  }
                                }}
                                inputRef={ref}
                              />
                            }} />)

                        case "CityAutoComplete":
                          return (<Controller control={control} rules={validations} name={key} defaultValue={null}
                            render={({ field: { onChange, value, name, ref } }) => {
                              return <Async
                                className={classNames({ "p-invalid": errors[key] })}
                                noOptionsMessage={() => "No data found"}
                                optionLabel="name"
                                optionValue="id"
                                formatOptionLabel={cityACTemplate}
                                {...primeFieldProps}
                                name={name}
                                value={value}
                                autoComplete="off"
                                loadOptions={getCitySuggestions}
                                onChange={(value) => {
                                  onChange(value);
                                  if (primeFieldProps && primeFieldProps.onChange && typeof primeFieldProps.onChange === "function") {
                                    primeFieldProps.onChange(value, setValue, isSubmitted);
                                  }
                                }}
                                inputRef={ref}
                              />
                            }} />)

                        case "StateAutoComplete":
                          return (<Controller control={control} rules={validations} name={key} defaultValue={null}
                            render={({ field: { onChange, value, name, ref } }) => {
                              return <Async
                                className={classNames({ "p-invalid": errors[key] })}
                                noOptionsMessage={() => "No data found"}
                                optionLabel="name"
                                optionValue="id"
                                {...primeFieldProps}
                                name={name}
                                value={value}
                                autoComplete="off"
                                loadOptions={getStateSuggestions}
                                onChange={(value) => {
                                  onChange(value);
                                  if (primeFieldProps && primeFieldProps.onChange && typeof primeFieldProps.onChange === "function") {
                                    primeFieldProps.onChange(value, setValue, isSubmitted);
                                  }
                                }}
                                inputRef={ref}
                              />
                            }} />)

                        case "CountryAutoComplete":
                          return (<Controller control={control} rules={validations} name={key} defaultValue={null}
                            render={({ field: { onChange, value, name, ref } }) => {
                              return <Async
                                className={classNames({ "p-invalid": errors[key] })}
                                noOptionsMessage={() => "No data found"}
                                optionLabel="name"
                                optionValue="id"
                                {...primeFieldProps}
                                name={name}
                                value={value}
                                autoComplete="off"
                                loadOptions={getCountrySuggestions}
                                onChange={(value) => {
                                  onChange(value);
                                  if (primeFieldProps && primeFieldProps.onChange && typeof primeFieldProps.onChange === "function") {
                                    primeFieldProps.onChange(value, setValue, isSubmitted);
                                  }
                                }}
                                inputRef={ref}
                              />
                            }} />)

                        case "Checkbox":
                          return (<div>
                            <Controller name={key} control={control} rules={validations} render={(props) => (
                              <Checkbox className={classNames({ "p-invalid": errors[key] })} {...primeFieldProps} inputId={key}
                                onChange={(e) => {
                                  props.field.onChange(e.checked);
                                  if (primeFieldProps && primeFieldProps.onChange && typeof primeFieldProps.onChange === "function") {
                                    primeFieldProps.onChange(e, setValue);
                                  }
                                }}
                                checked={props.field.value} />
                            )} />

                            <label htmlFor={key} className={`p-pl-2 p-checkbox-label ${properties.fieldLabelClassNames ? properties.fieldLabelClassNames : ""}`}>
                              {
                                (validations && validations.required && validations.required.value) ? <em>*&nbsp;</em> : <></>
                              }
                              {properties.label}
                              {properties.tooltip ? <span className="tooltip-icon" title={properties.tooltip} > <i className="uil uil-info-circle"></i> </span> : <></>}
                            </label>

                          </div>)

                        case "RadioButton":

                          if (properties.items) {
                            return properties.items.map((item) => {
                              return (
                                <div key={item.key} className="p-field-radiobutton">
                                  <Controller className={classNames({ "p-invalid": errors[key] })} name={key} control={control} rules={validations} render={(props) => {
                                    return (
                                      <input type="radio" id={item.key} value={item.key} name={key} {...primeFieldProps}
                                        onClick={(e) => {
                                          props.field.onChange(e.target.value);
                                          if (primeFieldProps && primeFieldProps.onChange && typeof primeFieldProps.onChange === "function") {
                                            primeFieldProps.onChange(e, setValue);
                                          }
                                        }}
                                      />
                                    )
                                  }} />
                                  <label htmlFor={item.key}>{item.name}</label>
                                </div>
                              )
                            })
                          }

                          break;

                        case "InputSwitch":
                          return (<div>
                            <Controller name={key} control={control} rules={validations} render={(props) => (
                              <InputSwitch {...primeFieldProps} inputId={key}
                                onChange={(e) => {
                                  props.field.onChange(e.value);
                                  if (primeFieldProps && primeFieldProps.onChange && typeof primeFieldProps.onChange === "function") {
                                    primeFieldProps.onChange(e, setValue);
                                  }
                                }}
                                checked={props.field.value} />
                            )} />
                          </div>)

                        case "FileUpload":
                          if (!validations.validate) {
                            let maxAllowedFileSize = properties.maxFileSize;
                            if (maxAllowedFileSize) {
                              let fileSizeError = properties.fileSizeError || `Selected file size is greater than allowed file size`;
                              validations.validate = value => {
                                return (Array.isArray(value) && value[0] && value[0].size && value[0].size > (maxAllowedFileSize * 1024 * 1024)) ? fileSizeError : true;
                              }
                            }
                          }
                          return <InputText className={classNames({ "p-invalid": errors[key] })} type="file" {...primeFieldProps} name={key} {...register(key, validations)} />

                        case "Slider":
                          return <div>
                            <Slider {...primeFieldProps} onSlideEnd={(ev) => { setValue(key, ev.value) }} />
                            <InputText type="hidden" name={key} {...register(key, validations)} />
                          </div>

                        case "Calendar":
                          return (<Controller control={control} rules={validations} name={key} defaultValue={null}
                            render={(props) => {
                              return <Calendar className={classNames({ "p-invalid": errors[key] })} {...primeFieldProps} name={props.field.name} value={props.field.value}
                                onChange={(e) => {
                                  props.field.onChange(e.value);
                                  if (primeFieldProps && primeFieldProps.onChange && typeof primeFieldProps.onChange === "function") {
                                    primeFieldProps.onChange(e, setValue);
                                  }
                                }}
                                optionLabel="label" optionValue="value"
                                inputRef={props.field.ref} />
                            }} />)

                        case "Chips":
                          return (<div>
                            <Controller name={key} control={control} rules={validations} render={(props) => (
                              <Chips className={classNames({ "p-invalid": errors[key] })}
                                onChange={(e) => {
                                  props.field.onChange(e.value);
                                  if (primeFieldProps && primeFieldProps.onChange && typeof primeFieldProps.onChange === "function") {
                                    primeFieldProps.onChange(e, setValue);
                                  }
                                }}
                              />
                            )} />
                            <label htmlFor={key} className="p-checkbox-label">{properties.label}</label>
                          </div>)

                        case "PhoneInput":
                          return (<Controller control={control} rules={validations} name={key} defaultValue={null}
                            render={(props) => {
                              return <PhoneInput
                                className={classNames({ "p-invalid": errors[key] })}
                                country={"in"}
                                value={props.field.value}
                                name={props.field.name}
                                {...primeFieldProps}
                                onChange={(value, country, e, formattedValue) => {
                                  props.field.onChange(formattedValue);
                                  if (primeFieldProps && primeFieldProps.onChange && typeof primeFieldProps.onChange === "function") {
                                    primeFieldProps.onChange(value, country, e, formattedValue, setValue);
                                  }
                                }}
                                inputRef={props.field.ref} />
                            }} />)

                        case "RichTextEditor":
                          return (<Controller control={control} rules={validations} name={key} defaultValue={null}
                            render={({ field: { onChange, value, name, ref } }) => {
                              return <Editor
                                className={classNames({ "p-invalid": errors[key] })}
                                style={{ height: "165px" }}
                                value={value}
                                name={name}
                                {...primeFieldProps}
                                onTextChange={(e) => {
                                  console.log(e)
                                  onChange(e.htmlValue);
                                  if (primeFieldProps && primeFieldProps.onChange && typeof primeFieldProps.onChange === "function") {
                                    primeFieldProps.onChange(e.htmlValue, e, setValue, isSubmitted);
                                  }
                                }}
                                inputRef={ref} />
                            }} />)

                        default:
                          return <>Form field not available</>

                      }
                    })()}
                  </div>

                  <div className={`p-error-section ${properties.fieldErrorClassNames ? properties.fieldErrorClassNames : ""}`}>
                    {errors[key] && (<span role="alert" className="error"> {errors[key].message} </span>)}
                  </div>

                  {
                    properties.hint
                      ?
                      <div className={`p-hint-section ${properties.fieldHintClassNames ? properties.fieldHintClassNames : ""}`}>
                        {properties.hint}
                      </div>
                      :
                      <></>
                  }

                </div>

              </React.Fragment>

            )

          })
        }

      </div>

      {(submitButtonGroup && typeof submitButtonGroup === "function") ? submitButtonGroup() : closeModel}

    </form>
  )
};

export default HFNDynamicForm;
