import React, { useState, useMemo } from "react";

// components
import HFNModal, { modal } from "sami-modal";

import Form from "components/modal/Form";

import Toast from "components/modal/Toast";

// prime components
import { Button } from "primereact/button";

const Example = () => {
  const [modalContent, setModalContent] = useState(0);

  const Footer = useMemo(() => (
    <div className="p-text-right p-m-1">
      <Button label="Close" className="p-button-secondary" onClick={() => modal.toggle(false)} />
    </div>
  ), []);

  return (
    <>
      <HFNModal>
        {modalContent === 1 ? <Form /> : null}
        {modalContent === 2 ? <Toast /> : null}
      </HFNModal>
      <div className="p-card p-mt-3">
        <div className="p-card-body">
          <h3 className="p-pb-2">Modal</h3>
          <div className="p-d-flex p-flex-wrap p-jc-start">
            <div className="p-text-center p-m-1">
              <Button
                label="Form"
                className="p-button-success"
                onClick={() => { setModalContent(1); modal.custom({ header: "Form", footer: Footer }); modal.toggle(true); }}
              />
            </div>
            <div className="p-text-center p-m-1">
              <Button
                label="Toast"
                className="p-button-info"
                onClick={() => { setModalContent(2); modal.custom({ header: "Toast", footer: Footer, visible: true }); }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Example;
